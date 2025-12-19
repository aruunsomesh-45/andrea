"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const WORLDS = [
    {
        title: "CONNECT",
        img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop",
        id: 1,
    },
    {
        title: "COLLABORATE",
        img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop",
        id: 2,
    },
    {
        title: "CREATE",
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
        id: 3,
    },
];

export default function ContactCinematicHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgWrapperRef = useRef<HTMLDivElement>(null);
    const textWrapperRef = useRef<HTMLDivElement>(null);
    const microParallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const totalPanels = WORLDS.length;

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

            timeline.to(
                bgWrapperRef.current,
                {
                    x: -scrollDist,
                    ease: "none",
                },
                0
            );

            timeline.to(
                textWrapperRef.current,
                {
                    x: -(scrollDist * 0.5),
                    ease: "none",
                },
                0
            );

            microParallaxRefs.current.forEach((ref) => {
                if (!ref) return;
                gsap.fromTo(
                    ref,
                    { x: 0 },
                    {
                        x: -window.innerWidth * 0.1 * (totalPanels - 1),
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
            <div
                ref={bgWrapperRef}
                className="flex w-[300vw] h-full will-change-transform"
            >
                {WORLDS.map((world, i) => (
                    <div
                        key={`world-${world.id}`}
                        className="w-screen h-full flex-shrink-0 relative overflow-hidden"
                    >
                        <div
                            ref={(el) => {
                                microParallaxRefs.current[i] = el;
                            }}
                            className="absolute inset-0 w-[110%] h-full -left-[5%]"
                        >
                            <Image
                                src={world.img}
                                alt={world.title}
                                fill
                                className="object-cover opacity-50"
                                priority={i === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
                        </div>
                    </div>
                ))}
            </div>

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

            <div className="fixed inset-0 pointer-events-none z-[40]">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
            </div>
        </div>
    );
}
