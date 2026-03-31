"use client";

import { useEffect, useRef } from "react";

export default function ScrollFade({
  children,
  className = "",
  stagger = false,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (stagger) {
              el.querySelectorAll(".fade-in").forEach((child) => {
                child.classList.add("visible");
              });
            } else {
              el.classList.add("visible");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  return (
    <div
      ref={ref}
      className={`${stagger ? "stagger" : "fade-in"} ${className}`}
    >
      {children}
    </div>
  );
}
