import ScrollFade from "./ScrollFade";

const stats = [
  { value: "10+", label: "Years enterprise infrastructure" },
  { value: "4", label: "Sectors: government, healthcare, aerospace, enterprise" },
];

export default function Team() {
  return (
    <section className="bg-dark py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFade>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              The Team
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              We&apos;ve been here before.
              <br />
              <span className="text-slate-400">We know what works.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-400">
              Deep experience across AWS, government IT, healthcare, aerospace,
              and enterprise consulting. We&apos;ve built infrastructure and AI
              solutions across industries — and we bring all of that to every
              venture we launch. Based in Huntsville, AL — the aerospace and
              defense capital.
            </p>
          </div>
        </ScrollFade>

        <ScrollFade stagger>
          <div className="grid gap-6 sm:grid-cols-2 sm:mx-auto sm:max-w-2xl">
            {stats.map((s) => (
              <div
                key={s.label}
                className="fade-in rounded-xl border border-white/5 bg-white/[0.02] p-8 text-center"
              >
                <div className="mb-2 text-4xl font-extrabold text-accent">
                  {s.value}
                </div>
                <p className="text-sm text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
