import ScrollFade from "./ScrollFade";

const problems = [
  {
    title: "Trapped knowledge",
    description:
      "Critical data locked in PDFs, legacy databases, and tribal knowledge. Your team spends more time finding information than using it.",
  },
  {
    title: "Cookie-cutter tools",
    description:
      "Off-the-shelf software that forces your business into someone else's workflow. Every organization is different — your tools should be too.",
  },
  {
    title: "AI slop",
    description:
      "AI-generated code with no architecture, no security posture, and no one who understands why it was built that way. It looks done until it breaks.",
  },
];

export default function Problem() {
  return (
    <section className="bg-navy-light py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFade>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Most businesses are solving the wrong problem
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              You don&apos;t need another SaaS subscription. You don&apos;t need
              a consultant who hands you a slide deck and disappears. You need
              an environment built around how{" "}
              <span className="text-white">your</span> business actually
              works&mdash;with real engineering behind it.
            </p>
          </div>
        </ScrollFade>

        <ScrollFade stagger>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {problems.map((p) => (
              <div
                key={p.title}
                className="fade-in rounded-xl border border-white/5 bg-white/[0.02] p-8"
              >
                <div className="mb-3 h-1 w-8 rounded-full bg-accent" />
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollFade>

        <ScrollFade>
          <div className="mx-auto mt-14 max-w-2xl rounded-xl border border-accent/20 bg-accent/5 px-8 py-6 text-center">
            <p className="text-base leading-relaxed text-slate-300">
              We build interactive, purpose-built environments unique to each
              customer&mdash;with proper infrastructure, clean architecture, and
              engineering practices that hold up under real-world load. Not AI
              slop. Not a demo. A production system you can trust.
            </p>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
