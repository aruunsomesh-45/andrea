"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const projects = [
    {
        title: "Modern Business Landing Page",
        desc: "Built a clean and responsive business landing page using React + Tailwind.",
        tools: ["React", "Tailwind", "GSAP"],
        color: "from-blue-500 to-cyan-500",
        link: "https://fitness-studio-nine.vercel.app",
        github: "#"
    },
    {
        title: "E-commerce Dashboard UI",
        desc: "A comprehensive dashboard for managing sales, inventory, and analytics.",
        tools: ["Next.js", "Recharts", "Framer Motion"],
        color: "from-purple-500 to-pink-500",
        link: "#",
        github: "#"
    },
    {
        title: "Creative Portfolio Template",
        desc: "A minimal and grid-based portfolio template for photographers.",
        tools: ["HTML/CSS", "JavaScript", "Locomotive Scroll"],
        color: "from-orange-400 to-red-500",
        link: "#",
        github: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm">Portfolio</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mt-2">
                            Featured Projects
                        </h2>
                    </div>
                    <a href="#" className="hidden md:inline-flex items-center text-blue-400 font-medium hover:underline gap-1">
                        View all projects <ExternalLink size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative h-full"
                        >
                            <div className="relative h-full rounded-2xl p-[1px] overflow-hidden group transition-all duration-500 hover:-translate-y-2">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                />
                                <div className="relative h-full rounded-2xl overflow-hidden bg-neutral-900/90 backdrop-blur-xl flex flex-col border border-white/5">
                                    {/* Thumbnail Placeholder */}
                                    <div className={`h-48 w-full bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                                        <span className="text-white/80 font-medium text-lg tracking-widest uppercase">Project Preview</span>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tools.map(tool => (
                                                <span key={tool} className="text-xs font-medium px-2.5 py-1 bg-neutral-800 text-neutral-300 rounded-full">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">
                                            {project.desc}
                                        </p>

                                        <div className="flex items-center gap-4 mt-auto">
                                            <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                                                <ExternalLink size={16} /> Live Demo
                                            </a>
                                            <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-white transition-colors">
                                                <Github size={16} /> Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12 md:hidden">
                    <a href="#" className="inline-flex items-center text-blue-400 font-medium hover:underline gap-1">
                        View all projects <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
