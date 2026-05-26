import ScrollFade from "./ScrollFade";

const cards = [
  {
    label: "Decades of documents",
    quote: "We have everything. Nobody can find anything.",
    body: "The spec library. The SharePoint sprawl. The binders nobody opens. We pull what matters out and make it queryable — and standards-aligned, so every future tool can use it.",
  },
  {
    label: "Experts about to retire",
    quote:
      "When Jim leaves, half our institutional memory leaves with him.",
    body: "Thirty-year veterans walk out the door with everything in their head. We capture what's on paper — and what they marked up — before it leaves the building.",
  },
];

export default function WhoWeListenFor() {
  return (
    <section id="about" className="band paper">
      <div className="container-x">
        <ScrollFade>
          <div className="section-head">
            <div>
              <div className="broadsheet">
                <span className="section-num">§ 04</span>
                <span>Who we listen for</span>
              </div>
              <h2>
                If this sounds like you,
                <br />
                <span className="accent">we should talk.</span>
              </h2>
            </div>
            <p className="lede">
              2men.ai works with teams who have something deep — and something
              at risk of being lost. We parse it, standardize it, build on it.
              Sometimes we hand the result back to your team. Sometimes it
              becomes a product like The Build Bot.
            </p>
          </div>
        </ScrollFade>

        <ScrollFade>
          <div className="qrow">
            {cards.map((c) => (
              <div key={c.label} className="qcard">
                <span className="label">{c.label}</span>
                <blockquote>&ldquo;{c.quote}&rdquo;</blockquote>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
