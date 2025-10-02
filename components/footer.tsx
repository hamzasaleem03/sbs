import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Youtube,
  Instagram,
  PhoneIcon as Whatsapp,
  Facebook,
} from "lucide-react";

export function Footer() {
  return (
    <footer id="contact">
      <div className="footer__container">
        <div className="footer__box-1">
          <Image
            src="/sbs-new/images/sbs-logo-with-text-footer.png"
            width={274}
            height={93}
            priority
            alt="SBS Structures - Structural Engineering Services in Ilford and London"
          />
          <p>
            Specializing in High-Quality Structural Design Services Across All
            Engineering Disciplines. Expertise in Residential, Commercial, and
            Complex Structural Solutions.
          </p>
        </div>
        <div className="footer__box">
          <p className="title">Contact Us</p>
          <p>
            <a
              href="mailto:sbs.structures@gmail.com"
              style={{
                display: "inline-block",
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px 16px",
                textDecoration: "none",
                borderRadius: "6px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              ✉️ Email Us
            </a>
          </p>
          <p>
            <a
              href="tel:+447401650600"
              style={{
                display: "inline-block",
                backgroundColor: "#00b341",
                color: "#fff",
                padding: "10px 16px",
                textDecoration: "none",
                borderRadius: "6px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              📞 Call +44 7401 650 600
            </a>
          </p>
          <p>
            <a
              href="https://maps.app.goo.gl/TuSeNcEvGqkgxvsr7"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#28a745",
                color: "white",
                padding: "10px 16px",
                textDecoration: "none",
                borderRadius: "6px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              📍 Find Us on Google Maps
            </a>
          </p>
        </div>
        <div className="footer__box">
          <p className="title">Services</p>
          <Link href="#services">Structural Design</Link>
          <Link href="#services">Construction</Link>
          <Link href="#services">Architectural</Link>
          <Link href="#about">About Us</Link> {/* Added About Us link */}
          <Link href="#contact">Contact Us</Link> {/* Added Contact Us link */}
          <div className="footer__box">
            <p className="title">Socials</p>
            <div style={{ display: "flex", gap: "8px" }}>
              <a
                href="https://www.yell.com/biz/sbs-structural-and-architectural-design-ilford-9590632/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="#FFD500"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ borderRadius: "6px" }}
                >
                  {/* Outer rounded square (same style as others) */}
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="4"
                    ry="4"
                    stroke="#ffffff"
                    fill="#FFD500"
                  ></rect>
                  {/* Yell 'Y' shape - placeholder path, replace with accurate logo SVG path if available */}
                  <path
                    d="M10 7l2 5l2 -2l-2 7"
                    stroke="#000000"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/sbsstructuralandarchitecturaldesign/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={32} strokeWidth={1} stroke="#fff" />
              </a>
              <a
                href="https://www.instagram.com/sbsstructural"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={32} strokeWidth={1.5} stroke="#ffffff" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=uDqcDEtDYjc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={32} strokeWidth={1.5} stroke="#ffffff" />
              </a>
              <a href="mailto:sbs.structures@gmail.com">
                <Mail size={32} strokeWidth={1.5} stroke="#ffffff" />
              </a>
              <a
                href="https://wa.me/447401650600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Whatsapp size={32} strokeWidth={1.5} stroke="#00b341" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="footer__c">
        All Rights Reserved © 2020-2025 SBS Structures - Expert Structural
        Engineers in London
      </p>
    </footer>
  );
}
