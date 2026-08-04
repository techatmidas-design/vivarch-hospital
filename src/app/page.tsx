import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Specialities } from "@/components/sections/Specialities";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Directors } from "@/components/sections/Directors";
import { Emergency } from "@/components/sections/Emergency";
import { Technology } from "@/components/sections/Technology";
import { PatientJourney } from "@/components/sections/PatientJourney";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { faqs } from "@/lib/data";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Stats />
        <Specialities />
        <WhyChooseUs />
        <Directors />
        <Emergency />
        <Technology />
        <PatientJourney />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
