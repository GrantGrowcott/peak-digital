"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const closeMenu = () => setClick(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Services", href: "/Services" },
    { label: "Contact", href: "/Contact" },
  ];

  return (
    <header className="relative z-50 w-full bg-white border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="flex items-center shrink-0 min-w-0">
            <Image
              src="/logo.svg"
              width={145}
              height={50}
              alt="Peak Digital Logo"
              priority
              className="block w-[125px] sm:w-[145px] h-auto max-h-[52px] object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-slate-600 hover:text-slate-950 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="https://calendly.com/peakdigital-business/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[var(--darkPurple)] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-200 shadow-sm"
            >
              Start a Project
              <span className="ml-2 text-lg">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setClick(!click)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label={click ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={click}
            aria-controls="mobile-navigation"
          >
            {click ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {click && (
          <div
            id="mobile-navigation"
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-4 py-3 rounded-lg text-[15px] font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="https://calendly.com/peakdigital-business/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-center bg-[var(--darkPurple)] text-white font-semibold text-sm px-5 py-3.5 rounded-xl"
              >
                Start a Project →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
