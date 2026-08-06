"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { hospital } from "@/lib/data";

const contactPoints = [
  {
    icon: Phone,
    label: "Emergency / Phone",
    value: hospital.emergencyPhone,
    href: hospital.emergencyPhoneHref,
  },
  { icon: Mail, label: "Email", value: hospital.email, href: `mailto:${hospital.email}` },
  {
    icon: MapPin,
    label: "Address",
    value: hospital.address.full,
    href: `https://www.google.com/maps?cid=${hospital.placeCid}`,
  },
  { icon: Clock, label: "Emergency Hours", value: "Open 24 Hours, Every Day", href: null },
];

const mapSrc = `https://maps.google.com/maps?cid=${hospital.placeCid}&output=embed`;

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Appointment Request%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(
      form.phone
    )}%0AMessage: ${encodeURIComponent(form.message || "—")}`;
    window.open(`${hospital.whatsappHref}?text=${text}`, "_blank");
  }

  return (
    <section id="contact" className="relative bg-white py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          kicker="Contact Us"
          title="We're Here to Help"
          description="Reach out to book an appointment, ask a question, or find your way to Vivarch Hospital."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-primary-100 shadow-[0_20px_50px_-25px_rgba(7,20,38,0.25)]">
              <iframe
                title="Vivarch Hospital location"
                src={mapSrc}
                className="h-72 w-full lg:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col gap-3">
              {contactPoints.map((point) => (
                <div
                  key={point.label}
                  className="flex items-start gap-3 rounded-2xl border border-primary-100 bg-mist p-4"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-primary-500 shadow-sm">
                    <point.icon className="h-4.5 w-4.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {point.label}
                    </p>
                    {point.href ? (
                      <a
                        href={point.href}
                        target={point.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="break-words text-sm font-semibold text-ink hover:text-primary-600"
                      >
                        {point.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-ink">{point.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col gap-5 rounded-3xl border border-primary-100 bg-gradient-to-br from-mist to-white p-8"
            >
              <h3 className="font-display text-xl font-bold text-ink">Request an Appointment</h3>
              <p className="-mt-3 text-sm text-slate-500">
                Sent directly to us on WhatsApp — we&apos;ll confirm your slot shortly.
              </p>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Full Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl border border-primary-100 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary-400"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-xl border border-primary-100 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary-400"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Message (optional)
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="resize-none rounded-xl border border-primary-100 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary-400"
                  placeholder="Tell us what you need help with"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(0,91,172,0.6)] transition-colors hover:bg-primary-600"
              >
                <Send className="h-4 w-4" /> Send via WhatsApp
              </motion.button>

              <Button href={hospital.emergencyPhoneHref} variant="ghost" icon={<Phone className="h-4 w-4" />}>
                Or call us directly
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
