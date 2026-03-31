import ScrollFade from "./ScrollFade";

const walls = [
  {
    number: "01",
    title: "You don't know what you don't know",
    description:
      "You ask the AI to build something. It builds it. It looks great. But the security groups are wrong, the database isn't indexed for your query patterns, there's no audit trail, and it falls over at 100 concurrent users. The AI did exactly what it was told. The problem is nobody knew what to tell it.",
  },
  {
    number: "02",
    title: "There's no infrastructure under it",
    description:
      "Claude can write beautiful application code. But who's setting up the AWS account? The Terraform? The VPC, CI/CD pipeline, monitoring, backups? Who's making sure it meets government security requirements? That's not a prompt engineering problem. That's a decade of infrastructure experience.",
  },
  {
    number: "03",
    title: "There's no person behind it",
    description:
      "When a customer asks \"can we see an audit trail of every query?\" — AI can't answer that. When leadership asks \"is this secure enough for our data?\" — AI doesn't pick up the phone. When something breaks on a Friday night — AI doesn't have a Slack channel. We do.",
  },
];

const reframes = [
  {
    bold: "AI tools give you a hammer.",
    rest: "We know how to build the house.",
  },
  {
    bold: "Everyone can access the same models.",
    rest: "Not everyone knows what to do with them.",
  },
  {
    bold: "You wouldn't hand someone a scalpel and call them a surgeon.",
    rest: "Same logic applies to AI.",
  },
  {
    bold: "AI tools are commodities.",
    rest: "The expertise behind them is not.",
  },
];

export default function WhyNotJustAI() {
  return (
    <section id="why-not-just-ai" className="bg-navy py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFade>
          <div className="mx-auto mb-6 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              The Honest Truth
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why not just use ChatGPT?
            </h2>
            <p className="text-lg text-slate-400">
              Good question. We use Claude, Bedrock, and every AI tool that
              makes us faster. We love them. But here&apos;s the thing:
            </p>
          </div>

          {/* Founder quote */}
          <div className="mx-auto mb-16 max-w-2xl">
            <blockquote className="rounded-xl border border-accent/20 bg-accent/5 px-8 py-6 text-center">
              <p className="text-lg font-medium leading-relaxed text-white">
                &ldquo;AI is only as good as the concepts you understand. If you
                don&apos;t understand the concepts, you&apos;re only as good as
                what the AI will tell you&mdash;and the reality is, it&apos;s
                not going to be that good.&rdquo;
              </p>
            </blockquote>
          </div>
        </ScrollFade>

        {/* The Three Walls */}
        <ScrollFade>
          <h3 className="mb-8 text-center text-xl font-semibold text-white">
            Three walls every organization hits
          </h3>
        </ScrollFade>

        <ScrollFade stagger>
          <div className="grid gap-6 md:grid-cols-3">
            {walls.map((wall) => (
              <div
                key={wall.number}
                className="fade-in rounded-xl border border-white/5 bg-white/[0.02] p-8"
              >
                <div className="mb-4 text-4xl font-extrabold text-accent/20">
                  {wall.number}
                </div>
                <h4 className="mb-3 text-lg font-semibold text-white">
                  {wall.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-400">
                  {wall.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollFade>

        {/* Reframes */}
        <ScrollFade>
          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {reframes.map((r) => (
              <div
                key={r.bold}
                className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-5"
              >
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <p className="text-sm leading-relaxed text-slate-300">
                  <span className="font-semibold text-white">{r.bold}</span>{" "}
                  {r.rest}
                </p>
              </div>
            ))}
          </div>
        </ScrollFade>

        {/* Managed service */}
        <ScrollFade>
          <div className="mt-16 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10 px-8 py-10 text-center sm:px-16">
            <h3 className="mb-4 text-2xl font-bold text-white">
              AI with an engineering team behind it
            </h3>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400">
              Most AI products hand you a tool and wish you luck. We deliver a
              managed intelligence service&mdash;the AI{" "}
              <span className="text-white">plus</span> a real team that
              understands your business, your infrastructure, and your goals.
              We&apos;re constantly tuning, improving, and maintaining
              it&mdash;so the system gets smarter over time, not stale.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500">
              Not a chatbot. A managed intelligence service.
            </p>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
