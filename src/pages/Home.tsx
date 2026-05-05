import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ShieldCheck, Cpu, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";
import heroImg from "@/assets/hero.jpg";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Quality & Regulatory Transformation",
    body: "QMS/eQMS, audits, CAPA, EU MDR & QMSR transitions — built for regulated reality.",
    href: "/services",
  },
  {
    icon: Cpu,
    title: "Software Delivery Leadership",
    body: "Engineering org leadership, AI & cloud modernization, DevSecOps in regulated environments.",
    href: "/software",
  },
  {
    icon: Compass,
    title: "Program & Project Management",
    body: "Cross-functional orchestration with OKRs, KPIs, risk modeling, and delivery rigor.",
    href: "/services",
  },
];

const industries = ["Life Sciences", "MedTech", "Biotech", "Technology", "FinServ"];

const proof = [
  { k: "15+", v: "Years Fortune 500 program leadership" },
  { k: "$20M+", v: "Programs delivered, P&L owned" },
  { k: "Regulated", v: "FDA, ISO 13485, MDSAP, EU MDR" },
  { k: "Senior", v: "Principal-led — never junior staff" },
];

const metrics = [
  { n: "65%", l: "Cost reduction" },
  { n: "40%", l: "Faster ticket resolution" },
  { n: "90%", l: "Technical debt eliminated" },
  { n: "25%", l: "Delivery velocity acceleration" },
];

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative -mt-20 pt-20 bg-gradient-ivory overflow-hidden">
        <div className="container-tight pt-16 md:pt-24 pb-20 md:pb-32 relative">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 animate-fade-up">
              <div className="eyebrow"><span className="h-px w-8 bg-brass" />Clarix Consulting Group</div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[0.98] mt-6 text-ink text-balance">
                Clarity. <em className="italic text-brass font-normal">Delivered.</em>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed text-pretty">
                Principal-led consulting for Life Sciences and Technology — Quality & Regulatory transformation, Software Development, and Program Management. Senior operators who've already done the work.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button asChild variant="ink" size="xl">
                  <Link to="/contact">Schedule a Conversation <ArrowRight /></Link>
                </Button>
                <Button asChild variant="ghost" size="xl">
                  <Link to="/services" className="text-ink">Explore services</Link>
                </Button>
              </div>
            </div>
            <div className="md:col-span-5 relative animate-fade-in">
              <div className="aspect-[4/5] overflow-hidden shadow-elegant">
                <img src={heroImg} alt="Architectural light and shadow representing clarity" width={1920} height={1280} className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-ink text-ivory px-6 py-5 hidden md:block shadow-soft">
                <div className="text-xs uppercase tracking-[0.2em] text-ivory/60">Clarix</div>
                <div className="font-display text-2xl mt-1">Clarity. Delivered.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-tight">
          <SectionHeader
            eyebrow="What we do"
            title="Three practices. One discipline of clarity."
            description="Whether you're untangling a regulatory program, leading a software organization, or rescuing a stalled initiative — we bring senior operators, not slide decks."
          />
          <div className="grid md:grid-cols-3 gap-px mt-16 bg-border border border-border">
            {pillars.map((p) => (
              <div key={p.title} className="bg-background p-10 md:p-12 group hover:bg-ivory-warm transition-colors duration-500">
                <div className="size-12 grid place-items-center bg-ink text-ivory">
                  <p.icon className="size-5" />
                </div>
                <h3 className="font-display text-2xl mt-8 text-ink leading-snug">{p.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.body}</p>
                <Link to={p.href} className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink link-underline">
                  Learn more <ArrowUpRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 border-y border-border bg-ivory-warm">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="eyebrow"><span className="h-px w-8 bg-brass" />Who we serve</div>
              <h2 className="font-display text-3xl md:text-4xl font-light mt-4 text-ink max-w-xl text-balance">
                Trusted by organizations operating where the stakes are highest.
              </h2>
            </div>
            <Link to="/industries" className="text-sm font-medium text-ink link-underline self-start md:self-end">
              All industries →
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-10">
            {industries.map((i) => (
              <div key={i} className="font-display text-2xl md:text-3xl text-ink/70 hover:text-ink transition-colors">
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CLARIX */}
      <section className="py-24 md:py-32">
        <div className="container-tight grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <SectionHeader eyebrow="Why Clarix" title="Senior operators. Regulated reality." />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Most firms send junior staff with a playbook. We send the principal who's already done it — at scale, in your industry, with the audit trail to prove it.
            </p>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-px bg-border border border-border">
            {proof.map((p) => (
              <div key={p.k} className="bg-background p-8">
                <div className="font-display text-3xl text-ink">{p.k}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-24 md:py-32 bg-ivory-warm">
        <div className="container-tight">
          <SectionHeader
            eyebrow="Outcomes, not deliverables"
            title="Numbers that mattered to the boardroom."
            description="Selected results from recent engagements across regulated and high-growth environments."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mt-16 bg-border border border-border">
            {metrics.map((m) => (
              <div key={m.l} className="bg-background p-8 md:p-10">
                <div className="font-display text-5xl md:text-6xl font-light text-ink">{m.n}</div>
                <div className="mt-4 text-sm uppercase tracking-[0.15em] text-muted-foreground">{m.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild variant="ink" size="lg">
              <Link to="/software">See software case studies <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default Home;