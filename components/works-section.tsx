"use client";

import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { Swiper as SwiperClass } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Register Swiper modules
SwiperClass.use([Navigation, Autoplay]);

type WorksSectionProps = {
  onOpenPopup: () => void;
};
export function WorksSection({ onOpenPopup }: WorksSectionProps) {

  useEffect(() => {
    const swiper = new SwiperClass(".mySwiper_carousel_15", {
      loop: true,
      autoplay: {
        delay: 2000,
      },
      speed: 1000,
      grabCursor: true,
      // loopFillGroupWithBlank: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1336: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
    });

    return () => {
      if (swiper) {
        swiper.destroy(true, true);
      }
    };
  }, []);

  const workImages = [
    {
      src: "/sbs-new/images/work-01.png",
      alt: "Residential structural construction project by SBS Structures in London",
    },
    {
      src: "/sbs-new/images/work-02.png",
      alt: "Loft conversion structural work and design by SBS Structures",
    },
    {
      src: "/sbs-new/images/work-03.png",
      alt: "Foundation and structural reinforcement in progress for a UK building",
    },
    {
      src: "/sbs-new/images/work-04.png",
      alt: "Steel beam installation for a home extension structural design",
    },
    {
      src: "/sbs-new/images/work-05.png",
      alt: "Structural framing and groundwork by SBS Structures for new build",
    },
    {
      src: "/sbs-new/images/work-06.png",
      alt: "Ongoing residential construction and load-bearing wall installation in London",
    },
    {
      src: "/sbs-new/images/work-07.png",
      alt: "Brickwork and structural support elements under construction by structural engineers",
    },
    {
      src: "/sbs-new/images/work-08.png",
      alt: "Domestic structural engineering worksite in Ilford, UK",
    },
    {
      src: "/sbs-new/images/work-09.png",
      alt: "Structural integrity and beam installation project by SBS Structures",
    },
    {
      src: "/sbs-new/images/w10.jpeg",
      alt: "Structural inspection and construction progress in London for commercial property",
    },
    {
      src: "/sbs-new/images/w11.jpeg",
      alt: "Commercial structural engineering project site in the UK",
    },
    {
      src: "/sbs-new/images/w12.jpeg",
      alt: "SBS Structures carrying out building structural calculations and work",
    },
    {
      src: "/sbs-new/images/w13.jpeg",
      alt: "Structural wall removal and support installation project by expert engineers",
    },
    {
      src: "/sbs-new/images/w14.jpeg",
      alt: "SBS Structural Engineers — London structural engineering services for residential projects",
    },
    {
      src: "/sbs-new/images/w15.png",
      alt: "SBS Structural Engineers — London structural engineering services for residential projects",
    },
    {
      src: "/sbs-new/images/w16.png",
      alt: "SBS Structural Engineers — London structural engineering services for residential projects",
    },
    {
      src: "/sbs-new/images/w17.png",
      alt: "SBS Structural Engineers — London structural engineering services for residential projects",
    },
  ];

  return (
    <section id="works" className="work__section">
      <div className="work__wrapper">
        <h2>
          Our Works<span className="text-primary">.</span>
        </h2>
        <p className="text-par text-center text-gray-400 mt-4 mb-8 al">
          Recent Projects Showcase
        </p>
        <div className="work__content">
          <div className="swiper mySwiper_carousel_15">
            <div className="swiper-wrapper">
              {workImages.map((image, index) => (
                <div className="swiper-slide" key={index}>
                  <div style={{ opacity: 1, transform: "none" }}>
                    <Image
                      src={image.src || "/placeholder.svg"}
                      width={373}
                      height={296}
                      priority
                      alt={image.alt}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        {/* <Link href="tel:+447401650600" className="button mx-auto mt-12"> */}
         <button className="button mx-auto mt-12" onClick={onOpenPopup}>
          Like what you see? Let’s discuss your project – Contact Us &rarr;
         </button>
        {/* </Link> */}
      </div>
    </section>
  );
}
