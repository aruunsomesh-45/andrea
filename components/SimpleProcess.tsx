"use client";

import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Discovery & Strategy",
        desc: "We dive deep into your business goals, audience, and competitors to build a roadmap that guarantees results, not just pretty pixels."
    },
    {
        num: "02",
        title: "Design & User Experience",
        desc: "We craft high-fidelity designs focused on clarity, brand authority, and guiding user behavior toward conversion."
    },
    {
        num: "03",
        title: "Development & Optimization",
        desc: "Our code is clean, fast, and scalable. We build with modern tech stacks (Next.js, React) ensuring elite performance and SEO."
    },
    {
        num: "04",
        title: "Launch & Growth",
        desc: "We handle the deployment, testing, and handoff. Plus, we set you up with analytics to track your new growth engine."
    }
];

export default function SimpleProcess() {
    return (
        <section className="py-24 bg-neutral-950 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm">
                        How We Work
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mt-2">
                        A Simple, Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Process</span>
                    </h2>
                </div>

                <ol className="flex flex-col md:flex-row justify-between items-start gap-8 relative list-none" role="list">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[24px] left-0 w-full h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 z-0" />

                    {steps.map((step, idx) => (
                        <motion.li
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative z-10 w-full md:w-1/4 group"
                            aria-label={`Step ${step.num}: ${step.title}`}
                        >
                            {/* Number Circle */}
                            <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center text-blue-500 font-bold mb-6 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors mx-auto md:mx-0 shadow-lg shadow-black" aria-hidden="true">
                                {step.num}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 text-center md:text-left">{step.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed text-center md:text-left">
                                {step.desc}
                            </p>
                        </motion.li>
                    ))}
                </ol>            </div>
        </section>
    );
}
