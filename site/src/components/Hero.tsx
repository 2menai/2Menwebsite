import ScrollFade from "./ScrollFade";

export default function Hero() {
  return (
    <section className="mesh-bg relative flex min-h-screen items-center overflow-hidden bg-navy pt-20">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <ScrollFade>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              AI That Actually Ships
            </p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              We build AI that solves
              <br />
              <span className="text-accent">real problems.</span>
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-slate-400 sm:text-xl">
              Purpose-built AI platforms that turn your most complex data into
              actionable intelligence. Deployed into your environment. Running in
              days, not months.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/25"
              >
                Request a Demo
              </a>
              <a
                href="#how-it-works"
                className="rounded-lg border border-white/15 px-8 py-4 text-base font-semibold text-slate-300 transition-all hover:border-white/30 hover:text-white"
              >
                See How It Works
              </a>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
