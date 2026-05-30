"use client";

import { useState } from "react";
import ScrollFade from "./ScrollFade";

const FORM_ENDPOINT = "https://formspree.io/f/mvgwprdv";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("fail");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="endcap" data-screen-label="Contact">
      <div className="container-x">
        <ScrollFade>
          <div className="inner">
            <div>
              <div className="broadsheet">
                <span>Contact us</span>
              </div>
              <h2>
                Tell us what <span className="accent">you&apos;re after.</span>
              </h2>
              <p>
                Tell us what you&apos;re trying to do. A real person reads every
                message and gets back to you — usually the same day.
              </p>
              <div className="channels" style={{ marginTop: 28 }}>
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
                  <span className="k">Location</span>
                  <span className="v">Huntsville, Alabama</span>
                </div>
              </div>
            </div>

            <div>
              {status !== "sent" && (
                <form className="form-card" onSubmit={onSubmit}>
                  <div className="frow">
                    <div className="field">
                      <label htmlFor="cf-name">Name</label>
                      <input
                        id="cf-name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="cf-email">Email</label>
                      <input
                        id="cf-email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="cf-company">Company</label>
                    <input
                      id="cf-company"
                      name="company"
                      type="text"
                      placeholder="Where you work"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="cf-msg">What are you trying to do?</label>
                    <textarea
                      id="cf-msg"
                      name="message"
                      placeholder="A few sentences is plenty."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending"
                      ? "Sending…"
                      : status === "error"
                        ? "Try again — or email info@2men.ai"
                        : "Send message"}
                    {status === "idle" && (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </form>
              )}
              {status === "sent" && (
                <div className="form-card form-sent show">
                  <div className="ck">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </div>
                  <div className="sent-title">Message sent</div>
                  <div className="sent-sub">
                    A real person will get back to you — usually same day.
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
