"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import { iconSizes } from "../../../constants";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="nav-container">
      <li className="logo">
        <Link href="/">
          <Image src="/logo.svg" width={iconSizes.logoWidth} height={iconSizes.logoHeight} alt="Peak Digital Logo" />
        </Link>
      </li>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link href="/" className="nav-links" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/About" className="nav-links" onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/Services" className="nav-links" onClick={handleClick}>
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/Contact" className="nav-links" onClick={handleClick}>
            Contact
          </Link>
        </li>
        <li className="nav-item hidden lg:block">
          <Link
            href="https://calendly.com/admin-peakdigital/30min"
            className="font-bold bg-transparent text-[var(--white)] lg:bg-[var(--darkPurple)] p-0 lg:p-3 lg:px-5 lg:rounded-2xl"
            onClick={handleClick}
          >
            Start Now
          </Link>
        </li>
      </ul>
      <div className="nav-icon" onClick={handleClick}>
        {click ? (
          <span className="icon">
            <AiFillCloseCircle size={45} className="nav-color" />
          </span>
        ) : (
          <span className="icon">
            <AiOutlineMenu size={45} />
          </span>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
