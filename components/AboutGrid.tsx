"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mic, Zap, Terminal, Share2, Activity, GitBranch, Shield, Globe, Database, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutGrid() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-800 text-green-400 text-xs font-medium mb-6 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Built for real impact
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Features built to <span className="text-neutral-500">perform</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1: AI-Powered Decision Engine */}
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-[32px] p-8 flex flex-col h-[500px] overflow-hidden group hover:border-neutral-700 transition-colors">
                        <div className="mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500">
                                <GitBranch size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">AI-Powered decision engine</h3>
                            <p className="text-neutral-400 text-sm">AI manages complex conditions and branches.</p>
                        </div>

                        {/* Flow Visual */}
                        <div className="flex-1 relative flex flex-col items-center justify-center">
                            {/* Connecting Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-neutral-800" style={{ strokeWidth: 2 }}>
                                <motion.path
                                    d="M150,80 L150,140 L80,140 L80,200"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                />
                                <motion.path
                                    d="M150,140 L220,140 L220,200"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                                />
                            </svg>

                            {/* Top Node */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="absolute top-10 p-3 bg-neutral-800 rounded-xl border border-neutral-700 shadow-xl z-10"
                            >
                                <Shield className="text-white" size={20} />
                            </motion.div>

                            {/* Branch Logic Node */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.8, type: "spring" }}
                                className="absolute top-[130px] px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-[10px] text-neutral-500 z-10"
                            >
                                IF / ELSE
                            </motion.div>

                            {/* Bottom Nodes */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className="absolute top-[200px] left-[60px] p-3 bg-neutral-800 rounded-xl border border-neutral-700 shadow-xl group-hover:border-blue-500/50 transition-colors"
                            >
                                <Database className="text-blue-400" size={20} />
                            </motion.div>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.4 }}
                                className="absolute top-[200px] right-[60px] p-3 bg-neutral-800 rounded-xl border border-neutral-700 shadow-xl group-hover:border-purple-500/50 transition-colors"
                            >
                                <Share2 className="text-purple-400" size={20} />
                            </motion.div>
                        </div>
                    </div>

                    {/* Card 2: Real-time monitoring */}
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-[32px] p-8 flex flex-col h-[500px] overflow-hidden group hover:border-neutral-700 transition-colors">
                        <div className="mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-4 text-purple-500">
                                <Activity size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Real-time monitoring</h3>
                            <p className="text-neutral-400 text-sm">Track performance with live dashboards.</p>
                        </div>

                        {/* Chart Visual */}
                        <div className="flex-1 flex items-end justify-between gap-3 px-2 pb-4">
                            {[35, 60, 45, 80, 50, 70, 40].map((h, i) => (
                                <div key={i} className="w-full relative group/bar h-full flex items-end">
                                    <motion.div
                                        initial={{ height: "0%" }}
                                        whileInView={{ height: `${h}%` }}
                                        animate={i % 2 !== 0 ? { height: [`${h}%`, `${h - 10}%`, `${h}%`] } : {}}
                                        transition={{
                                            duration: 1,
                                            ease: "easeOut",
                                            delay: i * 0.1,
                                            height: {
                                                repeat: i % 2 !== 0 ? Infinity : 0,
                                                repeatType: "reverse",
                                                duration: 2 + Math.random(),
                                                delay: 1 + i * 0.1
                                            }
                                        }}
                                        className={cn(
                                            "w-full rounded-t-md opacity-80 transition-all duration-300 relative",
                                            i % 2 === 0 ? "bg-neutral-800" : "bg-purple-600 group-hover/bar:bg-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                                        )}
                                    >
                                        {/* Tooltip for active bars */}
                                        {i % 2 !== 0 && (
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                                                {h}%
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 3: Connect with 5K+ apps */}
                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-[32px] p-8 flex flex-col h-[500px] overflow-hidden group hover:border-neutral-700 transition-colors">
                        <div className="mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Connect with apps</h3>
                            <p className="text-neutral-400 text-sm">Integrate seamlessly with your favorite tools.</p>
                        </div>

                        {/* Integrations Visual */}
                        <div className="flex-1 relative">
                            {/* Grid of Icons */}
                            <div className="grid grid-cols-2 gap-4 absolute inset-0 content-center opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="bg-neutral-800/50 p-4 rounded-2xl flex items-center justify-center border border-white/5"><Mic size={24} className="text-red-400" /></div>
                                <div className="bg-neutral-800/50 p-4 rounded-2xl flex items-center justify-center border border-white/5"><Zap size={24} className="text-yellow-400" /></div>
                                <div className="bg-neutral-800/50 p-4 rounded-2xl flex items-center justify-center border border-white/5"><Terminal size={24} className="text-green-400" /></div>
                                <div className="bg-neutral-800/50 p-4 rounded-2xl flex items-center justify-center border border-white/5"><Cloud size={24} className="text-blue-400" /></div>
                            </div>

                            {/* Center Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
