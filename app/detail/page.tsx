import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function DetailPage() {
  return (
    <div className="bg-dark-1 text-white min-h-screen">
      <div style={{ height: "150px" }}></div>
      <Navbar />
      <div className="container mx-auto px-5 py-10">
        <article className="article">
          <h1 className="text-3xl md:text-4xl font-bold mb-5">
            Designing for Care: A New Children’s Home in Weston-super-Mare
          </h1>

          <div className="author flex items-center gap-2.5 mb-5">
            <Image
              src="https://dropinblog.net/cdn-cgi/image/fit=scale-down,width=150/34260408/authors/Chandran.jpg"
              alt="Author Image"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <div>
              <p>
                <strong>Smrithi Chandran</strong> – Design for Care Facilities
              </p>
              <p className="text-sm text-gray-400">April 28th, 2025 • 2 minute read</p>
            </div>
          </div>

          <p className="mb-4">
            At Chandran Hughes, we wanted to give you a peek into one of the projects we’ve been working on – and how we
            support children’s homes through robust architectural design.
          </p>

          <p className="mb-4">
            We recently submitted a planning application for a new
            <strong>4-bed children’s home in Weston-super-Mare</strong>. They needed to involve renovating an existing
            house and converting the garage into a flexible sensory and therapy room to better support both children and
            staff.
          </p>

          <p className="mb-4">
            While this kind of conversion would typically fall under a<strong>Building Notice</strong>, Building Control
            assessed it as a<strong>‘commercial use’</strong>, requiring
            <strong>Full Plans Building Regulations Application</strong>.
          </p>

          <p className="mb-2">
            <strong>What this means we’re producing:</strong>
          </p>
          <ul className="list-disc ml-5 mb-4">
            <li>✅ A full set of technical drawings</li>
            <li>✅ Detailed specification for approval</li>
            <li>✅ Demonstrating adherence to a wide range of regulations, grouped by key design priorities:</li>
          </ul>

          <h3 className="text-xl font-bold mb-2">Structural Integrity & Safety</h3>
          <ul className="list-disc ml-5 mb-4">
            <li>Part A - Structural Safety</li>
            <li>Part B - Fire Safety</li>
            <li>Part K - Protection from Falling, Collision & Impact</li>
          </ul>

          <h3 className="text-xl font-bold mb-2">Environmental Health & Comfort</h3>
          <ul className="list-disc ml-5 mb-4">
            <li>Part C - Site Preparation and Resistance to Contaminants and Moisture</li>
            <li>Part E - Acoustic Performance (Sound Insulation)</li>
            <li>Part F - Ventilation</li>
            <li>Part G - Sanitation, Hot Water Safety</li>
            <li>Part J - Overheating</li>
          </ul>

          <h3 className="text-xl font-bold mb-2">Efficiency & Accessibility</h3>
          <ul className="list-disc ml-5 mb-4">
            <li>Part L - Conservation of Fuel and Power</li>
            <li>Part M - Accessibility and Inclusive Design</li>
          </ul>

          <p className="mb-4">…and more.</p>

          <p className="mb-4">
            These extra steps help ensure not just compliance, but a clear, high quality plan for construction –
            reducing the risk of delays or costly rework on site.
          </p>

          <p className="mb-4">
            We believe homes like these should feel safe, warm, and supportive – not just meet code. That’s why we
            approach every children’s home with a deep sense of care and attention to detail.
          </p>

          <p className="mb-4">
            <strong>Chandran Hughes – We believe everyone on the planet should have a home they love.</strong>
          </p>

          <Link href="/" className="back-link text-red-500 hover:underline">
            &larr; Back to Home
          </Link>
        </article>

        <div className="related mt-16 pt-5 border-t border-gray-600">
          <h2 className="text-xl font-bold mb-5">Related Articles</h2>
          <div className="related-card bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://dropinblog.net/cdn-cgi/image/fit=scale-down,width=700/34260408/files/featured/childrens-homes-design-tdm28.png"
              alt="Modern house design"
              width={700}
              height={400}
              priority
              className="w-full block"
            />
            <div className="related-content p-4 text-center text-white">
              <Image
                className="author-thumb rounded-full mx-auto mb-1"
                src="https://dropinblog.net/cdn-cgi/image/fit=scale-down,width=150/34260408/authors/Chandran.jpg"
                alt="Author"
                width={30}
                height={30}
                priority
              />
              <span className="text-sm text-gray-400">Smrithi Chandran • March 28th, 2025 • 2 minute read</span>
              <h3 className="mt-2 mb-1 text-lg font-semibold text-white">What Makes a High Quality Design?</h3>
              <p className="subheading text-xs text-gray-400 uppercase mb-2">SUSTAINABLE HOME DESIGN</p>
              <p className="text-sm text-gray-300">
                Quality design is about more than just aesthetics; it’s about function, quality, and personal
                experience...
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
