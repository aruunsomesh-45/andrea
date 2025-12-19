"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowUpRight, Copy, Mail, CheckCircle, Component, Users, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * ContactVisualHero
 * 
 * A high-end, brutalist-inspired hero section based on the "Visual Synthesis" reference.
 * Features:
 * - Large typographic hierarchy
 * - Interactive 3D floating cards with mouse parallax
 * - Grid background
 * - Stats sidebar
 * - Dark mode aesthetic
 */
export default function ContactVisualHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax & Mouse Movement
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height } = currentTarget.getBoundingClientRect();
        const xPct = clientX / width - 0.5;
        const yPct = clientY / height - 0.5;
        mouseX.set(xPct);
        mouseY.set(yPct);
    };

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);
    const translateX = useTransform(x, [-0.5, 0.5], [-20, 20]);
    const translateY = useTransform(y, [-0.5, 0.5], [-20, 20]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full bg-black text-white overflow-hidden selection:bg-orange-500/30 touch-none"
            onMouseMove={handleMouseMove}
        >
            {/* BACKGROUND GRID */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent blur-[120px]" />
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col pt-32 lg:pt-48 pb-20">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* LEFT CONTENT: TYPOGRAPHY & CTA */}
                    <div className="lg:col-span-7 flex flex-col relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <h1 className="text-[12vw] lg:text-[140px] leading-[0.85] font-bold tracking-tighter uppercase font-sans">
                                <span className="block text-white">Start</span>
                                <span className="block text-neutral-600">Project</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="mt-12 text-lg text-neutral-400 max-w-md border-l border-white/20 pl-6 leading-relaxed"
                        >
                            A truly open collaborative process for the post-digital era.
                            Construct interfaces with parametric efficiency and brutalist principles.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mt-12 flex flex-col sm:flex-row items-start gap-4"
                        >
                            <Link
                                href="/start-project"
                                className="group relative px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/30 text-white font-mono text-xs uppercase tracking-widest transition-all overflow-hidden rounded-sm"
                            >
                                <span className="relative z-10 flex items-center gap-2 font-bold">
                                    Start Creating <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                            </Link>

                            <Link
                                href="#contact"
                                className="group relative px-8 py-4 bg-orange-500/10 backdrop-blur-md border border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-500/40 text-orange-400 font-mono text-xs uppercase tracking-widest transition-all overflow-hidden rounded-sm"
                            >
                                <span className="relative z-10 flex items-center gap-2 font-bold">
                                    Book a Call <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                </span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* CENTER / RIGHT: 3D FLOATING VISUALS (The "Synthesis" part) */}
                    <div className="lg:col-span-5 h-[500px] lg:h-[600px] relative perspective-1000">

                        {/* Floating elements styling container */}
                        <motion.div
                            style={{
                                rotateX,
                                rotateY,
                                x: translateX,
                                y: translateY,
                                transformStyle: "preserve-3d"
                            }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            {/* Card 1: Main Center Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, z: 0 }}
                                animate={{ opacity: 1, scale: 1, z: 50 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-neutral-900 border border-white/10 shadow-2xl overflow-hidden group"
                                style={{ transform: "translateZ(50px)" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay" />
                                <div className="absolute bottom-4 left-4">
                                    <p className="font-mono text-[10px] text-white/50 uppercase">Fig. 01</p>
                                    <p className="font-bold text-white text-sm">Visual Core</p>
                                </div>
                                {/* Placeholder gradient/abstract */}
                                <Image
                                    src="/fashion-week.jpg"
                                    alt="Fashion Week"
                                    fill
                                    sizes="256px"
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay z-10" />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <p className="font-mono text-[10px] text-white/70 uppercase">Fig. 01</p>
                                    <p className="font-bold text-white text-sm">Fashion Week</p>
                                </div>
                            </motion.div>

                            {/* Card 2: Top Right Small */}
                            <motion.div
                                initial={{ opacity: 0, x: 50, y: -50 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.4 }}
                                className="absolute top-[10%] right-[15%] w-40 h-40 bg-neutral-800/80 backdrop-blur-md border border-white/10 shadow-xl origin-bottom-left overflow-hidden group"
                                style={{ transform: "translateZ(80px) rotate(6deg)" }}
                            >
                                <Image
                                    src="/vogue-cover.jpg"
                                    alt="Vogue Diva Design"
                                    fill
                                    sizes="160px"
                                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40" />
                                <div className="absolute p-4 flex flex-col justify-between h-full w-full z-10">
                                    <Globe className="text-white w-6 h-6" />
                                    <div className="font-mono text-[10px] text-neutral-200">
                                        Global Reach<br />
                                        <span className="text-white font-bold">Unlimited</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 3: Bottom Left Wide */}
                            <motion.div
                                initial={{ opacity: 0, x: -50, y: 50 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.5 }}
                                className="absolute bottom-[20%] left-[5%] w-56 h-32 bg-neutral-900/90 border border-white/10 shadow-xl overflow-hidden group"
                                style={{ transform: "translateZ(20px) rotate(-3deg)" }}
                            >
                                <Image
                                    src="/landscape-card.png"
                                    alt="Cybernetic System"
                                    fill
                                    sizes="224px"
                                    className="object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:16px_16px] z-10" />
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <div className="w-12 h-12 rounded-full border border-orange-500/50 flex items-center justify-center backdrop-blur-sm">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Lines */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
                        </motion.div>
                    </div>

                </div>

            </div>

            {/* RIGHT SIDEBAR STATS (Absolute positioned on large screens) */}
            <div className="hidden lg:flex flex-col absolute right-0 top-1/2 -translate-y-1/2 pr-12 gap-16 border-l border-white/5 pl-12 py-12">
                <div className="group cursor-pointer">
                    <h3 className="text-4xl font-light text-neutral-500 group-hover:text-white transition-colors duration-300">2.4k</h3>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-600 mt-2">Components</p>
                </div>
                <div className="group cursor-pointer">
                    <h3 className="text-4xl font-light text-neutral-500 group-hover:text-white transition-colors duration-300">142</h3>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-600 mt-2">Contributors</p>
                </div>
                <div className="relative group cursor-pointer">
                    <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
                        <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex -space-x-3">
                        <div className="w-8 h-8 rounded-full bg-neutral-700 border border-black" />
                        <div className="w-8 h-8 rounded-full bg-neutral-600 border border-black" />
                        <div className="w-8 h-8 rounded-full bg-orange-500 border border-black flex items-center justify-center text-[10px] font-bold text-black font-mono">
                            +9
                        </div>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-600 mt-4 max-w-[100px] leading-tight">
                        Latest Commits by Core Team
                    </p>
                </div>
            </div>

            {/* BOTTOM FLOATING NOTIFICATION (Like the 'Why is it free?' box) */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-8 right-8 z-30"
            >
                <div className="bg-neutral-900 border border-neutral-800 p-4 max-w-xs flex gap-4 rounded-sm shadow-2xl">
                    <div className="w-10 h-10 bg-orange-500 flex items-center justify-center shrink-0 text-black font-bold text-xl font-heading">?</div>
                    <div>
                        <h4 className="font-bold text-white text-sm mb-1">Ready to scale?</h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                            A 2 min intro call to see if our open-source philosophy fits your brand.
                        </p>
                    </div>
                </div>
            </motion.div>

        </section>
    );
}
