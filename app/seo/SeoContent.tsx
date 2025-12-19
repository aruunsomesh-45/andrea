'use client';

import Link from 'next/link';
import { ArrowRight, Globe, Zap, Search, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SeoContent() {
    return (
        <div className="bg-black text-white min-h-screen pt-32 pb-20">
            {/* 1. HERO SECTION */}
            <section className="container mx-auto px-6 mb-32 relative">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-float" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }} />

                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 mb-6 border border-white/10 rounded-full text-[10px] font-mono tracking-[0.2em] uppercase text-blue-400 bg-blue-900/10 backdrop-blur-md">
                            Search Engine Optimization
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black font-heading mb-8 leading-tight">
                            DOMINATE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                                SEARCH RESULTS
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Stop being invisible. We build data-driven SEO strategies that put your brand in front of the right audience at the right time.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact#contact"
                                className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm rounded hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                            >
                                Get Free Audit <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="#process"
                                className="px-8 py-4 border border-white/20 backdrop-blur-md text-white font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-colors"
                            >
                                How It Works
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. KEY BENEFITS (Grid) */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Globe className="w-8 h-8 text-blue-400" />,
                            title: "Global Visibility",
                            desc: "Rank for high-value keywords that actually drive qualified traffic to your site."
                        },
                        {
                            icon: <TrendingUp className="w-8 h-8 text-green-400" />,
                            title: "Sustainable Growth",
                            desc: "Unlike ads, SEO provides long-term organic traffic that compounds over time."
                        },
                        {
                            icon: <Zap className="w-8 h-8 text-yellow-400" />,
                            title: "Technical Excellence",
                            desc: "We optimize site speed, mobile usability, and structure for maximum crawlability."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-neutral-900/50 border border-white/5 rounded-2xl hover:border-white/10 transition-all hover:-translate-y-1"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block">{item.icon}</div>
                            <h3 className="text-xl font-bold font-heading mb-3">{item.title}</h3>
                            <p className="text-neutral-400 leading-relaxed text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. OUR PROCESS */}
            <section id="process" className="container mx-auto px-6 mb-32">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-black font-heading mb-6 uppercase">
                            The Roadmap <br /> To <span className="text-blue-500">Rank #1</span>
                        </h2>
                        <p className="text-neutral-400 mb-8 leading-relaxed">
                            SEO isn't magic; it's engineering. We use a proven 4-step framework to analyze, optimize, and scale your search presence.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "01. Deep Audit", text: "We analyze over 200+ on-site and off-site factors to find opportunities." },
                                { title: "02. Strategy", text: "We build a keyword roadmap targeting high-intent (money) search terms." },
                                { title: "03. Optimization", text: "We fix technical errors, speed up your site, and optimize content." },
                                { title: "04. Authority", text: "We build high-quality backlinks to signal trust to search engines." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="min-w-[40px] pt-1 text-sm font-mono text-blue-500 font-bold group-hover:text-white transition-colors">
                                        {step.title.split('.')[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                            {step.title.split('. ')[1]}
                                        </h4>
                                        <p className="text-sm text-neutral-500">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:w-1/2 relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Abstract Visual Representation of SEO/Growth */}
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-8">
                                <div className="p-6 bg-neutral-900 border border-white/10 rounded-2xl hover:bg-neutral-800 transition-colors">
                                    <div className="text-4xl font-bold text-white mb-1">+145%</div>
                                    <div className="text-xs text-neutral-500 uppercase tracking-wider">Organic Traffic</div>
                                </div>
                                <div className="p-6 bg-blue-900/20 border border-blue-500/20 rounded-2xl">
                                    <div className="text-4xl font-bold text-blue-400 mb-1">Top 3</div>
                                    <div className="text-xs text-blue-300/70 uppercase tracking-wider">Keyword Rankings</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="p-6 bg-neutral-900 border border-white/10 rounded-2xl hover:bg-neutral-800 transition-colors">
                                    <div className="text-4xl font-bold text-emerald-400 mb-1">3.5x</div>
                                    <div className="text-xs text-neutral-500 uppercase tracking-wider">ROI vs Ads</div>
                                </div>
                                <div className="p-6 bg-neutral-900 border border-white/10 rounded-2xl hover:bg-neutral-800 transition-colors">
                                    <div className="text-4xl font-bold text-white mb-1">24/7</div>
                                    <div className="text-xs text-neutral-500 uppercase tracking-wider">Lead Generation</div>
                                </div>
                            </div>
                        </div>
                        {/* Glow effect behind cards */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[100px] -z-10 rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* 4. PRICING / CONTACT CTA */}
            <section className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/10 transition-colors duration-700" />

                    <h2 className="text-3xl md:text-5xl font-black font-heading mb-6 relative z-10">
                        Ready to Rank Higher?
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto mb-10 relative z-10">
                        Every day you wait is a day your competitors steal your customers. Let's build a strategy to take back your market share.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                        <Link
                            href="/contact#contact"
                            className="px-10 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm rounded hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
