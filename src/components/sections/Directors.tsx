"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BriefcaseMedical, ArrowUpRight, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { doctors, corporateLeadership } from "@/lib/data";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export function Directors() {
  return (
    <section id="leadership" className="relative bg-gradient-to-b from-primary-900 to-primary-800 py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative flex flex-col gap-16">
        <SectionHeading
          kicker="Leadership"
          title="Meet the Medical Directors"
          description="Vivarch Hospital is led by specialists with decades of combined clinical experience across oncology, neurology and cardiology."
          light
        />

        <RevealGroup className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2" stagger={0.08}>
          {doctors.map((doctor) => (
            <RevealItem key={doctor.name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass flex h-full flex-col gap-5 rounded-[1.75rem] p-5 sm:flex-row sm:gap-6"
              >
                <Link
                  href={`/doctors/${doctor.slug}`}
                  className="group relative block aspect-[4/5] w-full flex-shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/15 transition-all duration-500 hover:ring-accent-400/60 sm:w-48"
                >
                  {doctor.photo ? (
                    <>
                      <Image
                        src={doctor.photo}
                        alt={`${doctor.name}, ${doctor.role} at Vivarch Hospital`}
                        fill
                        sizes="(min-width: 640px) 192px, 90vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/0 to-primary-900/10" />
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-400 to-primary-500 font-display text-3xl font-extrabold text-primary-900">
                      {initials(doctor.name)}
                    </div>
                  )}
                  {doctor.experience && (
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-primary-900/70 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
                      <BriefcaseMedical className="h-3.5 w-3.5" />
                      {doctor.experience}
                    </span>
                  )}
                </Link>

                <div className="flex flex-1 flex-col gap-3">
                  <div>
                    <Link href={`/doctors/${doctor.slug}`} className="hover:text-accent-300">
                      <h3 className="font-display text-lg font-bold text-white">{doctor.name}</h3>
                    </Link>
                    <p className="mt-0.5 text-sm font-semibold text-accent-300">{doctor.role}</p>
                  </div>

                  {doctor.achievement && (
                    <div className="flex items-center gap-2 rounded-xl border border-accent-400/30 bg-gradient-to-r from-accent-500/20 via-accent-500/10 to-transparent px-3 py-2">
                      <Award className="h-4 w-4 flex-shrink-0 text-accent-300" strokeWidth={2} />
                      <p className="text-xs font-semibold text-white">{doctor.achievement}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {doctor.qualifications.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/80"
                      >
                        {q}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {doctor.specializations.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-accent-500/15 px-2.5 py-1 text-[11px] font-medium text-accent-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="mt-auto inline-flex w-fit items-center gap-1.5 pt-1 text-sm font-semibold text-accent-300 hover:text-accent-200"
                  >
                    View Full Profile <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="flex flex-col gap-8 pt-8">
          <Reveal>
            <h3 className="font-display text-center text-2xl font-bold text-white">
              Corporate Leadership
            </h3>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3" stagger={0.08}>
            {corporateLeadership.map((person) => (
              <RevealItem key={person.name}>
                <div
                  className={cn(
                    "flex h-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
                  )}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 font-display text-lg font-bold text-accent-300">
                    {initials(person.name)}
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-white">{person.name}</p>
                    <p className="mt-1 text-xs font-medium text-white/50">{person.role}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
