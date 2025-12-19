"use client";

import ProjectForm from "@/components/ProjectForm";
import { motion } from "framer-motion";

export default function StartProjectPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <div className="container mx-auto px-4 py-32">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16 space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black font-michroma uppercase"
                        >
                            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Project</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto"
                        >
                            Tell me about your vision. I&apos;ll help you build a high-performance, stunning digital experience.
                        </motion.p>
                    </div>

                    <ProjectForm />

                </div>
            </div>
        </div>
    );
}
