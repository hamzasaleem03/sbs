import React from "react";
import Image from "next/image";

export function GoalSection() {
  return (
    <section className="goal__section">
      <div className="goal__wrapper">
        <div className="goal__content">
          <h2 style={{ opacity: 1, transform: "none" }}>
            The Goal<span className="text-primary">.</span>
          </h2>
          <p style={{ opacity: 1, transform: "none" }}>
            At SBS Structures, our mission is to make structural engineering
            simple, reliable, and accessible. We deliver intelligent, practical
            designs that are fully compliant with building regulations, giving
            you confidence in every project.
          </p>
          <p style={{ opacity: 1, transform: "none" }}>
            Whether it’s a loft conversion, home extension, or full renovation,
            we provide safe, efficient, and cost-effective solutions tailored to
            your needs. With a client-focused approach, competitive pricing, and
            clear advice, we ensure peace of mind knowing your project is built
            on a strong and secure foundation.
          </p>
        </div>
        <div style={{ opacity: 1, transform: "none" }}>
          {/* Logo Marquee */}
          <div aria-label="Main" style={{ display: "none" }}>
            <div className="Marquee">
              <div className="Marquee-content">
                <div
                  className="logo-track Marquee-tag"
                  style={{ width: "74256px" }}
                >
                  {Array.from({ length: 10 }).map((_, i) => (
                    <React.Fragment key={i}>
                      <Image
                        decoding="async"
                        priority
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/s_b_s_1.png"
                        alt="Client logo for SBS Structural Engineering projects"
                        width={100}
                        height={50}
                      />
                      <Image
                        decoding="async"
                        priority
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/s_b_s_2.png"
                        alt="SBS Structures client logo - structural engineering partner"
                        width={100}
                        height={50}
                      />
                      <Image
                        decoding="async"
                        priority
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/s_b_s_3.png"
                        alt="Residential structural engineering client logo for SBS Structures"
                        width={100}
                        height={50}
                      />
                      <Image
                        decoding="async"
                        priority
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/s_b_s_4.png"
                        alt="Commercial structural engineering client logo - SBS Structures projects"
                        width={100}
                        height={50}
                      />
                      <Image
                        decoding="async"
                        priority
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/s_b_s_5.png"
                        alt="Structural design client logo associated with SBS Structures"
                        width={100}
                        height={50}
                      />
                      <Image
                        decoding="async"
                        priority
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/s_b_s_6.png"
                        alt="SBS Structures trusted client logo - South East UK structural engineering"
                        width={100}
                        height={50}
                      />
                      <Image
                        decoding="async"
                        priority
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/s_b_s_7.png"
                        alt="Home extensions structural engineering client logo - SBS Structures"
                        width={100}
                        height={50}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Logo */}
          {/* <Image
            priority
            src="/sbs-new/images/goal-image.png"
            height={577}
            width={2000}
            alt="SBS Structures goal image - delivering high-quality structural engineering projects"
          /> */}
        </div>
      </div>
    </section>
  );
}
