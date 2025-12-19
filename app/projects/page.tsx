import Projects from "@/components/Projects";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies & Projects | Andrea",
    description: "Browse our portfolio of award-winning websites, applications, and digital experiences.",
};

export default function ProjectsPage() {
    return (
        <div className="bg-black pt-20 min-h-screen text-white">
            <Projects />
        </div>
    );
}
