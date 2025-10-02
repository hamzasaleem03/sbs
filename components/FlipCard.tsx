"use client";

import { useState } from "react";
import Image from "next/image";

interface FlipCardData {
  image: string;
  title: string;
  backtext: string;
}

const cardsData: FlipCardData[] = [
  {
    image: "/sbs-new/work/EXTENSION WITH UNDER PINNING-1.jpg",
    title: "Extension with Underpinning – Structural Engineering Design",
    backtext:
      "SBS Structures delivered the full structural design and calculations for a home extension requiring underpinning. Our engineers ensured the foundation strengthening and load transfer solutions were safe, efficient, and fully compliant with UK Building Regulations.",
  },
  {
    image: "/sbs-new/work/EXTENSION-1.jpg",
    title: "Residential Extension – Structural Calculations & Drawings",
    backtext:
      "We provided detailed structural calculations and drawings for a single-storey home extension. Our design solutions supported smooth planning approval and cost-effective construction while ensuring full building control compliance.",
  },
  {
    image:
      "/sbs-new/work/INTENRAL ALTERATIONS, LOAD BEARING WALL REMOVALS, NEW FOUNDATIONS-1.jpg",
    title: "Internal Alterations (Load-Bearing Wall Removal)",
    backtext:
      "Our team prepared the structural design for internal alterations involving the removal of load-bearing walls. This included beam design and calculations to maintain structural stability, creating open-plan living spaces while meeting building regulation standards.",
  },
  {
    image: "/sbs-new/work/LOFT-1.jpg",
    title: "Loft Conversion – Structural Engineering Services",
    backtext:
      "SBS Structures provided the complete structural engineering design for a loft conversion, including floor strengthening, roof alterations, and load-bearing calculations. Our designs ensured safety, efficiency, and full compliance with building control approval.",
  },
  {
    image: "/sbs-new/work/MAJOR INTERNAL ALTERATIONS-1.jpg",
    title: "Major Internal Alterations – Structural Design Package",
    backtext:
      "We developed the structural calculations and drawings for extensive internal alterations. This included complex load redistribution and support design, ensuring the project met all UK Building Regulations while delivering practical, cost-effective solutions.",
  },
  {
    image: "/sbs-new/work/NEW BUILD-1.jpg",
    title: "New Build – Full Structural Engineering Design",
    backtext:
      "For this project, we produced the complete structural design package for a new build property, covering foundations, superstructure, beams, and load-bearing elements. Our calculations ensured compliance, efficiency, and long-term structural integrity.",
  },
  {
    image: "/sbs-new/work/PILE DESIGN-1.jpg",
    title: "Pile Foundation Design – Structural Calculations",
    backtext:
      "SBS Structures prepared the pile foundation design and calculations for a residential project requiring deep ground support. Our design provided stability, cost efficiency, and compliance with geotechnical recommendations and building regulations.",
  },
  {
    image: "/sbs-new/work/THE DRIVE DOOR OPENING-1.jpg",
    title: "Drive Door Opening – Structural Calculations & Beam Design",
    backtext:
      "We carried out the structural engineering design for forming a new door opening in a load-bearing wall. Our team designed the necessary lintel and beam support to maintain structural integrity and achieve building control approval.",
  },
];

export default function FlipCardSection() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <section className="blog-section">
      <div className="work__wrapper">
        <h2>
          Featured Projects<span className="text-primary">.</span>
        </h2>
      </div>

      <div className="mains">
        <div className="blog-grid">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`b_card relative perspective`}
              onClick={() => handleFlip(index)}
            >
              <div
                className={`card-inner ${
                  flippedIndex === index ? "is-flipped" : ""
                }`}
              >
                {/* FRONT */}
                <div className="card-face card-front">
                  <Image
                    className="top-image"
                    src={card.image}
                    alt={card.title}
                    width={700}
                    height={400}
                    layout="responsive"
                  />

                  <h2 className="al">{card.title}</h2>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFlip(index);
                    }}
                    className="button al mx-auto my-7"
                  >
                    View Details
                  </button>
                </div>

                {/* BACK */}
                <div className="card-face card-back bg-white text-black al py-4">
                  <p>{card.backtext}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlippedIndex(null);
                    }}
                    className="button al mx-auto my-4"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
