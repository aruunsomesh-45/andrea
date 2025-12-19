"use client";


export default function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Statement */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider font-heading">ANDREA</h3>
                        <p className="text-neutral-400 leading-relaxed mb-6">
                            Helping ambitious brands build scalable digital products that drive real business growth.
                        </p>
                        <a href="/contact#contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-bold uppercase tracking-wider text-sm rounded hover:bg-neutral-200 transition-colors">
                            Contact Us
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
                        <ul className="space-y-3">
                            <li><a href="/" className="text-neutral-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors">Services</a></li>
                            <li><a href="/projects" className="text-neutral-400 hover:text-white transition-colors">Our Work</a></li>
                            <li><a href="#about" className="text-neutral-400 hover:text-white transition-colors">About</a></li>
                            <li><a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors">Web Development</a></li>
                            <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors">UI / UX Design</a></li>
                            <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors">Mobile Optimization</a></li>
                            <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors">Website Redesign</a></li>
                            <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors">Landing Pages</a></li>
                            <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors">Performance SEO</a></li>
                        </ul>
                    </div>

                    {/* Contact & Socials */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Get in Touch</h4>
                        <ul className="space-y-3 mb-6">
                            <li className="text-neutral-400">zokuai7@gmail.com</li>
                            <li className="text-neutral-400">+1 (234) 567-890</li>
                        </ul>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">X</div>
                            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">In</div>
                            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">Ig</div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-neutral-500 text-sm">
                    <p>© {new Date().getFullYear()} Andrea. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Built with Next.js, Tailwind CSS & Love.</p>
                </div>
            </div>
        </footer>
    );
}
