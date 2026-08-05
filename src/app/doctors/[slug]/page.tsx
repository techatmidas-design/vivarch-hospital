import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, CalendarCheck, ArrowLeft, GraduationCap, Stethoscope, Building } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { doctors, departments, hospital } from "@/lib/data";

const siteUrl = "https://vivarchhospital.com";

function initials(name: string) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export function generateStaticParams() {
  return doctors.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata(props: PageProps<"/doctors/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const doc = doctors.find((d) => d.slug === slug);
  if (!doc) return {};

  const title = `${doc.name} — ${doc.role}`;
  return {
    title,
    description: `${doc.name}, ${doc.role} at Vivarch Hospital, Borivali, Mumbai. ${doc.qualifications.join(", ")}.`,
    alternates: { canonical: `/doctors/${doc.slug}` },
    openGraph: {
      title: `${title} | Vivarch Hospital`,
      description: `${doc.qualifications.join(", ")} — ${doc.department} at Vivarch Hospital, Borivali.`,
      url: `${siteUrl}/doctors/${doc.slug}`,
    },
  };
}

export default async function DoctorPage(props: PageProps<"/doctors/[slug]">) {
  const { slug } = await props.params;
  const doc = doctors.find((d) => d.slug === slug);
  if (!doc) notFound();

  const dept = departments.find((d) => d.slug === doc.departmentSlug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Leadership", item: `${siteUrl}/#leadership` },
      { "@type": "ListItem", position: 3, name: doc.name, item: `${siteUrl}/doctors/${doc.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                href="/#leadership"
                className="inline-flex w-fit items-center gap-2 text-sm font-medium text-white/60 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" /> Leadership
              </Link>
            </Reveal>
            <Reveal delay={0.08} className="flex items-center gap-5">
              <span className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-accent-400 to-primary-500 font-display text-2xl font-extrabold text-primary-900 shadow-xl">
                {initials(doc.name)}
              </span>
              <div>
                <h1 className="font-display text-[clamp(1.6rem,3.5vw,2.75rem)] font-extrabold leading-tight text-white">
                  {doc.name}
                </h1>
                <p className="mt-1 text-lg font-semibold text-accent-300">{doc.role}</p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-white py-20">
          <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
            <Reveal className="flex flex-col gap-8">
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <GraduationCap className="h-4 w-4" /> Qualifications
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {doc.qualifications.map((q) => (
                    <span
                      key={q}
                      className="rounded-full border border-primary-100 bg-mist px-3.5 py-1.5 text-sm font-medium text-ink"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <Stethoscope className="h-4 w-4" /> Areas of Expertise
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {doc.specializations.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-primary-50 px-3.5 py-1.5 text-sm font-medium text-primary-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {doc.affiliations.length > 0 && (
                <div>
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <Building className="h-4 w-4" /> Affiliations
                  </p>
                  <p className="mt-3 text-[17px] text-slate-600">{doc.affiliations.join(" · ")}</p>
                </div>
              )}

              {dept && (
                <div className="rounded-2xl border border-primary-100 bg-mist p-6">
                  <p className="text-sm text-slate-600">
                    {doc.name} practices in{" "}
                    <Link
                      href={`/specialities/${dept.slug}`}
                      className="font-semibold text-primary-600 hover:underline"
                    >
                      {dept.name}
                    </Link>{" "}
                    at Vivarch Hospital, Borivali.
                  </p>
                </div>
              )}
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4 rounded-3xl border border-primary-100 bg-mist p-7">
                <h3 className="font-display text-lg font-bold text-ink">Book a Consultation</h3>
                <p className="text-sm text-slate-600">
                  Schedule an appointment with {doc.name} at Vivarch Hospital, Borivali.
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
