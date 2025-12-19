"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// --- Configuration & Data ---

const FLOAT_CONFIG = {
    duration: 8,
    ease: "easeInOut",
};

export default function ContactHero() {
    const containerRef = useRef<HTMLElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Mouse Parallax Logic
    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
        const y = (clientY / innerHeight - 0.5) * 2; // -1 to 1
        setMousePosition({ x, y });
    };



    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-screen min-h-[800px] bg-[#050505] text-[#f2f2f2] overflow-hidden selection:bg-white/20"
        >
            {/* --- 1. Background System --- */}

            {/* Deep Charcoal Gradient Base */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#000000] z-0" />

            {/* Subtle Gradient Falloff (Top-Left Light Source) */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-neutral-800/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Procedural Noise Overlay */}
            <div className="absolute inset-0 z-[1] opacity-[0.03] text-white pointer-events-none mix-blend-overlay">
                <svg className="w-full h-full">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
                        <feComponentTransfer>
                            {/* Increase contrast of noise */}
                            <feFuncA type="linear" slope="0.5" />
                        </feComponentTransfer>
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>

            {/* Animated Grid/Dot Pattern (Parallaxed) */}
            <motion.div
                className="absolute inset-0 z-[1] opacity-[0.06]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    x: mousePosition.x * -20, // Inverse mouse movement
                    y: mousePosition.y * -20
                }}
            />

            {/* --- 2. Main Layout Grid --- */}
            <div className="relative z-10 w-full h-full container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* --- Left Column: Typography & Content --- */}
                <div className="lg:col-span-7 flex flex-col justify-center h-full pt-20">

                    {/* Headline Group */}
                    <div className="relative mb-8">
                        <div className="overflow-hidden">
                            <motion.h2
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 0.8 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                                className="text-xl md:text-2xl font-light tracking-[0.2em] text-neutral-400 mb-2 pl-1"
                            >
                                LET&apos;S TALK
                            </motion.h2>
                        </div>
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "110%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                                className="text-8xl md:text-[9rem] leading-[0.85] font-bold tracking-tighter mix-blend-exclusion"
                            >
                                CONTACT
                            </motion.h1>
                        </div>
                    </div>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        className="text-lg md:text-xl text-neutral-500 max-w-xl font-light leading-relaxed mb-12 pl-1"
                    >
                        Ready to build something extraordinary? We collaborate with ambitious brands to define the future of digital interaction.
                    </motion.p>

                    {/* Primary CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="pl-1"
                    >
                        <button className="group relative px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10 flex items-center gap-4">
                            <span className="text-sm font-medium tracking-widest uppercase text-neutral-200 group-hover:text-white transition-colors">
                                Start a Conversation
                            </span>
                            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />

                            {/* Button Glow Effect */}
                            <div className="absolute inset-0 rounded-full ring-1 ring-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </button>
                    </motion.div>

                </div>

                {/* --- Right Column: Floating Orbital Visuals --- */}
                <div className="lg:col-span-5 relative h-[400px] lg:h-full w-full flex items-center justify-center lg:block pointer-events-none mt-8 lg:mt-0">
                    {/* The "Orbital" Container */}
                    <div className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full max-w-[320px] lg:w-[600px] aspect-square lg:h-[600px]">

                        {/* CARD 1: Large Abstract Glass (Back Layer) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                x: mousePosition.x * -15, // Parallax
                                y: mousePosition.y * -15
                            }}
                            className="absolute top-0 right-0 lg:top-10 lg:right-10 w-48 h-64 lg:w-80 lg:h-96 bg-neutral-900/40 backdrop-blur-2xl border border-white/5 rounded-2xl shadow-2xl z-10 overflow-hidden"
                        >
                            {/* Inner Gradient Blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/20 blur-[80px] rounded-full" />
                            {/* Idle Animation Wrapper */}
                            <motion.div
                                animate={{ y: [0, -20, 0], rotateZ: [0, 1, 0] }}
                                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                                className="w-full h-full p-6 flex flex-col justify-between"
                            >
                                <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5" />
                                <div className="space-y-3">
                                    <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                                    <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                                </div>
                            </motion.div>
                        </motion.div>


                        {/* CARD 2: Dark Focal Card (Front Layer) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                x: mousePosition.x * 20,
                                y: mousePosition.y * 20
                            }}
                            className="absolute bottom-4 left-4 lg:bottom-20 lg:left-10 w-56 h-64 lg:w-72 lg:h-80 bg-[#0F0F0F] border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 overflow-hidden group pointer-events-auto"
                        >
                            {/* Hover Interaction: Scale & Glow */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="w-full h-full relative p-6 lg:p-8 flex flex-col items-center justify-center transition-all duration-500 border border-transparent hover:border-white/20"
                            >
                                {/* Abstract Circle Graphic */}
                                <div className="relative w-24 h-24 lg:w-32 lg:h-32 mb-4 lg:mb-6">
                                    <div className="absolute inset-0 border border-dashed border-neutral-700 rounded-full animate-[spin_30s_linear_infinite]" />
                                    <div className="absolute inset-2 border border-neutral-800 rounded-full" />
                                    <div className="absolute inset-[30%] bg-neutral-800 rounded-full" />
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] lg:text-xs uppercase tracking-widest text-neutral-500 mb-2">Status</div>
                                    <div className="flex items-center gap-2 text-green-400 text-xs lg:text-sm font-medium">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        Online Now
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>


                        {/* CARD 3: Small Accent Card (Middle Layer) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: -30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                x: mousePosition.x * -10,
                                y: mousePosition.y * -10
                            }}
                            className="absolute top-1/2 right-0 w-32 h-20 lg:w-48 lg:h-32 bg-neutral-800/60 backdrop-blur-md border border-white/5 rounded-lg shadow-xl z-15 hidden sm:block"
                        >
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="w-full h-full p-4"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-red-500" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-1 w-full bg-white/10 rounded-full" />
                                    <div className="h-1 w-3/4 bg-white/10 rounded-full" />
                                    <div className="h-1 w-1/2 bg-white/10 rounded-full" />
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}


