import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersForm from "@/components/CareersForm";
import ScrollFade from "@/components/ScrollFade";

export const metadata: Metadata = {
  title: "Careers — 2men.ai",
  description:
    "Join 2men.ai. We're a small team of senior operators in Huntsville, Alabama.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-wrap">
          <div className="container-x">
            <div className="grid">
              <ScrollFade>
                <div className="broadsheet">
                  <span>Careers</span>
                </div>
                <h1>
                  Want to <span className="accent">work with us?</span>
                </h1>
                <p className="lede">
                  We&apos;re a small team of senior operators in Huntsville,
                  Alabama. We move fast, build to real standards, and skip the
                  hype.
                </p>
                <p className="note">
                  No portal, no six-stage funnel. Tell us a little about
                  yourself and how to reach you — a real person will read it.
                </p>
              </ScrollFade>
              <ScrollFade>
                <CareersForm />
              </ScrollFade>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
