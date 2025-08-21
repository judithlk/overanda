import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 shadow-md z-50 font-[montserrat]">
      <div className="flex justify-between items-center py-2 px-5">
        {/* Logo */}
        <div>
          <Image
            src="/fullLogoNav.png"
            alt="Over & A full logo"
            width={180}
            height={80}
            priority
          />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-7 items-center text-[#1c151e] text-[1rem] font-[500]">
          <a href="#hero" className="hover:text-purple-mid transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-purple-mid transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-purple-mid transition-colors">
            Services
          </a>
          <a href="#gallery" className="hover:text-purple-mid transition-colors">
            Gallery
          </a>
          <a href="#contact" className="hover:text-purple-mid transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
