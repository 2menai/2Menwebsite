import ScrollFade from "./ScrollFade";

const differentiators = [
  {
    title: "Deploy in days, not months",
    description:
      "No massive IT project. No change management nightmare. We deploy into your environment, configure the platform, and your team is up and running inside a week.",
  },
  {
    title: "Purpose-built, not generic",
    description:
      "ChatGPT wrappers hallucinate. Legacy platforms charge enterprise pricing for yesterday's technology. We build AI that actually understands your domain — and proves it with citations.",
  },
  {
    title: "We move fast and we ship",
    description:
      "We operate like a startup with enterprise capability. Direct access to the team building your solution. No layers, no ticketing systems, no waiting.",
  },
  {
    title: "Built for regulated industries",
    description:
      "Data sovereignty, audit trails, source traceability. We built this platform for organizations where \"trust me\" isn't an acceptable answer. Your data never leaves your environment.",
  },
  {
    title: "Extensible by design",
    description:
      "Adding a new data source doesn't mean rebuilding the platform. New dataset, new skill, new capability — it's configuration, not a development project.",
  },
  {
    title: "No vendor lock-in",
    description:
      "AWS + Terraform + open standards. We deploy into your infrastructure. If you ever want to walk away, your data and your deployment stay with you.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-navy py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFade>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Why 2men.ai
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              We build AI solutions that actually work
            </h2>
            <p className="text-lg text-slate-400">
              We&apos;re not selling a platform and walking away. We partner
              with organizations to build, deploy, and scale AI that delivers
              measurable impact from day one.
            </p>
          </div>
        </ScrollFade>

        <ScrollFade stagger>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="fade-in rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-accent/20 hover:bg-white/[0.04]"
              >
                <div className="mb-3 h-1 w-8 rounded-full bg-accent" />
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
