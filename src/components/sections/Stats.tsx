"use client";

import { motion } from "framer-motion";
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
    <section id="stats" className="relative -mt-1 bg-white pb-16 pt-2">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative -mt-6 rounded-3xl border border-primary-100 bg-white/80 p-2 shadow-[0_30px_80px_-30px_rgba(7,20,38,0.25)] backdrop-blur sm:-mt-12 lg:-mt-20"
        >
          <RevealGroup
            className="grid grid-cols-2 gap-2 rounded-[1.25rem] bg-gradient-to-br from-primary-600 to-primary-800 p-4 sm:p-5 lg:grid-cols-4"
            stagger={0.1}
          >
            {stats.map((stat) => (
              <RevealItem
                key={stat.label}
                className="group flex flex-col items-center gap-2 px-2 py-2 text-center"
              >
                <motion.span
                  whileHover={{ scale: 1.1, rotate: -4 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent-300 transition-colors duration-300 group-hover:bg-white/20"
                >
                  <stat.icon className="h-5 w-5" strokeWidth={1.75} />
                </motion.span>
                <span className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                  {stat.isYear ? (
                    stat.value
                  ) : (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  )}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-white/60">
                  {stat.label}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </motion.div>
      </Container>
    </section>
  );
}
