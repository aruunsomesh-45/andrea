import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
            <h1 className="text-9xl font-black text-neutral-800 font-heading">404</h1>
            <h2 className="text-4xl font-bold mb-4 font-heading">Page Not Found</h2>
            <p className="text-neutral-400 text-lg mb-8 max-w-md text-center">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                href="/"
                className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors rounded-full"
            >
                Go Home
            </Link>
        </div>
    );
}
