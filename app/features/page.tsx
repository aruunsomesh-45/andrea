"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Brain, Zap, Search, Activity, BarChart3, TrendingUp, Users, RefreshCw } from "lucide-react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
export default function FeaturesPage() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white">

            {/* HERRO SECTION */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-40 mix-blend-screen"
                    >
                        <source src="/hero-flow.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-60 z-0"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wider uppercase mb-6">
                                Future-Proof Your Growth
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-8">
                                The Future of Business Is <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                                    AI-Powered, Human-Led
                                </span>
                            </h1>
                            <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
                                We don’t just build websites — we engineer intelligent digital ecosystems that close growth gaps, automate inefficiencies, and unlock scalable performance.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold float-r rounded-xl hover:bg-neutral-200 transition-colors flex items-center gap-2">
                                    Start Your Transformation <ArrowRight size={18} />
                                </Link>
                                <Link href="/projects" className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white font-medium">
                                    View Logic
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MARKET GAP VS SOLUTION - Comparison Section */}
            <section className="py-24 bg-neutral-950/50 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">The Market Gap</h2>
                        <p className="text-neutral-400">Where traditional businesses fail vs. how AI-led businesses scale.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Traditional Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-8 rounded-3xl bg-red-950/10 border border-red-900/20"
                        >
                            <h3 className="text-red-400 font-bold uppercase tracking-wider mb-8 flex items-center gap-2">
                                <Activity size={20} /> Traditional Approach
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { problem: "Low conversion rates", cause: "Static websites" },
                                    { problem: "Slow operations", cause: "Manual processes" },
                                    { problem: "SEO volatility", cause: "Keyword stuffing" },
                                    { problem: "Poor customer experience", cause: "One-size-fits-all UX" },
                                    { problem: "Unscalable growth", cause: "Human-only execution" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-red-900/5">
                                        <div className="text-red-500 mt-1">❌</div>
                                        <div>
                                            <p className="text-red-200 font-semibold">{item.problem}</p>
                                            <p className="text-red-400/60 text-sm">{item.cause}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* AI Solution Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-8 rounded-3xl bg-blue-950/10 border border-blue-900/20 relative overflow-hidden"
                        >
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                            />
                            <div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <h3 className="text-blue-400 font-bold uppercase tracking-wider mb-8 flex items-center gap-2">
                                <Brain size={20} /> Our AI-Driven Solution
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { solution: "AI-optimized UI/UX", detail: "Behavior-driven layouts" },
                                    { solution: "AI automation & smart workflows", detail: "Automated operations" },
                                    { solution: "AI SEO with intent", detail: "Predictive analysis" },
                                    { solution: "Personalized AI UX flows", detail: "Dynamic experiences" },
                                    { solution: "AI + human hybrid execution", detail: "Scalable systems" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-blue-900/5 border border-blue-500/10">
                                        <div className="text-blue-500 mt-1"><CheckCircle2 size={20} /></div>
                                        <div>
                                            <p className="text-blue-200 font-semibold">{item.solution}</p>
                                            <p className="text-blue-400/60 text-sm">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PRODUCTIVITY GRAPH VISUAL */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm">Outcomes</span>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mt-2 mb-6">
                                Data-Driven Growth
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                                See the difference AI integration makes. We transform linear growth into exponential scalability by automating the mundane and optimizing the meaningful.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-neutral-300">
                                    <TrendingUp className="text-green-500" /> Faster growth trajectory
                                </li>
                                <li className="flex items-center gap-3 text-neutral-300">
                                    <Users className="text-blue-500" /> Higher conversion rates
                                </li>
                                <li className="flex items-center gap-3 text-neutral-300">
                                    <RefreshCw className="text-purple-500" /> Lower operational costs
                                </li>
                            </ul>
                        </div>

                        {/* CSS-only Graph Visualization Placeholder */}
                        <div className="bg-neutral-900/50 p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                            />
                            <h3 className="text-white font-bold mb-8 flex items-center gap-3">
                                <BarChart3 size={20} className="text-blue-500" /> Productivity Impact
                            </h3>

                            <div className="h-64 flex items-end justify-between gap-4 px-4 pb-4 border-l border-b border-white/20 relative">
                                {/* Grid lines */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                                    <div className="w-full h-px bg-white"></div>
                                    <div className="w-full h-px bg-white"></div>
                                    <div className="w-full h-px bg-white"></div>
                                    <div className="w-full h-px bg-white"></div>
                                    <div className="w-full h-px bg-white"></div>
                                </div>

                                {/* Bars representing Traditional vs AI over time */}
                                {[20, 30, 40, 45, 50].map((h, i) => (
                                    <div key={`trad-${i}`} className="w-full bg-neutral-700/50 rounded-t-sm relative group" style={{ height: `${h}%` }}>
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Traditional</div>
                                    </div>
                                ))}

                                {[25, 45, 65, 85, 100].map((h, i) => (
                                    <div key={`ai-${i}`} className="w-full bg-gradient-to-t from-blue-600 to-purple-500 rounded-t-md relative group shadow-[0_0_20px_rgba(59,130,246,0.3)]" style={{ height: `${h}%` }}>
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-900 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-blue-500/30">AI-Powered</div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-4 text-xs text-neutral-500 uppercase tracking-widest px-4">
                                <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><span>Future</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP VISUAL PLACEHOLDER - Using abstract CSS Art/Layout */}
            <section className="py-24 bg-neutral-900/30 border-y border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">AI Business Transformation Ecosystem</h2>
                    <div className="relative max-w-4xl mx-auto h-[400px] border border-white/10 rounded-3xl bg-black/40 backdrop-blur-sm overflow-hidden flex items-center justify-center p-8 group">
                        <GlowingEffect
                            spread={40}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                        />
                        {/* Central Node */}
                        <div className="absolute flex flex-col items-center z-20">
                            <div className="w-24 h-24 rounded-full bg-blue-600/20 border border-blue-500 flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.3)] animate-pulse">
                                <Brain size={40} className="text-blue-400" />
                            </div>
                            <p className="mt-4 font-bold text-white tracking-widest uppercase">AI Core</p>
                        </div>

                        {/* Orbiting Nodes */}
                        {[
                            { label: 'Automation', icon: Zap, pos: 'top-10 left-1/4' },
                            { label: 'Analytics', icon: BarChart3, pos: 'top-10 right-1/4' },
                            { label: 'Growth', icon: TrendingUp, pos: 'bottom-10 right-1/4' },
                            { label: 'SEO', icon: Search, pos: 'bottom-10 left-1/4' },
                        ].map((node, i) => (
                            <div key={i} className={`absolute ${node.pos} flex flex-col items-center`}>
                                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                    <node.icon size={24} className="text-neutral-400" />
                                </div>
                                <p className="mt-2 text-xs font-medium text-neutral-500 uppercase">{node.label}</p>
                            </div>
                        ))}

                        {/* Connecting Lines (CSS SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                            <line x1="50%" y1="50%" x2="25%" y2="20%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                            <line x1="50%" y1="50%" x2="75%" y2="20%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                            <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                            <line x1="50%" y1="50%" x2="25%" y2="80%" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                            <circle cx="50%" cy="50%" r="150" fill="none" stroke="blue" strokeWidth="1" strokeOpacity="0.1" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* FUTURE SERVICES */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-purple-500 font-semibold tracking-wide uppercase text-sm">Our Capabilities</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mt-2">
                            Future-Ready Services
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "AI Website Design", desc: "Adaptive layouts that evolve based on user behavior.", icon: RefreshCw },
                            { title: "AI-Powered UI/UX", desc: "Optimized using heatmaps, user intent & micro-interactions.", icon: Activity },
                            { title: "Next-Gen SEO", desc: "Built for Google SGE, voice search & semantic indexing.", icon: Search },
                            { title: "AI Business Automation", desc: "Chatbots, lead scoring, CRM automation, smart funnels.", icon: Brain },
                            { title: "Predictive Analytics", desc: "Turn data into decisions, not just dashboards.", icon: BarChart3 },
                            { title: "Hybrid Execution", desc: "The perfect blend of AI speed and human creativity.", icon: Users },
                        ].map((item, i) => (
                            <div key={i} className="relative h-full">
                                <div className="relative h-full rounded-2xl p-[1px] overflow-hidden group">
                                    <GlowingEffect
                                        spread={40}
                                        glow={true}
                                        disabled={false}
                                        proximity={64}
                                        inactiveZone={0.01}
                                    />
                                    <div className="relative h-full p-8 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-white/10 hover:bg-white/5 transition-all duration-300 flex flex-col">
                                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                            <item.icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                        <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CASE STUDY SECTION */}
            <section className="py-24 bg-neutral-900 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <span className="text-green-500 font-semibold tracking-wide uppercase text-sm">Proven Results</span>
                        <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mt-2 leading-tight">
                            Conversion-Oriented and <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Growth-Focused</span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Case Study Card 3 (New) */}
                        <div className="lg:col-span-1 relative h-full">
                            <div className="relative h-full rounded-3xl p-[1px] overflow-hidden group cursor-pointer">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                />
                                <div className="relative h-full flex flex-col bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-green-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img
                                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                            alt="SaaS Case Study"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex gap-3 mb-4">
                                            <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider">SaaS</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">Growth Engine</h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                                            3x lead generation using predictive analytics.
                                        </p>
                                        <Link href="/case-studies/growth-engine" className="block w-full text-center py-3 rounded-lg border border-white/10 bg-white/5 text-white font-medium hover:bg-green-600 hover:border-green-600 transition-all text-sm uppercase tracking-wide">
                                            Read Case Study
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Case Study Card 1 */}
                        <div className="lg:col-span-1 relative h-full">
                            <div className="relative h-full rounded-3xl p-[1px] overflow-hidden group cursor-pointer">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                />
                                <div className="relative h-full flex flex-col bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">

                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img
                                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                                            alt="FinTech Case Study"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex gap-3 mb-4">
                                            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">FinTech</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Scaling FinanceFlow</h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                                            Reduced churn by 40% using AI-driven UX patterns.
                                        </p>
                                        <Link href="/case-studies/scaling-financeflow" className="block w-full text-center py-3 rounded-lg border border-white/10 bg-white/5 text-white font-medium hover:bg-blue-600 hover:border-blue-600 transition-all text-sm uppercase tracking-wide">
                                            Read Case Study
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Case Study Card 2 */}
                        <div className="lg:col-span-1 relative h-full">
                            <div className="relative h-full rounded-3xl p-[1px] overflow-hidden group cursor-pointer">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                />
                                <div className="relative h-full flex flex-col bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img
                                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                            alt="E-Commerce Case Study"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex gap-3 mb-4">
                                            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">Automation</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">AutoSupport AI</h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                                            Automated 90% of support tickets with NLP chatbots.
                                        </p>
                                        <Link href="/case-studies/automating-support" className="block w-full text-center py-3 rounded-lg border border-white/10 bg-white/5 text-white font-medium hover:bg-purple-600 hover:border-purple-600 transition-all text-sm uppercase tracking-wide">
                                            Read Case Study
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex justify-center">
                        <Link href="/projects" className="group relative px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold tracking-wider hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            View Full Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
