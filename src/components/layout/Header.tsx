"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { hospital } from "@/lib/data";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Specialities", href: "#specialities" },
  { label: "Why Vivarch", href: "#why-vivarch" },
  { label: "Leadership", href: "#leadership" },
  { label: "Technology", href: "#technology" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 lg:px-6",
            scrolled
              ? "glass-light shadow-[0_10px_40px_-15px_rgba(7,20,38,0.25)]"
              : "bg-transparent"
          )}
        >
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1.5 shadow-md ring-1 ring-black/5">
              <Image
                src="/images/logo-mark.png"
                alt="Vivarch Healthcare"
                width={64}
                height={64}
                className="h-full w-full object-contain"
                priority
              />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={cn(
                  "font-display text-lg font-extrabold tracking-tight transition-colors",
                  scrolled ? "text-ink" : "text-white"
                )}
              >
                Vivarch
              </span>
              <span
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-[0.25em] transition-colors",
                  scrolled ? "text-primary-500" : "text-accent-300"
                )}
              >
                Hospital
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-slate-600 hover:bg-primary-50 hover:text-primary-600"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={hospital.emergencyPhoneHref}
              className={cn(
                "flex items-center gap-2 text-sm font-semibold transition-colors",
                scrolled ? "text-primary-700" : "text-white"
              )}
            >
              <Phone className="h-4 w-4" />
              Emergency
            </a>
            <Button href="#contact" size="sm">
              Book Appointment
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
              scrolled ? "text-ink" : "text-white"
            )}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-2 rounded-2xl border border-primary-100 bg-white p-4 shadow-[0_20px_60px_-15px_rgba(7,20,38,0.35)] lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-[15px] font-medium text-ink hover:bg-primary-50"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 flex flex-col gap-2 border-t border-primary-100 pt-3">
              <Button href={hospital.emergencyPhoneHref} variant="emergency" size="sm">
                <Phone className="h-4 w-4" /> {hospital.emergencyPhone}
              </Button>
              <Button href="#contact" size="sm">
                Book Appointment
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
