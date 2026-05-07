import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import founderImg from "@/assets/founder.jpg";
import urmiImg from "@/assets/team-urmi.jpg";
import ramImg from "@/assets/team-ram.jpg";

const team = [
  {
    name: "Anand Vidyarthi",
    title: "Founder & Principal Consultant",
    img: founderImg,
    bio: "20 years building delivery organizations for Fortune 500 companies across Life Sciences, FinServ, and Manufacturing. Owns $20M+ portfolios end-to-end — from engagement strategy to execution — across AI, cloud, and enterprise modernization programs.",
  },
  {
    name: "Urmi Vidyarthi",
    title: "Principal Consultant, Quality & Compliance",
    img: urmiImg,
    bio: "Urmi guides life sciences and medical device clients through FDA, ISO, EU MDR, and MDSAP compliance — turning regulatory complexity into audit-ready operating models that hold up under scrutiny and scale with the business.",
  },
  {
    name: "Ram Iyer",
    title: "Principal Consultant, Regulatory Affairs",
    img: ramImg,
    bio: "Ram brings senior global regulatory science experience to clients navigating complex submissions, pipeline strategy, and international market access — with the depth of someone who has led these functions, not just consulted on them.",
  },
];

const About = () => (
  <div>
    <PageHero
      title="A boutique firm with Fortune 500 muscle."
      lede="Clarix exists to bring senior, principal-led leadership to organizations that need it most — without the overhead of a global firm."
    />

    {/* Team */}
    <section className="py-24 md:py-32 bg-ivory-warm">
      <div className="container-tight">
        <div className="max-w-2xl">
          <div className="eyebrow">
            <span className="h-px w-8 bg-brass" />
            The Team
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light mt-4 leading-[1.05] text-balance text-ink">
            Senior practitioners. No handoffs.
          </h2>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {team.map((m) => (
            <article key={m.name} className="flex flex-col items-center text-center">
              <div className="size-60 md:size-64 overflow-hidden rounded-full shadow-elegant bg-background">
                <img
                  src={m.img}
                  alt={`${m.name} — ${m.title}, Clarix Consulting Group`}
                  loading="lazy"
                  width={320}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-display text-xl text-ink">{m.name}</h3>
                <div className="text-sm text-muted-foreground mt-1">{m.title}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>



    <CTABanner />
  </div>
);

export default About;