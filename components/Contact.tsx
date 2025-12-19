"use client";

import { createClient } from "@/utils/supabase/client";
import React, { useState, useEffect } from "react";
import {
    Mail, Phone, Calendar as CalendarIcon, MessageSquare,
    ArrowRight, CheckCircle2,
    Clock, Instagram, Linkedin, Send, CheckCircle, AlertCircle, Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { getAvailableSlots, bookAppointment } from "@/app/book/actions";

export default function Contact({ hideHero = false }: { hideHero?: boolean }) {
    // --- BOOKING SYSTEM STATE ---
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [availableSlots, setAvailableSlots] = useState<string[]>([]);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [bookingStep, setBookingStep] = useState<'date' | 'details' | 'confirm'>('date');
    const [bookingLoading, setBookingLoading] = useState(false);
    const [bookingError, setBookingError] = useState('');
    const [bookingSuccess, setBookingSuccess] = useState(false);

    // --- BOOKING SYSTEM EFFECTS & HANDLERS ---
    useEffect(() => {
        if (selectedDate) {
            setBookingLoading(true);
            setBookingError('');
            setSelectedTime(null);

            const dateStr = format(selectedDate, 'yyyy-MM-dd');
            getAvailableSlots(dateStr)
                .then(res => {
                    if (res.error) {
                        setAvailableSlots([]);
                        if (res.error !== 'No availability for this day') setBookingError(res.error);
                    } else {
                        setAvailableSlots(res.slots || []);
                    }
                })
                .catch(err => {
                    console.error(err);
                    setBookingError('Failed to load slots');
                })
                .finally(() => setBookingLoading(false));
        } else {
            setAvailableSlots([]);
        }
    }, [selectedDate]);

    const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setBookingLoading(true);
        setBookingError('');

        const formData = new FormData(e.currentTarget);
        if (selectedDate && selectedTime) {
            formData.append('date', format(selectedDate, 'yyyy-MM-dd'));
            formData.append('time', selectedTime);
        }

        const res = await bookAppointment(formData);

        if (res.error) {
            setBookingError(res.error);
            setBookingLoading(false);
        } else {
            setBookingSuccess(true);
            setBookingStep('confirm');
            setBookingLoading(false);
        }
    };

    return (
        <section id="contact" className={`min-h-screen ${hideHero ? 'pt-12' : 'pt-32'} pb-24 bg-black relative overflow-hidden z-20`}>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    alt="Dark Background"
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
            </div>

            {/* CINEMATIC GRID HERO BACKGROUND - Only show if hideHero is false */}
            {!hideHero && (
                <div className="absolute inset-x-0 top-0 h-[80vh] overflow-hidden pointer-events-none select-none border-b border-white/5">
                    {/* Vertical Grid Lines */}
                    <div className="absolute inset-0 container mx-auto px-6 border-x border-white/5 flex justify-between">
                        <div className="h-full w-px bg-white/5 hidden md:block"></div>
                        <div className="h-full w-px bg-white/5 mx-auto"></div>
                        <div className="h-full w-px bg-white/5 hidden md:block"></div>
                    </div>

                    {/* Horizontal Grid Lines */}
                    <div className="absolute top-1/3 left-0 w-full h-px bg-white/5"></div>
                    <div className="absolute top-2/3 left-0 w-full h-px bg-white/5"></div>

                    {/* Crosshairs & Accents */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-white/20 rounded-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                    </div>
                    <div className="absolute top-2/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white/20 font-mono text-[10px] hidden md:block">+</div>
                    <div className="absolute top-2/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white/20 font-mono text-[10px] hidden md:block">+</div>

                    {/* Editorial Labels */}
                    <div className="absolute top-8 left-8 text-[10px] font-mono text-white/30 tracking-widest uppercase hidden md:block">
                        01 — CONTACT
                    </div>
                    <div className="absolute top-8 right-8 text-[10px] font-mono text-white/30 tracking-widest uppercase hidden md:block text-right">
                        Available <br /> Worldwide
                    </div>
                    <div className="absolute bottom-8 left-8 text-[10px] font-mono text-white/30 tracking-widest uppercase hidden md:block">
                        EST. 2024
                    </div>

                    {/* Noise Overlay */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 mix-blend-overlay"></div>

                    {/* Radial Vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80"></div>
                </div>
            )}

            <div className="container mx-auto px-6 relative z-10 pt-24 pb-20">

                {/* HERO COPY - Editorial Style (Only if hideHero is false) */}
                {!hideHero && (
                    <div className="text-center max-w-5xl mx-auto mb-32 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-20"
                        >
                            <span className="inline-block py-1 px-3 mb-8 border border-white/10 rounded-full text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-400 bg-black/50 backdrop-blur-md">
                                Accepting New Projects
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black font-heading text-white mb-8 leading-[0.9] tracking-tight uppercase mix-blend-difference">
                                Get In <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">Touch</span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg font-mono text-neutral-400 max-w-xl mx-auto leading-relaxed border-l-2 border-blue-500/50 pl-6 text-left md:ml-[calc(50%+2rem)]">
                                Ready to start? Send a message below or schedule a call.
                            </p>
                        </motion.div>
                    </div>
                )}

                {/* PRICING PACKAGES (New Section) */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-heading text-white mb-4">Transparent Pricing Packages</h2>
                        <p className="text-neutral-400">Clear investment ranges. No hidden fees. Tailored to your stage.</p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >

                        {/* Package 1: Starter Launch */}
                        <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="relative rounded-2xl p-[1px] overflow-hidden group h-full">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                            />
                            <div className="relative h-full p-6 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-blue-500/30 hover:bg-neutral-900/60 transition-all flex flex-col hover:-translate-y-1 duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">Starter Launch</h3>
                                <p className="text-xs text-neutral-400 mb-6 min-h-[32px]">Perfect for individuals & early-stage ideas</p>
                                <div className="text-2xl font-bold text-white mb-6">$499 – $699</div>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {["1–2 page website", "Clean UI & basic motion", "Responsive design", "Contact form integration"].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-neutral-300">
                                            <span className="text-blue-500">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#contact-columns" className="w-full py-3 text-center rounded-lg border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-blue-600 hover:border-blue-600 transition-all">
                                    Get Started
                                </a>
                            </div>
                        </motion.div>

                        {/* Package 2: Product / Business (Highlighted) */}
                        <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="relative rounded-2xl p-[1px] overflow-hidden group h-full">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                            />
                            <div className="relative h-full p-6 rounded-2xl bg-blue-900/10 border border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-900/20 transition-all flex flex-col hover:-translate-y-1 duration-300">
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg z-10">
                                    Most Popular
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Business Website</h3>
                                <p className="text-xs text-neutral-400 mb-6 min-h-[32px]">For startups & growing businesses</p>
                                <div className="text-2xl font-bold text-white mb-6">$1,200 – $1,600</div>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {["4–6 pages", "UX-focused layout", "Hero animation", "Lead capture setup"].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-neutral-200">
                                            <span className="text-blue-400">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#contact-columns" className="w-full py-3 text-center rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                                    Select Plan
                                </a>
                            </div>
                        </motion.div>

                        {/* Package 3: Motion Experience */}
                        <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="relative rounded-2xl p-[1px] overflow-hidden group h-full">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                            />
                            <div className="relative h-full p-6 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-purple-500/30 hover:bg-neutral-900/60 transition-all flex flex-col hover:-translate-y-1 duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">Motion Experience</h3>
                                <p className="text-xs text-neutral-400 mb-6 min-h-[32px]">Premium feel for modern founders</p>
                                <div className="text-2xl font-bold text-white mb-6">$2,000 – $2,800</div>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {["Everything in Business", "Advanced interactions", "Smooth scroll storytelling", "Lottie / Flow animations"].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-neutral-300">
                                            <span className="text-purple-500">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#contact-columns" className="w-full py-3 text-center rounded-lg border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-purple-600 hover:border-purple-600 transition-all">
                                    Let&apos;s Build It
                                </a>
                            </div>
                        </motion.div>

                        {/* Package 4: Custom */}
                        <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} className="relative rounded-2xl p-[1px] overflow-hidden group h-full">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                            />
                            <div className="relative h-full p-6 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-white/30 hover:bg-neutral-900/60 transition-all flex flex-col hover:-translate-y-1 duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">Custom Scale</h3>
                                <p className="text-xs text-neutral-400 mb-6 min-h-[32px]">Specific needs & long-term growth</p>
                                <div className="text-2xl font-bold text-white mb-6">From $3,500+</div>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {["Custom Product Strategy", "Tailored Development", "Conversion Optimization", "Ongoing Improvements"].map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-neutral-300">
                                            <span className="text-white">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#contact-columns" className="w-full py-3 text-center rounded-lg border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white hover:text-black hover:border-white transition-all">
                                    Contact Me
                                </a>
                            </div>
                        </motion.div>

                    </motion.div>
                    <p className="text-center text-xs text-neutral-500 mt-8 italic">
                        *Every project is tailored — packages are flexible based on your needs.
                    </p>
                </div>

                <div id="contact-columns" className="flex flex-col items-center justify-center max-w-4xl mx-auto pt-10 border-t border-white/5">

                    {/* DIRECT CONTACT CENTERED */}
                    <div className="w-full space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">Prefer a direct conversation?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Email Card */}
                                <div className="relative rounded-2xl p-[1px] overflow-hidden group">
                                    <GlowingEffect
                                        spread={40}
                                        glow={true}
                                        disabled={false}
                                        proximity={64}
                                        inactiveZone={0.01}
                                    />
                                    <a href="mailto:zokuai7@gmail.com" className="relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all z-10 h-full">
                                        <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                                            <Mail size={22} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">Email</div>
                                            <div className="text-sm text-neutral-400 break-all">zokuai7@gmail.com</div>
                                            <div className="text-xs text-blue-400 mt-1">Best for detailed discussions</div>
                                        </div>
                                    </a>
                                </div>

                                {/* WhatsApp Card */}
                                <div className="relative rounded-2xl p-[1px] overflow-hidden group">
                                    <GlowingEffect
                                        spread={40}
                                        glow={true}
                                        disabled={false}
                                        proximity={64}
                                        inactiveZone={0.01}
                                    />
                                    <a href="#" className="relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-500/30 transition-all z-10 h-full">
                                        <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                                            <MessageSquare size={22} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">WhatsApp</div>
                                            <div className="text-sm text-neutral-400">+1 (234) 567-890</div>
                                            <div className="text-xs text-green-400 mt-1">Quick questions & faster replies</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* --- BOOKING WIDGET --- */}
                            <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 shadow-xl relative overflow-hidden group h-full">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                />
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <CalendarIcon size={20} className="text-purple-400" />
                                    Schedule a Call
                                </h3>

                                {bookingSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-10"
                                    >
                                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
                                            <CheckCircle size={32} />
                                        </div>
                                        <h4 className="text-xl font-bold mb-2">Booking Confirmed!</h4>
                                        <p className="text-neutral-400 text-sm mb-6">
                                            Your meeting has been scheduled for <br />
                                            <span className="text-white font-semibold">
                                                {selectedDate && format(selectedDate, 'MMM do')} at {selectedTime}
                                            </span>
                                        </p>
                                        <button
                                            onClick={() => {
                                                setBookingSuccess(false);
                                                setBookingStep('date');
                                                setSelectedDate(undefined);
                                            }}
                                            className="text-sm text-purple-400 hover:text-white transition-colors"
                                        >
                                            Book Another
                                        </button>
                                    </motion.div>
                                ) : (
                                    <AnimatePresence mode="wait">
                                        {bookingStep === 'date' && (
                                            <motion.div
                                                key="widget-step-1"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                            >
                                                {/* Calendar CSS */}
                                                <style>{`
                                                    .rdp { --rdp-cell-size: 32px; --rdp-accent-color: #9333ea; margin: 0; }
                                                    .rdp-day_selected:not([disabled]) { background-color: var(--rdp-accent-color); color: white; }
                                                    .rdp-day_selected:hover:not([disabled]) { background-color: #7e22ce; }
                                                    .rdp-caption_label { color: white; font-weight: bold; font-size: 0.9rem; }
                                                    .rdp-head_cell { color: #525252; font-size: 0.75rem; }
                                                    .rdp-day { font-size: 0.85rem; }
                                                    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) { background-color: #1a1a1a; }
                                                    .rdp-day_today { color: #a855f7; font-weight: bold; }
                                                `}</style>

                                                <div className="flex justify-center mb-4">
                                                    <DayPicker
                                                        mode="single"
                                                        selected={selectedDate}
                                                        onSelect={setSelectedDate}
                                                        disabled={{ before: new Date() }}
                                                        className="bg-transparent text-neutral-300"
                                                    />
                                                </div>

                                                {selectedDate && (
                                                    <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                                                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 text-center">
                                                            Available Times ({format(selectedDate, 'MMM do')})
                                                        </p>

                                                        {bookingLoading ? (
                                                            <div className="flex justify-center py-4 text-purple-400">
                                                                <Loader2 className="animate-spin" size={20} />
                                                            </div>
                                                        ) : availableSlots.length === 0 ? (
                                                            <div className="text-center text-neutral-500 text-xs py-2">
                                                                No slots available.
                                                            </div>
                                                        ) : (
                                                            <div className="grid grid-cols-3 gap-2 max-h-[140px] overflow-y-auto pr-1 custom-scrollbar">
                                                                {availableSlots.map(time => (
                                                                    <button
                                                                        key={time}
                                                                        onClick={() => setSelectedTime(time)}
                                                                        className={`py-1.5 px-1 rounded text-xs font-medium transition-all ${selectedTime === time
                                                                            ? 'bg-purple-600 text-white shadow-md'
                                                                            : 'bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/5'
                                                                            }`}
                                                                    >
                                                                        {time}
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {selectedTime && (
                                                            <button
                                                                onClick={() => setBookingStep('details')}
                                                                className="w-full mt-4 bg-white text-black font-bold py-2 rounded-lg text-sm hover:bg-neutral-200 transition-colors"
                                                            >
                                                                Next: Details
                                                            </button>
                                                        )}
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}

                                        {bookingStep === 'details' && (
                                            <motion.div
                                                key="widget-step-2"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-3"
                                            >
                                                <button
                                                    onClick={() => setBookingStep('date')}
                                                    className="text-xs text-neutral-500 hover:text-white mb-2 flex items-center gap-1"
                                                >
                                                    ← Back
                                                </button>

                                                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center gap-3">
                                                    <CalendarIcon className="text-purple-400" size={16} />
                                                    <div>
                                                        <div className="text-sm text-purple-400 font-bold">
                                                            {selectedDate && format(selectedDate, 'MMM do, yyyy')}
                                                        </div>
                                                        <div className="text-xs text-purple-300/70">
                                                            at {selectedTime} (30 mins)
                                                        </div>
                                                    </div>
                                                </div>

                                                <form onSubmit={handleBookingSubmit} className="space-y-3">
                                                    <input
                                                        name="name"
                                                        required
                                                        className="w-full bg-black/50 border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-purple-500 outline-none"
                                                        placeholder="Your Name"
                                                    />
                                                    <input
                                                        name="email"
                                                        type="email"
                                                        required
                                                        className="w-full bg-black/50 border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-purple-500 outline-none"
                                                        placeholder="Email"
                                                    />
                                                    <textarea
                                                        name="message"
                                                        rows={2}
                                                        className="w-full bg-black/50 border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-purple-500 outline-none resize-none"
                                                        placeholder="Short note..."
                                                    />

                                                    {bookingError && (
                                                        <div className="text-xs text-red-400 flex items-center gap-1">
                                                            <AlertCircle size={12} /> {bookingError}
                                                        </div>
                                                    )}

                                                    <button
                                                        type="submit"
                                                        disabled={bookingLoading}
                                                        className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-2.5 rounded-lg shadow-lg shadow-purple-900/20 transition-all flex items-center justify-center gap-2"
                                                    >
                                                        {bookingLoading ? <Loader2 size={16} className="animate-spin" /> : 'Confirm Booking'}
                                                    </button>
                                                </form>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>

                            {/* WHAT HAPPENS NEXT */}
                            <div className="bg-neutral-900/30 rounded-3xl p-8 border border-white/5 h-full flex flex-col justify-center">
                                <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                                    <Clock size={18} className="text-neutral-400" /> What happens next?
                                </h4>
                                <div className="space-y-6 relative">
                                    <div className="absolute left-3 top-2 bottom-2 w-px bg-white/10"></div>
                                    {[
                                        "I review your project details",
                                        "I respond within 24 hours",
                                        "We discuss scope, timeline & steps"
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-4 relative z-10">
                                            <div className="w-6 h-6 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                                                {i + 1}
                                            </div>
                                            <p className="text-sm text-neutral-300">{step}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* SOCIALS */}
                                <div className="flex gap-4 mt-8 pt-6 border-t border-white/5 justify-center">
                                    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:text-white hover:bg-white/10 transition-colors">
                                        <Linkedin size={18} />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:text-white hover:bg-white/10 transition-colors">
                                        <Instagram size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
