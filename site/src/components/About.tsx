import ScrollFade from "./ScrollFade";

export default function About() {
  return (
    <section id="about" className="bg-dark py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFade>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Who We Are
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The company behind the companies.
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              2men.ai is an AI venture company based in Huntsville, AL. We
              build, launch, and operate AI-powered companies. Each venture is
              its own brand, its own product, its own market — but every one is
              powered by our infrastructure, our expertise, and our platform.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              We&apos;re not a consulting shop. We&apos;re not a dev agency.
              We&apos;re the company behind the companies.
            </p>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
