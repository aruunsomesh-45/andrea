"use client";

import { ArrowRight, CheckCircle2, Code2, Zap, Layout, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import SimpleProcess from "@/components/SimpleProcess";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";

const strengths = [
    { icon: Zap, label: "Fast Delivery", desc: "Optimized for speed and performance." },
    { icon: Code2, label: "Clean Code", desc: "Maintainable, scalable, and modern syntax." },
    { icon: Layout, label: "Responsive", desc: "Looks perfect on mobile, tablet, and desktop." },
    { icon: Sparkles, label: "Interactive", desc: "Smooth animations and engaging UI." },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-black relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-600 font-semibold tracking-wide uppercase text-sm"
                        >
                            Why Choose Us
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-fluid-h2 font-bold font-heading text-white mt-2 mb-6 leading-tight"
                        >
                            Your Strategic Digital Partner Use Design to Win.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-fluid-body text-neutral-400 leading-relaxed mb-6"
                        >
                            We specialize in solving complex digital problems for ambitious brands.
                            Our approach combines technical precision with aesthetic excellence to build products that scale, perform, and drive real revenue.
                        </motion.p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="relative rounded-xl p-[1px] overflow-hidden group">
                                <GlowingEffect
                                    spread={20}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                />
                                <div className="relative p-4 bg-neutral-900 rounded-xl border border-neutral-800">
                                    <h4 className="text-3xl font-bold text-blue-500 font-heading">3+</h4>
                                    <p className="text-neutral-400 font-medium">Years Experience</p>
                                </div>
                            </div>
                            <div className="relative rounded-xl p-[1px] overflow-hidden group">
                                <GlowingEffect
                                    spread={20}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                />
                                <div className="relative p-4 bg-neutral-900 rounded-xl border border-neutral-800">
                                    <h4 className="text-3xl font-bold text-blue-500 font-heading">20+</h4>
                                    <p className="text-neutral-400 font-medium">Projects Done</p>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-3"
                        >
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                                <p className="text-neutral-300">Enterprise-grade Tech Stack (Next.js & Supabase)</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                                <p className="text-neutral-300">High-Performance Motion Design & Interactions</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Video / Image Placeholder (as per 'keep the photo and video as reffrance') 
                        Since I can&apos;t embed the local video easily without moving it, I&apos;ll place a placeholder 
                        that suggests the video content. 
                     */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                            <Image
                                src="/about-showcase.png"
                                alt="Strategic Digital Partner Workflow"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Workflow Section */}
            <div className="w-full bg-neutral-900/30 border-t border-white/5 backdrop-blur-sm">
                <SimpleProcess />
            </div>


        </section >
    );
}
