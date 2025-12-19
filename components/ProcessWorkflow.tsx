"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    MessageSquare,
    Calendar,
    PenTool,
    Palette,
    Code,
    Bug,
    Search,
    Rocket,
    ThumbsUp,
    LifeBuoy
} from "lucide-react";

interface Step {
    id: number;
    title: string;
    description: string;
    icon: any;
    color: string;
}

const steps: Step[] = [
    {
        id: 1,
        title: "Client Requirement Discussion",
        description: "Understand client needs and expectations",
        icon: MessageSquare,
        color: "#FACC15", // Yellow
    },
    {
        id: 2,
        title: "Planning",
        description: "Develop a project plan and timeline",
        icon: Calendar,
        color: "#FB923C", // Orange
    },
    {
        id: 3,
        title: "Wireframe / Prototype",
        description: "Create a basic structure and layout",
        icon: PenTool,
        color: "#F87171", // Red-Orange
    },
    {
        id: 4,
        title: "UI/UX Design",
        description: "Enhance the user interface and experience",
        icon: Palette,
        color: "#E879F9", // Pink
    },
    {
        id: 5,
        title: "Website Development",
        description: "Build the website based on the design",
        icon: Code,
        color: "#A78BFA", // Purple
    },
    {
        id: 6,
        title: "Testing & Debugging",
        description: "Identify and fix errors and issues",
        icon: Bug,
        color: "#818CF8", // Indigo
    },
    {
        id: 7,
        title: "Client Review & Revisions",
        description: "Gather client feedback and make changes",
        icon: Search,
        color: "#38BDF8", // Blue
    },
    {
        id: 8,
        title: "Deployment",
        description: "Launch the website on a live server",
        icon: Rocket,
        color: "#34D399", // Emerald
    },
    {
        id: 9,
        title: "Client Feedback",
        description: "Collect client feedback after launch",
        icon: ThumbsUp,
        color: "#A3E635", // Lime
    },
    {
        id: 10,
        title: "Maintenance & Support",
        description: "Provide ongoing support and updates",
        icon: LifeBuoy,
        color: "#9CA3AF", // Gray
    },
];

export function ProcessWorkflow() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    // Calculate position for each step in a circle
    const radius = 280; // Radius of the circle
    const totalSteps = steps.length;

    // Function to get coordinates
    const getPos = (index: number, offsetRadius: number = 0) => {
        const angle = (index * (360 / totalSteps) - 90) * (Math.PI / 180);
        const r = radius + offsetRadius;
        return {
            x: r * Math.cos(angle),
            y: r * Math.sin(angle),
            rotate: index * (360 / totalSteps)
        };
    };

    return (
        <div className="relative w-full min-h-[900px] flex items-center justify-center bg-black overflow-hidden py-24">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

            <div className="relative w-[800px] h-[800px] flex items-center justify-center hidden md:flex">
                {/* Center Title */}
                <div className="absolute z-20 text-center max-w-xs px-4">
                    <h3 className="text-3xl font-bold text-white font-michroma mb-2">AI</h3>
                    <div className="text-xl text-neutral-400 font-light mb-3">Workflow</div>
                    <p className="text-[10px] uppercase tracking-widest text-blue-500 font-semibold leading-relaxed">
                        Autonomous agents syncing <br />
                        to accelerate delivery.
                    </p>
                </div>

                {/* Connecting Arrows (Circular Path) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 animate-spin-slow" style={{ animationDuration: '60s' }}>
                    <circle
                        cx="400"
                        cy="400"
                        r={radius}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray="10 10"
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Steps */}
                {steps.map((step, index) => {
                    const pos = getPos(index);
                    const isHovered = hoveredStep === step.id;

                    return (
                        <motion.div
                            key={step.id}
                            className="absolute flex flex-col items-center justify-center w-48 text-center"
                            style={{
                                left: `calc(50% + ${pos.x}px)`,
                                top: `calc(50% + ${pos.y}px)`,
                                x: "-50%",
                                y: "-50%",
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            onMouseEnter={() => setHoveredStep(step.id)}
                            onMouseLeave={() => setHoveredStep(null)}
                        >
                            {/* Icon Circle */}
                            <div
                                className={cn(
                                    "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 shadow-lg border relative z-10 cursor-pointer",
                                    isHovered ? "scale-125" : "scale-100"
                                )}
                                style={{
                                    backgroundColor: isHovered ? step.color : 'rgba(23, 23, 23, 0.8)',
                                    borderColor: step.color,
                                    color: isHovered ? '#000' : step.color,
                                    boxShadow: isHovered ? `0 0 30px ${step.color}60` : 'none'
                                }}
                            >
                                <step.icon size={24} />
                            </div>

                            {/* Lines connecting to center */}
                            {/* <div 
                                className="absolute top-1/2 left-1/2 w-full h-[1px] bg-white/5 -z-10 origin-left"
                                style={{ 
                                    width: radius,
                                    transform: `rotate(${pos.rotate + 180}deg)`,
                                }} 
                            /> */}

                            {/* Text Content */}
                            <div className={cn(
                                "transition-all duration-300 transform",
                                isHovered ? "opacity-100 scale-105" : "opacity-70 scale-100"
                            )}>
                                <h4
                                    className="font-bold text-sm mb-1"
                                    style={{ color: step.color }}
                                >
                                    {step.title}
                                </h4>
                                <p className="text-xs text-neutral-400 max-w-[160px] mx-auto hidden lg:block">
                                    {step.description}
                                </p>
                            </div>

                            {/* Curved Arrow to next step */}
                            <svg
                                className="absolute pointer-events-none"
                                width="100"
                                height="100"
                                style={{
                                    transform: `rotate(${pos.rotate + 100}deg) translate(80px, 0px)`,
                                    opacity: 0.3
                                }}
                            >
                                <path
                                    d="M10,50 Q50,20 90,50"
                                    fill="none"
                                    stroke={step.color}
                                    strokeWidth="2"
                                    markerEnd="url(#arrowhead)"
                                />
                            </svg>
                        </motion.div>
                    );
                })}
            </div>

            {/* Mobile Vertical View */}
            <div className="md:hidden flex flex-col gap-12 w-full max-w-sm relative z-10 px-6">
                {/* Connection Line */}
                <div className="absolute left-[43px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0" />

                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-6 relative"
                    >
                        <div
                            className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg border relative z-10 bg-neutral-900"
                            style={{
                                borderColor: step.color,
                                color: step.color,
                                boxShadow: `0 0 15px ${step.color}30`
                            }}
                        >
                            <step.icon size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-lg mb-1" style={{ color: step.color }}>{step.title}</h4>
                            <p className="text-sm text-neutral-400">{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}
