import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, Brain, Zap, Target } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import muneebPhoto from "@/assets/muneeb-folio.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Muhammad Muneeb ur Rehman" },
      { name: "description", content: "AI-focused developer specializing in chatbot automation, ManyChat funnels, and LLM integrations to solve real business problems." },
      { property: "og:title", content: "About Muhammad Muneeb ur Rehman" },
      { property: "og:description", content: "AI chatbot developer building automation that drives real business results." },
    ],
  }),
  component: About,
});

const pillars = [
  { icon: Brain, title: "AI-First Mindset", desc: "Strong foundation in Python and Machine Learning, applied to real conversational AI." },
  { icon: Code2, title: "Chatbot Engineering", desc: "Hands-on experience integrating ManyChat, GPT, and Gemini with business workflows." },
  { icon: Zap, title: "Automation Focused", desc: "I design flows that replace repetitive work with intelligent, scalable systems." },
  { icon: Target, title: "Business Outcomes", desc: "Every bot I build is measured by leads captured, time saved, and revenue earned." },
];

function About() {
  return (
    <PageShell>
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-[260px_1fr] gap-10 items-start">
          <div className="relative mx-auto md:mx-0">
            <div className="absolute -inset-3 rounded-3xl bg-[var(--gradient-text)] opacity-20 blur-2xl" aria-hidden />
            <img
              src={muneebPhoto}
              alt="Muhammad Muneeb ur Rehman portrait"
              width={260}
              height={320}
              className="relative h-80 w-64 rounded-3xl object-cover ring-1 ring-border shadow-[var(--shadow-neon)]"
            />
          </div>
          <div className="max-w-3xl">
            <p className="text-sm text-[var(--neon)] font-medium tracking-widest uppercase">About Me</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold">
              Hi, I'm <span className="text-gradient">Muneeb</span> — I build AI chatbots that work like your best employee.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              I'm an AI-focused developer with a Bachelor's in Computer Science and a strong foundation in Python and Machine Learning.
              My focus is laser-sharp: I help businesses automate customer interactions, generate leads, and scale support using
              AI-powered chatbots built on <span className="text-foreground font-medium">ManyChat</span> and modern LLM APIs like <span className="text-foreground font-medium">GPT and Gemini</span>.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              I don't just build bots — I solve real business problems. From qualifying leads on Instagram DMs to handling 24/7
              customer support on WhatsApp, every automation I build is engineered to <span className="text-foreground font-medium">save time, reduce manual work, and grow revenue</span>.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-xl border-gradient p-6 glow-hover">
              <div className="h-11 w-11 rounded-lg bg-[var(--neon)]/10 grid place-items-center mb-4">
                <p.icon className="h-5 w-5 text-[var(--neon)]" />
              </div>
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Button asChild className="bg-[var(--neon)] text-primary-foreground hover:bg-[var(--neon)]/90">
            <Link to="/projects">See My Work</Link>
          </Button>
          <Button asChild variant="outline" className="border-[var(--neon)]/40 hover:border-[var(--neon)] hover:bg-[var(--neon)]/10">
            <Link to="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
