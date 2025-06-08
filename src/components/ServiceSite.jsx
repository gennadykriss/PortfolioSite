// src/components/ServiceSite.jsx
import logoWhite from "../assets/barbershop.png";

export default function ServiceSite() {
  const externalUrl = "https://barbershop-three-woad.vercel.app/";

  return (
    <section
      onClick={() => (window.location.href = externalUrl)}  // whole card is a link
      className="
        relative
        h-[85vh]
        bg-black
        cursor-pointer
      "
    >
      {/* 1) Corner‑pinned heading */}
      <div className="absolute top-8 left-8 z-10 max-w-sm">
        <h2 className="text-white text-2xl uppercase font-thin">Barbershop</h2>
        <p className="mt-2 text-white font-thin leading-relaxed">
          Being sharp never goes out of style.
        </p>
      </div>

      {/* 2) Centered logo (also links out) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <a href={externalUrl}>
          <img src={logoWhite} alt="Barbershop logo" className="h-46 w-46" />
        </a>
      </div>

      {/* 3) Invisible full‑cover anchor for keyboard users / SEO */}
      <a href={externalUrl} className="absolute inset-0 z-0" aria-label="Open Barbershop site" />
    </section>
  );
}
