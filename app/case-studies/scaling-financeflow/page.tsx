"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    XCircle, CheckCircle2, LayoutTemplate, MonitorPlay,
    MousePointerClick, Sparkles, Activity, MessageSquare,
    TrendingDown, Zap, Users, ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function ScalingFinanceFlowPage() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black opacity-60"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wider uppercase mb-6">
                                Case Study: FinTech UX
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-6">
                                Scaling FinanceFlow <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    Reduced Churn by 40%
                                </span>
                            </h1>
                            <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
                                How AI-Driven UX Patterns transformed a complex financial tool into an adaptive, intuitive growth engine.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PROBLEM VS STRATEGY */}
            <section className="py-20 bg-neutral-900/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* The Core Problem */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-red-950/10 border border-red-900/20"
                        >
                            <h3 className="text-red-400 font-bold text-xl uppercase tracking-wider mb-6 flex items-center gap-2">
                                <XCircle size={24} /> The Core Problem
                            </h3>
                            <p className="text-neutral-400 mb-6">Users were leaving not because of a lack of features, but because:</p>
                            <ul className="space-y-4">
                                {[
                                    "Complex workflows created cognitive overload",
                                    "Interfaces were static and didn’t adapt to intent",
                                    "Friction in onboarding caused early drop-offs",
                                    "Support tickets masked deeper UX problems"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-300">
                                        <span className="text-red-500 mt-1">✕</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* The AI-UX Strategy */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-blue-950/10 border border-blue-900/20"
                        >
                            <h3 className="text-blue-400 font-bold text-xl uppercase tracking-wider mb-6 flex items-center gap-2">
                                <Sparkles size={24} /> The AI-UX Strategy
                            </h3>
                            <p className="text-neutral-300 mb-6 leading-relaxed">
                                Instead of redesigning blindly, we implemented <span className="text-white font-semibold">AI-powered UX intelligence</span> that continuously adapts the product experience in real time.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-blue-300 bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                                <CheckCircle2 size={16} /> Result: Experience quality scaled with user growth.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* DEEP DIVE SECTION - 6 Cards */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-cyan-500 font-semibold tracking-wide uppercase text-sm">Deep Dive</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mt-2">
                            AI-Driven UX Patterns
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {/* 1. Behavior-Adaptive Interfaces */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <LayoutTemplate size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">1. Adaptive Interfaces</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">Tracks navigation paths and adjusts UI complexity dynamically.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> Hides unused complexity</li>
                                <li className="flex gap-2"><span>•</span> Reorders dashboards</li>
                                <li className="flex gap-2"><span>•</span> Highlights relevant features</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-blue-400 text-sm font-semibold">
                                ✅ Right feature, right time
                            </div>
                        </div>

                        {/* 2. Predictive Onboarding */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                <MonitorPlay size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">2. Predictive Onboarding</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">Onboarding flows adapt to user role and business size instantly.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> Role-based flows</li>
                                <li className="flex gap-2"><span>•</span> Shortcuts for experts</li>
                                <li className="flex gap-2"><span>•</span> Guided steps for newbies</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-cyan-400 text-sm font-semibold">
                                ✅ Faster activation
                            </div>
                        </div>

                        {/* 3. Micro-UX Interventions */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                <MousePointerClick size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">3. Micro-Interventions</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">Detects hesitation and triggers smart suggestions before friction occurs.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> Contextual tooltips</li>
                                <li className="flex gap-2"><span>•</span> Smart suggestions</li>
                                <li className="flex gap-2"><span>•</span> One-click actions</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-indigo-400 text-sm font-semibold">
                                ✅ Friction removed early
                            </div>
                        </div>

                        {/* 4. AI Personalization */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                <Sparkles size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">4. Personalization at Scale</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">Smart defaults and context-aware recommendations per user.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> Smart default states</li>
                                <li className="flex gap-2"><span>•</span> Context-aware reports</li>
                                <li className="flex gap-2"><span>•</span> Financial insights</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-purple-400 text-sm font-semibold">
                                ✅ Feels "built for me"
                            </div>
                        </div>

                        {/* 5. Churn Prediction */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                <Activity size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">5. Preventive UX</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">Flags at-risk users and triggers re-engagement flows.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> Declining engagement flag</li>
                                <li className="flex gap-2"><span>•</span> Simplified rescue flows</li>
                                <li className="flex gap-2"><span>•</span> Value prompts</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-red-400 text-sm font-semibold">
                                ✅ Addressed before cancel
                            </div>
                        </div>

                        {/* 6. UX + Support Loop */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <MessageSquare size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">6. Support Intel Loop</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">Converts recurring support tickets into automated UX improvements.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> Connects support data</li>
                                <li className="flex gap-2"><span>•</span> Chatbot conversation analysis</li>
                                <li className="flex gap-2"><span>•</span> Automated guidance</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-green-400 text-sm font-semibold">
                                ✅ Fewer tickets
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPACT SECTION */}
            <section className="py-24 bg-neutral-900 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-neutral-800 to-black border border-white/10 p-12 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-10">Measurable Outcomes</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div>
                                    <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                                    <div className="text-sm text-neutral-400">Churn Reduction</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-cyan-400 mb-2">2x</div>
                                    <div className="text-sm text-neutral-400">Faster Activation</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-indigo-400 mb-2">High</div>
                                    <div className="text-sm text-neutral-400">Feature Adoption</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-2">Scalable</div>
                                    <div className="text-sm text-neutral-400">Design System</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto text-center mt-20">
                        <p className="text-2xl font-light italic text-neutral-300 mb-8">
                            "Traditional UX redesigns are static and reactive. AI-driven UX is <span className="text-white font-semibold not-italic">continuous, adaptive, and predictive</span>. FinanceFlow didn’t just scale users — it scaled experience quality."
                        </p>
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-colors">
                            Transform Your UX <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
