"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function ScreeningPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<number | null>(null);
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);

  useEffect(() => {
    [0, 1, 2].forEach((i) => {
      setTimeout(() => setAnimatedCards((p) => [...p, i]), 600 + i * 120);
    });
  }, []);

  const answers = [
    { icon: "fa-check", label: "Yes, all returns are filed", desc: "I'm current on all filings", iconBg: "var(--color-success-light)", iconColor: "var(--color-success)" },
    { icon: "fa-xmark", label: "No, I have unfiled returns", desc: "Some years still need to be filed", iconBg: "var(--color-warning-light)", iconColor: "var(--color-warning)" },
    { icon: "fa-question", label: "I'm not sure", desc: "I need help figuring this out", iconBg: "var(--color-surface-alt)", iconColor: "var(--color-muted)" },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div style={{ padding: "0 20px" }}>
          <div className="progress-bar-wrapper" style={{ marginTop: 4 }}>
            <div className="progress-bar-fill" style={{ width: "15%" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10, marginBottom: 4 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-muted-light)" }}>Step 1 of 6</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--brand-blue)" }}>Initial Screening</span>
          </div>
        </div>

        <div className="screen-content" style={{ paddingTop: 20 }}>
          <div style={{ marginBottom: 8 }}>
            <h1 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.25, letterSpacing: "-0.01em" }}>
              Have you filed all required tax returns?
            </h1>
          </div>

          <div style={{ marginBottom: 28 }}>
            <p style={{ fontSize: 13, color: "var(--color-muted-light)", lineHeight: 1.5 }}>
              The IRS requires all returns to be filed before most resolution options can be considered.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {answers.map((a, i) => (
              <div
                key={i}
                onClick={() => setSelected(i)}
                style={{
                  display: "flex", alignItems: "center", gap: 14, padding: 18,
                  background: selected === i ? "var(--brand-blue-light)" : "white",
                  border: `1.5px solid ${selected === i ? "var(--brand-blue)" : "var(--color-border)"}`,
                  borderRadius: "var(--radius-lg)", cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  opacity: animatedCards.includes(i) ? 1 : 0,
                  transform: animatedCards.includes(i) ? "translateY(0)" : "translateY(12px)",
                  boxShadow: selected === i ? "0 0 0 3px rgba(0, 61, 165, 0.1)" : undefined,
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0, background: a.iconBg, color: a.iconColor }}>
                  <i className={`fas ${a.icon}`} />
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)", display: "block" }}>{a.label}</span>
                  <span style={{ fontSize: 12, color: "var(--color-muted-light)" }}>{a.desc}</span>
                </div>
                <div className="option-card-radio" />
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24 }}>
            <div className="alert alert-info">
              <i className="fas fa-circle-info" />
              <span>If you have unfiled returns, we can help you file them before starting a resolution.</span>
            </div>
          </div>

          <div style={{ flex: 1 }} />

          <div style={{ padding: "16px 0 20px" }}>
            <button
              className="btn btn-primary"
              onClick={() => selected !== null && router.push("/screening-result")}
              style={{ opacity: selected !== null ? 1 : 0.5, pointerEvents: selected !== null ? "auto" : "none", transition: "all 0.3s ease" }}
            >
              Continue <i className="fas fa-arrow-right" style={{ fontSize: 13 }} />
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
