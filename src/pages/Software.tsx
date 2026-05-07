import { Link } from "react-router-dom";
import {
  ArrowRight, Code2, Cloud, Bot, GitBranch, ShieldCheck, Layers,
  Search, PenTool, Truck, BarChart2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import softwareHero from "@/assets/software-hero.jpg";

// ── Offerings — moved into Hero as compact grid ──
const offerings = [
  { icon: Code2,       title: "End-to-End Program Delivery" },
  { icon: Layers,      title: "Engineering Org Leadership" },
  { icon: Cloud,       title: "Cloud & Platform Modernization" },
  { icon: Bot,         title: "AI & ML Transformation" },
  { icon: GitBranch,   title: "DevSecOps & CI/CD" },
  { icon: ShieldCheck, title: "Delivery in Regulated Environments" },
];

// ── Section A: How We Work ──
const approach = [
  {
    phase: "01",
    icon: Search,
    title: "Discovery & Framing",
    body: "We start with the business problem — not the technology. Every engagement begins with structured discovery that surfaces the real constraint: delivery capability, architecture, or organizational alignment. We don't prescribe a solution before we understand the problem.",
  },
  {
    phase: "02",
    icon: PenTool,
    title: "Solution Design",
    body: "We bring senior-level pattern recognition from 15+ years of enterprise programs across FinServ, Life Sciences, Manufacturing, and Retail. We've seen what works — and what looks good on a slide but fails in execution. Our designs are built to be delivered, not admired.",
  },
  {
    phase: "03",
    icon: Truck,
    title: "Delivery Ownership",
    body: "We don't hand off a deck and disappear. We own delivery end to end — timelines, resources, stakeholder alignment, and outcomes. P&L accountable from day one. The person who designs the engagement runs it.",
  },
  {
    phase: "04",
    icon: BarChart2,
    title: "Measurement & Transfer",
    body: "Every engagement ends with measurable outcomes and a capable internal team. We define success metrics at the start, track them throughout, and transfer ownership deliberately. We build organizations that don't need us — that's how we know we've done our job.",
  },
];

// ── Section B: Technology We Deploy ──
const stack = [
  {
    group: "Cloud & Infrastructure",
    context: "Migration, modernization, and FinOps governance",
    items: ["Microsoft Azure", "Amazon Web Services", "Google Cloud Platform", "Terraform / Ansible (IaC)", "Azure DevOps", "GitHub Actions"],
  },
  {
    group: "AI & Intelligent Automation",
    context: "From pilot to production — RAG, agents, and ML ops",
    items: ["Azure OpenAI Service", "AWS Bedrock", "RAG Pipeline Architecture", "Agentic AI Frameworks", "Copilot Studio", "GitHub Copilot", "AWS SageMaker"],
  },
  {
    group: "Data & Analytics",
    context: "Governance, reporting, and platform consolidation",
    items: ["Microsoft Fabric", "Databricks", "Tableau", "Cosmos DB / SQL / NoSQL"],
  },
  {
    group: "Enterprise Integration",
    context: "API-first architecture and platform connectivity",
    items: ["Salesforce", "MuleSoft", "Boomi", "ServiceNow", "UiPath RPA", "Optimizely"],
  },
  {
    group: "Delivery Infrastructure",
    context: "Execution frameworks for complex programs",
    items: ["CI/CD Pipeline Architecture", "DevSecOps Practices", "OKR & KPI Frameworks", "SOW & Engagement Management", "P&L & Resource Planning"],
  },
];

// ── Section C: Case Studies ──
const cases = [
  {
    n: "01",
    industry: "Insurance / FinServ",
    title: "Contact Center AI Transformation",
    challenge: "High ticket resolution times and manual knowledge management across a sprawling support organization.",
    solution: "Architected a RAG pipeline on Azure OpenAI and deployed an LLM-powered IT support chatbot integrated with existing knowledge systems.",
    metric: "40%",
    metricLabel: "reduction in ticket resolution time",
  },
  {
    n: "02",
    industry: "Title Insurance",
    title: "Technical Debt Elimination",
    challenge: "A legacy Lender Integration System carrying ~90% technical debt and blocking every major release.",
    solution: "Applied a Strangler Fig modernization pattern with Salesforce and MuleSoft re-engineering — incrementally, with zero downtime.",
    metric: "90%",
    metricLabel: "technical debt eliminated · zero disruptions",
  },
  {
    n: "03",
    industry: "Real Estate / Retail",
    title: "Cloud Migration & Cost Optimization",
    challenge: "Legacy infrastructure, escalating licensing costs, and limited engineering leverage.",
    solution: "Executed Cloud Optimizely migration aligned to the Azure Well-Architected Framework with active FinOps governance.",
    metric: "70% / 30%",
    metricLabel: "infra cost reduction · cloud cost savings",
  },
  {
    n: "04",
    industry: "Manufacturing",
    title: "AI-Driven Delivery Acceleration",
    challenge: "Slow SDLC, manual QA processes, and inconsistent defect detection across product lines.",
    solution: "Led an AI-centric SDLC transition with ML-based test automation and intelligent defect triage.",
    metric: "25% / 40%",
    metricLabel: "delivery acceleration · defect detection improvement",
  },
];

const Software = () => (
  <div>

    {/* ── SECTION 1: HERO + OFFERINGS GRID ── */}
    <section className="relative -mt-20 pt-20 overflow-hidden bg-gradient-ivory">
      <div className="absolute inset-0 opacity-[0.08]">
        <img src={softwareHero} alt="" width={1920} height={1280} className="h-full w-full object-cover" />
      </div>

      <div className="container-tight pt-20 md:pt-28 pb-24 md:pb-32 relative">

        {/* Hero headline */}
        <div className="eyebrow"><span className="h-px w-8 bg-brass" />Software Development Practice</div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[0.98] mt-6 text-ink text-balance max-w-4xl">
          Engineering leadership for software that{" "}
          <em className="italic text-brass font-normal">ships.</em>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
          A dedicated practice for technology modernization, AI delivery, and engineering org
          leadership — operating with the velocity tech demands and the rigor regulated
          industries require.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button asChild variant="ink" size="xl">
            <Link to="/contact">Start a Software Engagement <ArrowRight /></Link>
          </Button>
          <Button asChild variant="ghost" size="xl">
            <Link to="/services" className="text-ink">See advisory services</Link>
          </Button>
        </div>

        {/* Offerings compact grid — replaces full section */}
        <div className="mt-16 pt-16 border-t border-ink/10 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5">
          {offerings.map((o) => (
            <div key={o.title} className="flex items-start gap-3">
              <div className="size-8 grid place-items-center bg-brass/15 text-brass border border-brass/30 shrink-0 mt-0.5">
                <o.icon className="size-4" />
              </div>
              <span className="text-sm text-ink/80 leading-snug font-medium">{o.title}</span>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* ── SECTION 2: HOW WE WORK ── */}
    <section className="py-24 md:py-32 border-y border-background/10 bg-ink text-background">
      <div className="container-tight">

        <div className="max-w-3xl">
          <div className="eyebrow text-brass/70">
            <span className="h-px w-8 bg-brass" />How we work
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mt-4 text-background text-balance">
            Senior operators with a point of view — and the discipline to deliver.
          </h2>
          <p className="mt-6 text-lg text-background/60 leading-relaxed max-w-2xl">
            Our engagement model is built around one principle: the person who designs the
            solution owns the outcome. No handoffs. No junior substitution. No gap between
            what we promise and what we deliver.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-background/10 border border-background/10">
          {approach.map((a) => (
            <div
              key={a.phase}
              className="bg-ink p-8 md:p-12 hover:bg-ink/80 transition-colors duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="font-display text-4xl text-brass/40 leading-none shrink-0">
                  {a.phase}
                </div>
                <div>
                  <div className="size-10 grid place-items-center bg-brass/15 text-brass border border-brass/30 mb-6">
                    <a.icon className="size-4" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-background leading-snug">
                    {a.title}
                  </h3>
                  <p className="mt-4 text-background/60 leading-relaxed text-sm">{a.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* ── SECTION 3: TECHNOLOGY WE DEPLOY ── */}
    <section className="py-20 border-b border-border bg-ivory-warm">
      <div className="container-tight">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="eyebrow"><span className="h-px w-8 bg-brass" />Technology we deploy</div>
            <h2 className="font-display text-3xl md:text-4xl font-light mt-4 text-ink max-w-2xl text-balance">
              Technically fluent across the full enterprise stack.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-xl leading-relaxed">
              We speak your team's tooling language from day one — reducing ramp time and
              accelerating delivery across cloud, AI, data, and regulated environments.
            </p>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border border border-border">
          {stack.map((s) => (
            <div
              key={s.group}
              className="bg-background p-6 hover:bg-ivory-warm transition-colors duration-300"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-brass">{s.group}</div>
              <div className="mt-1 text-[11px] text-muted-foreground italic leading-snug">
                {s.context}
              </div>
              <ul className="mt-4 space-y-2">
                {s.items.map((i) => (
                  <li key={i} className="text-ink/85 text-sm">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* ── SECTION 4: CASE STUDIES ── */}
    <section className="py-24 md:py-32 bg-background" hidden="true">
      <div className="container-tight">

        <div className="max-w-3xl">
          <div className="eyebrow"><span className="h-px w-8 bg-brass" />Selected work</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mt-4 text-ink text-balance">
            Software case studies.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Outcomes from recent software, AI, and cloud engagements. Client names withheld
            per confidentiality.
          </p>
        </div>

        <div className="space-y-px bg-border border border-border mt-16">
          {cases.map((c) => (
            <article
              key={c.n}
              className="bg-background grid md:grid-cols-12 gap-8 p-8 md:p-12 hover:bg-ivory-warm transition-colors duration-500"
            >
              <div className="md:col-span-1">
                <div className="font-display text-3xl text-brass">{c.n}</div>
              </div>
              <div className="md:col-span-7">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {c.industry}
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-ink mt-3 leading-tight text-balance">
                  {c.title}
                </h3>
                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Challenge
                    </div>
                    <p className="text-ink/85 leading-relaxed text-sm">{c.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      What Clarix did
                    </div>
                    <p className="text-ink/85 leading-relaxed text-sm">{c.solution}</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 md:border-l md:border-border md:pl-8 flex flex-col justify-center">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Outcome
                </div>
                <div className="font-display text-4xl md:text-5xl font-light text-ink mt-3 leading-none">
                  {c.metric}
                </div>
                <div className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {c.metricLabel}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>

    {/* ── CTA ── */}
    <section className="relative overflow-hidden border-t border-border bg-ivory-warm">
      <div className="container-tight py-24 md:py-32 relative grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <div className="eyebrow"><span className="h-px w-8 bg-brass" />Let's build</div>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] mt-4 text-ink text-balance">
            Have a software bet that has to land?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl text-pretty">
            Tell us the problem. We'll tell you honestly whether we're the right team —
            and if so, how we'd approach it.
          </p>
        </div>
        <div className="md:col-span-4 md:text-right">
          <Button asChild variant="ink" size="xl">
            <Link to="/contact">
              Schedule a Conversation <ArrowRight className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

  </div>
);

export default Software;
