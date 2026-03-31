import ScrollFade from "./ScrollFade";

export default function Hero() {
  return (
    <section className="hero-bg relative flex min-h-screen items-center overflow-hidden bg-dark pt-20">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <ScrollFade>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              AI is only as good as the
              <br />
              <span className="text-accent">concepts behind it.</span>
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-slate-400 sm:text-xl">
              We build and operate AI ventures — backed by real infrastructure
              and real expertise.
            </p>
            <p className="mb-10 text-base font-medium text-slate-500">
              We&apos;ve seen this before. We know what works.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/25"
              >
                Work With Us
              </a>
              <a
                href="#ventures"
                className="rounded-lg border border-white/10 px-8 py-4 text-base font-semibold text-slate-400 transition-all hover:border-white/25 hover:text-white"
              >
                Our Ventures
              </a>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
