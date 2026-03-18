"use client";

import { useEffect, useRef } from "react";

const phrases = [
  "Close more deals. Chase fewer spreadsheets.",
  "Your deals, your clients, your edge.",
  "Less admin. More commission.",
  "The back office you never had.",
];

export default function Home() {
  const targetRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let cancelled = false;

    const typeSpeedMs = 50;
    const deleteSpeedMs = 25;
    const pauseAfterMs = 1800;

    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    const setHtml = (text: string) => {
      if (targetRef.current) targetRef.current.textContent = text;
    };

    const typeOut = async (text: string) => {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return;
        setHtml(text.slice(0, i));
        await sleep(typeSpeedMs + Math.random() * 30);
      }
    };

    const deleteAll = async (text: string) => {
      for (let i = text.length; i >= 0; i--) {
        if (cancelled) return;
        setHtml(text.slice(0, i));
        await sleep(deleteSpeedMs);
      }
    };

    const run = async () => {
      while (!cancelled) {
        for (const phrase of phrases) {
          if (cancelled) return;
          await typeOut(phrase);
          await sleep(pauseAfterMs);
          await deleteAll(phrase);
          await sleep(300);
        }
      }
    };

    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "#ededed",
    }}>
      <header style={{
        padding: "1.5rem 2rem",
        fontSize: "0.9rem",
        fontWeight: 600,
        letterSpacing: "0.02em",
      }}>
        AutomateTenantRep
      </header>

      <main style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        padding: "2rem",
      }}>
        <h1 style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "clamp(1.4rem, 4vw, 2.4rem)",
          fontWeight: 400,
          textAlign: "center",
          minHeight: "3.2em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <span style={{ display: "inline", lineHeight: 1.06 }}>
            <span ref={targetRef} />
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: 2,
                height: "1.1em",
                background: "#ededed",
                marginLeft: 2,
                verticalAlign: "text-bottom",
                animation: "blink 1s step-end infinite",
              }}
            />
          </span>
        </h1>

        <p style={{
          fontSize: "1rem",
          color: "#888",
          textAlign: "center",
          maxWidth: 420,
          lineHeight: 1.6,
        }}>
          Tools built for tenant rep brokers.
          <br />
          Coming soon.
        </p>
      </main>

      <footer style={{
        padding: "1.5rem 2rem",
        fontSize: "0.75rem",
        color: "#888",
        textAlign: "center",
      }}>
        © 2026 AutomateCRE
      </footer>

      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </div>
  );
}
