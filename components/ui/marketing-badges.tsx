"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface Badge {
    id: string
    label: string
    color: string
    size: "sm" | "md" | "lg"
    rotation: number
    zIndex: number
    offsetX: number
    offsetY: number
}

const badges: Badge[] = [
    {
        id: "marketing",
        label: "Marketing",
        color: "from-amber-300 to-yellow-400",
        size: "lg",
        rotation: -3,
        zIndex: 1,
        offsetX: -20,
        offsetY: -60,
    },
    {
        id: "seo",
        label: "SEO",
        color: "from-orange-400 to-orange-500",
        size: "sm",
        rotation: 2,
        zIndex: 2,
        offsetX: 60,
        offsetY: -35,
    },
    {
        id: "social-media",
        label: "Social Media",
        color: "from-amber-400 to-yellow-500",
        size: "lg",
        rotation: -2,
        zIndex: 3,
        offsetX: -30,
        offsetY: -15,
    },
    {
        id: "email-marketing",
        label: "Email Marketing",
        color: "from-pink-300 to-pink-400",
        size: "lg",
        rotation: 0,
        zIndex: 4,
        offsetX: 0,
        offsetY: 25,
    },
    {
        id: "conversions",
        label: "Conversions",
        color: "from-blue-400 to-blue-500",
        size: "md",
        rotation: 3,
        zIndex: 5,
        offsetX: -15,
        offsetY: 65,
    },
    {
        id: "ads",
        label: "Ads",
        color: "from-sky-300 to-sky-400",
        size: "sm",
        rotation: -1,
        zIndex: 6,
        offsetX: 50,
        offsetY: 90,
    },
]

const sizeClasses = {
    sm: "px-6 py-2.5 text-base",
    md: "px-8 py-3 text-lg",
    lg: "px-10 py-3.5 text-xl",
}

export function MarketingBadges() {
    const [hoveredId, setHoveredId] = useState<string | null>(null)
    const [clickedId, setClickedId] = useState<string | null>(null)

    const handleClick = (id: string) => {
        setClickedId(clickedId === id ? null : id)
    }

    return (
        <div className="relative flex h-[400px] w-full items-center justify-center">
            {badges.map((badge, index) => {
                const isHovered = hoveredId === badge.id
                const isClicked = clickedId === badge.id
                const isOtherHovered = hoveredId !== null && hoveredId !== badge.id

                return (
                    <motion.div
                        key={badge.id}
                        initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                        whileInView={{
                            opacity: 1,
                            scale: isClicked ? 1.15 : isHovered ? 1.08 : isOtherHovered ? 0.95 : 1,
                            x: badge.offsetX,
                            y: badge.offsetY + (isHovered ? -8 : 0),
                            rotate: isHovered ? 0 : badge.rotation
                        }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: index * 0.1
                        }}
                        className={cn(
                            "absolute cursor-pointer select-none rounded-full font-semibold",
                            "bg-gradient-to-b shadow-lg",
                            badge.color,
                            sizeClasses[badge.size],
                        )}
                        style={{
                            zIndex: isHovered || isClicked ? 100 : badge.zIndex,
                            boxShadow: isHovered
                                ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 12px 24px -8px rgba(0, 0, 0, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.3)"
                                : isClicked
                                    ? "0 30px 60px -15px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.4)"
                                    : "0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 4px 10px -2px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.2)",
                        }}
                        onMouseEnter={() => setHoveredId(badge.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => handleClick(badge.id)}
                    >
                        <span
                            className={cn(
                                "relative block transition-transform duration-300",
                                "text-slate-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]",
                            )}
                            style={{
                                transform: isHovered ? "translateY(-1px)" : "translateY(0)",
                            }}
                        >
                            {badge.label}
                        </span>
                        {/* Inner highlight effect */}
                        <div
                            className="pointer-events-none absolute inset-0 rounded-full opacity-50"
                            style={{
                                background: "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%)",
                            }}
                        />
                    </motion.div>
                )
            })}
        </div>
    )
}
