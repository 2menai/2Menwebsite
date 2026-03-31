"use client";

import { useState, FormEvent } from "react";
import ScrollFade from "./ScrollFade";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mvgwprdv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-dark py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFade>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: info */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                Get in Touch
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let&apos;s talk.
              </h2>
              <p className="mb-8 text-lg text-slate-400">
                Whether you&apos;re exploring a partnership, need
                infrastructure, or just want to talk — we&apos;re here.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Email</div>
                    <a
                      href="mailto:info@2men.ai"
                      className="text-sm text-accent hover:text-accent-light"
                    >
                      info@2men.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      Location
                    </div>
                    <div className="text-sm text-slate-400">
                      Huntsville, AL
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      Response Time
                    </div>
                    <div className="text-sm text-slate-400">
                      Within 24 hours, usually same day
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-8">
              {status === "sent" ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                    <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Message sent
                  </h3>
                  <p className="text-sm text-slate-400">
                    We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-slate-300"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-accent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-slate-300"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-slate-300"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us what you're working on..."
                      className="w-full resize-y rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-accent"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Please try emailing us directly at{" "}
                      <a
                        href="mailto:info@2men.ai"
                        className="underline"
                      >
                        info@2men.ai
                      </a>
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
