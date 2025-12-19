import ParallaxHero from "@/components/ParallaxHero";
import ExpandOnHover from "@/components/ui/expand-cards";
import Services from "@/components/Services";
import About from "@/components/About";

import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-black font-sans selection:bg-blue-500 selection:text-white min-h-screen text-white">
      <ParallaxHero />
      <Services />
      <ExpandOnHover />
      <About />

      <Contact />
    </div>
  );
}
