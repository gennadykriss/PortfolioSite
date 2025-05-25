import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export default function SocialBar() {
  return (
    <div
      className="
        hidden md:flex flex-col fixed right-8 top-1/2
        transform -translate-y-1/2 space-y-6 z-50
      "
    >
      <a
        href="https://www.linkedin.com/in/gennady-kriss-063040277/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-black hover:text-gray-700 transition-colors duration-200"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:gennadykriss6@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-black hover:text-gray-700 transition-colors duration-200"
        aria-label="Instagram"
      >
        <FaEnvelope />
      </a>
      <a
        href="https://github.com/gennadykriss"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-black hover:text-gray-700 transition-colors duration-200"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
    </div>
  );
}
