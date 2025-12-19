"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const WORLDS = [
    {
        title: "STRATEGY",
        img: "https://images.unsplash.com/photo-1480044965905-02098d419e96?q=80&w=2070&auto=format&fit=crop",
        id: 1,
    },
    {
        title: "DESIGN",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        id: 2,
    },
    {
        title: "DEVELOPMENT",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        id: 3,
    },
];

export default function CinematicHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgWrapperRef = useRef<HTMLDivElement>(null);
    const textWrapperRef = useRef<HTMLDivElement>(null);
    const microParallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const totalPanels = WORLDS.length;

            // 1. Pin the main container
            // We will pin the container and animate the contents
            // The scroll distance is based on (panels - 1) * viewport width
            const scrollDist = window.innerWidth * (totalPanels - 1);

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    start: "top top",
                    end: `+=${scrollDist}`,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

            // 2. Background Wrapper Logic: Translate whole worlds
            // We move -100% * (N-1).
            // Since wrapper is Flex row of 100vw panels, width is 300vw.
            // To show 3rd panel, we move -200vw.
            // "xPercent: -100 * (totalPanels - 1)" works if xPercent refers to "viewport width" chunks or if we calculate precisely.
            // Easiest is using x: -scrollDist
            timeline.to(
                bgWrapperRef.current,
                {
                    x: -scrollDist,
                    ease: "none",
                },
                0
            );

            // 3. Text Parallax
            // "xPercent: -50 * (totalPanels - 1)"
            // This implies moving slower.
            // If backgrounds move -200vw, Text should move -100vw (slower).
            // This means text will "drift" relative to the background.
            timeline.to(
                textWrapperRef.current,
                {
                    x: -(scrollDist * 0.5),
                    ease: "none",
                },
                0
            );

            // 4. Background Micro-Parallax
            // "xPercent: -10 * (totalPanels - 1)"
            // These are the images INSIDE the panels moving slightly.
            microParallaxRefs.current.forEach((ref) => {
                if (!ref) return;
                gsap.fromTo(
                    ref,
                    { x: 0 },
                    {
                        x: -window.innerWidth * 0.1 * (totalPanels - 1), // approx 10% movement
                        ease: "none",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top top",
                            end: `+=${scrollDist}`,
                            scrub: 1,
                        },
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden bg-black text-white"
        >
            {/* LAYER 1: Background Worlds */}
            <div
                ref={bgWrapperRef}
                className="flex w-[300vw] h-full will-change-transform"
            >
                {WORLDS.map((world, i) => (
                    <div
                        key={`world-${world.id}`}
                        className="w-screen h-full flex-shrink-0 relative overflow-hidden"
                    >
                        {/* Cinematic Background Image with Micro-Parallax */}
                        <div
                            ref={(el) => {
                                microParallaxRefs.current[i] = el;
                            }}
                            className="absolute inset-0 w-[110%] h-full -left-[5%]" // slightly larger for parallax
                        >
                            <Image
                                src={world.img}
                                alt={world.title}
                                fill
                                className="object-cover opacity-60"
                                priority={i === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
                        </div>
                    </div>
                ))}
            </div>

            {/* LAYER 2: Text Overlay (Parallax) */}
            <div
                ref={textWrapperRef}
                className="absolute top-0 left-0 flex w-[300vw] h-full pointer-events-none z-10 will-change-transform"
            >
                {WORLDS.map((world) => (
                    <div
                        key={`text-${world.id}`}
                        className="w-screen h-full flex-shrink-0 flex items-center justify-center"
                    >
                        <h1 className="text-[10vw] md:text-[14rem] font-black tracking-tighter text-white/10 select-none uppercase font-sans drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] blur-[1px] text-center">
                            {world.title}
                        </h1>
                    </div>
                ))}
            </div>

            {/* LAYER 3: Fixed Character */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none w-[80vw] h-[80vh] md:w-[45vw] md:h-[85vh]">
                {/* Placeholder Character */}
                <Image
                    src="/hero-mask.png"
                    alt="Character"
                    fill
                    className="object-contain drop-shadow-2xl brightness-110 contrast-125"
                    priority
                />
            </div>

            {/* Overlay Grade/Grain & Vignette (Premium Polish) */}
            <div className="fixed inset-0 pointer-events-none z-[40]">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
            </div>
        </div>
    );
}
