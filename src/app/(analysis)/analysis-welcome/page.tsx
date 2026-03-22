"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function AnalysisWelcomePage() {
  const router = useRouter();
  const [animatedSteps, setAnimatedSteps] = useState<number[]>([]);

  useEffect(() => {
    [0, 1, 2].forEach((i) => {
      setTimeout(() => setAnimatedSteps((p) => [...p, i]), 700 + i * 150);
    });
  }, []);

  const steps = [
    { icon: "fa-clipboard-list", label: "Answer a few questions", desc: "Simple, guided questions about your situation", gradient: "linear-gradient(135deg, #003DA5, #2563EB)" },
    { icon: "fa-microchip", label: "We'll analyze your eligibility", desc: "AI-powered assessment against IRS criteria", gradient: "linear-gradient(135deg, #7C3AED, #a78bfa)" },
    { icon: "fa-star", label: "Get your personalized plan", desc: "Ranked options with savings estimates", gradient: "linear-gradient(135deg, #00A651, #10B981)" },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div className="screen-content" style={{ justifyContent: "center", alignItems: "center", textAlign: "center", padding: "20px 28px" }}>
          {/* Illustration */}
          <div style={{ width: 140, height: 140, borderRadius: "50%", background: "linear-gradient(135deg, #EBF0FF 0%, #F5F0FF 40%, #FFF5F5 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <div style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "2px dashed rgba(0, 61, 165, 0.1)", animation: "spin 20s linear infinite" }} />
            <div style={{ position: "absolute", inset: -20, borderRadius: "50%", border: "1px dashed rgba(124, 58, 237, 0.08)", animation: "spin 30s linear infinite reverse" }} />
            <i className="fas fa-magnifying-glass" style={{ fontSize: 48, background: "linear-gradient(135deg, #003DA5, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} />
          </div>

          <div style={{ marginTop: 32 }}>
            <h1 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
              Let&apos;s find your best<br />resolution path
            </h1>
          </div>

          <div style={{ marginTop: 32, width: "100%", textAlign: "left", display: "flex", flexDirection: "column", gap: 16 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, opacity: animatedSteps.includes(i) ? 1 : 0, transform: animatedSteps.includes(i) ? "translateX(0)" : "translateX(-12px)", transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0, color: "white", background: s.gradient }}>
                  <i className={`fas ${s.icon}`} style={{ fontSize: 14 }} />
                </div>
                <div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)", display: "block" }}>{s.label}</span>
                  <span style={{ fontSize: 12, color: "var(--color-muted-light)" }}>{s.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24 }}>
            <span style={{ fontSize: 13, color: "var(--color-muted-light)" }}>
              <i className="far fa-clock" style={{ marginRight: 4 }} />
              This usually takes about 10 minutes
            </span>
          </div>

          <div style={{ marginTop: 20, width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", background: "var(--color-surface-alt)", borderRadius: 12, border: "1px solid var(--color-border-light)" }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--color-success-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className="fas fa-lock" style={{ color: "var(--color-success)", fontSize: 13 }} />
              </div>
              <span style={{ fontSize: 12.5, color: "var(--color-muted)", textAlign: "left", lineHeight: 1.4 }}>Everything you share is confidential and encrypted</span>
            </div>
          </div>

          <div style={{ marginTop: 28, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <button className="btn btn-primary" onClick={() => router.push("/screening")} style={{ fontSize: 15, padding: "16px 28px" }}>
              Let&apos;s Begin <i className="fas fa-arrow-right" style={{ fontSize: 13 }} />
            </button>
            <button className="btn btn-ghost" style={{ fontSize: 13, color: "var(--color-muted-light)" }} onClick={() => router.push("/dashboard")}>
              I&apos;ll do this later
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
