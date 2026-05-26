import ScrollFade from "./ScrollFade";

const pillars = [
  {
    num: "01 · Parse",
    title: "Reach what others can't.",
    body: "Scanned specs. Handwritten notes. Complex tables. Technical drawings. The documents generic OCR gives up on — we extract in context, with citations back to the source.",
  },
  {
    num: "02 · Standardize",
    title: "One foundation. Many apps.",
    body: "Schemas, vocabularies, governance, access — defined once with your SMEs. Search, RAG, agents, analytics, internal tools — all build on the same substrate.",
  },
  {
    num: "03 · Build & operate",
    title: "Ship the proof.",
    body: "We don't sell the foundation as theory. We build the products on top of it — internal tools, agents, vertical workflows — and run them in production with SLAs.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what" className="band mist">
      <div className="container-x">
        <ScrollFade>
          <div className="section-head">
            <div>
              <div className="broadsheet">
                <span className="section-num">§ 01</span>
                <span>What we do</span>
              </div>
              <h2>
                The work most AI projects skip.
                <br />
                <span className="accent">We start there.</span>
              </h2>
            </div>
            <p className="lede">
              Most companies have everything they need to make AI useful — it&apos;s
              just stuck in PDFs, drawings, spreadsheets, and the heads of their
              longest-tenured people. We do the unglamorous work to get it out,
              organize it, and put it where every team in your company can build
              on it.
            </p>
          </div>
        </ScrollFade>

        <ScrollFade>
          <div className="pillars">
            {pillars.map((p) => (
              <div key={p.num} className="pillar">
                <div className="num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
