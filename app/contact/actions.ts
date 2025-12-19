'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export type ContactState = {
    error?: string
    success?: boolean
    message?: string
}

export async function checkSystemHealth(): Promise<boolean> {
    const supabase = await createClient();
    return !!supabase;
}

export async function submitContactForm(prevState: ContactState, formData: FormData): Promise<ContactState> {
    const supabase = await createClient()
    if (!supabase) {
        return { error: 'System configuration error. Connection to signal tower failed.' }
    }

    // Sanitize inputs
    const name = (formData.get('name') as string)?.trim().slice(0, 100);
    const email = (formData.get('email') as string)?.trim().slice(0, 255);
    const message = (formData.get('message') as string)?.trim().slice(0, 5000);

    if (!name || !email || !message) {
        return { error: 'Please fill in all required fields.' }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return { error: 'Please provide a valid email address.' }
    }
    try {
        const { error } = await supabase.from('project_leads').insert({
            full_name: name,
            email: email,
            description: message,
            project_type: 'other',
            budget: 'unknown',
            timeline: 'flexible',
            status: 'new'
        })

        if (error) {
            console.error('Supabase insert error:', error)
            console.error('Supabase insert error details:', JSON.stringify(error, null, 2))
            return { error: `Error: ${error.message || 'Unknown error'}` }
        }

        revalidatePath('/contact')
        return { success: true, message: 'Message sent successfully!' }
    } catch (e) {
        console.error('Unexpected error:', e)
        return { error: 'An unexpected error occurred.' }
    }
}
