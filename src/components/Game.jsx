// src/components/Game.jsx
import gameImage from "../assets/game.png";

export default function Game() {
  const externalUrl = "https://neuromatch-beta.vercel.app/";

  return (
    <section
      onClick={() => (window.location.href = externalUrl)}
      className="
        relative               
        h-[85vh]               
        bg-cover bg-center     
        cursor-pointer
      "
      style={{ backgroundImage: `url(${gameImage})` }}
    >
      <div className="absolute inset-0 bg-black/30" />

      {/* Corner-pinned, thin-font text */}
      <div className="absolute top-8 left-8 z-10 max-w-sm">
        <h2 className="text-white text-2xl uppercase font-thin">NeuroMatch</h2>
        <p className="mt-2 text-white font-thin leading-relaxed">
          Memory Matching Game
        </p>
      </div>

      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-0"
        />
    </section>
  );
}
