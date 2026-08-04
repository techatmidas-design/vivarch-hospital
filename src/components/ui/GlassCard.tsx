import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
  light = false,
}: {
  className?: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={cn("rounded-3xl", light ? "glass-light" : "glass", className)}>
      {children}
    </div>
  );
}
