"use client";

import { Star, MessageSquareQuote, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

// Patient testimonials will populate here once collected — intentionally left
// empty rather than filled with placeholder quotes attributed to patients.
const testimonials: { name: string; text: string; rating: number }[] = [];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-white py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          kicker="Patient Experience"
          title="What Our Patients Say"
          description="Genuine feedback from the people we care for — verified through Google Reviews."
        />

        {testimonials.length === 0 ? (
          <Reveal>
            <div className="mx-auto flex max-w-xl flex-col items-center gap-5 rounded-3xl border border-dashed border-primary-200 bg-mist px-10 py-16 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary-500 shadow-sm">
                <MessageSquareQuote className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <h3 className="font-display text-xl font-bold text-ink">
                Patient reviews are on their way
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                As a newly established hospital, we&apos;re just getting started. Verified patient
                reviews will appear here as they come in through Google.
              </p>
              <Button
                href="https://www.google.com/maps/search/?api=1&query=Vivarch+Hospital+Borivali"
                variant="ghost"
                icon={<ExternalLink className="h-4 w-4" />}
              >
                View us on Google Maps
              </Button>
            </div>
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-3xl border border-primary-100 bg-mist p-7">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-ink">{t.name}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
