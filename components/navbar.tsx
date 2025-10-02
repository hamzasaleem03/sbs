"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Youtube, Instagram, PhoneIcon as Whatsapp } from "lucide-react";

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const updateProgressBar = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgressBar);
    updateProgressBar(); // Initial update

    return () => window.removeEventListener("scroll", updateProgressBar);
  }, []);

  return (
    <nav className="navbar__container">
      <div className="navbar__wrapper">
        <Link href="/">
          <Image
            src="/sbs-new/images/sbs-logo-with-text.png"
            width={120}
            height={41}
            priority
            alt="SBS Structural and Architectural Design logo — London structural engineers"
          />
        </Link>
        <ul
          id="nda"
          className={`navbar__desktop-anchor ${isNavOpen ? "nda" : ""}`}
        >
          {/* Large screen social icons */}
          {/* <div className="large flex gap-2.5">
          </div> */}
          <li>
            <a
              href="https://wa.me/447401650600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Whatsapp className="icon" size={28} stroke="#00b341" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/sbsstructural"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="icon" size={28} stroke="#ffffff" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=uDqcDEtDYjc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="icon" size={28} stroke="#ffffff" />
            </a>
          </li>
          <li>
            <a href="mailto:sbs.structures@gmail.com">
              <Mail className="icon" size={28} stroke="#ffffff" />
            </a>
          </li>
          <li>
            <a
              href="https://www.yell.com/biz/sbs-structural-and-architectural-design-ilford-9590632/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/sbs-new/images/yell-icon.png"
                alt="Yell"
                width={28}
                height={28}
                className="block object-contain"
              />
            </a>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#works">Works</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          {/* Small screen social icons */}
          <div className="small flex gap-2.5">
            <li>
              <a
                href="https://wa.me/447401650600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Whatsapp className="icon" size={28} stroke="#00b341" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sbsstructural"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="icon" size={28} stroke="#ffffff" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=uDqcDEtDYjc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="icon" size={28} stroke="#ffffff" />
              </a>
            </li>
            <li>
              <a href="mailto:sbs.structures@gmail.com">
                <Mail className="icon" size={28} stroke="#ffffff" />
              </a>
            </li>
          </div>
        </ul>
        <button onClick={toggleNav} className="navbar__button">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div
        className="scroll-progress-bar"
        style={{
          transformOrigin: "0% center",
          transform: `scaleX(${scrollProgress / 100}) translateZ(0px)`,
        }}
      ></div>
    </nav>
  );
}
