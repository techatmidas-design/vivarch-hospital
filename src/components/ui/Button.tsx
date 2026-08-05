"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-white hover:bg-primary-600 shadow-[0_8px_30px_-8px_rgba(0,91,172,0.6)] focus-visible:ring-primary-400",
        accent:
          "bg-gradient-to-r from-accent-400 to-accent-600 text-primary-900 hover:brightness-110 shadow-[0_10px_34px_-6px_rgba(63,208,214,0.8)] focus-visible:ring-accent-400",
        outline:
          "border border-white/30 text-white hover:bg-white/10 focus-visible:ring-white/50",
        ghost:
          "text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-300",
        emergency:
          "bg-red-600 text-white hover:bg-red-500 shadow-[0_8px_30px_-8px_rgba(220,38,38,0.7)] focus-visible:ring-red-400",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-[15px]",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> & {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  icon?: React.ReactNode;
};

export function Button({
  children,
  className,
  variant,
  size,
  href,
  onClick,
  type = "button",
  icon,
}: ButtonProps) {
  const classes = cn(buttonStyles({ variant, size }), className);

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2"
    >
      {children}
      {icon}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
