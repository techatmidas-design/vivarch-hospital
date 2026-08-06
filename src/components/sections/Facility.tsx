"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const photos = [
  {
    src: "/images/facility/reception.jpg",
    alt: "Vivarch Hospital reception desk, Borivali",
    className: "sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto",
  },
  {
    src: "/images/facility/lounge-view.jpg",
    alt: "Vivarch Hospital waiting lounge with city view",
    className: "aspect-[4/3]",
  },
  {
    src: "/images/facility/lounge-lobby.jpg",
    alt: "Vivarch Hospital lobby seating area",
    className: "aspect-[4/3]",
  },
  {
    src: "/images/facility/corridor.jpg",
    alt: "Vivarch Hospital patient corridor",
    className: "sm:col-span-2 aspect-[16/9] sm:aspect-[21/9]",
  },
];

export function Facility() {
  return (
    <section className="relative bg-white py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          kicker="Inside Vivarch Hospital"
          title="A Space Built for Comfort and Care"
          description="A calm, modern environment designed around patients and families — from the moment you walk in."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 0.08} className={photo.className}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full w-full overflow-hidden rounded-3xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
