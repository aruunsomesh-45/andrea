import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Features & Capabilities | Andrea",
    description: "Explore the advanced features, technical capabilities, and AI-driven solutions we build for modern digital products.",
};

export default function FeaturesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
