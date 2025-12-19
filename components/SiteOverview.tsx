"use client";

import Link from "next/link";
import { ArrowRight, Code, User, Rocket, MessageSquare, Briefcase, Zap } from "lucide-react";

const pages = [
    {
        title: "Services",
        description: "Expert web development, design, and digital solutions tailored to your needs.",
        href: "/services",
        icon: <Code className="w-6 h-6" />,
        color: "group-hover:text-blue-400",
        bgHover: "group-hover:border-blue-500/50 group-hover:bg-blue-500/5"
    },
    {
        title: "Projects",
        description: "Explore our portfolio of award-winning websites and applications.",
        href: "/projects",
        icon: <Briefcase className="w-6 h-6" />,
        color: "group-hover:text-purple-400",
        bgHover: "group-hover:border-purple-500/50 group-hover:bg-purple-500/5"
    },
    {
        title: "About Us",
        description: "Learn about the team, vision, and technology driving Andrea forward.",
        href: "/about",
        icon: <User className="w-6 h-6" />,
        color: "group-hover:text-amber-400",
        bgHover: "group-hover:border-amber-500/50 group-hover:bg-amber-500/5"
    },
    {
        title: "Testimonials",
        description: "Hear from our satisfied clients and partners about their experience.",
        href: "/testimonials",
        icon: <MessageSquare className="w-6 h-6" />,
        color: "group-hover:text-green-400",
        bgHover: "group-hover:border-green-500/50 group-hover:bg-green-500/5"
    },
    {
        title: "Immersive",
        description: "Experience the next level of web interactivity and 3D web design.",
        href: "/immersive",
        icon: <Zap className="w-6 h-6" />,
        color: "group-hover:text-cyan-400",
        bgHover: "group-hover:border-cyan-500/50 group-hover:bg-cyan-500/5"
    },
    {
        title: "Start Project",
        description: "Ready to begin? Tell us about your idea and let's craft something unique.",
        href: "/start-project",
        icon: <Rocket className="w-6 h-6" />,
        color: "group-hover:text-red-400",
        bgHover: "group-hover:border-red-500/50 group-hover:bg-red-500/5"
    },
];

export default function SiteOverview() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm">Navigation</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mt-4 mb-4">
                        Explore Andrea
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Everything you need to know about what we do, how we do it, and what we&apos;ve done.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pages.map((page, index) => (
                        <Link
                            key={index}
                            href={page.href}
                            className={`group relative p-8 rounded-2xl border border-white/10 bg-neutral-900/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${page.bgHover}`}
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-lg bg-white/5 text-white transition-colors duration-300 ${page.color}`}>
                                        {page.icon}
                                    </div>
                                    <ArrowRight className={`w-5 h-5 text-neutral-500 transition-all duration-300 group-hover:text-white group-hover:translate-x-1`} />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 font-heading">{page.title}</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors mb-auto">
                                    {page.description}
                                </p>

                                <div className="mt-8 flex justify-center">
                                    <span className="px-6 py-2 bg-transparent border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all duration-300 transform group-hover:scale-105">
                                        Explore
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
