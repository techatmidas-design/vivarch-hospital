"use client";

import { motion } from "framer-motion";
import { GraduationCap, BriefcaseMedical, Stethoscope, Building } from "lucide-react";
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

        <div className="flex flex-col gap-8">
          {doctors.map((doctor, i) => (
            <Reveal key={doctor.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass grid grid-cols-1 gap-8 rounded-[2rem] p-8 lg:grid-cols-[280px_1fr] lg:p-10"
              >
                <div className="flex flex-col items-start gap-5">
                  <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-accent-400 to-primary-500 font-display text-3xl font-extrabold text-primary-900 shadow-xl">
                    {initials(doctor.name)}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{doctor.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-accent-300">{doctor.role}</p>
                  </div>
                  {doctor.experience && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/70">
                      <BriefcaseMedical className="h-3.5 w-3.5" />
                      {doctor.experience}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-6 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <div>
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                      <GraduationCap className="h-4 w-4" /> Qualifications
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {doctor.qualifications.map((q) => (
                        <span
                          key={q}
                          className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                        >
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                      <Stethoscope className="h-4 w-4" /> Areas of Expertise
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {doctor.specializations.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-accent-500/15 px-3 py-1 text-xs font-medium text-accent-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {doctor.affiliations.length > 0 && (
                    <div>
                      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                        <Building className="h-4 w-4" /> Affiliations
                      </p>
                      <p className="mt-2 text-sm text-white/70">
                        {doctor.affiliations.join(" · ")}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

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
