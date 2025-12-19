import CinematicHero from "@/components/CinematicHero";

export default function ImmersivePage() {
    return (
        <main className="w-full min-h-screen bg-black">
            <CinematicHero />
            <div className="h-screen w-full flex items-center justify-center bg-zinc-900 border-t border-zinc-800 z-50 relative">
                <h2 className="text-4xl text-zinc-500">Scroll End Content</h2>
            </div>
        </main>
    );
}
