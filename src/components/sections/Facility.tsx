"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const photos = [
  { src: "/images/facility/reception.jpg", alt: "Vivarch Hospital reception desk, Borivali" },
  {
    src: "/images/facility/lounge-view.jpg",
    alt: "Vivarch Hospital waiting lounge with city view",
  },
  { src: "/images/facility/lounge-lobby.jpg", alt: "Vivarch Hospital lobby seating area" },
  { src: "/images/facility/corridor.jpg", alt: "Vivarch Hospital patient corridor" },
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

        <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 220px, (min-width: 640px) 33vw, 45vw"
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
