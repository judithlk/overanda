"use client";
import { useState } from "react";
import Image from "next/image";

import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="hidden md:flex space-x-7 items-center text-dark-bg text-[1rem] font-[500]">
          <a href="#hero" className="hover:text-purple-mid transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-purple-mid transition-colors">
            About
          </a>
          <a
            href="#services"
            className="hover:text-purple-mid transition-colors"
          >
            Services
          </a>
          <a
            href="#gallery"
            className="hover:text-purple-mid transition-colors"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="hover:text-purple-mid transition-colors"
          >
            Contact
          </a>
        </div>
        <button
          className="group md:hidden text-2xl text-purple-deep"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiCloseFill className="fill-dark-bg group-hover:fill-purple-mid transition-colors" />
          ) : (
            <HiOutlineMenu className="fill-dark-bg group-hover:fill-purple-mid transition-colors" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col space-y-4 px-6 py-4 text-[#1c151e] text-[1rem] font-[500]">
          <a
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-mid transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-mid transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-mid transition-colors"
          >
            Services
          </a>
          <a
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-mid transition-colors"
          >
            Gallery
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-mid transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
