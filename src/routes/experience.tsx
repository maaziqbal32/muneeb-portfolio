import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Award } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience & Certifications — Muhammad Muneeb ur Rehman" },
      { name: "description", content: "AI, Machine Learning, and Python developer experience plus certifications from Harvard, Saint Louis University, Kaggle, and more." },
      { property: "og:title", content: "Experience & Certifications" },
      { property: "og:description", content: "Professional experience and certifications in AI, ML, and Python development." },
    ],
  }),
  component: Experience,
});

const experience = [
  {
    role: "Machine Learning Intern",
    company: "CodeAlpha",
    period: "Jan 2025 – May 2025 · Remote",
    desc: "Worked on machine learning models and AI-based solutions across real-world datasets.",
  },
  {
    role: "Artificial Intelligence Programmer",
    company: "CodeAlpha",
    period: "Jan 2025 – Feb 2025",
    desc: "Built AI applications focused on knowledge engineering and Python-based AI development.",
  },
  {
    role: "Python Developer",
    company: "CodeAlpha",
    period: "Jan 2025 – Feb 2025",
    desc: "Developed Python applications and automation scripts for real business use cases.",
  },
  {
    role: "Web Developer Intern",
    company: "Stallions Solutions (Microsoft Gold Partner)",
    period: "Jul 2022 – Nov 2022 · Lahore, On-site",
    desc: "Worked with HTML5, JavaScript, and front-end development on production projects.",
  },
];

const certs = [
  { name: "AI and Machine Learning for Business Transformation", issuer: "Saint Louis University", date: "Feb 2025" },
  { name: "Managing and Empowering a Remote Workforce", issuer: "Excelerate", date: "Feb 2025" },
  { name: "Pandas", issuer: "Kaggle", date: "Jan 2025" },
  { name: "Social Impact Initiative", issuer: "Saint Louis University", date: "Oct 2024" },
  { name: "Introduction to Programming Using Python (CS50P)", issuer: "Harvard University", date: "Jan 2025" },
];

function Experience() {
  return (
    <PageShell>
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm text-[var(--neon)] font-medium tracking-widest uppercase">Experience</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            A track record in <span className="text-gradient">AI, ML & development</span>
          </h1>
        </div>

        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--neon)]/60 via-[var(--neon-2)]/40 to-transparent" />
          <div className="space-y-10">
            {experience.map((e, i) => {
  const isLeft = i % 2 === 0;

  return (
    <div key={i} className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
      
      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-[var(--neon)] shadow-[0_0_16px_var(--neon)]" />

      {/* LEFT SIDE */}
      {isLeft && (
        <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
          <div className="rounded-xl border-gradient p-6 glow-hover inline-block text-left">
            <div className="flex items-center gap-2 text-[var(--neon)] md:justify-end">
              <Briefcase className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">
                {e.period}
              </span>
            </div>
            <h3 className="mt-2 font-semibold text-lg">{e.role}</h3>
            <p className="text-sm text-muted-foreground">{e.company}</p>
            <p className="text-sm mt-3">{e.desc}</p>
          </div>
        </div>
      )}

      {/* RIGHT SIDE */}
      {!isLeft && <div />}

      {!isLeft && (
        <div className="pl-12 md:pl-12">
          <div className="rounded-xl border-gradient p-6 glow-hover inline-block">
            <div className="flex items-center gap-2 text-[var(--neon)]">
              <Briefcase className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">
                {e.period}
              </span>
            </div>
            <h3 className="mt-2 font-semibold text-lg">{e.role}</h3>
            <p className="text-sm text-muted-foreground">{e.company}</p>
            <p className="text-sm mt-3">{e.desc}</p>
          </div>
        </div>
      )}

      {/* EMPTY LEFT SPACE for RIGHT items */}
      {isLeft && <div />}
    </div>
  );
})}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="max-w-2xl">
          <p className="text-sm text-[var(--neon)] font-medium tracking-widest uppercase">Certifications</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Continuous learning, <span className="text-gradient">always</span>
          </h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c) => (
            <div key={c.name} className="rounded-xl border-gradient p-5 glow-hover">
              <div className="h-10 w-10 rounded-lg bg-[var(--neon)]/10 grid place-items-center mb-3">
                <Award className="h-4 w-4 text-[var(--neon)]" />
              </div>
              <h3 className="font-semibold text-sm leading-snug">{c.name}</h3>
              <p className="text-xs text-muted-foreground mt-2">{c.issuer}</p>
              <p className="text-xs text-[var(--neon)] mt-0.5">{c.date}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
