import ScrollFade from "./ScrollFade";

export default function Contact() {
  return (
    <section id="contact" className="endcap">
      <div className="container-x">
        <ScrollFade>
          <div className="inner">
            <div>
              <div className="broadsheet">
                <span className="section-num">§ 05</span>
                <span>Get in touch</span>
              </div>
              <h2>
                Looking for the product?
                <br />
                <span className="accent">It&apos;s The Build Bot.</span>
              </h2>
              <p>
                If you want to use what we&apos;ve built, head to{" "}
                <a
                  href="https://thebuildbot.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  thebuildbot.ai
                </a>{" "}
                — free playground, no signup. If you want to talk about a
                partnership, a new venture, or the work behind the work, write
                us directly.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <a
                  className="btn btn-primary"
                  href="https://thebuildbot.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit The Build Bot →
                </a>
                <a className="btn btn-ghost" href="mailto:info@2men.ai">
                  Email the parent company
                </a>
              </div>
            </div>
            <div className="channels">
              <div className="row">
                <span className="k">Email</span>
                <span className="v">
                  <a href="mailto:info@2men.ai">info@2men.ai</a>
                </span>
              </div>
              <div className="row">
                <span className="k">Product</span>
                <span className="v">
                  <a
                    href="https://thebuildbot.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    thebuildbot.ai
                  </a>
                </span>
              </div>
              <div className="row">
                <span className="k">LinkedIn</span>
                <span className="v">
                  <a
                    href="https://www.linkedin.com/company/2menai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /company/2menai
                  </a>
                </span>
              </div>
              <div className="row">
                <span className="k">Headquarters</span>
                <span className="v">Huntsville, Alabama</span>
              </div>
              <div className="row">
                <span className="k">Reply time</span>
                <span className="v">Within 24 hours, usually same day</span>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
