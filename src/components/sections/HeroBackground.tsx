"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Activity, HeartPulse, Stethoscope, Cross, Plus } from "lucide-react";

const particles = [
  { Icon: HeartPulse, top: "18%", left: "12%", size: 30, depth: 22, delay: 0 },
  { Icon: Cross, top: "68%", left: "8%", size: 22, depth: 14, delay: 0.5 },
  { Icon: Activity, top: "28%", left: "88%", size: 34, depth: 26, delay: 0.2 },
  { Icon: Stethoscope, top: "74%", left: "84%", size: 28, depth: 18, delay: 0.8 },
  { Icon: Plus, top: "48%", left: "94%", size: 18, depth: 10, delay: 1.1 },
  { Icon: Plus, top: "10%", left: "48%", size: 16, depth: 12, delay: 0.35 },
];

export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const x = useSpring(mvX, { stiffness: 40, damping: 20 });
  const y = useSpring(mvY, { stiffness: 40, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mvX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mvY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-700 to-primary-800"
    >
      {/* hospital exterior photograph, slow cinematic zoom */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hospital-exterior.jpeg"
            alt="Vivarch Hospital, Borivali — building exterior at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_28%]"
          />
        </motion.div>
      </motion.div>

      {/* brand colour grade over the photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/75 to-primary-900/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/15 to-transparent" />

      {/* animated mesh gradient */}
      <div className="bg-mesh absolute inset-0 bg-[length:200%_200%] animate-gradient-shift opacity-60 mix-blend-screen" />

      {/* soft glow orbs */}
      <motion.div
        style={{ x: useMotionTemplate`${x}px`, y: useMotionTemplate`${y}px` }}
        className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-accent-500/25 blur-[100px] animate-float-slow"
      />
      <div className="absolute right-[8%] top-[10%] h-96 w-96 rounded-full bg-primary-400/30 blur-[120px] animate-float-slower" />
      <div className="absolute bottom-[-10%] left-[35%] h-80 w-80 rounded-full bg-accent-400/20 blur-[110px] animate-float-slow" />

      {/* heartbeat line */}
      <svg
        className="absolute bottom-[18%] left-0 w-full opacity-40"
        height="80"
        viewBox="0 0 1200 80"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40 H420 L460 40 L480 8 L505 72 L528 40 L560 40 H1200"
          stroke="url(#heartbeatGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1000}
          strokeDasharray={1000}
          className="animate-heartbeat-draw"
        />
        <defs>
          <linearGradient id="heartbeatGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3fd0d6" stopOpacity="0" />
            <stop offset="45%" stopColor="#3fd0d6" stopOpacity="1" />
            <stop offset="100%" stopColor="#3fd0d6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* floating medical particles */}
      {particles.map(({ Icon, top, left, size, depth, delay }, i) => (
        <motion.div
          key={i}
          style={{
            top,
            left,
            x: useMotionTemplate`${x}px`,
            y: useMotionTemplate`${y}px`,
          }}
          className="absolute text-white/25"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <div style={{ transform: `translate(${depth}px, ${depth}px)` }}>
            <Icon size={size} strokeWidth={1.5} />
          </div>
        </motion.div>
      ))}

      {/* grid texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* bottom fade to white */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
