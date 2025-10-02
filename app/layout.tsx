import type React from "react"
import type { Metadata } from "next"
import { Albert_Sans } from "next/font/google"
import "./globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-albert-sans",
})

export const metadata: Metadata = {
  title: "Structural Engineer London & UK | Expert Structural Design & Surveys - SBS Structures",
  description:
    "SBS Structures provides expert structural engineering services across London and the UK. Specializing in structural calculations, surveys, design for residential & commercial projects, loft conversions, and extensions. Get a free consultation today.",
  keywords:
    "structural engineer London, structural engineer UK, residential structural engineer, commercial structural engineer, structural calculations, structural surveys, structural design, loft conversion structural engineer, house extension structural design, load-bearing wall removal, foundation inspection, building control structural design, home renovation structural engineer, structural inspection, M25 structural engineers, steel beam calculations, wall removal survey, structural engineering services",
  openGraph: {
    title: "SBS Structures | Leading Structural Engineers in London & UK",
    description:
      "SBS Structures offers high-quality structural engineering design, calculations, and surveys for residential and commercial projects throughout London and the UK. Your trusted partner for safe and innovative building solutions.",
    type: "website",
    url: "https://www.sbsstructures.co.uk",
    images: [
      {
        url: "https://www.sbsstructures.co.uk/sbs-new/images/fav.png", // Ensure this is an absolute URL for Open Graph
        alt: "SBS Structures Logo",
      },
    ],
  },
  alternates: {
    canonical: "https://www.sbsstructures.co.uk",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* LocalBusiness Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "SBS Structures",
            "url": "https://www.sbsstructures.co.uk",
            "telephone": "+44 7401 650 600",
            "email": "sbs.structures@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "61 Cranbrook Rd, Ilford",
              "addressLocality": "London",
              "postalCode": "IG1 4PG",
              "addressCountry": "UK"
            },
            "areaServed": "GB",
            "sameAs": [
              "https://www.instagram.com/sbsstructural",
              "https://www.youtube.com/watch?v=uDqcDEtDYjc",
              "https://www.yell.com/biz/sbs-structural-and-architectural-design-ilford-9590632/",
              "https://maps.app.goo.gl/TuSeNcEvGqkgxvsr7"
            ]
          }
        `,
          }}
        />
        <link rel="icon" href="/sbs-new/images/fav.png" type="image/x-icon" />
      </head>
      <body className={`${albertSans.variable} bg-dark-1`}>
        {children}
        <GoogleAnalytics gaId="G-4ER55BY4BB" />
      </body>
    </html>
  )
}
