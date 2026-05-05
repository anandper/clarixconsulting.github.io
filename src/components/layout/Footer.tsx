import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="bg-ink text-ivory">
    <div className="container-tight py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl font-medium">Clarix</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-ivory/60">Consulting Group</span>
          </div>
          <p className="mt-6 text-ivory/70 max-w-md text-pretty">
            Senior consulting leadership for Quality & Regulatory transformation, Software Delivery, and Program Management.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="mailto:anand@clarixconsulting.com" className="size-10 grid place-items-center border border-ivory/20 hover:bg-ivory hover:text-ink transition-colors" aria-label="Email">
              <Mail className="size-4" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="size-10 grid place-items-center border border-ivory/20 hover:bg-ivory hover:text-ink transition-colors" aria-label="LinkedIn">
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.2em] text-ivory/50 mb-4">Practice</div>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li><Link to="/services" className="hover:text-ivory">Quality & Regulatory</Link></li>
            <li><Link to="/software" className="hover:text-ivory">Software Development</Link></li>
            <li><Link to="/services" className="hover:text-ivory">Program Management</Link></li>
            <li><Link to="/industries" className="hover:text-ivory">Industries</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-ivory/50 mb-4">Firm</div>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li><Link to="/about" className="hover:text-ivory">About</Link></li>
            <li><Link to="/contact" className="hover:text-ivory">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-ivory/50 mb-4">Contact</div>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li><a href="mailto:anand@clarixconsulting.com" className="hover:text-ivory">anand@<br/>clarixconsulting.com</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-ivory/50">
        <div>© {new Date().getFullYear()} Clarix Consulting Group. All rights reserved.</div>
        <div>Clarity. Delivered.</div>
      </div>
    </div>
  </footer>
);