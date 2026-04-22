import { Link } from "@tanstack/react-router";
import { Bot, Mail, MessageCircle, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <Bot className="h-5 w-5 text-[var(--neon)]" />
            <span className="text-gradient">Muneeb.AI</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            AI Chatbot Developer & Automation Specialist helping businesses scale with conversations
            that convert.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/services" className="hover:text-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-foreground">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/experience" className="hover:text-foreground">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Connect</h4>
          <div className="flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/447347631564"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 grid place-items-center rounded-lg border border-border hover:text-[var(--neon)] hover:border-[var(--neon)] transition"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>

            {/* Email */}
            <a
              href="mailto:muhammadmuneeb8689@gmail.com"
              className="h-10 w-10 grid place-items-center rounded-lg border border-border hover:text-[var(--neon)] hover:border-[var(--neon)] transition"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/muneeb6t9/"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 grid place-items-center rounded-lg border border-border hover:text-[var(--neon)] hover:border-[var(--neon)] transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Muhammad Muneeb ur Rehman · Built with AI in mind.
      </div>
    </footer>
  );
}
