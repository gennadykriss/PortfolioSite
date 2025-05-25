import { useNavigate, Link } from "react-router-dom";
import analytics from "../assets/analytics.png";

export default function Analytics() {
  const navigate = useNavigate();

  return (
    <section
      onClick={() => navigate("/projects")}
      className="
        relative               
        h-[85vh]               
        bg-cover bg-center     
        cursor-pointer
      "
      style={{ backgroundImage: `url(${analytics})` }}
    >
      <div className="absolute inset-0 bg-black/30" />

      {/* Corner-pinned, thin-font text */}
      <div className="absolute top-8 left-8 z-10 max-w-sm">
        <h2 className="text-white text-2xl uppercase font-thin">Analytics</h2>
        <p className="mt-2 text-white font-thin leading-relaxed">
          Orders + Revenue
        </p>
      </div>
      <Link to="/projects" className="absolute inset-0 z-0" />
    </section>
  );
}
