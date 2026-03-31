import ScrollFade from "./ScrollFade";

export default function Approach() {
  return (
    <section id="approach" className="bg-dark-light py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFade>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Our Approach
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The two things that matter.
            </h2>
          </div>
        </ScrollFade>

        <ScrollFade stagger>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Column 1: Concept Knowledge */}
            <div className="fade-in rounded-2xl border border-white/5 bg-white/[0.02] p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">
                Concept Knowledge
              </h3>
              <p className="mb-4 text-base font-medium italic text-accent/80">
                &ldquo;AI is only as good as the concepts you understand.&rdquo;
              </p>
              <p className="text-base leading-relaxed text-slate-400">
                We&apos;ve worked across government, healthcare, aerospace, and
                enterprise IT. We know what questions to ask because we&apos;ve
                heard them all before.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                We understand the AI concepts so you don&apos;t have to. We
                guide you through it — what to build, how to build it, and what
                to avoid.
              </p>
            </div>

            {/* Column 2: Infrastructure */}
            <div className="fade-in rounded-2xl border border-white/5 bg-white/[0.02] p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">
                Infrastructure
              </h3>
              <p className="mb-4 text-base font-medium italic text-accent/80">
                &ldquo;You can rent every tool at the hardware store. That
                doesn&apos;t mean you know how to build the house.&rdquo;
              </p>
              <p className="text-base leading-relaxed text-slate-400">
                Experienced AWS experts who back your business with sound IT
                best practices. 10+ years of government and enterprise
                infrastructure. AWS, Terraform, CI/CD, monitoring, security,
                compliance — already built, already scalable.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                The plumbing is done. Plug in and go.
              </p>
            </div>
          </div>
        </ScrollFade>

        {/* Combined pitch */}
        <ScrollFade>
          <div className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 px-8 py-8 text-center">
            <p className="text-lg font-semibold leading-relaxed text-white sm:text-xl">
              We give you the concept knowledge to make AI work, and the
              infrastructure so you don&apos;t have to build it.{" "}
              <span className="text-accent">Nobody else does both.</span>
            </p>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
