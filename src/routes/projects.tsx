import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Instagram, MessageCircle, Target, Headphones } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — AI Chatbot Case Studies" },
      { name: "description", content: "Real AI chatbot and automation projects: customer support, lead generation, Instagram DM automation, WhatsApp auto-reply, and sales conversion bots." },
      { property: "og:title", content: "AI Chatbot Projects & Case Studies" },
      { property: "og:description", content: "Chatbot case studies with measurable business results." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    icon: Headphones,
    name: "AI Customer Support Chatbot",
    problem: "Support team overwhelmed with 200+ repetitive inquiries daily.",
    solution: "GPT-powered chatbot trained on the company's knowledge base, deployed on website + WhatsApp.",
    result: "70% of tickets resolved automatically. ~30 hours saved per week.",
    tags: ["GPT-4", "WhatsApp", "Knowledge Base"],
  },
  {
    icon: Target,
    name: "Lead Generation Chatbot Funnel",
    problem: "High ad spend but low conversion from cold traffic.",
    solution: "ManyChat funnel that qualifies leads with smart questions and books calls automatically.",
    result: "3× more qualified leads, 40% lower cost per lead.",
    tags: ["ManyChat", "Lead Qualification", "Calendly"],
  },
  {
    icon: Instagram,
    name: "Instagram DM Automation Bot",
    problem: "Brand losing potential customers in unanswered DMs and comments.",
    solution: "Comment-to-DM trigger flow with AI replies and product recommendations.",
    result: "5× engagement, 24/7 response time, hundreds of new conversations per week.",
    tags: ["ManyChat", "Instagram", "AI Replies"],
  },
  {
    icon: MessageCircle,
    name: "WhatsApp AI Auto-Reply Bot",
    problem: "Solo founder couldn't respond to WhatsApp orders fast enough.",
    solution: "AI auto-reply system that handles FAQs, takes orders, and escalates only complex cases.",
    result: "Instant 24/7 replies. Founder reclaimed 4+ hours per day.",
    tags: ["WhatsApp Business", "GPT", "Order Flow"],
  },
  {
    icon: Bot,
    name: "Sales Conversion Chatbot",
    problem: "E-commerce store had high traffic but low checkout completion.",
    solution: "On-site AI chatbot that recommends products, handles objections, and recovers carts.",
    result: "+22% conversion rate, +18% average order value.",
    tags: ["Gemini API", "E-commerce", "Cart Recovery"],
  },
];

function Projects() {
  return (
    <PageShell>
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm text-[var(--neon)] font-medium tracking-widest uppercase">Projects</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Chatbots that <span className="text-gradient">deliver measurable results</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Real automation projects across support, sales, and lead generation — built to move business metrics, not just send messages.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.name} className="rounded-2xl border-gradient p-7 glow-hover flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="h-12 w-12 rounded-xl bg-[var(--neon)]/10 grid place-items-center">
                  <p.icon className="h-6 w-6 text-[var(--neon)]" />
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-border text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
              <h2 className="mt-5 text-xl font-semibold">{p.name}</h2>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="text-[var(--neon-2)] text-xs font-semibold uppercase tracking-wider">Problem</p>
                  <p className="text-muted-foreground mt-1">{p.problem}</p>
                </div>
                <div>
                  <p className="text-[var(--neon)] text-xs font-semibold uppercase tracking-wider">Solution</p>
                  <p className="text-muted-foreground mt-1">{p.solution}</p>
                </div>
                <div>
                  <p className="text-foreground text-xs font-semibold uppercase tracking-wider">Result</p>
                  <p className="mt-1 font-medium">{p.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* TESTIMONIALS */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            What clients <span className="text-gradient">say</span>
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { q: "Muneeb's chatbot replaced 80% of our support workload — within two weeks.", a: "Operations Lead, SaaS Startup" },
              { q: "Our Instagram DMs now convert into booked calls automatically. Game-changer.", a: "Founder, Coaching Business" },
              { q: "ROI was clear in the first month. The bot pays for itself daily.", a: "Owner, E-commerce Brand" },
            ].map((t, i) => (
              <div key={i} className="rounded-xl border-gradient p-6">
                <p className="text-3xl text-[var(--neon)] font-display leading-none">"</p>
                <p className="mt-2 text-sm text-foreground/90">{t.q}</p>
                <p className="mt-4 text-xs text-muted-foreground">— {t.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-[var(--neon)] text-primary-foreground hover:bg-[var(--neon)]/90 shadow-[var(--shadow-neon)]">
            <Link to="/contact">Build Yours Next <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
