import ScrollFade from "./ScrollFade";

export default function SocialProof() {
  return (
    <section className="bg-navy-light py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFade>
          {/* Banner */}
          <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10 px-8 py-12 text-center sm:px-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

            <p className="relative mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Proven at Scale
            </p>
            <h2 className="relative mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Engineered for the most demanding data environments
            </h2>
            <p className="relative mx-auto max-w-2xl text-lg text-slate-400">
              Our platform is built to handle the complexity and scale of
              enterprise knowledge systems — from technical standards and
              compliance databases to proprietary research repositories.
            </p>
          </div>

          {/* Domain areas */}
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-white">Aerospace &amp; Defense</div>
              <p className="text-sm text-slate-400">
                Technical standards, specifications, and compliance data
                across complex engineering domains
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-white">Government</div>
              <p className="text-sm text-slate-400">
                Agency-wide databases, regulatory frameworks, and
                policy documentation at enterprise scale
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-white">Enterprise</div>
              <p className="text-sm text-slate-400">
                Internal knowledge bases, operational data, and
                domain-specific research across any industry
              </p>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
