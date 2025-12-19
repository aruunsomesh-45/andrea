"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedMarqueeHeroProps {
    tagline: string;
    title: React.ReactNode;
    description: string;
    ctaText: string;
    images: string[];
    className?: string;
    onCtaClick?: () => void;
}

const ActionButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="mt-8 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-orbitron tracking-wider"
    >
        {children}
    </motion.button>
);

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
    tagline,
    title,
    description,
    ctaText,
    images,
    className,
    onCtaClick,
}) => {
    const FADE_IN_ANIMATION_VARIANTS: Variants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    };

    const duplicatedImages = [...images, ...images];

    return (
        <section
            className={cn(
                "relative w-full h-[120vh] overflow-hidden bg-black flex flex-col items-center justify-center text-center px-4 py-20",
                className
            )}
        >
            <div className="z-10 flex flex-col items-center relative -top-20">
                {/* Tagline */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={FADE_IN_ANIMATION_VARIANTS}
                    className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm tracking-widest uppercase font-mono"
                >
                    {tagline}
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-widest text-white uppercase font-michroma"
                >
                    {typeof title === 'string' ? (
                        title.split(" ").map((word, i) => (
                            <motion.span
                                key={i}
                                variants={FADE_IN_ANIMATION_VARIANTS}
                                className="inline-block mx-2"
                            >
                                {word}
                            </motion.span>
                        ))
                    ) : (
                        title
                    )}
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial="hidden"
                    animate="show"
                    variants={FADE_IN_ANIMATION_VARIANTS}
                    transition={{ delay: 0.5 }}
                    className="mt-8 max-w-2xl text-lg md:text-xl text-neutral-400 font-light leading-relaxed"
                >
                    {description}
                </motion.p>

                {/* Call to Action Button */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={FADE_IN_ANIMATION_VARIANTS}
                    transition={{ delay: 0.6 }}
                >
                    <ActionButton onClick={onCtaClick}>{ctaText}</ActionButton>
                </motion.div>
            </div>

            {/* Animated Image Marquee */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 md:h-[45vh] pointer-events-none select-none [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
                <motion.div
                    className="flex gap-6 pl-6"
                    animate={{
                        x: ["-50%", "0%"],
                        transition: {
                            ease: "linear",
                            duration: 40,
                            repeat: Infinity,
                        },
                    }}
                >
                    {duplicatedImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative aspect-[3/4] h-64 md:h-96 flex-shrink-0"
                            style={{
                                rotate: `${(index % 2 === 0 ? -3 : 3)}deg`,
                                transformOrigin: "center bottom"
                            }}
                        >
                            <img
                                src={src}
                                alt={`Showcase image ${index + 1}`}
                                className="w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10 opacity-80"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-0" />
        </section>
    );
};
