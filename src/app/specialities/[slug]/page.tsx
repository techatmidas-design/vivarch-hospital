import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, CalendarCheck, ArrowLeft, Stethoscope } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { departments, doctors, hospital } from "@/lib/data";
import { iconMap } from "@/lib/icon-map";

const siteUrl = "https://vivarchhospital.com";

export function generateStaticParams() {
  return departments.map((dept) => ({ slug: dept.slug }));
}

export async function generateMetadata(
  props: PageProps<"/specialities/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const dept = departments.find((d) => d.slug === slug);
  if (!dept) return {};

  const title = `${dept.name} in Borivali, Mumbai`;
  return {
    title,
    description: `${dept.description} Available at Vivarch Hospital, Borivali, Mumbai.`,
    alternates: { canonical: `/specialities/${dept.slug}` },
    openGraph: {
      title: `${title} | Vivarch Hospital`,
      description: dept.description,
      url: `${siteUrl}/specialities/${dept.slug}`,
    },
  };
}

export default async function SpecialityPage(props: PageProps<"/specialities/[slug]">) {
  const { slug } = await props.params;
  const dept = departments.find((d) => d.slug === slug);
  if (!dept) notFound();

  const Icon = iconMap[dept.icon];
  const relatedDoctors = doctors.filter((doc) => doc.departmentSlug === dept.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Specialities", item: `${siteUrl}/#specialities` },
      {
        "@type": "ListItem",
        position: 3,
        name: dept.name,
        item: `${siteUrl}/specialities/${dept.slug}`,
      },
    ],
  };

  const medicalSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${dept.name} — Vivarch Hospital`,
    medicalSpecialty: dept.name,
    description: dept.longDescription,
    url: `${siteUrl}/specialities/${dept.slug}`,
    parentOrganization: { "@type": "Hospital", name: hospital.brand, url: siteUrl },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${hospital.address.line1}, ${hospital.address.line2}`,
      addressLocality: hospital.address.city,
      addressRegion: hospital.address.state,
      postalCode: hospital.address.pincode,
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
      />
      <Header />
      <main className="flex flex-col">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-700 pt-32 pb-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <Container className="relative flex flex-col gap-6">
            <Reveal>
              <Link
                href="/#specialities"
                className="inline-flex w-fit items-center gap-2 text-sm font-medium text-white/60 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" /> All Specialities
              </Link>
            </Reveal>
            <Reveal delay={0.08} className="flex items-center gap-4">
              {Icon && (
                <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent-300">
                  <Icon className="h-8 w-8" strokeWidth={1.75} />
                </span>
              )}
              <h1 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-tight text-white">
                {dept.name} in Borivali, Mumbai
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="max-w-2xl text-lg text-white/70">{dept.description}</p>
            </Reveal>
          </Container>
        </section>

        <section className="bg-white py-20">
          <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
            <Reveal className="flex flex-col gap-6">
              <h2 className="font-display text-2xl font-bold text-ink">About {dept.name}</h2>
              <p className="text-[17px] leading-relaxed text-slate-600">{dept.longDescription}</p>

              {relatedDoctors.length > 0 && (
                <div className="mt-4 flex flex-col gap-4">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {dept.name} Specialist{relatedDoctors.length > 1 ? "s" : ""} at Vivarch
                  </h3>
                  {relatedDoctors.map((doc) => (
                    <Link
                      key={doc.slug}
                      href={`/doctors/${doc.slug}`}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-primary-100 bg-mist p-5 transition-colors hover:border-primary-300"
                    >
                      <div>
                        <p className="font-display font-bold text-ink">{doc.name}</p>
                        <p className="text-sm text-slate-500">{doc.role}</p>
                      </div>
                      <Stethoscope className="h-5 w-5 flex-shrink-0 text-primary-400 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              )}
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4 rounded-3xl border border-primary-100 bg-mist p-7">
                <h3 className="font-display text-lg font-bold text-ink">Book a Consultation</h3>
                <p className="text-sm text-slate-600">
                  Reach out to Vivarch Hospital, Borivali to schedule a {dept.name.toLowerCase()}{" "}
                  consultation.
                </p>
                <Button href="/#contact" icon={<CalendarCheck className="h-4 w-4" />}>
                  Book Appointment
                </Button>
                <Button
                  href={hospital.emergencyPhoneHref}
                  variant="emergency"
                  icon={<Phone className="h-4 w-4" />}
                >
                  {hospital.emergencyPhone}
                </Button>
                <p className="text-xs text-slate-400">{hospital.address.full}</p>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
