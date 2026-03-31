import ScrollFade from "./ScrollFade";

const steps = [
  {
    number: "01",
    title: "We ingest your data",
    description:
      "Standards documents, databases, internal reports, compliance docs — we handle the heavy lifting of ingestion, parsing, and indexing. Structured or unstructured, we make it searchable.",
  },
  {
    number: "02",
    title: "Configure AI skills for your domain",
    description:
      "Using our Skill Library, we tune the AI to your specific use cases — the right context layers, the right prompts, the right guardrails. Your admins can adjust everything, no code required.",
  },
  {
    number: "03",
    title: "Your team gets answers, not search results",
    description:
      "Ask questions in plain English. The Build Bot returns the answer with the exact source document, page, and section. Seconds, not hours. Cited, not hallucinated.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-navy-light py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFade>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              How It Works
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From raw data to answers in days
            </h2>
            <p className="text-lg text-slate-400">
              No 18-month integration project. No ripping out your existing
              systems. We deploy alongside what you already have.
            </p>
          </div>
        </ScrollFade>

        <ScrollFade stagger>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.number} className="fade-in relative">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-12 hidden h-px w-8 translate-x-full bg-gradient-to-r from-accent/40 to-transparent md:block" />
                )}
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-8">
                  <div className="mb-4 text-4xl font-extrabold text-accent/20">
                    {step.number}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
