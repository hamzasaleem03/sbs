import Image from "next/image";

export function StorySection() {
  return (
    <section id="about" className="story__section">
      <div style={{ opacity: 1, transform: "none" }}>
        <Image
          src="/sbs-new/images/story-image.png"
          width={530}
          height={710}
          priority
          alt="Structural engineer reviewing design drawings for a residential extension project in London"
        />
      </div>
      <div className="story__content">
        <h2 style={{ opacity: 1, transform: "none" }}>
          The Story<span className="text-primary">.</span>
        </h2>
        <p style={{ opacity: 1, transform: "none" }}>
          SBS Structures – Residential Structural Engineering Specialists in the
          South East
          <br />
          At SBS Structures, we provide expert structural engineering services
          for homeowners, architects, and builders across the South East of
          England. From loft conversions and home extensions to structural
          calculations and building regulation drawings, our team delivers safe,
          practical, and cost-effective solutions tailored to your project.
          <br />
          Whether you’re planning a home renovation, need structural
          assessments, or require beam and foundation design, our qualified
          engineers ensure every detail is compliant, efficient, and designed to
          last.
          <br />
          We work closely with homeowners, architects, and contractors to
          provide clear advice, fast turnaround times, and structural designs
          you can trust.
        </p>
      </div>
    </section>
  );
}
