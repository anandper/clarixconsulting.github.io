import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTABanner = ({
  title = "Ready to move faster with less risk?",
  subtitle = "Let's talk about what you're building — and how we can help you deliver.",
  cta = "Schedule a Conversation",
  to = "/contact",
}: { title?: string; subtitle?: string; cta?: string; to?: string }) => (
  <section className="relative overflow-hidden border-t border-border bg-ivory-warm">
    <div className="container-tight py-24 md:py-32 relative">
      <div className="grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <div className="eyebrow"><span className="h-px w-8 bg-brass" />Let's begin</div>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] mt-4 text-balance text-ink">{title}</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl text-pretty">{subtitle}</p>
        </div>
        <div className="md:col-span-4 md:text-right">
          <Button asChild variant="ink" size="xl">
            <Link to={to}>{cta} <ArrowRight className="ml-1" /></Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);