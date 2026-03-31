import ScrollFade from "./ScrollFade";

export default function CTA() {
  return (
    <section className="bg-dark-light py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFade>
          <div className="rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10 px-8 py-16 text-center sm:px-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              We&apos;ve seen this before.
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s build what&apos;s next.
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-slate-400">
              Whether you&apos;re launching an AI venture, modernizing your
              infrastructure, or just trying to figure out where to start — we
              can help.
            </p>
            <a
              href="#contact"
              className="inline-block rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/25"
            >
              Work With Us
            </a>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
