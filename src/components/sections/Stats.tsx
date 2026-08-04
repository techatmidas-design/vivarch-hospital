"use client";

import { Building2, Siren, Users, CalendarRange } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { icon: Building2, value: 13, suffix: "+", label: "Specialities & Departments" },
  { icon: Siren, value: 24, suffix: "×7", label: "Emergency Readiness" },
  { icon: Users, value: 3, suffix: "", label: "Leadership Specialists" },
  { icon: CalendarRange, value: 2025, suffix: "", label: "Established", isYear: true },
];

export function Stats() {
  return (
    <section id="stats" className="relative -mt-1 bg-white pb-20 pt-4">
      <Container>
        <div className="relative -mt-24 rounded-3xl border border-primary-100 bg-white/80 p-2 shadow-[0_30px_80px_-30px_rgba(7,20,38,0.25)] backdrop-blur">
          <RevealGroup
            className="grid grid-cols-2 gap-2 rounded-[1.4rem] bg-gradient-to-br from-primary-600 to-primary-800 p-6 sm:p-8 lg:grid-cols-4"
            stagger={0.1}
          >
            {stats.map((stat) => (
              <RevealItem key={stat.label} className="flex flex-col items-center gap-3 px-2 py-4 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent-300">
                  <stat.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                  {stat.isYear ? (
                    stat.value
                  ) : (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  )}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-white/60">
                  {stat.label}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
