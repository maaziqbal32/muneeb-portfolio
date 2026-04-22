import { Bot, User } from "lucide-react";

export function ChatbotMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto animate-fade-up">
      <div className="absolute -inset-1 rounded-2xl bg-[var(--gradient-border)] opacity-60 blur-xl" />
      <div className="relative rounded-2xl border-gradient p-5 bg-card/90 backdrop-blur-xl shadow-[var(--shadow-neon-strong)]">
        <div className="flex items-center gap-3 pb-4 border-b border-border">
          <div className="h-9 w-9 rounded-full bg-[var(--neon)]/15 grid place-items-center">
            <Bot className="h-4 w-4 text-[var(--neon)]" />
          </div>
          <div>
            <p className="text-sm font-semibold">Sales Assistant</p>
            <p className="text-xs text-[var(--neon)] flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)] animate-pulse" /> Online
            </p>
          </div>
        </div>
        <div className="space-y-3 py-4 text-sm">
          <div className="flex gap-2">
            <div className="h-7 w-7 rounded-full bg-[var(--neon)]/15 grid place-items-center shrink-0">
              <Bot className="h-3.5 w-3.5 text-[var(--neon)]" />
            </div>
            <div className="rounded-2xl rounded-tl-sm bg-secondary px-4 py-2 max-w-[80%]">
              Hi 👋 Looking to automate your customer support?
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <div className="rounded-2xl rounded-tr-sm bg-[var(--neon)] text-primary-foreground px-4 py-2 max-w-[80%]">
              Yes! How can you help?
            </div>
            <div className="h-7 w-7 rounded-full bg-secondary grid place-items-center shrink-0">
              <User className="h-3.5 w-3.5" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="h-7 w-7 rounded-full bg-[var(--neon)]/15 grid place-items-center shrink-0">
              <Bot className="h-3.5 w-3.5 text-[var(--neon)]" />
            </div>
            <div className="rounded-2xl rounded-tl-sm bg-secondary px-4 py-2 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-typing" />
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-typing [animation-delay:0.2s]" />
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-typing [animation-delay:0.4s]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
