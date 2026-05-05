import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Compass, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";

const sections = [
  {
    icon: ShieldCheck,
    label: "01 — Practice",
    title: "Quality & Regulatory Transformation",
    blurb: "From eQMS implementation through audit readiness, we operationalize compliance so it accelerates the business — not slows it down.",
    items: [
      "QMS / eQMS implementation & management",
      "Risk management & CAPA",
      "Training program design",
      "Audit execution & readiness (MDSAP, EU MDR, ISO 13485, QMSR, AS9100D, ISO/IEC 17025)",
      "Regulatory strategy & submissions",
      "Remediation & compliance",
      "EU MDR & QMSR transitions",
      "Pre-due diligence review",
    ],
  },
  {
    icon: Compass,
    label: "02 — Practice",
    title: "Program & Project Management",
    blurb: "Cross-functional orchestration that turns ambition into measurable, on-time outcomes — with the financial and risk discipline executives expect.",
    items: [
      "Project planning & roadmapping",
      "Plan execution & oversight",
      "Resource allocation & management",
      "Cross-functional program orchestration",
      "OKRs, KPIs & performance frameworks",
      "Risk modeling & dependency management",
    ],
  },
];

const Services = () => (
  <div>
    <PageHero
      eyebrow="Advisory Services"
      title="Quality, regulatory, and program leadership."
      lede="Two advisory practices led by senior operators with deep, hands-on experience in regulated industries. Looking for software delivery? See our dedicated Software Development practice."
    />

    {sections.map((s, i) => (
      <section key={s.title} className={i % 2 === 1 ? "py-24 md:py-32 bg-ivory-warm border-y border-border" : "py-24 md:py-32"}>
        <div className="container-tight grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="size-14 grid place-items-center bg-ink text-ivory">
              <s.icon className="size-6" />
            </div>
            <div className="eyebrow mt-8"><span className="h-px w-8 bg-brass" />{s.label}</div>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-4 leading-[1.05] text-ink text-balance">
              {s.title}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">{s.blurb}</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-ink font-medium link-underline">
              Learn how we can help <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="md:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {s.items.map((it) => (
                <li key={it} className="py-5 flex items-start gap-4 group">
                  <Check className="size-4 text-brass mt-1 flex-none" />
                  <span className="text-ink/90 group-hover:text-ink transition-colors">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    ))}

    <CTABanner title="Not sure which practice fits?" subtitle="Most engagements span two. Tell us what you're working on — we'll point you in the right direction." />
  </div>
);

export default Services;