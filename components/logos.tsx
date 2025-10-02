import Image from "next/image";
// import Link from "next/link";
import React from "react";

const LOGOS = [
  {
    src: "/sbs-new/images/rics.png",
    alt: "Client logo for SBS Structural Engineering projects",
    href: "https://www.ife.org.uk/",
  },
  {
    src: "/sbs-new/images/cabe.png",
    alt: "SBS Structures client logo - structural engineering partner",
    href: "https://cbuilde.com/",
  },
  {
    src: "/sbs-new/images/rics.png",
    alt: "Residential structural engineering client logo for SBS Structures",
    href: "https://www.rics.org/",
  },
  {
    src: "/sbs-new/images/is.png",
    alt: "Commercial structural engineering client logo - SBS Structures projects",
    href: "https://www.istructe.org/",
  },
  {
    src: "/sbs-new/images/riba.svg",
    alt: "Structural design client logo associated with SBS Structures",
    href: "https://www.architecture.com/",
  },
  {
    src: "/sbs-new/images/ice.png",
    alt: "SBS Structures trusted client logo - South East UK structural engineering",
    href: "https://www.ice.org.uk/",
  },
  {
    src: "/sbs-new/images/ec.jpg",
    alt: "Home extensions structural engineering client logo - SBS Structures",
    href: "https://www.engc.org.uk/",
  },
  {
    src: "/sbs-new/images/build.png",
    alt: "Home extensions structural engineering client logo - SBS Structures",
    href: "https://www.mybuilder.com/profile/sbs-structural-architectural-design",
  },
];

export function Logos() {
  return (
    <section className="goal__section">
      <div className="goal__wrapper">
        <div className="Marquee">
          <div className="Marquee-content">
            <div
              className="logo-track Marquee-tag"
              style={{ width: "fit-content", background:'white' }}
            >
              {[...Array(5)].map((_, i) => (
                <React.Fragment key={`logo-group-${i}`}>
                  {LOGOS.map((logo, idx) => (
                    <a
                      href={logo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={`${i}-${idx}`}
                      className="logo-image"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={250} // Set appropriate width
                        height={150} // Set appropriate height
                        loading="eager"
                        unoptimized
                        className="logo-image"
                      />
                    </a>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
