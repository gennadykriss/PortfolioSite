import ecommerce from "../assets/e-commerce.png";

export default function Ecommerce() {
  const externalUrl = "https://e-commerce-tau-rose-47.vercel.app/";

  return (
    <section
      onClick={() => window.location.href = externalUrl}
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
        <a href={externalUrl}>
          <img
            src={ecommerce}
            alt="E-Commerce logo"
            className="h-full w-auto object-contain"
          />
        </a>
      </div>
    </section>
  );
}
