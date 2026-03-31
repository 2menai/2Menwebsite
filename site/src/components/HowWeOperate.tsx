import ScrollFade from "./ScrollFade";

const steps = [
  {
    number: "01",
    title: "We find the experts.",
    description:
      "Domain specialists who know their industry inside and out. An orthopedic surgeon. A NASA engineer. An insurance claims specialist. They bring the brain — we bring the platform.",
  },
  {
    number: "02",
    title: "We build the venture.",
    description:
      "Our platform, our infrastructure, our team architects and builds the product. From concept to production — security, compliance, and scale baked in from day one.",
  },
  {
    number: "03",
    title: "We launch the brand.",
    description:
      "Each venture gets its own identity, its own customers, its own market. A 2men.ai venture — with the credibility and depth of the parent company behind it.",
  },
  {
    number: "04",
    title: "We operate and grow.",
    description:
      "We maintain the infrastructure, iterate on the product, and scale. The venture focuses on its customers. We handle the rest.",
  },
];

export default function HowWeOperate() {
  return (
    <section className="bg-dark py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFade>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              The Venture Model
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How we operate.
            </h2>
            <p className="text-lg text-slate-400">
              We don&apos;t buy companies. We build them.
            </p>
          </div>
        </ScrollFade>

        <ScrollFade stagger>
          <div className="grid gap-6 sm:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="fade-in rounded-xl border border-white/5 bg-white/[0.02] p-8"
              >
                <div className="mb-4 text-4xl font-extrabold text-accent/20">
                  {step.number}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
