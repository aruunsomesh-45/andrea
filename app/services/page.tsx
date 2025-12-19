"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Layout, Smartphone, MousePointer2, Code2,
    TrendingUp, Repeat, ArrowRight, Zap,
    Search, Users, Layers, Cpu
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <div className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white pt-20">

            {/* HERO SECTION */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/videos/services-hero-bg.mp4" type="video/mp4" />
                    </video>
                </div>
                {/* Fallback/Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                            Not Just a Vendor. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Your Product Partner.
                            </span>
                        </h1>
                        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
                            We don&apos;t just ship code. We build platforms that build trust, clarity, and revenue.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* PHILOSOPHY SECTION */}
            <section className="py-20 border-y border-white/5 bg-neutral-900/20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto md:mx-0">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Emotional Connection</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                "This person understands my problem." <br />
                                We design for feeling, not just function.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mx-auto md:mx-0">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Cognitive Clarity</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                "I understand what I get." <br />
                                Zero confusion. Instant value communication.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mx-auto md:mx-0">
                                <Layers size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Trust Acceleration</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                "This feels structured and safe." <br />
                                Professionalism baked into every pixel.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6 ESSENTIAL SERVICES */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="mb-20 text-center">
                        <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm">Our Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mt-2">
                            Solutions, Not Just Services
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* SERVICE 1 */}
                        <div className="group p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-blue-500/50 hover:bg-neutral-800/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <Layout size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Product Strategy & UX</h3>
                            <p className="text-neutral-400 mb-6 min-h-[48px]">Solves confusion and weak positioning through deep user journey mapping.</p>
                            <div className="pt-6 border-t border-white/5">
                                <p className="text-sm font-medium text-blue-400">Outcome: A product that makes sense instantly.</p>
                            </div>
                        </div>

                        {/* SERVICE 2 */}
                        <div className="group p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-purple-500/50 hover:bg-neutral-800/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-8 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                <Smartphone size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">High-Impact UI Design</h3>
                            <p className="text-neutral-400 mb-6 min-h-[48px]">Solves generic visuals with brand-consistent, premium design systems.</p>
                            <div className="pt-6 border-t border-white/5">
                                <p className="text-sm font-medium text-purple-400">Outcome: Users trust you in seconds.</p>
                            </div>
                        </div>

                        {/* SERVICE 3 */}
                        <div className="group p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-pink-500/50 hover:bg-neutral-800/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-400 mb-8 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                <MousePointer2 size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Motion & Interaction</h3>
                            <p className="text-neutral-400 mb-6 min-h-[48px]">Solves flat experiences with scroll-motion and micro-interactions.</p>
                            <div className="pt-6 border-t border-white/5">
                                <p className="text-sm font-medium text-pink-400">Outcome: Your product feels alive and premium.</p>
                            </div>
                        </div>

                        {/* SERVICE 4 */}
                        <div className="group p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-cyan-500/50 hover:bg-neutral-800/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 mb-8 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                <Code2 size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Frontend Development</h3>
                            <p className="text-neutral-400 mb-6 min-h-[48px]">Solves design-to-code gaps with pixel-perfect React/Next.js builds.</p>
                            <div className="pt-6 border-t border-white/5">
                                <p className="text-sm font-medium text-cyan-400">Outcome: What you see in design is what ships.</p>
                            </div>
                        </div>

                        {/* SERVICE 5 */}
                        <div className="group p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-green-500/50 hover:bg-neutral-800/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 mb-8 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Conversion Optimization</h3>
                            <p className="text-neutral-400 mb-6 min-h-[48px]">Solves traffic with no results using funnel and CTA strategies.</p>
                            <div className="pt-6 border-t border-white/5">
                                <p className="text-sm font-medium text-green-400">Outcome: More leads, not just visitors.</p>
                            </div>
                        </div>

                        {/* SERVICE 6 */}
                        <div className="group p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-orange-500/50 hover:bg-neutral-800/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-400 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                <Repeat size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Ongoing Partnership</h3>
                            <p className="text-neutral-400 mb-6 min-h-[48px]">Solves stagnation with iterative updates and feature rollouts.</p>
                            <div className="pt-6 border-t border-white/5">
                                <p className="text-sm font-medium text-orange-400">Outcome: Your product evolves without friction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FULL CAPABILITIES LIST */}
            <section className="py-24 bg-neutral-900/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold font-heading text-white">
                            Full Studio Capabilities
                        </h2>
                        <p className="text-neutral-400 mt-4 max-w-2xl">
                            A granular look at what we deliver. From high-level strategy to pixel-perfect code.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {/* CATEGORY 1: STRATEGY & RESEARCH */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center">
                                    <Search size={18} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Strategy & Research</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "User Research", "Market Analysis", "Persona Development",
                                    "Customer Journey Mapping", "Information Architecture", "Product Roadmapping",
                                    "Competitive Audit", "Brand Positioning"
                                ].map((item, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 hover:text-white hover:border-blue-500/30 transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CATEGORY 2: DESIGN */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center">
                                    <Layout size={18} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Brand & Visual Design</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Visual Identity", "Logo Design", "Design Systems",
                                    "High-Fidelity UI", "Interactive Prototyping", "Dark Mode Design",
                                    "Accessibility (WCAG)", "Motion Design", "3D Assets"
                                ].map((item, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 hover:text-white hover:border-purple-500/30 transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CATEGORY 3: ENGINEERING */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                                    <Code2 size={18} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Engineering & Code</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "React / Next.js", "TypeScript", "Tailwind CSS",
                                    "Framer Motion", "GSAP Animations", "Headless CMS",
                                    "Stripe Integration", "API Development", "Vercel Deployment"
                                ].map((item, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 hover:text-white hover:border-cyan-500/30 transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CATEGORY 4: GROWTH */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center">
                                    <TrendingUp size={18} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Growth & Optimization</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Technical SEO", "Core Web Vitals", "Conversion Rate Optimization",
                                    "Analytics Setup", "Heatmap Analysis", "A/B Testing",
                                    "Performance Tuning", "Automated Workflows"
                                ].map((item, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 hover:text-white hover:border-green-500/30 transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WORKFLOW SECTION */}
            <section className="py-24 bg-neutral-900 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
                            How We Work
                        </h2>
                        <p className="text-neutral-400 mt-6 max-w-2xl mx-auto">
                            From confusion to clarity. A transparent process designed to build trust at every step.
                        </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 hidden md:block transform -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { title: "Discover", desc: "Deep dive into your goals." },
                                { title: "Design", desc: "Intentional, strategic visuals." },
                                { title: "Build", desc: "Pixel-perfect development." },
                                { title: "Iterate", desc: "Continuous improvement." }
                            ].map((step, i) => (
                                <div key={i} className="bg-black border border-white/10 p-6 rounded-2xl text-center hover:border-blue-500/50 transition-colors">
                                    <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10 text-white font-bold">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-neutral-400">{step.desc}</p>
                                </div>
                            ))}                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-8">
                        Ready to Build Trust?
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
                        Stop looking for vendors. Start building with a partner who understands your business.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all hover:scale-105">
                        Start Your Project <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
}

