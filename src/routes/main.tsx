import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Bot, Zap, MessageSquare, TrendingUp, Clock, Target } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ChatbotMockup } from "@/components/ChatbotMockup";
import { Button } from "@/components/ui/button";
import muneebPhoto from "@/assets/muneeb-folio.png";

export const Route = createFileRoute("/main")({
  head: () => ({
    meta: [
      { title: "Muneeb.AI — AI Chatbot Developer & Automation Specialist" },
      { name: "description", content: "I build AI-powered chatbots and ManyChat automations that turn conversations into sales — for businesses ready to scale." },
      { property: "og:title", content: "Muneeb.AI — AI Chatbot Developer" },
      { property: "og:description", content: "AI chatbots & ManyChat automation that generate leads, save time, and grow revenue." },
    ],
  }),
  component: Home,
});

const stats = [
  { icon: TrendingUp, label: "More Leads", value: "3×" },
  { icon: Clock, label: "Hours Saved / Week", value: "40+" },
  { icon: Target, label: "Faster Response", value: "24/7" },
];

const highlights = [
  { icon: Bot, title: "AI Chatbots", desc: "GPT & Gemini-powered conversations that feel human." },
  { icon: Zap, title: "ManyChat Funnels", desc: "High-converting flows for Instagram & WhatsApp." },
  { icon: MessageSquare, title: "24/7 Automation", desc: "Capture leads and reply instantly — even while you sleep." },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
        <div className="container mx-auto px-6 py-20 md:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-4 py-1.5 text-xs">
                <Sparkles className="h-3.5 w-3.5 text-[var(--neon)]" />
                <span className="text-muted-foreground"></span>
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05]">
                I Build <span className="text-gradient">AI-Powered Chatbots</span> That Turn Conversations into Sales
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Helping businesses automate customer interactions, generate leads, and scale using AI-powered chatbots and ManyChat automation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[var(--neon)] text-primary-foreground hover:bg-[var(--neon)]/90 shadow-[var(--shadow-neon)]">
                  <Link to="/projects">View My Work <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[var(--neon)]/40 hover:border-[var(--neon)] hover:bg-[var(--neon)]/10">
                  <Link to="/contact">Hire Me</Link>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <s.icon className="mx-auto h-5 w-5 text-[var(--neon)] mb-1.5" />
                    <p className="text-2xl font-bold font-display">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Glow background */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-60" aria-hidden>
                <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-[var(--neon)]/30" />
                <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-[var(--neon-2)]/30" />
              </div>

              {/* Portrait card */}
              <div className="relative rounded-3xl border-gradient overflow-hidden p-1 shadow-[var(--shadow-neon-strong)]">
                <img
                  src={muneebPhoto}
                  alt="Muhammad Muneeb ur Rehman, AI Chatbot Developer"
                  width={560}
                  height={640}
                  className="w-full h-[460px] md:h-[560px] object-cover rounded-3xl"
                />
                {/* Name overlay */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-background/70 backdrop-blur-md border border-border px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="font-display font-semibold text-base leading-tight">Muneeb ur Rehman</p>
                    <p className="text-xs text-muted-foreground">AI Chatbot Developer · Pakistan</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-[var(--neon)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--neon)] animate-pulse" />
                    Available
                  </span>
                </div>
              </div>

              {/* Floating chatbot mockup */}
              <div className="hidden md:block absolute -bottom-10 -left-10 w-72 animate-float">
                <div className="scale-90 origin-bottom-left">
                  <ChatbotMockup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-xl border-gradient p-6 glow-hover">
              <div className="h-11 w-11 rounded-lg bg-[var(--neon)]/10 grid place-items-center mb-4">
                <h.icon className="h-5 w-5 text-[var(--neon)]" />
              </div>
              <h3 className="font-semibold text-lg">{h.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="relative rounded-3xl border-gradient overflow-hidden p-10 md:p-16 text-center">
          <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to automate your business with <span className="text-gradient">AI?</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Let's build a chatbot that works 24/7 — capturing leads, qualifying customers, and driving real revenue.
            </p>
            <Button asChild size="lg" className="mt-8 bg-[var(--neon)] text-primary-foreground hover:bg-[var(--neon)]/90 shadow-[var(--shadow-neon-strong)]">
              <Link to="/contact">Let's Work Together <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
