import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  kicker: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]",
            light
              ? "border-white/25 bg-white/10 text-accent-300"
              : "border-primary-200 bg-primary-50 text-primary-600"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
          {kicker}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display max-w-3xl text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.1] font-extrabold tracking-tight",
            light ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "max-w-2xl text-[17px] leading-relaxed",
              light ? "text-white/70" : "text-slate-600"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
