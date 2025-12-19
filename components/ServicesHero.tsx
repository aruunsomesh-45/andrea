"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Palette, Download, MonitorPlay } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const carouselImages = [
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop", // Cyberpunk helmet
    "https://images.unsplash.com/photo-1535378437327-1e54911c7ce2?q=80&w=2103&auto=format&fit=crop", // Glitch portrait
    "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop", // Abstract shapes
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop", // Futuristic liquid
    "https://images.unsplash.com/photo-1614728853913-1e220377484d?q=80&w=2070&auto=format&fit=crop", // Neon city
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop", // Tech interface
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // Retro tech
];

export default function ServicesHero() {
    const [activeIndex, setActiveIndex] = useState(3); // Center image initially

    return (
        <section className="relative min-h-screen py-32 bg-black text-white overflow-hidden flex flex-col justify-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Header Content */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 font-michroma leading-tight"
                    >
                        Create <span className="text-neutral-500">Stunning</span> Images <br />
                        with <span className="relative inline-block">
                            Just a Prompt
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-neutral-400 text-lg mb-8"
                    >
                        Turn your ideas into high-quality visuals in seconds. <br />
                        No design skills needed.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <button className="group relative inline-flex items-center gap-2 px-8 py-3 bg-neutral-900 border border-neutral-800 rounded-full hover:border-green-500/50 transition-all shadow-[0_0_0_0_rgba(34,197,94,0)] hover:shadow-[0_0_20px_0_rgba(34,197,94,0.3)]">
                            <span className="font-medium">Generate image</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </motion.div>
                </div>

                {/* 3D Carousel */}
                <div className="relative h-[400px] w-full flex items-center justify-center mb-24" style={{ perspective: '1000px' }}>
                    <div className="relative w-full max-w-5xl h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>                        {carouselImages.map((src, index) => {
                        // Calculate position relative to center
                        const offset = index - activeIndex;
                        const isActive = index === activeIndex;

                        // Simple interaction: click to make active
                        return (
                            <motion.div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`absolute w-[200px] md:w-[260px] aspect-[3/4] rounded-2xl border border-white/10 overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-2xl ${isActive ? 'z-20 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.2)]' : 'z-10 hover:border-white/30'}`}
                                initial={false}
                                animate={{
                                    translateX: offset * 180, // Horizontal spacing
                                    translateZ: Math.abs(offset) * -150, // Push side items back
                                    rotateY: offset * -25, // Rotate towards center
                                    opacity: 1 - Math.abs(offset) * 0.15, // Fade distant items
                                    scale: isActive ? 1.1 : 1,
                                }}
                                whileHover={isActive ? { scale: 1.15 } : { y: -10 }}
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 200px, 260px"
                                />
                                {/* Overlay for inactive items */}
                                {!isActive && <div className="absolute inset-0 bg-black/60 pointer-events-none" />}
                            </motion.div>
                        );
                    })}
                    </div>

                    {/* Navigation Hints */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
                        {carouselImages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? "bg-green-500" : "bg-neutral-800"}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto px-4">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="text-center p-6 rounded-2xl bg-neutral-900/50 border border-white/5"
                    >
                        <div className="w-12 h-12 mx-auto bg-neutral-800 rounded-xl flex items-center justify-center text-white mb-4">
                            <Zap size={24} className="text-yellow-400" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">Lightning-Fast Generation</h3>
                        <p className="text-sm text-neutral-400">Type what you imagine, hit enter, and watch AI bring it to life in moments.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="text-center p-6 rounded-2xl bg-neutral-900/50 border border-white/5"
                    >
                        <div className="w-12 h-12 mx-auto bg-neutral-800 rounded-xl flex items-center justify-center text-white mb-4">
                            <Palette size={24} className="text-purple-400" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">Multiple Styles & Customization</h3>
                        <p className="text-sm text-neutral-400">Pick a style and fine-tune details like color, lighting, and mood.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="text-center p-6 rounded-2xl bg-neutral-900/50 border border-white/5"
                    >
                        <div className="w-12 h-12 mx-auto bg-neutral-800 rounded-xl flex items-center justify-center text-white mb-4">
                            <Download size={24} className="text-blue-400" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">High-Resolution Downloads</h3>
                        <p className="text-sm text-neutral-400">Export your creations in high-quality resolution for print, web, or social media.</p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
