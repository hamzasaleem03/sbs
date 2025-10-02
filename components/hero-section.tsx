// hero-section.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
type HeroSectionProps = {
  onOpenPopup: () => void;
};
export function HeroSection({ onOpenPopup }: HeroSectionProps) {
  return (
    <header>
      <div className="hero__container">
        <h1>
          Expert Structural Engineers in London <br /> & UK | Design, <br />{" "}
          Surveys &
          <br /> Calculations
        </h1>
        <p>
          SBS Structures provides certified structural calculations,
          comprehensive inspections, and innovative design solutions for
          residential and commercial projects, including home extensions, loft
          conversions, and new builds across London and the entire UK.
        </p>
        {/* <Link href="tel:+447401650600" className="button"> */}
        <button className="button" onClick={onOpenPopup}>
          Request a Free Structural Engineering Consultation
        </button>
        {/* </Link> */}
      </div>
      <div className="hero__image">
        <Image
          src="/sbs-new/images/hero-image.png"
          width={700}
          height={700}
          priority
          alt="Modern building facade with structural elements, representing expert structural engineering services in London"
        />
      </div>
    </header>
  );
}
