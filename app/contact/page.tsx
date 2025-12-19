import Contact from "@/components/Contact";

import ContactVisualHero from "@/components/ContactVisualHero";
import Testimonials from "@/components/Testimonials";
import { MarketingBadges } from "@/components/ui/marketing-badges";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Andrea | Start Your Project",
    description: "Get in touch for web development, design services, and strategic digital partnerships.",
};

export default function ContactPage() {
    return (
        <div className="bg-black min-h-screen text-white">
            <ContactVisualHero />
            <Contact hideHero={true} />

            <section className="py-24 bg-neutral-900/10 border-t border-white/5 overflow-hidden">
                <div className="container mx-auto px-6 text-center mb-12">
                    <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm">Capabilities</span>
                    <h2 className="text-3xl font-bold font-heading text-white mt-2">What We Cover</h2>
                </div>
                <MarketingBadges />
            </section>

            <Testimonials />
        </div>
    );
}
