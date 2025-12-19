
"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    CheckCircle2, XCircle, Brain, Target, Users,
    GitMerge, Sparkles, BarChart3, ArrowRight,
    MessageSquare, Zap, Clock, ShieldCheck
} from "lucide-react";
import Link from "next/link";

export default function AutomatingSupportCaseStudy() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-purple-500 selection:text-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black opacity-60"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium tracking-wider uppercase mb-6">
                                Case Study: Support Automation
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-6">
                                Automating 90% of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                                    Customer Support
                                </span>
                            </h1>
                            <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
                                AI-First Support That Scales Without Hiring. We deploy intelligent systems that amplify human potential by removing the noise.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PROBLEM VS SOLUTION */}
            <section className="py-20 bg-neutral-900/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* The Problem */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-red-950/10 border border-red-900/20"
                        >
                            <h3 className="text-red-400 font-bold text-xl uppercase tracking-wider mb-6 flex items-center gap-2">
                                <XCircle size={24} /> The Problem
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Support teams spend 70–80% of time answering repetitive questions",
                                    "High response times reduce customer satisfaction & conversions",
                                    "Human agents are overqualified for low-value queries",
                                    "Scaling support = higher payroll, more training, more churn"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-300">
                                        <span className="text-red-500 mt-1">✕</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* The Solution */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-purple-950/10 border border-purple-900/20"
                        >
                            <h3 className="text-purple-400 font-bold text-xl uppercase tracking-wider mb-6 flex items-center gap-2">
                                <Zap size={24} /> The AI-Driven Solution
                            </h3>
                            <p className="text-neutral-300 mb-6 leading-relaxed">
                                We deploy <span className="text-white font-semibold">intelligent, self-learning AI support systems</span> that resolve most customer queries instantly — while routing only <span className="text-white font-semibold">high-intent, high-value conversations</span> to humans.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-purple-300 bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
                                <CheckCircle2 size={16} /> Result: No wasted human time on low-impact conversations.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* DEEP DIVE SECTION */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm">Strategic Breakdown</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mt-2">
                            How The System Works
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {/* 1. Smart AI Chatbots */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                <MessageSquare size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">1. Smart AI Chatbots</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">Tier-1 Support Automation handling FAQs, policies, and onboarding.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> Trained on all company data</li>
                                <li className="flex gap-2"><span>•</span> 24/7, multi-language</li>
                                <li className="flex gap-2"><span>•</span> Continuous learning</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-purple-400 text-sm font-semibold">
                                ✅ 90% query resolution
                            </div>
                        </div>

                        {/* 2. Intent Detection */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <Brain size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">2. Intent Detection</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">AI analyzes urgency, emotional tone, and buying signals.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> Detects high-value leads</li>
                                <li className="flex gap-2"><span>•</span> Filtering low-impact chats</li>
                                <li className="flex gap-2"><span>•</span> Smart classification</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-blue-400 text-sm font-semibold">
                                ✅ Zero wasted human time
                            </div>
                        </div>

                        {/* 3. Human Handoff */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">3. Human Handoff</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">Only qualified, ready-to-convert users reach human agents.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> Full context provided</li>
                                <li className="flex gap-2"><span>•</span> Recommended responses</li>
                                <li className="flex gap-2"><span>•</span> Focus on sales/relationships</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-green-400 text-sm font-semibold">
                                ✅ Higher close rates
                            </div>
                        </div>

                        {/* 4. Routing & Automation */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                <GitMerge size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">4. Smart Routing</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">Instant ticket assignment and workflow triggers.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> CRM Integration</li>
                                <li className="flex gap-2"><span>•</span> Auto-escalation</li>
                                <li className="flex gap-2"><span>•</span> Multi-channel sync</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-orange-400 text-sm font-semibold">
                                ✅ Zero manual sorting
                            </div>
                        </div>

                        {/* 5. Predictive Support */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                <Sparkles size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">5. Predictive Support</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">Proactive messages and guided workflows before users ask.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> Predicts drop-off points</li>
                                <li className="flex gap-2"><span>•</span> Smart FAQs</li>
                                <li className="flex gap-2"><span>•</span> Anticipates issues</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-cyan-400 text-sm font-semibold">
                                ✅ Fewer tickets generated
                            </div>
                        </div>

                        {/* 6. Data Optimization */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                <BarChart3 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">6. Continuous Optimization</h3>
                            <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">Real-time analytics turning support into a growth engine.</p>
                            <ul className="space-y-2 text-sm text-neutral-500 mb-6">
                                <li className="flex gap-2"><span>•</span> CSAT analysis</li>
                                <li className="flex gap-2"><span>•</span> UX improvement suggestions</li>
                                <li className="flex gap-2"><span>•</span> Conversion tracking</li>
                            </ul>
                            <div className="pt-4 border-t border-white/5 text-pink-400 text-sm font-semibold">
                                ✅ Support as Growth Engine
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
                            <h2 className="text-3xl font-bold mb-10">Business Impact Clients Actually Get</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div>
                                    <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
                                    <div className="text-sm text-neutral-400">Cost Reduction</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                                    <div className="text-sm text-neutral-400">Instant Response</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-green-400 mb-2">High</div>
                                    <div className="text-sm text-neutral-400">Sales Conversion</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-2">Scale</div>
                                    <div className="text-sm text-neutral-400">Zero Headcount</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto text-center mt-20">
                        <p className="text-2xl font-light italic text-neutral-300 mb-8">
                            "Traditional support reacts. AI support <span className="text-white font-semibold not-italic">predicts, personalizes, and converts</span>. We don’t replace humans — we amplify them by removing noise and unlocking focus on revenue."
                        </p>
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-colors">
                            Turn Support Into Sales <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
