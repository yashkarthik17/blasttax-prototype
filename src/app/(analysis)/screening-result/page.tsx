"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function ScreeningResultPage() {
  const router = useRouter();
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  useEffect(() => {
    [0, 1, 2, 3, 4].forEach((i) => {
      setTimeout(() => setAnimatedItems((p) => [...p, i]), 1000 + i * 150);
    });
  }, []);

  const results = [
    { label: "All returns filed", status: "success" },
    { label: "Not in active bankruptcy", status: "success" },
    { label: "No open audit", status: "success" },
    { label: "Balance over $50,000", status: "warning", sub: "Limits some streamlined options" },
    { label: "Not a federal employee with delinquent debt", status: "success" },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div style={{ padding: "0 20px" }}>
          <div className="progress-bar-wrapper" style={{ marginTop: 4 }}>
            <div className="progress-bar-fill" style={{ width: "30%" }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingTop: 28 }}>
          <div style={{ textAlign: "center", position: "relative" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, #00A651, #10B981)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", boxShadow: "0 8px 24px rgba(0, 166, 81, 0.25)" }}>
              <i className="fas fa-check" style={{ color: "white", fontSize: 28 }} />
            </div>
            <h1 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-foreground)" }}>Screening Complete</h1>
            <p style={{ fontSize: 13, color: "var(--color-muted-light)", marginTop: 4 }}>Here&apos;s what we found</p>
          </div>

          <div style={{ marginTop: 24, background: "white", border: "1px solid var(--color-border)", borderRadius: 16, padding: 20, boxShadow: "0 2px 12px rgba(26,26,46,0.06)" }}>
            {results.map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: i < results.length - 1 ? "1px solid var(--color-border-light)" : "none", opacity: animatedItems.includes(i) ? 1 : 0, transform: animatedItems.includes(i) ? "translateX(0)" : "translateX(-10px)", transition: "all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0, background: r.status === "success" ? "var(--color-success-light)" : "var(--color-warning-light)", color: r.status === "success" ? "var(--color-success)" : "var(--color-warning)" }}>
                  <i className={`fas ${r.status === "success" ? "fa-check" : "fa-exclamation"}`} />
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: 13.5, fontWeight: 500, color: "var(--color-foreground)" }}>{r.label}</span>
                  {r.sub && <span style={{ fontSize: 11.5, color: "var(--color-muted-light)", display: "block" }}>{r.sub}</span>}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 20, textAlign: "center", padding: 20, background: "linear-gradient(135deg, #EBF0FF 0%, #F5F0FF 100%)", borderRadius: 16, border: "1px solid rgba(0, 61, 165, 0.1)" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 6 }}>
              <span style={{ fontSize: "2rem", fontWeight: 900, color: "var(--brand-blue)", letterSpacing: "-0.02em" }}>8</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-muted)" }}>of</span>
              <span style={{ fontSize: "2rem", fontWeight: 900, color: "var(--brand-blue)", letterSpacing: "-0.02em" }}>13</span>
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-muted)", marginTop: 4, display: "block" }}>resolution types you may qualify for</span>
          </div>

          <div style={{ flex: 1 }} />

          <div style={{ padding: "16px 0 20px" }}>
            <button className="btn btn-primary" onClick={() => router.push("/penalty-screening")} style={{ fontSize: 15, padding: "16px 28px" }}>
              Continue to Financial Analysis <i className="fas fa-arrow-right" style={{ fontSize: 13 }} />
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
