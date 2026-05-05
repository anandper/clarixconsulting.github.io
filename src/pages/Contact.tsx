import { useState } from "react";
import { z } from "zod";
import { Linkedin, Mail, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  topic: z.string().min(1, "Please select an option"),
  message: z.string().trim().min(1, "Please share a few details").max(2000),
});

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [topic, setTopic] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      topic,
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you — we'll respond within 1 business day.");
      (e.target as HTMLFormElement).reset();
      setTopic("");
    }, 700);
  };

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        lede="Whether you're navigating a regulatory transition, scaling a delivery program, or need senior technology leadership — we'd love to hear what you're working on."
      />

      <section className="py-20 md:py-28">
        <div className="container-tight grid md:grid-cols-12 gap-12 lg:gap-20">
          {/* Form */}
          <form onSubmit={onSubmit} className="md:col-span-7 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required maxLength={100} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" required maxLength={120} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required maxLength={255} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone <span className="text-muted-foreground">(optional)</span></Label>
                <Input id="phone" name="phone" type="tel" maxLength={40} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="topic">How can we help?</Label>
              <Select value={topic} onValueChange={setTopic}>
                <SelectTrigger id="topic"><SelectValue placeholder="Select an area" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="quality">Quality & Regulatory</SelectItem>
                  <SelectItem value="software">Software Delivery</SelectItem>
                  <SelectItem value="program">Project Management</SelectItem>
                  <SelectItem value="unsure">Not Sure Yet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={6} required maxLength={2000} placeholder="Tell us a bit about what you're working on…" />
            </div>
            <Button type="submit" variant="ink" size="xl" disabled={submitting}>
              {submitting ? "Sending…" : "Send Message"} <ArrowRight />
            </Button>
            <p className="text-xs text-muted-foreground pt-2">
              We respond within 1 business day. Your information is treated as confidential.
            </p>
          </form>

          {/* Direct */}
          <aside className="md:col-span-5">
            <div className="bg-ivory-warm border border-border p-10 shadow-elegant">
              <div className="eyebrow"><span className="h-px w-8 bg-brass" />Direct</div>
              <h3 className="font-display text-3xl mt-4 leading-tight text-ink">Prefer to reach out directly?</h3>
              <ul className="mt-8 space-y-5">
                <li>
                  <a href="mailto:anand@clarixconsulting.com" className="flex items-start gap-4 group">
                    <span className="size-10 grid place-items-center border border-border group-hover:bg-brass group-hover:border-brass transition-colors flex-none text-ink">
                      <Mail className="size-4" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</span>
                      <span className="block mt-1 text-ink">anand@clarixconsulting.com</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                    <span className="size-10 grid place-items-center border border-border group-hover:bg-brass group-hover:border-brass transition-colors flex-none text-ink">
                      <Linkedin className="size-4" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">LinkedIn</span>
                      <span className="block mt-1 text-ink">Connect with Anand</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://calendly.com" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                    <span className="size-10 grid place-items-center border border-border group-hover:bg-brass group-hover:border-brass transition-colors flex-none text-ink">
                      <Calendar className="size-4" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">Book a 30-min call</span>
                      <span className="block mt-1 text-ink">calendly.com/clarix</span>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="mt-10 pt-8 border-t border-border flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="size-4 text-brass" />
                We respond within 1 business day.
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Contact;
