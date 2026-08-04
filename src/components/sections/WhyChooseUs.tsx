"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyChooseUs } from "@/lib/data";
import { iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });

  return (
    <section id="why-vivarch" className="relative overflow-hidden bg-white py-28">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent-300/20 blur-3xl" />

      <Container className="relative flex flex-col gap-16">
        <SectionHeading
          kicker="Why Choose Vivarch"
          title="Healthcare Built Around You"
          description="Every decision at Vivarch Hospital — from staffing to infrastructure — is made with one priority: the wellbeing of our patients."
        />

        <div ref={ref} className="relative mx-auto w-full max-w-4xl">
          <div className="absolute left-[27px] top-0 h-full w-px bg-primary-100 sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
            className="absolute left-[27px] top-0 h-full w-px bg-gradient-to-b from-primary-500 to-accent-500 sm:left-1/2 sm:-translate-x-1/2"
          />

          <ul className="flex flex-col gap-10">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon];
              const alignRight = i % 2 === 1;
              return (
                <li
                  key={item.title}
                  className={cn(
                    "relative flex items-start gap-6 sm:gap-0",
                    "sm:grid sm:grid-cols-2"
                  )}
                >
                  <div
                    className={cn(
                      "hidden sm:flex sm:flex-col sm:justify-center",
                      alignRight ? "sm:order-1 sm:items-start sm:pl-10" : "sm:items-end sm:pr-10 sm:text-right"
                    )}
                  >
                    {!alignRight && <TimelineCard item={item} />}
                  </div>

                  <span className="absolute left-0 top-1 z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg sm:left-1/2 sm:-translate-x-1/2">
                    {Icon && <Icon className="h-6 w-6" strokeWidth={1.75} />}
                  </span>

                  <div className="pl-20 sm:hidden">
                    <TimelineCard item={item} />
                  </div>

                  <div
                    className={cn(
                      "hidden sm:flex sm:flex-col sm:justify-center",
                      alignRight ? "sm:order-2 sm:items-start sm:pl-10" : "sm:items-end sm:pr-10"
                    )}
                  >
                    {alignRight && <TimelineCard item={item} />}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function TimelineCard({ item }: { item: (typeof whyChooseUs)[number] }) {
  return (
    <Reveal>
      <div className="max-w-sm rounded-2xl border border-primary-100 bg-white p-5 shadow-[0_10px_30px_-15px_rgba(7,20,38,0.15)]">
        <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.description}</p>
      </div>
    </Reveal>
  );
}
