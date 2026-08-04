"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { technologyFeatures } from "@/lib/data";
import { iconMap } from "@/lib/icon-map";

export function Technology() {
  return (
    <section id="technology" className="relative bg-white py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          kicker="Technology & Infrastructure"
          title="Modern Systems, Built for Precision"
          description="Vivarch Hospital is designed around dependable diagnostics, streamlined patient workflows and infrastructure ready to grow."
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {technologyFeatures.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <RevealItem key={feature.title}>
                <motion.div
                  whileHover={{ y: -6, borderColor: "var(--color-primary-300)" }}
                  className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-primary-100 bg-gradient-to-b from-mist to-white p-7"
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/0 to-accent-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-900 text-accent-300 shadow-md">
                    {Icon && <Icon className="h-6 w-6" strokeWidth={1.75} />}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
