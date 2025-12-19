'use server'

import { createClient } from '@/utils/supabase/server'
import { addMinutes, format, isAfter, isBefore, parse, set, startOfDay } from 'date-fns'
import { CONFIG } from '@/lib/booking-utils'

export async function getAvailableSlots(dateStr: string) {
    const supabase = await createClient()
    if (!supabase) {
        return { error: 'Configuration Error: Missing Supabase keys' }
    }

    // 1. Get availability settings for this day of week
    const date = new Date(dateStr)
    const dayOfWeek = date.getDay() // 0-6

    // Fetch settings for this day
    const { data: settings } = await supabase
        .from('availability_settings')
        .select('*')
        .eq('day_of_week', dayOfWeek)
        .eq('is_active', true)
        .single()

    if (!settings) {
        return { error: 'No availability for this day' }
    }

    // 2. Fetch existing appointments for this date
    // We filter by day matching (using simple ISO string prefix matching or range)
    const startRange = dateStr + 'T00:00:00+00:00' // Assuming dateStr is YYYY-MM-DD
    const endRange = dateStr + 'T23:59:59+00:00'

    // Better: use postgres date logic if possible, or ensure we handle TZ correctly.
    // For simplicity, let's assume we query the range in UTC.
    // However, simplest matching:
    const { data: busySlots } = await supabase
        .from('appointments')
        .select('start_time, end_time')
        .gte('start_time', new Date(dateStr).toISOString()) // Very rough check, careful with timezones
        .lt('start_time', new Date(new Date(dateStr).getTime() + 86400000).toISOString())

    // 3. Generate slots
    const slots = []

    // Parse start and end times from settings (e.g. "09:00:00")
    // We combine dateStr with the time values
    let currentTime = parse(`${dateStr} ${settings.start_time}`, 'yyyy-MM-dd HH:mm:ss', new Date())
    const endTime = parse(`${dateStr} ${settings.end_time}`, 'yyyy-MM-dd HH:mm:ss', new Date())

    const now = new Date()

    while (isBefore(currentTime, endTime)) {
        const slotEnd = addMinutes(currentTime, CONFIG.duration)

        if (isAfter(slotEnd, endTime)) break;

        // Check if slot is in the past
        if (isBefore(currentTime, now)) {
            currentTime = addMinutes(slotEnd, CONFIG.buffer)
            continue
        }

        // Check conflicts
        const isBusy = busySlots?.some(busy => {
            const busyStart = new Date(busy.start_time)
            const busyEnd = new Date(busy.end_time)
            // Initial simple overlap check:
            // (SlotStart < BusyEnd) AND (SlotEnd > BusyStart)
            return isBefore(currentTime, busyEnd) && isAfter(slotEnd, busyStart)
        })

        if (!isBusy) {
            slots.push(format(currentTime, 'HH:mm'))
        }

        currentTime = addMinutes(slotEnd, CONFIG.buffer)
    }

    return { slots }
}

export async function bookAppointment(formData: FormData) {
    const supabase = await createClient()
    if (!supabase) {
        return { error: 'Configuration Error: Missing Supabase keys' }
    }

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    const dateStr = formData.get('date') as string // YYYY-MM-DD
    const timeStr = formData.get('time') as string // HH:mm

    if (!name || !email || !dateStr || !timeStr) {
        return { error: 'Missing required fields' }
    }

    // Construct timestamp
    const startTime = parse(`${dateStr} ${timeStr}`, 'yyyy-MM-dd HH:mm', new Date())
    const endTime = addMinutes(startTime, CONFIG.duration)

    // Check for double booking (double check)
    const { data: conflict } = await supabase
        .from('appointments')
        .select('id')
        .lt('start_time', endTime.toISOString()) // overlapping logic
        .gt('end_time', startTime.toISOString())
        .single() // expect null

    if (conflict) {
        return { error: 'Slot already taken. Please choose another.' }
    }

    const { error } = await supabase.from('appointments').insert({
        name,
        email,
        message,
        start_time: startTime.toISOString(),
        end_time: endTime.toISOString(),
    })

    if (error) {
        console.error('Booking error:', error)
        return { error: error.message }
    }

    // Mock Email Sending
    console.log(`Sending email to ${email}: Your appointment is confirmed for ${dateStr} at ${timeStr}.`)

    return { success: true }
}
