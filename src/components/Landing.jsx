// src/components/Landing.jsx
import { useState, useEffect } from "react";
import Landing3D from "./Landing3D";

import SocialBar from "./SocialBar";

export default function Landing() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const fadeHeight = window.innerHeight * 0.5;       
      const next = Math.max(0, 1 - scrollY / fadeHeight);
      setOpacity(next);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="landing"
      style={{ opacity }}
      className="
        relative
        bg-[oklch(92.3%_0.003_48.717)]
        transition-opacity   /* smooths the change */
      "
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        {/* Left: 3D canvas */}
        <div className="md:col-span-2">
          <Landing3D />
        </div>

        {/* Right: text */}
        <div className="text-gray-800 space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Gennady Kriss
          </h1>
          <p className="text-lg md:text-xl">
            Software Designer  
            <br />
            UX + Human–AI Interaction
          </p>
        </div>
      </div>

      <div className="hidden md:flex flex-col fixed right-8 top-1/2 transform -translate-y-1/2 space-y-6">
        <SocialBar />
      </div>
    </section>
  );
}
