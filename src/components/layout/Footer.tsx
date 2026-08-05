import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { hospital, departments, doctors } from "@/lib/data";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Specialities", href: "#specialities" },
  { label: "Why Vivarch", href: "#why-vivarch" },
  { label: "Leadership", href: "#leadership" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];

const policies = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Patient Rights", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-900 pt-20">
      <Container className="relative flex flex-col gap-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-5 lg:col-span-2">
            <Link href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1.5 shadow-md">
                <Image
                  src="/images/logo-mark.png"
                  alt="Vivarch Healthcare"
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold text-white">Vivarch</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent-300">
                  Hospital
                </span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/50">
              {hospital.companyName} — a multi-speciality hospital in Borivali, Mumbai, built
              around expert care and patient trust.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-white/60">
              <a href={hospital.emergencyPhoneHref} className="flex items-center gap-2.5 hover:text-accent-300">
                <Phone className="h-4 w-4 flex-shrink-0" /> {hospital.emergencyPhone}
              </a>
              <a href={`mailto:${hospital.email}`} className="flex items-center gap-2.5 hover:text-accent-300">
                <Mail className="h-4 w-4 flex-shrink-0" /> {hospital.email}
              </a>
              <a
                href={hospital.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-accent-300"
              >
                <MessageCircle className="h-4 w-4 flex-shrink-0" /> WhatsApp Us
              </a>
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" /> {hospital.address.full}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/65 hover:text-accent-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Departments
            </h4>
            <ul className="flex flex-col gap-2.5">
              {departments.slice(0, 6).map((dept) => (
                <li key={dept.slug}>
                  <Link
                    href={`/specialities/${dept.slug}`}
                    className="text-sm text-white/65 hover:text-accent-300"
                  >
                    {dept.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#specialities"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent-300"
                >
                  View all <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Doctors
            </h4>
            <ul className="flex flex-col gap-2.5">
              {doctors.map((doc) => (
                <li key={doc.name}>
                  <Link
                    href={`/doctors/${doc.slug}`}
                    className="text-sm text-white/65 hover:text-accent-300"
                  >
                    {doc.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/40">
              Policies
            </h4>
            <ul className="flex flex-col gap-2.5">
              {policies.map((p) => (
                <li key={p.label}>
                  <a href={p.href} className="text-sm text-white/65 hover:text-accent-300">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {hospital.companyName}. All rights reserved.
          </p>
          <p>Registered under MCA on {hospital.registeredOn}.</p>
        </div>
      </Container>
    </footer>
  );
}
