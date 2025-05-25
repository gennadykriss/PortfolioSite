// src/components/ServiceSite.jsx
import { useNavigate, Link } from "react-router-dom";
import logoWhite from "../assets/microsoft.png";

export default function ServiceSite() {
  const navigate = useNavigate();

  return (
    <section
      onClick={() => navigate("/projects")}
      className="
        relative                  
        h-[85vh]                  
        bg-black                
        cursor-pointer            
      "
    >
      {/** 1) Corner‐pinned, thin‐font text **/}
      <div className="absolute top-8 left-8 z-10 max-w-sm">
        <h2 className="text-white text-2xl uppercase font-thin">
          SERVICE SITE
        </h2>
        <p className="mt-2 text-white font-thin leading-relaxed">
          Product making and distribution + Services
        </p>
      </div>

      {/** 2) Centered logo **/}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Link to="/projects">
          <img
            src={logoWhite}
            alt="Microsoft logo"
            className="h-16 w-16"
          />
        </Link>
      </div>
      <Link to="/projects" className="absolute inset-0 z-0" />
    </section>
  );
}
