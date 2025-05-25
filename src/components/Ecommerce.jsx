import { useNavigate, Link } from "react-router-dom";
import ecommerce from "../assets/e-commerce.png";

export default function Ecommerce() {
  const navigate = useNavigate();

  return (
    <section
      onClick={() => navigate("/projects")}
      className="
        relative                  
        h-[85vh]                  
        bg-[#edeee8] 
        overflow-hidden               
        cursor-pointer            
      "
    >
      {/** 1) Corner‐pinned, thin‐font text **/}
      <div className="absolute top-8 left-8 z-10 max-w-sm">
        <h2 className="text-black text-2xl uppercase font-thin">
          E-COMMERCE
        </h2>
        <p className="mt-2 text-black font-thin leading-relaxed">
          Redefining the User Online Shopping Experience
        </p>
      </div>

      {/** 2) Centered logo **/}
      <div className="relative z-0 flex items-start justify-center h-full">
        <Link to="/projects">
          <img
            src={ecommerce}
            alt="E-Commerce logo"
            className="h-full w-auto object-contain"
          />
        </Link>
      </div>

      <Link to="/projects" className="absolute inset-0 z-0" />
    </section>
  );
}

