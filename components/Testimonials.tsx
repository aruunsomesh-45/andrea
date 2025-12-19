"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Andrea delivered our website fast and perfectly. The attention to detail was impressive, and the final result exceeded our expectations.",
        author: "Sarah Johnson",
        role: "Marketing Director, TechStart"
    },
    {
        quote: "Clean, modern design with great animations. Great communication throughout the process. Highly recommend for any frontend work.",
        author: "David Chen",
        role: "Founder, StudioFlow"
    },
    {
        quote: "Transformed our old site into a high-converting landing page. The speed optimization alone was worth the investment.",
        author: "Emily Davis",
        role: "CEO, GrowthLabs"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm">Testimonials</span>
                    <h2 className="text-fluid-h2 font-bold font-heading text-white mt-2">
                        What clients say about me.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-sm flex flex-col hover:border-blue-500/50 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                        >
                            <Quote className="text-blue-500/30 mb-6" size={40} />
                            <p className="text-fluid-body text-neutral-300 leading-relaxed mb-6 italic flex-1">
                                &quot;{item.quote}&quot;
                            </p>
                            <div>
                                <h4 className="font-bold text-white">{item.author}</h4>
                                <p className="text-sm text-neutral-500">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
