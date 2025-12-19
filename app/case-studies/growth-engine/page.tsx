"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    XCircle, CheckCircle2, Target, BarChart3,
    ArrowUpRight, Split, RefreshCw, Zap,
    LineChart, ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function GrowthEnginePage() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-green-500 selection:text-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/40 via-black to-black opacity-60"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium tracking-wider uppercase mb-6">
                                Case Study: Growth Engine
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-6">
                                3× Lead Generation <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                                    Predictive Analytics
                                </span>
                            </h1>
                            <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
                                How we implemented a predictive analytics system that identifies who is most likely to convert, when, and why—before competitors even engage.
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
                                <XCircle size={24} /> The Problem
                            </h3>
                            <p className="text-neutral-400 mb-6">Before predictive analytics, growth was a gamble:</p>
                            <ul className="space-y-4">
                                {[
                                    "Lead generation was reactive, not intelligent",
                                    "Marketing campaigns targeted broad, unqualified audiences",
                                    "High ad spend paired with low lead quality",
                                    "Sales teams wasted time on unqualified leads"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-300">
                                        <span className="text-red-500 mt-1">✕</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* The AI Strategy */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-green-950/10 border border-green-900/20"
                        >
                            <h3 className="text-green-400 font-bold text-xl uppercase tracking-wider mb-6 flex items-center gap-2">
                                <Zap size={24} /> The Growth Engine
                            </h3>
                            <p className="text-neutral-300 mb-6 leading-relaxed">
                                We moved from guessing to knowing. By implementing a <span className="text-white font-semibold">predictive analytics system</span>, we could identify high-intent prospects and personalize engagement instantly.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-green-300 bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                                <CheckCircle2 size={16} /> Result: Growth becomes a predictable system.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* DEEP DIVE SECTION */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-emerald-500 font-semibold tracking-wide uppercase text-sm">Strategic Breakdown</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mt-2">
                            Predictive Analytics in Action
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {/* 1. Predictive Lead Scoring */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <Target size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">1. Predictive Lead Scoring</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">AI analyzes behavior and assigns real-time intent scores.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> Scored by session depth</li>
                                <li className="flex gap-2"><span>•</span> Content interaction tracking</li>
                                <li className="flex gap-2"><span>•</span> Historical data matching</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-green-400 text-sm font-semibold">
                                ✅ Sales focus on high-probability
                            </div>
                        </div>

                        {/* 2. Traffic Segmentation */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                <Split size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">2. Intent Segmentation</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">Visitors segmented by buying readiness and problem awareness.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> Dynamic content adaptation</li>
                                <li className="flex gap-2"><span>•</span> Industry-specific offers</li>
                                <li className="flex gap-2"><span>•</span> Company size targeting</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-emerald-400 text-sm font-semibold">
                                ✅ Lower bounce rates
                            </div>
                        </div>

                        {/* 3. Optimized Conversion Paths */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-lime-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-lime-500/20 flex items-center justify-center text-lime-400 mb-6 group-hover:bg-lime-500 group-hover:text-white transition-colors">
                                <ArrowUpRight size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">3. Optimized Funnels</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">AI identifies and optimizes the best-performing conversion paths.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> Drop-off point detection</li>
                                <li className="flex gap-2"><span>•</span> Auto-tested landing pages</li>
                                <li className="flex gap-2"><span>•</span> Dynamic CTA placement</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-lime-400 text-sm font-semibold">
                                ✅ Continuous improvement
                            </div>
                        </div>

                        {/* 4. Campaign Optimization */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                                <BarChart3 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">4. Campaign Optimization</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">Budget allocation automatically adjusts to high-ROI sources.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> Predicts campaign performance</li>
                                <li className="flex gap-2"><span>•</span> Cuts underperforming ads</li>
                                <li className="flex gap-2"><span>•</span> Scales winners automatically</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-teal-400 text-sm font-semibold">
                                ✅ More leads, same ad spend
                            </div>
                        </div>

                        {/* 5. Sales Alignment */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">5. Sales Alignment</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">Predictive insights shared directly with sales teams.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> Contextual lead intent</li>
                                <li className="flex gap-2"><span>•</span> Recommended outreach timing</li>
                                <li className="flex gap-2"><span>•</span> Personalized talking points</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-cyan-400 text-sm font-semibold">
                                ✅ Faster closes
                            </div>
                        </div>

                        {/* 6. Continuous Learning */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <RefreshCw size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">6. Continuous Learning</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">Deal outcomes feed back into the system to improve accuracy.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> Feedback loop from CRM</li>
                                <li className="flex gap-2"><span>•</span> Refined targeting models</li>
                                <li className="flex gap-2"><span>•</span> compounding growth</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-green-400 text-sm font-semibold">
                                ✅ System gets smarter
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
                                    <div className="text-3xl font-bold text-green-400 mb-2">3×</div>
                                    <div className="text-sm text-neutral-400">Qualified Leads</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-emerald-400 mb-2">High</div>
                                    <div className="text-sm text-neutral-400">Conversion Rate</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-lime-400 mb-2">Lower</div>
                                    <div className="text-sm text-neutral-400">Cost Per Lead</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-2">Fast</div>
                                    <div className="text-sm text-neutral-400">Sales Cycles</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto text-center mt-20">
                        <p className="text-2xl font-light italic text-neutral-300 mb-8">
                            "Traditional marketing guesses. Predictive analytics <span className="text-white font-semibold not-italic">anticipates and acts</span>. Growth stops being a gamble — it becomes a system."
                        </p>
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-colors">
                            Build Your Growth Engine <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
