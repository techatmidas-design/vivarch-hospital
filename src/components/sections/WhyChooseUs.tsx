"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { whyChooseUs } from "@/lib/data";
import { iconMap } from "@/lib/icon-map";

export function WhyChooseUs() {
  return (
    <section id="why-vivarch" className="relative overflow-hidden bg-white py-28">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent-300/20 blur-3xl" />

      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          kicker="Why Choose Vivarch"
          title="Healthcare Built Around You"
          description="Every decision at Vivarch Hospital — from staffing to infrastructure — is made with one priority: the wellbeing of our patients."
        />

        <Reveal>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(7,20,38,0.35)] sm:aspect-[3/1]">
            <Image
              src="/images/facility/compassion.jpg"
              alt="A doctor holding a patient's hand at Vivarch Hospital"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-900/20 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-xs font-display text-xl font-bold italic text-white sm:bottom-8 sm:left-8 sm:text-2xl">
              &ldquo;Healing begins with compassion.&rdquo;
            </p>
          </div>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <RevealItem key={item.title}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-primary-100 bg-mist/60 p-5 transition-colors duration-300 hover:border-primary-300 hover:bg-white hover:shadow-[0_16px_40px_-20px_rgba(0,91,172,0.3)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-md">
                    {Icon && <Icon className="h-5 w-5" strokeWidth={1.75} />}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
