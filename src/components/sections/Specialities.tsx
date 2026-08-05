"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { departments } from "@/lib/data";
import { iconMap } from "@/lib/icon-map";

export function Specialities() {
  return (
    <section id="specialities" className="relative bg-mist py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          kicker="Our Specialities"
          title="Comprehensive Care Across Every Discipline"
          description="From critical emergencies to preventive checkups, Vivarch Hospital brings together specialised departments under one roof in Borivali."
        />

        <RevealGroup
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {departments.map((dept) => {
            const Icon = iconMap[dept.icon];
            return (
              <RevealItem key={dept.slug}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative h-full"
                >
                <Link
                  href={`/specialities/${dept.slug}`}
                  className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary-100 bg-white p-7 shadow-[0_2px_20px_-8px_rgba(7,20,38,0.08)] transition-shadow duration-300 hover:shadow-[0_24px_60px_-20px_rgba(0,91,172,0.25)]"
                >
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary-50 transition-transform duration-500 group-hover:scale-125" />
                  <div className="relative flex flex-col gap-5">
                    <div className="flex items-center justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                        {Icon && <Icon className="h-7 w-7" strokeWidth={1.75} />}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-primary-300 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">{dept.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {dept.description}
                      </p>
                    </div>
                  </div>
                </Link>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
