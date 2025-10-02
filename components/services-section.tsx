"use client";

import { useState } from "react";
import { StructureDesignIcon } from "@/components/icons/structure-design-icon";
import { ConstructionIcon } from "@/components/icons/construction-icon";
import { ArchitecturalIcon } from "@/components/icons/architectural-icon";
import Link from "next/link";

type ServicesSectionProps = {
  onOpenPopup: () => void;
};
export function ServicesSection({ onOpenPopup }: ServicesSectionProps) {
  const [showSDesign, setShowSDesign] = useState(false);
  const [showCons, setShowCons] = useState(false);
  const [showArch, setShowArch] = useState(false);

  return (
    <section id="services" className="services__container">
      <div className="services__header">
        <h2>Comprehensive Structural Engineering Services in London & UK</h2>
        <p>
          At SBS Structures, we provide expert structural engineering services
          for homeowners, architects, and contractors throughout London and the
          UK. Our services include:
          <ul className="list-disc pl-6 space-y-2 marker:text-[#f5e65e] my-4 text-white">
            <li>
              Structural calculations for home extensions, loft conversions, new
              builds, and internal alterations
            </li>
            <li>
              Structural drawings for planning applications and building
              regulations
            </li>
            <li>
              Structural inspections and surveys for residential and commercial
              properties
            </li>
          </ul>
          Our qualified engineers deliver accurate, cost-effective solutions
          tailored to your project. Whether you need a full set of structural
          calculations for an extension or a structural survey before purchase
          or renovation, we ensure every detail is safe, compliant, and
          practical.
          <br />
          <br />
          All of our calculations and drawings are prepared to meet the
          requirements of Local Authority or Approved Building Control, ensuring
          smooth approvals and peace of mind for your project. By combining
          technical precision with a clear, client-focused approach, we make the
          structural process simple, efficient, and stress-free.
        </p>
      </div>
      <div className="services__content">
        <div className="services-box-container">
          <div className="services-box-icon">
            <StructureDesignIcon />
          </div>
          <h3>Structural Design & Calculations for UK Projects</h3>
          <div className="services-box" style={{ position: "relative" }}>
            <p>
              We provide complete structural design services – from calculations
              and drawings to structural reports – for projects such as
              extensions, loft conversions, basements, and new builds. Our
              turnaround is typically ~2 weeks, ensuring you get approved plans
              quickly.
            </p>
            <br />
            <div id="sdesign" className={showSDesign ? "" : "flex"}>
              <p>
                All designs are prepared to meet local authority or private
                Building Control requirements, so approvals are smooth and
                stress-free.
                <br />
                <br />
                Our structural engineers commonly design for:
                <br />
                <br />
                <ul className="list-disc pl-6 space-y-2 marker:text-[#f5e65e]">
                  <li className="!text-[#f5e65e] font-semibold">New Builds structural design</li>
                  <li className="!text-[#f5e65e] font-semibold">Single story extension structural design</li>
                  <li className="!text-[#f5e65e] font-semibold">Double story extension structural design</li>
                  <li className="!text-[#f5e65e] font-semibold">Loft Conversions structural calculations</li>
                  <li className="!text-[#f5e65e] font-semibold">Basements structural design</li>
                  <li className="!text-[#f5e65e] font-semibold">Internal Alterations structural reports</li>
                  <li className="!text-[#f5e65e] font-semibold">Rear Extensions structural engineering</li>
                  <li className="!text-[#f5e65e] font-semibold">Chimney Breast Removal structural assessment</li>
                  <li className="!text-[#f5e65e] font-semibold">Structural Survey and Reports</li>
                </ul>
              </p>
            </div>
            <br />
            <button
              onClick={() => setShowSDesign(!showSDesign)}
              className="button"
            >
              {showSDesign ? "Show less" : "Show more"}
            </button>
            {/* <Link
              href="tel:+447401650600"
              className="text-[#f5e65e] font-primary text-par mt-4 block"
            > */}
            <button
              className="text-[#f5e65e] font-primary text-par mt-4 block"
              onClick={onOpenPopup}
            >
              Contact us for structural design help &rarr;
            </button>
            {/* </Link> */}
          </div>
        </div>
        <div className="services-box-container">
          <div className="services-box-icon">
            <ConstructionIcon />
          </div>
          <h3>Construction & Build Services in London</h3>
          <div className="services-box" style={{ position: "relative" }}>
            <p>
              Our construction team offers end-to-end project execution with a
              dedicated foreman on site. We manage all major works (from initial
              structural work to final fixings) with an emphasis on quality and
              clear communication. You’ll receive regular progress updates at
              each milestone.
            </p>
            <br />
            <div id="cons" className={showCons ? "" : "flex"}>
              <p>Why Choose SBS for Your Construction Needs?</p>
              <br />
              <ul className="space-y-4 text-white">
                <li className="!text-white">
                  <b className="text-[#f5e65e]">Expert Leadership</b> – A conscientious foreman oversees
                  every detail to maintain high standards.
                </li>
                <li className="!text-white">
                  <b className="text-[#f5e65e]">Dedicated Support</b> – Our team is always available to
                  answer your questions during the build.
                </li>
                <li className="!text-white">
                  <b className="text-[#f5e65e]">Quality Craftsmanship</b> – We use qualified specialists to
                  ensure top-notch workmanship.
                </li>
              </ul>
            </div>
            <br />
            <button
              onClick={() => setShowCons(!showCons)}
              className="button"
            >
              {showCons ? "Show less" : "Show more"}
            </button>
            {/* <Link
              href="tel:+447401650600"
              className="text-[#f5e65e] font-primary text-par mt-4 block"
            > */}
            <button
              className="text-[#f5e65e] font-primary text-par mt-4 block"
              onClick={onOpenPopup}
            >
              Ready to build? Contact us to discuss your construction project
              &rarr;
            </button>
            {/* </Link> */}
          </div>
        </div>
        <div className="services-box-container">
          <div className="services-box-icon">
            <ArchitecturalIcon />
          </div>
          <h3>Architectural Planning & Design</h3>
          <div className="services-box" style={{ position: "relative" }}>
            <p>
              Through SBS Architectural, we provide integrated architectural
              design services to complement our engineering. Our architects
              produce efficient, elegant designs and guide projects from initial
              concept to approved plans.
            </p>
            <br />
            <div id="arch" className={showArch ? "" : "flex"}>
              <p>
                Planning & Approvals: We handle the entire planning permission
                and building regulations process – from giving design advice and
                crafting professional CAD drawings, to supplying required
                structural calculations and submitting applications. We also
                liaise with local planning offices to help you secure approvals
                smoothly.
              </p>
            </div>
            <br />
            <button
              onClick={() => setShowArch(!showArch)}
              className="button"
            >
              {showArch ? "Show less" : "Show more"}
            </button>
            {/* <a
              href="tel:+447401650600"
              className="text-[#f5e65e] font-primary text-par mt-4 block"
            > */}
            <button
              className="text-[#f5e65e] font-primary text-par mt-4 block"
              onClick={onOpenPopup}
            >
              Call our team for planning assistance &rarr;
            </button>
            {/* </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
