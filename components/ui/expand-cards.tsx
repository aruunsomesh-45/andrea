"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const cards = [
    { type: "video", src: "/card-1.mp4", id: 1, title: "Immersive Web Design", intent: "Captivate visitors with award-winning aesthetics." },
    { type: "video", src: "/card-2.mp4", id: 2, title: "3D Product Showcase", intent: "Drive sales with interactive product demos." },
    { type: "video", src: "/card-3.mp4", id: 3, title: "Motion Branding", intent: "Unforgettable brand identity in motion." },
    { type: "video", src: "/card-4.mp4", id: 4, title: "Interactive Storytelling", intent: "Engage users deeper with narrative flows." },
    { type: "video", src: "/card-5.mp4", id: 5, title: "High-Performance UI", intent: "Speed and smooth interaction for retention." },
];

const VideoCard = ({ src, isExpanded, isInView }: { src: string; isExpanded: boolean; isInView: boolean }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Handle Play/Pause based on Viewport Visibility to save resources
        if (isInView) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // console.log("Autoplay blocked");
                });
            }
        } else {
            video.pause();
        }

        // Handle Audio Logic: Only play sound if Expanded AND In View
        if (isExpanded && isInView) {
            video.muted = false;
            video.volume = 0.6;
        } else {
            video.muted = true;
        }
    }, [isExpanded, isInView]);

    return (
        <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={src}
            muted={true} // Start muted
            loop
            playsInline
            preload="auto"
        />
    );
};

const ExpandOnHover = () => {
    const [expandedIndex, setExpandedIndex] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Consider "in view" when at least 40% of the section is visible
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="w-full py-24 bg-black overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black opacity-50 z-0" />

            <div className="relative z-10 container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm">
                        Our Work
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mt-2">
                        Features Designed to Perform
                    </h2>
                </div>

                {/* Responsive Stack: Column on Mobile, Row on Desktop */}
                <div className="flex flex-col md:flex-row h-[800px] md:h-[450px] w-full items-center justify-center gap-4 max-w-6xl mx-auto">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className={`relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-full md:w-auto ${idx === expandedIndex ? "flex-[5] h-[250px] md:h-full" : "flex-[1] h-[80px] md:h-full"
                                }`}
                            onMouseEnter={() => setExpandedIndex(idx)}
                            onClick={() => setExpandedIndex(idx)}
                        >
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                            />
                            {card.type === "video" ? (
                                <VideoCard
                                    src={card.src}
                                    isExpanded={expandedIndex === idx}
                                    isInView={isInView}
                                />
                            ) : (
                                <img
                                    src={card.src}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    alt={card.title}
                                />
                            )}

                            {/* Dark Overlay for non-expanded items */}
                            <div
                                className={`absolute inset-0 bg-black/60 transition-opacity duration-500 pointer-events-none ${idx === expandedIndex ? "opacity-0" : "opacity-100"
                                    }`}
                            />

                            {/* Info & Sound Indicator */}
                            <div
                                className={`absolute bottom-4 left-4 right-4 text-white transition-all duration-500 delay-100 ${idx === expandedIndex
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                                    }`}
                            >
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col gap-1 items-start">
                                            <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium uppercase tracking-wider flex items-center gap-2">
                                                {card.title}
                                            </div>
                                            {/* Intent Statement */}
                                            <p className="text-white text-lg font-bold leading-tight px-1 drop-shadow-md mb-2">
                                                {card.intent}
                                            </p>
                                            <a href="/projects" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-blue-400 hover:text-white transition-colors group/cta px-1">
                                                View Case Study <ArrowRight size={12} className="group-hover/cta:translate-x-1 transition-transform" />
                                            </a>
                                        </div>

                                        {/* Audio Indicator (Video Only) */}
                                        {idx === expandedIndex && card.type === "video" && (
                                            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10 shrink-0">
                                                <div className="flex items-end gap-[2px] h-3">
                                                    <span className="w-[2px] h-1.5 bg-green-400 rounded-full animate-[music-bar_0.6s_ease-in-out_infinite]" />
                                                    <span className="w-[2px] h-3 bg-green-400 rounded-full animate-[music-bar_0.8s_ease-in-out_infinite]" />
                                                    <span className="w-[2px] h-2 bg-green-400 rounded-full animate-[music-bar_0.5s_ease-in-out_infinite]" />
                                                </div>
                                                <span className="text-[10px] uppercase font-bold text-green-400">Audio On</span>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Animation for Music Bars */}
            <style jsx>{`
                @keyframes music-bar {
                    0%, 100% { height: 40%; opacity: 0.8; }
                    50% { height: 100%; opacity: 1; }
                }
            `}</style>
        </section>
    );
};

export default ExpandOnHover;
