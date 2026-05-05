import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Quality & Regulatory" },
  { to: "/software", label: "Software Development" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-background/90 backdrop-blur-md",
        scrolled ? "border-b border-border shadow-soft" : "border-b border-border/40"
      )}
    >
      <div className="container-tight flex h-20 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl font-medium tracking-tight text-ink">Clarix</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground hidden sm:inline">Consulting Group</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors link-underline",
                  isActive ? "text-ink" : "text-muted-foreground hover:text-ink"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="ink" size="sm">
            <Link to="/contact">Schedule a Conversation</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-tight py-6 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} className="text-base font-medium text-ink">
                {l.label}
              </NavLink>
            ))}
            <Button asChild variant="ink" className="mt-2">
              <Link to="/contact">Schedule a Conversation</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};