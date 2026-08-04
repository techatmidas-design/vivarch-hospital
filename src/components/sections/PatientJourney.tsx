"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { patientJourney } from "@/lib/data";
import { iconMap } from "@/lib/icon-map";

export function PatientJourney() {
  return (
    <section className="relative overflow-hidden bg-mist py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          kicker="Patient Journey"
          title="Your Care, Step by Step"
          description="A clear, guided path from your first appointment through recovery and follow-up."
        />

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-primary-200 lg:left-0 lg:top-8 lg:h-px lg:w-full" />
          <RevealGroup
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4"
            stagger={0.08}
          >
            {patientJourney.map((step) => {
              const Icon = iconMap[step.icon];
              return (
                <RevealItem key={step.step} className="relative flex flex-col items-start gap-4 lg:items-center lg:text-center">
                  <motion.span
                    whileHover={{ scale: 1.08 }}
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary-600 shadow-[0_10px_30px_-10px_rgba(0,91,172,0.35)] ring-4 ring-mist"
                  >
                    {Icon && <Icon className="h-7 w-7" strokeWidth={1.75} />}
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-[11px] font-bold text-primary-900">
                      {step.step}
                    </span>
                  </motion.span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
