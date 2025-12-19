'use client';

import { useActionState, useEffect, useState } from "react";
import { Send, Sparkles, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactForm, checkSystemHealth } from "@/app/contact/actions";

const initialState = {
    message: '',
    error: '',
    success: false
}

export default function AntiGravityContactForm() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
    const [isSystemOnline, setIsSystemOnline] = useState(true);

    useEffect(() => {
        checkSystemHealth().then(setIsSystemOnline);
    }, []);

    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="relative w-full max-w-lg bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group"
            >
                {/* Glassmorphism Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                {/* Floating Elements Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-[50px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6 text-white/80">
                        <Sparkles className="w-5 h-5 text-purple-400" />
                        <span className="text-sm font-mono tracking-widest uppercase">Quick Message</span>
                    </div>

                    <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-8">
                        Send a Signal
                    </h3>

                    {!isSystemOnline && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 flex items-center gap-3"
                        >
                            <AlertTriangle className="w-5 h-5 shrink-0 animate-pulse" />
                            <div className="text-sm">
                                <span className="font-bold block text-red-100">Signal Tower Offline</span>
                                <span className="opacity-80">Unable to establish connection with base.</span>
                            </div>
                        </motion.div>
                    )}

                    {state.success ? (
                        <div className="text-center py-12">
                            <h4 className="text-2xl font-bold text-white mb-2">Signal Received!</h4>
                            <p className="text-white/60">We'll respond on your frequency shortly.</p>
                        </div>
                    ) : (
                        <form action={formAction} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="contact-name" className="text-xs font-medium text-blue-200/60 uppercase tracking-wider ml-1">Your Name</label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-xl py-4 px-5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent focus:bg-black/40 transition-all shadow-inner"
                                    placeholder="Captain Future"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="contact-email" className="text-xs font-medium text-blue-200/60 uppercase tracking-wider ml-1">Email Coordinates</label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-xl py-4 px-5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent focus:bg-black/40 transition-all shadow-inner"
                                    placeholder="captain@future.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="contact-message" className="text-xs font-medium text-blue-200/60 uppercase tracking-wider ml-1">Message</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl py-4 px-5 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent focus:bg-black/40 transition-all resize-none shadow-inner"
                                    placeholder="Scanning frequencies..."
                                />
                            </div>

                            {state.error && (
                                <div
                                    role="alert"
                                    aria-live="assertive"
                                    className="text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20"
                                >
                                    {state.error}
                                </div>
                            )}
                            <button
                                type="submit"
                                disabled={isPending || !isSystemOnline}
                                className="group/btn relative w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale"
                            >
                                <span className="relative z-10">{isPending ? 'Transmitting...' : 'Launch Message'}</span>
                                <Send size={18} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />

                                {/* Button Shine */}
                                <div className="absolute inset-0 bg-white/20 blur-md -skew-x-12 translate-x-[-150%] group-hover/btn:translate-x-[150%] transition-transform duration-700" />
                            </button>
                        </form>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
