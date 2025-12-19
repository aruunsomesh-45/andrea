"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-neutral-900">


            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading"
                >
                    Our Story
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-neutral-200 max-w-2xl font-light"
                >
                    Crafting digital experiences that inspire and innovate.
                </motion.p>
            </div>
        </section>
    );
}
