"use client";

import React from "react";
import {
    Monitor,
    Palette,
    Smartphone,
    RefreshCw,
    Rocket,
    Gauge,
    Puzzle,
    Sparkles,
    ShoppingCart,
    User,
    Bot,
    Clapperboard,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ServiceItem {
    icon: any;
    title: string;
    whatItIs: string;
    howItHelps: string[];
    bestFor: string;
}

const services: ServiceItem[] = [
    {
        icon: Monitor,
        title: "Web Development",
        whatItIs: "We build high-performance websites that don’t just look good—they act as your best 24/7 salesperson. From fast-loading landing pages to scalable web apps, we ensure your tech stack drives growth.",
        howItHelps: [
            "Blazing fast 95+ PageSpeed",
            "SEO-ready architecture",
            "Secure & scalable code",
        ],
        bestFor: "Get a Custom Build"
    },
    {
        icon: Palette,
        title: "UI / UX Design",
        whatItIs: "Stop losing customers to confusing layouts. We design intuitive, high-converting interfaces that guide your visitors effortlessly toward the 'Buy' button.",
        howItHelps: [
            "Increase retention",
            "Boost conversion rates",
            "Brand-aligned aesthetics",
        ],
        bestFor: "Redesign My UI"
    },
    {
        icon: Smartphone,
        title: "Mobile Optimization",
        whatItIs: "Over 60% of traffic is mobile. We ensure your site works flawlessly on every device, preventing lost sales from poor responsive design.",
        howItHelps: [
            "Capture mobile leads",
            "Better Google ranking",
            "Seamless user experience",
        ],
        bestFor: "Fix Mobile View"
    },
    {
        icon: RefreshCw,
        title: "Website Redesign",
        whatItIs: "Is your website outdated? We transform legacy sites into modern, high-trust platforms that reflect the true quality of your brand.",
        howItHelps: [
            "Modernize brand image",
            "Improve trust caused by design",
            "Fix technical debt",
        ],
        bestFor: "Upgrade My Site"
    },
    {
        icon: Rocket,
        title: "Landing Pages",
        whatItIs: "Launch campaigns with confidence. We build dedicated landing pages laser-focused on one goal: turning ad traffic into paying customers.",
        howItHelps: [
            "Maximize ad ROI",
            "A/B test ready",
            "Clear call-to-actions",
        ],
        bestFor: "Build a Funnel"
    },
    {
        icon: Gauge,
        title: "Performance SEO",
        whatItIs: "Get found by the people searching for you. We implement technical SEO and speed optimizations that Google loves.",
        howItHelps: [
            "Higher organic traffic",
            "Faster load times",
            "Better indexing",
        ],
        bestFor: "Boost Rankings"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-mono tracking-wider uppercase"
                    >
                        Value Proposition
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-fluid-h2 font-black text-white mb-6 uppercase tracking-tight font-heading"
                    >
                        Solutions that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Scale</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-fluid-body text-neutral-400 leading-relaxed"
                    >
                        We don’t just build "websites". We build client-generating assets. Here is how we help you win.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {services.slice(0, 3).map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="relative h-full"
                        >
                            <div className="relative h-full rounded-3xl p-[1px] overflow-hidden group">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                />
                                <div className="relative h-full bg-neutral-900/90 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-start border border-white/5 transition-colors group-hover:bg-neutral-900/80">

                                    {/* Header */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5 text-blue-400 group-hover:text-white group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-500">
                                            <service.icon size={26} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white font-heading">{service.title}</h3>
                                    </div>

                                    {/* Description */}
                                    <div className="mb-6">
                                        <p className="text-neutral-300 text-sm leading-relaxed">
                                            {service.whatItIs}
                                        </p>
                                    </div>

                                    {/* Outcomes */}
                                    <div className="mb-8 flex-grow">
                                        <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Outcomes</h4>
                                        <ul className="space-y-2">
                                            {service.howItHelps.map((help, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-500/50 mt-0.5 flex-shrink-0" />
                                                    <span>{help}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Mini CTA */}
                                    <div className="mt-auto w-full pt-6 border-t border-white/5">
                                        <a href="/start-project" className="flex items-center justify-between w-full text-sm font-medium text-blue-400 hover:text-white transition-colors group/link">
                                            <span>{service.bestFor}</span>
                                            <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
