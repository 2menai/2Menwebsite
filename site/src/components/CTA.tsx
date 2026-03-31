import ScrollFade from "./ScrollFade";

export default function CTA() {
  return (
    <section className="bg-navy py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFade>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

            <h2 className="relative mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to put your data to work?
            </h2>
            <p className="relative mb-8 text-lg text-slate-400">
              30-minute demo. No sales deck. We&apos;ll show you the platform
              running against real data.
            </p>
            <div className="relative flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/25"
              >
                Request a Demo
              </a>
              <span className="text-slate-500">or</span>
              <a
                href="mailto:info@2men.ai"
                className="text-base font-medium text-accent transition-colors hover:text-accent-light"
              >
                info@2men.ai
              </a>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
