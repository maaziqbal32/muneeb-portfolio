import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MessageCircle, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Let's Build Your AI Chatbot" },
      {
        name: "description",
        content:
          "Get in touch to build an AI chatbot or automation that grows your business. Available worldwide via email and WhatsApp.",
      },
      { property: "og:title", content: "Contact Muneeb — AI Chatbot Developer" },
      {
        property: "og:description",
        content: "Let's automate your business with AI. Reach out via form or WhatsApp.",
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const result = schema.safeParse(form);
  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    result.error.issues.forEach((i) => {
      fieldErrors[i.path[0] as string] = i.message;
    });
    setErrors(fieldErrors);
    return;
  }

  setErrors({});
  setSent(true);

  const phoneNumber = "447347631564";

  const message = `Hello Muhammad Muneeb ur Rehman 👋

My Name: ${form.name}
My Email: ${form.email}

Message:
${form.message}

I contacted you through your portfolio website.`;

  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
};

  return (
    <PageShell>
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm text-[var(--neon)] font-medium tracking-widest uppercase">
              Contact
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold">
              Let's build your <span className="text-gradient">AI chatbot</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Tell me about your business and what you'd like to automate. I usually reply within 24
              hours.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="https://wa.me/447347631564?text=Hello%20Muhammad%20Muneeb%20ur%20Rehman,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20professional%20opportunity."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border-gradient p-5 glow-hover"
              >
                <div className="h-11 w-11 rounded-lg bg-[var(--neon)]/10 grid place-items-center">
                  <MessageCircle className="h-5 w-5 text-[var(--neon)]" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">Fastest way to reach me</p>
                </div>
              </a>
              <a
                href="mailto:muhammadmuneeb8689@gmail.com"
                className="flex items-center gap-4 rounded-xl border-gradient p-5 glow-hover"
              >
                <div className="h-11 w-11 rounded-lg bg-[var(--neon)]/10 grid place-items-center">
                  <Mail className="h-5 w-5 text-[var(--neon)]" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">muhammadmuneeb8689@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-xl border-gradient p-5">
                <div className="h-11 w-11 rounded-lg bg-[var(--neon)]/10 grid place-items-center">
                  <MapPin className="h-5 w-5 text-[var(--neon)]" />
                </div>
                <div>
                  <p className="font-semibold">Based in Pakistan</p>
                  <p className="text-sm text-muted-foreground">Working with clients worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border-gradient p-7 space-y-5 h-fit">
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle2 className="mx-auto h-14 w-14 text-[var(--neon)]" />
                <h3 className="mt-4 text-2xl font-bold">Message sent!</h3>
                <p className="mt-2 text-muted-foreground">
                  Thanks {form.name.split(" ")[0]} — I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1.5 bg-input/40"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1.5 bg-input/40"
                    placeholder="you@business.com"
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="message">What do you want to automate?</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 bg-input/40"
                    placeholder="Tell me about your business and goals..."
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive mt-1">{errors.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[var(--neon)] text-primary-foreground hover:bg-[var(--neon)]/90 shadow-[var(--shadow-neon)]"
                >
                  Send Message <Send className="ml-1.5 h-4 w-4" />
                </Button>
              </>
            )}
          </form>
        </div>
      </section>
    </PageShell>
  );
}
