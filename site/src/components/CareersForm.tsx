"use client";

import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/mvgwprdv";

export default function CareersForm() {
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

  if (status === "sent") {
    return (
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
        <div className="sent-title">Thanks — got it</div>
        <div className="sent-sub">
          We read every message. If there&apos;s a fit, we&apos;ll be in touch.
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value="Careers — 2men.ai" />
      <div className="frow">
        <div className="field">
          <label htmlFor="cr-name">Name</label>
          <input
            id="cr-name"
            name="name"
            type="text"
            placeholder="Your name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="cr-email">Email</label>
          <input
            id="cr-email"
            name="email"
            type="email"
            placeholder="you@email.com"
            required
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="cr-link">
          LinkedIn or portfolio{" "}
          <span style={{ color: "var(--color-subtle)", fontWeight: 400 }}>
            (optional)
          </span>
        </label>
        <input
          id="cr-link"
          name="link"
          type="text"
          placeholder="A link, if you have one"
        />
      </div>
      <div className="field">
        <label htmlFor="cr-msg">A few sentences about you</label>
        <textarea
          id="cr-msg"
          name="message"
          placeholder="What you do, what you're good at, and why us."
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
            : "Send it over"}
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
  );
}
