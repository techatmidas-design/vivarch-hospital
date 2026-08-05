"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Phone, CalendarCheck } from "lucide-react";
import { HeroBackground } from "@/components/sections/HeroBackground";
import { Button } from "@/components/ui/Button";
import { hospital } from "@/lib/data";

const rotatingMessages = [
  "World-Class Specialists. Compassionate Care.",
  "Multi-Speciality Excellence in Borivali.",
  "24×7 Emergency, Always Ready.",
  "Advanced Diagnostics. Trusted Treatment.",
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % rotatingMessages.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative flex min-h-[88svh] items-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 pb-14 lg:px-10 lg:pt-24">
        <div className="flex max-w-4xl flex-col items-start gap-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            Borivali, Mumbai &middot; Multi-Speciality Hospital
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.6rem,6vw,4.85rem)] font-extrabold leading-[1.05] tracking-tight text-white"
          >
            Premium Healthcare,
            <br />
            <span className="text-gradient">Rooted in Trust.</span>
          </motion.h1>

          <div className="h-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-lg font-medium text-white/75"
              >
                {rotatingMessages[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="max-w-xl text-base leading-relaxed text-white/60"
          >
            Vivarch Hospital brings together experienced specialists across oncology, neurology
            and cardiology — supported by modern diagnostics and round-the-clock emergency care,
            at Borivali, Mumbai.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href={hospital.emergencyPhoneHref} variant="emergency" size="lg" icon={<Phone className="h-4 w-4" />}>
              Emergency Call
            </Button>
            <Button href="#contact" variant="accent" size="lg" icon={<CalendarCheck className="h-4 w-4" />}>
              Book Appointment
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#stats"
        aria-label="Scroll to specialities and hospital stats"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#specialities")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 text-white/60 transition-colors hover:text-accent-300 sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-7 w-7" />
      </motion.a>
    </section>
  );
}
