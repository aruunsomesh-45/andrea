"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { Brain, Zap, Code, Rocket, Palette, Monitor, Smartphone, RefreshCw } from "lucide-react";

/**
 * ParallaxHero Component
 * 
 * A specialized hero section implementing smooth, GPU-accelerated parallax effects
 * using a dedicated requestAnimationFrame loop and data-speed attributes.
 * 
 * Features:
 * - Independent layer speeds via `data-speed`
 * - Mobile performance optimization (reduced motion)
 * - Integration with Lenis (reads window.scrollY directly)
 * - Premium cinematic aesthetic
 */
export default function ParallaxHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const trigger = triggerRef.current;
        if (!section || !trigger) return;

        // Entrance Animation
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(".hero-text-reveal",
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, delay: 0.5 }
        )
            .fromTo(".hero-visual-scale",
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
                "-=1"
            )
            .fromTo(".hero-fade-in",
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 1, stagger: 0.1 },
                "-=1"
            );

        const elements = section.querySelectorAll<HTMLElement>('[data-speed]');
        let rafId: number;
        let scrollY = 0;

        // Mobile check to reduce intensity or disable
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        function animate() {
            scrollY = window.scrollY;

            // Optimization: Only animate if the section is roughly in or near the viewport
            // (Simplistic check: if scroll is less than 2x window height)
            if (scrollY <= window.innerHeight * 2) {
                elements.forEach((el) => {
                    const speed = parseFloat(el.getAttribute("data-speed") || "0");

                    // Reduce parallax effect on mobile for better UX/Performance
                    const finalSpeed = isMobile ? speed * 0.5 : speed;

                    // Invert direction if needed, typical parallax moves slower than scroll or opposite
                    // Here: positive data-speed moves element DOWN (slower than scroll if < 1, faster/down if > 0)
                    // Common parallax bg technique: y = scrollY * speed
                    const yPos = scrollY * finalSpeed;

                    // Apply translate3d for GPU acceleration
                    el.style.transform = `translate3d(0, ${yPos}px, 0)`;
                });
            }

            rafId = requestAnimationFrame(animate);
        }

        // Start Loop
        animate();

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[120vh] overflow-hidden bg-black text-white"
            aria-label="Parallax Hero Section"
        >
            <div ref={triggerRef} className="absolute inset-0 w-full h-full pointer-events-none" />

            {/* 
              BACKGROUND LAYER 
              data-speed="0.5": Moves at half scroll speed, creating depth behind static content.
            */}
            <div
                className="absolute inset-0 w-full h-[130%] -top-[15%] z-0 will-change-transform"
                data-speed="0.4"
            >
                <div className="relative w-full h-full">
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-10" />

                    {/* Replace with your video or image */}
                    <video
                        className="w-full h-full object-cover"
                        src="/hero-main.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/hero-poster.png"
                    />
                </div>
            </div>

            {/* 
              FLOATING DECORATIVE ELEMENTS 
              Different speeds create a 3D feeling.
            */}
            {/* Element 1: Slow floater (Background shape) */}
            <div
                className="absolute top-[20%] left-[10%] w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] z-10 will-change-transform mix-blend-screen"
                data-speed="0.2"
            />

            {/* Element 2: Faster floater (Foreground accent) */}
            <div
                className="absolute bottom-[30%] right-[15%] w-32 h-32 md:w-48 md:h-48 bg-amber-500/10 rounded-full blur-[80px] z-20 will-change-transform mix-blend-screen overflow-visible"
                data-speed="0.6"
            />

            {/* Mobile-Only Floating Key Elements to fill void */}
            <div className="md:hidden absolute top-[15%] right-[10%] opacity-20 animate-pulse delay-700" data-speed="0.3">
                <Zap size={48} className="text-amber-400" />
            </div>
            <div className="md:hidden absolute bottom-[20%] left-[5%] opacity-20 animate-bounce duration-[3000ms]" data-speed="0.2">
                <Code size={40} className="text-purple-400" />
            </div>
            <div className="md:hidden absolute top-[40%] left-[80%] opacity-10" data-speed="0.5">
                <Brain size={64} className="text-blue-400" />
            </div>

            {/* 
              MAIN CONTENT GRID 
              Layout aligned to 3 columns (Left-Center-Right) as per reference image.
              Each column has data-speed to maintain the requested parallax effects.
            */}
            {/* 
              MAIN CONTENT - CENTERED SINGLE COLUMN
              All content stacked vertically and centered as requested.
            */}
            <div className="relative z-30 w-full h-full max-w-[1000px] mx-auto flex flex-col items-center justify-center text-center px-6 md:px-12 pointer-events-none">

                <div className="flex flex-col items-center pointer-events-auto will-change-transform space-y-8" data-speed="0.1">

                    {/* Badge */}
                    <span className="hero-text-reveal inline-block py-1 px-3 border border-white/20 w-fit rounded-full bg-white/5 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-amber-300 font-orbitron">
                        Results Driven Design
                    </span>

                    {/* Main Title */}
                    {/* Main Title */}
                    <h1 className="hero-text-reveal text-fluid-h1 font-black tracking-tight leading-[1.1] uppercase text-white drop-shadow-2xl font-sans mb-6">
                        Scalable Digital Products That{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                            Drive Growth
                        </span>
                    </h1>

                    {/* Subtitle / Value Prop */}
                    <p className="hero-text-reveal text-fluid-body font-mono text-neutral-400 tracking-wide uppercase mb-8 max-w-2xl mx-auto">
                        We design and build future-ready websites, apps, and AI solutions that help you stand out and sell more.
                    </p>

                    {/* CTA Button */}
                    {/* CTA Button */}
                    <div className="hero-fade-in pt-2 w-full">
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
                            <Link href="/start-project">
                                <button className="h-12 px-8 bg-white/90 backdrop-blur-md border border-white/20 text-black font-bold uppercase tracking-wider text-xs hover:bg-white transition-all rounded-full font-sans flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                                    Start a Project
                                </button>
                            </Link>
                            <Link href="/projects">
                                <button className="h-12 px-8 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold uppercase tracking-wider text-xs hover:bg-white/20 hover:border-white/30 transition-all rounded-full font-sans flex items-center justify-center shadow-lg">
                                    View Work
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Services Indicators from Service Page */}
                    <div className="hero-fade-in pt-12 flex flex-wrap justify-center gap-3 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000 fill-mode-forwards">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                            <Monitor size={14} className="text-blue-400" />
                            <span className="text-xs font-medium text-white/90">Web Development</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                            <Palette size={14} className="text-purple-400" />
                            <span className="text-xs font-medium text-white/90">UI / UX Design</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                            <Smartphone size={14} className="text-green-400" />
                            <span className="text-xs font-medium text-white/90">Mobile First</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                            <RefreshCw size={14} className="text-amber-400" />
                            <span className="text-xs font-medium text-white/90">Redesigns</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* 
               FOREGROUND LAYER
               data-speed="-0.2": Negative speed to move AGAINST scroll (upwards faster), 
            */}
            <div
                className="relative md:absolute mt-12 md:mt-0 bottom-auto md:bottom-20 md:left-20 z-40 block will-change-transform mx-auto md:mx-0 w-fit"
                data-speed="-0.15"
            >
                <div className="p-6 bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl max-w-xs mx-auto text-left">
                    <h3 className="text-white font-bold text-lg mb-1">About Us</h3>
                    <p className="text-sm text-neutral-400">
                        3+ Years Experience in building digital products.
                    </p>
                </div>
            </div>

        </section>
    );
}
