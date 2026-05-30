import Image from "next/image";
import ScrollFade from "./ScrollFade";

type Member = {
  name: string;
  photo: string;
  role: string;
  bio: string;
  linkedin: string;
};

const TEAM: Member[] = [
  {
    name: "Spencer Speas",
    photo: "/spencer.jpg",
    role: "Co-Founder",
    bio: "Expert in full-stack web development, enterprise AI deployment, and process optimization from the ground up.",
    linkedin: "https://www.linkedin.com/in/spencer-speas-a7024b205/",
  },
  {
    name: "Sam Cordner",
    photo: "/sam.jpg",
    role: "Co-Founder",
    bio: "15 years of aerospace manufacturing experience. Leading consultant for additive manufacturing, experienced at leading large cross-organization teams.",
    linkedin: "https://www.linkedin.com/in/sam-cordner-2men/",
  },
  {
    name: "Clint Willis",
    photo: "/clint.jpg",
    role: "Co-Founder",
    bio: "15 years of on-prem and cloud experience, specializing in infrastructure and all things enterprise IT.",
    linkedin: "https://www.linkedin.com/in/clint-willis-2men",
  },
];

export default function About() {
  return (
    <section id="about" className="band" data-screen-label="About">
      <div className="container-x">
        <ScrollFade>
          <div className="section-head">
            <div>
              <div className="broadsheet">
                <span>About us</span>
              </div>
              <h2>
                The people <span className="accent">behind 2men.ai.</span>
              </h2>
            </div>
            <p className="lede">
              Real people in Huntsville, Alabama — senior operators who&apos;ve
              built and run IT and AI where mistakes are expensive.
            </p>
          </div>
        </ScrollFade>

        <ScrollFade>
          <div className="team-grid">
            {TEAM.map((m) => (
              <a
                key={m.name}
                className="team-card"
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="photo">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="info">
                  <div className="name">{m.name}</div>
                  <div className="role">{m.role}</div>
                  <div className="bio">{m.bio}</div>
                </div>
              </a>
            ))}
          </div>
        </ScrollFade>

        <ScrollFade>
          <div style={{ marginTop: 32 }}>
            <a className="btn btn-ghost" href="#contact">
              Work with us
            </a>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
