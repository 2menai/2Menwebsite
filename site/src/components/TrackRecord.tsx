import ScrollFade from "./ScrollFade";

const stats = [
  {
    num: "01",
    big: "10+",
    body: "Years shipping enterprise infrastructure on AWS, Terraform, and the boring-but-critical stack underneath.",
  },
  {
    num: "02",
    big: "4",
    body: "Sectors we've delivered into: government, defense & aerospace, healthcare, enterprise IT.",
  },
  {
    num: "03",
    big: "AWS",
    body: "Native on AWS — Terraform, CI/CD, monitoring, compliance baked in. Deploy to your environment or ours.",
  },
  {
    num: "04",
    big: "HSV",
    body: "Headquartered in Huntsville — the aerospace and defense capital. Senior operators, not generalists.",
  },
];

export default function TrackRecord() {
  return (
    <section id="track" className="band">
      <div className="container-x">
        <ScrollFade>
          <div className="section-head">
            <div>
              <div className="broadsheet">
                <span className="section-num">§ 02</span>
                <span>Track record</span>
              </div>
              <h2>
                We&apos;ve been here before.
                <br />
                <span className="accent">We know what ships.</span>
              </h2>
            </div>
            <p className="lede">
              The people building these companies have shipped AI and
              infrastructure in the places where mistakes are expensive —
              government, defense, healthcare, aerospace, enterprise IT.
              That&apos;s the bar every venture starts at.
            </p>
          </div>
        </ScrollFade>

        <ScrollFade>
          <div className="pillars stats">
            {stats.map((s) => (
              <div key={s.num} className="pillar stat">
                <div className="num">{s.num}</div>
                <h3>{s.big}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </ScrollFade>

        <ScrollFade>
          <div className="credentials">
            <span className="label">What we&apos;ve shipped</span>
            <p>
              AWS architectures handling regulated workloads. AI systems in
              production where the answer has to be right. Knowledge platforms
              for organizations whose oldest documents predate the cloud.
            </p>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
