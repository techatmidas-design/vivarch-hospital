"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Siren, Ambulance } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { hospital } from "@/lib/data";

export function Emergency() {
  return (
    <section className="relative overflow-hidden bg-primary-900 py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/40 via-primary-900 to-primary-900" />
      <div className="pointer-events-none absolute -left-20 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-red-600/10 blur-[120px]" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[auto_1fr_auto]">
          <Reveal>
            <div className="relative flex h-24 w-24 items-center justify-center">
              <span className="absolute h-full w-full rounded-full bg-red-600/40 animate-pulse-ring" />
              <span
                className="absolute h-full w-full rounded-full bg-red-600/40 animate-pulse-ring"
                style={{ animationDelay: "0.6s" }}
              />
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_0_40px_rgba(220,38,38,0.6)]">
                <Siren className="h-9 w-9" strokeWidth={1.75} />
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-3 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 self-center text-xs font-semibold uppercase tracking-[0.2em] text-red-300 lg:self-start">
              Medical Emergency
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Ambulance className="h-4 w-4" />
              </motion.span>
            </span>
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              24×7 Emergency Care, Always Ready
            </h2>
            <p className="max-w-xl text-white/60">
              Every minute matters. Our emergency team at Vivarch Hospital, Borivali is available
              around the clock — every day of the year.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col items-center gap-3 lg:items-end">
            <a
              href={hospital.emergencyPhoneHref}
              className="font-display text-3xl font-extrabold text-white transition-colors hover:text-accent-300 sm:text-4xl"
            >
              {hospital.emergencyPhone}
            </a>
            <div className="flex gap-3">
              <Button href={hospital.emergencyPhoneHref} variant="emergency" icon={<Phone className="h-4 w-4" />}>
                Call Now
              </Button>
              <Button href={hospital.whatsappHref} variant="outline" icon={<MessageCircle className="h-4 w-4" />}>
                WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
