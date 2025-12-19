"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, LayoutDashboard, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useUser();

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
    };

    return (
        <nav className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/5 transition-all duration-300">
            <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto py-4 md:py-6 px-6 md:px-12">
                {/* Logo Section */}
                <div className="text-xl md:text-2xl font-black tracking-tighter text-slate-200 font-heading uppercase z-50 flex-shrink-0">
                    <Link href="/" onClick={() => setIsOpen(false)}>ANDREA</Link>
                </div>

                {/* Desktop Links - Centered with Flexbox */}
                <div className="hidden md:flex flex-1 justify-center items-center space-x-6 lg:space-x-10">
                    {["Home", "Features", "Services", "Projects"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                            className="relative text-xs lg:text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-white transition-colors duration-300 group whitespace-nowrap"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/contact#contact"
                        className="text-xs lg:text-sm font-medium uppercase tracking-widest text-white transition-colors hover:text-blue-400 whitespace-nowrap"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Right Brand / Auth (Desktop) & Mobile Toggle */}
                <div className="flex items-center gap-4 z-50 flex-shrink-0">
                    {/* Desktop Auth */}
                    <div className="hidden md:flex items-center">
                        <SignedIn>
                            {user?.primaryEmailAddress?.emailAddress === 'zokuai7@gmail.com' && (
                                <Link
                                    href="/admin"
                                    className="flex items-center gap-2 text-xs lg:text-sm font-medium uppercase tracking-widest transition-colors text-blue-400 hover:text-blue-300 mr-4"
                                    title="Go to Dashboard"
                                >
                                    <LayoutDashboard size={16} />
                                    <span className="hidden lg:inline">Dashboard</span>
                                </Link>
                            )}
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button className="text-slate-500 hover:text-white transition-colors p-2" aria-label="Sign In">
                                    <LogIn size={20} />
                                </button>
                            </SignInButton>
                        </SignedOut>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                        <button onClick={toggleMenu} aria-label="Toggle Menu" className="focus:outline-none text-white p-1">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

            </div>

            {/* Mobile Menu - Push Content Down */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                            hidden: { height: 0, opacity: 0 },
                            visible: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
                            exit: { height: 0, opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } }
                        }}
                        className="bg-black/50 border-t border-white/5 overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {["Home", "Features", "Services", "Projects", "Testimonials", "Contact"].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                                    onClick={toggleMenu}
                                    className="text-lg font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}

                            <div className="w-12 h-px bg-white/10 my-2" />

                            <div className="w-12 h-px bg-white/10 my-2" />

                            <SignedIn>
                                {user?.primaryEmailAddress?.emailAddress === 'zokuai7@gmail.com' && (
                                    <Link
                                        href="/admin"
                                        onClick={toggleMenu}
                                        className="text-base font-bold uppercase tracking-widest flex items-center gap-2 text-blue-400"
                                    >
                                        <LayoutDashboard size={18} /> Dashboard
                                    </Link>
                                )}
                            </SignedIn>
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <button onClick={toggleMenu} className="text-base font-bold uppercase tracking-widest flex items-center gap-2 text-slate-500">
                                        Admin Login
                                    </button>
                                </SignInButton>
                            </SignedOut>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
