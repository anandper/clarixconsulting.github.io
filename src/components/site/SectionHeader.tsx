import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}

export const SectionHeader = ({ eyebrow, title, description, align = "left", invert, className }: Props) => (
  <div className={cn(align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl", className)}>
    {eyebrow && (
      <div className={cn("eyebrow", invert && "text-ivory/60")}>
        <span className={cn("h-px w-8", invert ? "bg-ivory/40" : "bg-brass")} />
        {eyebrow}
      </div>
    )}
    <h2 className={cn("font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mt-4 text-balance",
      invert ? "text-ivory" : "text-ink"
    )}>
      {title}
    </h2>
    {description && (
      <p className={cn("mt-6 text-lg leading-relaxed text-pretty", invert ? "text-ivory/70" : "text-muted-foreground")}>
        {description}
      </p>
    )}
  </div>
);