"use client";

import React from "react";
import About from "@/components/About";
import { AboutGrid } from "@/components/AboutGrid";

export default function AboutPage() {
    return (
        <div className="bg-black text-white pt-24">
            {/* New Grid Section */}
            <AboutGrid />

            {/* Continuing with the standard About section */}
            <About />
        </div>
    );
}
