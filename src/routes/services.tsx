import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, Workflow, MessageSquare, Instagram, Sparkles, Check } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AI Chatbots & Automation" },
      { name: "description", content: "AI chatbot development, ManyChat funnels, lead generation bots, WhatsApp & Instagram automation, and custom GPT/Gemini integrations." },
      { property: "og:title", content: "Services — AI Chatbots & Automation" },
      { property: "og:description", content: "AI chatbots, ManyChat funnels, and custom LLM integrations for business growth." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Bot,
    title: "AI Chatbot Development",
    desc: "Custom chatbots powered by GPT or Gemini that understand context and convert visitors.",
    benefits: ["24/7 instant responses", "Human-like conversations", "Higher conversion rates"],
  },
  {
    icon: Workflow,
    title: "ManyChat Automation Funnels",
    desc: "End-to-end ManyChat flows that nurture leads from first touch to closed sale.",
    benefits: ["Multi-step funnels", "Tag-based segmentation", "Higher close rate"],
  },
  {
    icon: Sparkles,
    title: "Lead Generation Chatbots",
    desc: "Bots that qualify and capture high-intent leads directly into your CRM.",
    benefits: ["3× more qualified leads", "Auto-CRM sync", "Reduced cost per lead"],
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    desc: "AI auto-reply systems for WhatsApp Business that handle inquiries instantly.",
    benefits: ["Instant replies 24/7", "Order & FAQ handling", "Less manual work"],
  },
  {
    icon: Instagram,
    title: "Instagram DM Automation",
    desc: "Turn Instagram comments and DMs into a conversion machine with ManyChat.",
    benefits: ["Comment-to-DM triggers", "Story reply flows", "Boosted engagement"],
  },
  {
    icon: Bot,
    title: "Custom AI Integrations",
    desc: "GPT, Gemini, and other LLM APIs integrated into your existing tools and workflows.",
    benefits: ["Smart automations", "Custom AI assistants", "API-first integrations"],
  },
];

const process = [
  { step: "01", title: "Understand Business Needs", desc: "We map your goals, audience, and the conversations that drive revenue." },
  { step: "02", title: "Design Chatbot Flow", desc: "I design conversion-optimized flows tailored to your funnel and channel." },
  { step: "03", title: "Integrate AI & Automation", desc: "I build, connect APIs, train the AI, and link everything to your CRM/tools." },
  { step: "04", title: "Launch & Optimize", desc: "Go live, monitor results, and iterate to maximize leads and revenue." },
];

function Services() {
  return (
    <PageShell>
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm text-[var(--neon)] font-medium tracking-widest uppercase">Services</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            AI automation that <span className="text-gradient">drives real business outcomes</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Every service is built around one goal: more leads, less manual work, and faster response times.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border-gradient p-6 glow-hover flex flex-col">
              <div className="h-11 w-11 rounded-lg bg-[var(--neon)]/10 grid place-items-center mb-4">
                <s.icon className="h-5 w-5 text-[var(--neon)]" />
              </div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{s.desc}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[var(--neon)] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm text-[var(--neon)] font-medium tracking-widest uppercase">How I Work</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            A clear, results-driven <span className="text-gradient">4-step process</span>
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p) => (
            <div key={p.step} className="relative rounded-xl border-gradient p-6">
              <span className="text-5xl font-bold font-display text-gradient opacity-80">{p.step}</span>
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-[var(--neon)] text-primary-foreground hover:bg-[var(--neon)]/90 shadow-[var(--shadow-neon)]">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
