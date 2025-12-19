import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services & Solutions | Andrea",
    description: "Professional web development, UX/UI design, and strategic consulting services tailored for growth.",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
