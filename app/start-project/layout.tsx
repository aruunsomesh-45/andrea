import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Start Your Project | Andrea",
    description: "Fill out our project planner to get a custom quote for your new website or application.",
};

export default function StartProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
