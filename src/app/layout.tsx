import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { hospital } from "@/lib/data";

const displayFont = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://vivarchhospital.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vivarch Hospital, Borivali | Multi-Speciality Hospital in Mumbai",
    template: "%s | Vivarch Hospital",
  },
  description:
    "Vivarch Hospital in Borivali, Mumbai offers multi-speciality care across Oncology, Neurology, Cardiology, Emergency Medicine and more — with experienced specialists and 24×7 emergency services.",
  keywords: [
    "Vivarch Hospital",
    "hospital in Borivali",
    "hospital in Mumbai",
    "multi-speciality hospital Mumbai",
    "oncology hospital Borivali",
    "neurology hospital Mumbai",
    "cardiology hospital Borivali",
    "emergency hospital Mumbai",
    "best hospital Borivali West",
  ],
  authors: [{ name: hospital.brand }],
  creator: hospital.brand,
  publisher: hospital.companyName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: hospital.brand,
    title: "Vivarch Hospital, Borivali | Multi-Speciality Hospital in Mumbai",
    description:
      "Multi-speciality care across Oncology, Neurology, Cardiology and more — with 24×7 emergency services in Borivali, Mumbai.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: hospital.brand }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivarch Hospital, Borivali | Multi-Speciality Hospital in Mumbai",
    description:
      "Multi-speciality care across Oncology, Neurology, Cardiology and more — with 24×7 emergency services in Borivali, Mumbai.",
    images: ["/images/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
};

const hospitalSchema = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: hospital.brand,
  legalName: hospital.companyName,
  url: siteUrl,
  telephone: hospital.emergencyPhone,
  email: hospital.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${hospital.address.line1}, ${hospital.address.line2}`,
    addressLocality: hospital.address.city,
    addressRegion: hospital.address.state,
    postalCode: hospital.address.pincode,
    addressCountry: "IN",
  },
  medicalSpecialty: [
    "Oncology",
    "Hematology",
    "Neurology",
    "Cardiology",
    "InternalMedicine",
    "Surgical",
  ],
  availableService: {
    "@type": "MedicalProcedure",
    name: "24x7 Emergency Care",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: hospital.companyName,
  alternateName: hospital.brand,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  foundingDate: "2025-01-24",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: hospital.emergencyPhone,
    contactType: "emergency",
    email: hospital.email,
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Marathi"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-[color:var(--color-ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
