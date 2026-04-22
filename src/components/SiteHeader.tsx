import { Link } from "@tanstack/react-router";
import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border-gradient">
            <Bot className="h-5 w-5 text-[var(--neon)]" />
          </span>
          <span className="text-gradient">Muneeb.AI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-[var(--neon)] text-primary-foreground hover:bg-[var(--neon)]/90 shadow-[var(--shadow-neon)]">
            <Link to="/contact">Hire Me</Link>
          </Button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 px-6 py-4 flex flex-col gap-4">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
              {n.label}
            </Link>
          ))}
          <Button asChild className="bg-[var(--neon)] text-primary-foreground">
            <Link to="/contact" onClick={() => setOpen(false)}>Hire Me</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
