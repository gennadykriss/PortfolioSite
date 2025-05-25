import { Link } from "react-router-dom"; 
import Logo from "../assets/logo.png";     

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center py-4 bg-transparent">
      <div className="flex items-center justify-between bg-[oklch(91.3%_0.002_0_/0.5)] rounded-full border border-gray-300 px-10 py-2 max-w-4xl h-11 w-full text-sm font-serif">
        
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-7 w-7" />
        </Link>
        
        
        {/* Navigation links */}
        <ul className="flex space-x-8 text-gray-700">
          <li>
            <Link to="/" className="hover:text-gray-900">Projects</Link>
          </li>
          <li>
            <Link to="/archive" className="hover:text-gray-900">Archive</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-900">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
