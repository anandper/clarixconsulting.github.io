import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse, FlaskConical, MonitorCog, Landmark, Factory } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";

const industries = [
  {
    icon: HeartPulse,
    name: "MedTech / Medical Devices",
    pains: "ISO 13485, MDSAP audits, EU MDR transitions, QMS implementation",
    body: "MedTech companies face mounting regulatory pressure while shipping faster than ever. We've stood up QMS programs, led MDSAP and EU MDR transitions, and brought audit-ready discipline to engineering teams without slowing release velocity.",
  },
  {
    icon: FlaskConical,
    name: "Biotech / Life Sciences",
    pains: "FDA regulatory strategy, eQMS, submissions, CAPA management",
    body: "From early-stage biotechs preparing first submissions to scaled life sciences orgs maturing CAPA and eQMS, we bring practical regulatory leadership that connects compliance to scientific and commercial outcomes.",
  },
  {
    icon: MonitorCog,
    name: "Technology / Software",
    pains: "Delivery leadership, program management, AI/cloud transformation",
    body: "When delivery slips, costs spiral, or AI initiatives stall in pilot, we step in as senior engineering leadership — modernizing platforms, restructuring delivery, and operationalizing AI so it actually ships.",
  },
  {
    icon: Landmark,
    name: "Financial Services",
    pains: "Technology delivery, compliance programs, operational modernization",
    body: "FinServ demands both regulatory discipline and aggressive modernization. We've led portfolio rationalization, vendor consolidation, and technology delivery programs that cut cost while strengthening controls.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    pains: "AS9100D, ISO/IEC 17025, process automation, delivery programs",
    body: "From AS9100D and ISO/IEC 17025 readiness to AI-driven SDLC and process automation, we help manufacturers translate quality systems and modern engineering into measurable throughput gains.",
  },
];

const Industries = () => (
  <div>
    <PageHero
      eyebrow="Industries"
      title="We work where regulation, complexity, and ambition collide."
      lede="Different industries. Same discipline. Senior operators who've delivered in your environment — and can show the audit trail."
    />

    <section className="py-20 md:py-28">
      <div className="container-tight space-y-px bg-border border border-border">
        {industries.map((ind) => (
          <article key={ind.name} className="bg-background p-8 md:p-12 grid md:grid-cols-12 gap-8 group hover:bg-ivory-warm transition-colors duration-500">
            <div className="md:col-span-4 flex md:block items-center gap-4">
              <div className="size-12 grid place-items-center bg-ink text-ivory">
                <ind.icon className="size-5" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-ink mt-0 md:mt-6 leading-tight text-balance">{ind.name}</h2>
            </div>
            <div className="md:col-span-5">
              <div className="eyebrow"><span className="h-px w-8 bg-brass" />Pain points we solve</div>
              <p className="mt-3 text-ink/90 leading-relaxed">{ind.pains}</p>
              <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">{ind.body}</p>
            </div>
            <div className="md:col-span-3 md:text-right flex md:block items-end">
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-ink link-underline">
                Start the conversation <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>

    <CTABanner title="Don't see your industry?" subtitle="If it's complex, regulated, or both — we've probably worked there. Let's compare notes." />
  </div>
);

export default Industries;
