import ScrollFade from "./ScrollFade";

export default function Ventures() {
  return (
    <section id="ventures" className="node-bg bg-dark-light py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFade>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Our Ventures
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The portfolio.
            </h2>
            <p className="text-lg text-slate-400">
              Every venture is its own brand, its own product, its own market —
              powered by the 2men.ai platform.
            </p>
          </div>
        </ScrollFade>

        <ScrollFade stagger>
          <div className="grid gap-8 md:grid-cols-2">
            {/* The Build Bot */}
            <div className="fade-in group rounded-2xl border border-white/10 bg-white/[0.03] p-10 transition-all hover:border-accent/30">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                </div>
                <div className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                  Active
                </div>
              </div>
              <h3 className="mb-1 text-2xl font-bold text-white">
                The Build Bot
              </h3>
              <p className="mb-4 text-sm font-medium text-accent">
                thebuildbot.ai
              </p>
              <p className="mb-6 text-base leading-relaxed text-slate-400">
                An AI-powered platform for building AI applications. Think
                Replit meets ServiceNow — without the vibe coding. 90% of the
                plumbing is already done. Shared and enterprise tiers, with
                full data sovereignty for government and regulated industries.
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-600">
                A 2men.ai venture
              </p>
            </div>

            {/* Next Venture CTA */}
            <div className="fade-in flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.01] p-10 text-center transition-all hover:border-accent/20">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/10">
                <svg className="h-7 w-7 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                Let&apos;s Build Together
              </h3>
              <p className="mb-6 text-base leading-relaxed text-slate-400">
                You bring the domain expertise. We bring the platform, the
                infrastructure, and the team. We&apos;ve seen this before.
              </p>
              <a
                href="#contact"
                className="rounded-lg border border-accent/30 px-6 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent/10"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
