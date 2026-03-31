import ScrollFade from "./ScrollFade";

const diy = [
  "You get a model. No infrastructure.",
  "No architect. No one to call.",
  "Every project starts from scratch.",
  "AI is only as good as YOU are.",
];

const withUs = [
  "Infrastructure connected. Ready to go.",
  "General contractor on-site. Real people, real phone numbers.",
  "90% of the plumbing already done.",
  "We understand the concepts so you don't have to.",
];

export default function Comparison() {
  return (
    <section className="bg-dark py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFade>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Why Us vs. DIY
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Renting tools doesn&apos;t make you a general contractor.
            </h2>
            <p className="text-lg text-slate-400">
              You can rent every tool at the hardware store. That doesn&apos;t
              mean you know how to build the house.
            </p>
          </div>
        </ScrollFade>

        <ScrollFade stagger>
          <div className="grid gap-8 md:grid-cols-2">
            {/* DIY */}
            <div className="fade-in rounded-2xl border border-white/5 bg-white/[0.02] p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
                  <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-300">
                  Renting the tools
                </h3>
              </div>
              <ul className="space-y-4">
                {diy.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm leading-relaxed text-slate-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Us */}
            <div className="fade-in rounded-2xl border border-accent/20 bg-accent/5 p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Hiring the general contractor
                </h3>
              </div>
              <ul className="space-y-4">
                {withUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className="text-sm leading-relaxed text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollFade>

        {/* Callout */}
        <ScrollFade>
          <div className="mt-12 text-center">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400">
              We use the best AI tools available. The difference is we know what
              to do with them — and we&apos;ve already built the infrastructure
              to run them.
            </p>
            <p className="mt-4 text-sm font-medium text-slate-500">
              It&apos;s not just a chatbot. It&apos;s a managed intelligence service.
            </p>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
