"use client";

import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-x-0 top-0 h-[80vh] bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] opacity-50 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10">
                <SignIn routing="hash" />
            </div>
        </div>
    );
}
