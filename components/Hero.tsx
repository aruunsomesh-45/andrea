"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, MoveDown } from "lucide-react";
import Link from "next/link";



gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const layer1Ref = useRef<HTMLDivElement>(null);
    const layer2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        const ctx = gsap.context(() => {

            // Initial Entry Animation
            gsap.from(textRef.current, {
                opacity: 0,
                y: 50,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.2
            });

            mm.add("(min-width: 768px)", () => {
                // ... (rest of desktop logic)
                // Desktop Parallax (Full Strength)
                gsap.to(bgRef.current, {
                    yPercent: 30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });

                gsap.to(textRef.current, {
                    y: 150,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });

                gsap.to(layer1Ref.current, {
                    y: -200,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });

                gsap.to(layer2Ref.current, {
                    y: -400,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            });

            mm.add("(max-width: 767px)", () => {
                // Mobile Parallax (Reduced Strength)
                gsap.to(bgRef.current, {
                    yPercent: 10, // Subtle
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });

                // Text stays mostly static or subtle fade
                gsap.to(textRef.current, {
                    y: 50,
                    opacity: 0.8,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            });

        }, containerRef);

        return () => {
            ctx.revert();
            mm.revert();
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[120vh] overflow-hidden bg-black text-white"
            aria-label="Cinematic Hero Section"
        >
            {/* BACKGROUND LAYER (Speed 0.1 equivalent) */}
            <div ref={bgRef} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 will-change-transform">
                <video
                    src="/hero-main.mp4"
                    poster="/hero-poster.png"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
            </div>

            {/* FLOATING TEXT ELEMENTS (Headline + Subheadline) */}
            <div ref={textRef} className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 will-change-transform">
                <div className="overflow-hidden mb-4">
                    <h2 className="text-amber-400/80 font-mono tracking-[0.2em] uppercase text-sm md:text-base">
                        Premium Digital Experiences
                    </h2>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase mb-6 relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-600 drop-shadow-xl inline-block">
                        ANDREA
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-400 to-amber-600">
                        BUILDER
                    </span>
                </h1>

                <p className="max-w-xl text-neutral-400 text-lg md:text-xl font-light tracking-wide leading-relaxed mb-10 drop-shadow-md">
                    Crafting immersive web identities with <span className="text-white font-medium">motion</span>, <span className="text-white font-medium">depth</span>, and <span className="text-white font-medium">precision</span>.
                </p>

                <div className="flex gap-6">
                    <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-neutral-200 transition-colors">
                        View Projects
                    </button>
                    <Link href="/contact#contact" className="px-8 py-4 border border-white/20 backdrop-blur-md text-white font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
                        Contact Us <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            {/* FOREGROUND LAYERS (Parallax elements) */}
            {/* Layer 1: Abstract shapes or decorative elements (Speed 0.25) */}
            <div
                ref={layer1Ref}
                className="absolute top-[20%] right-[10%] w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl z-0 pointer-events-none will-change-transform mix-blend-screen"
            />

            {/* Layer 2: Foreground detail (Speed 0.45) - e.g. a floating card or glass element */}
            <div
                ref={layer2Ref}
                className="absolute bottom-[10%] left-[5%] z-20 hidden md:block will-change-transform"
            >
                <div className="w-72 h-40 bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-lg p-6 flex flex-col justify-between shadow-2xl">
                    <div className="flex justify-between items-start">
                        <span className="text-amber-500 font-mono text-xs">01</span>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <div>
                        <span className="block text-white text-sm font-bold tracking-wide">LATEST WORK</span>
                        <span className="text-neutral-500 text-xs">Immersive 3D Portfolio</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 animate-bounce">
                <MoveDown size={24} />
            </div>

            {/* Overlay Gradient for smooth section transition */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    );
}
