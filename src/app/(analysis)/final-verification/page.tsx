"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function FinalVerificationPage() {
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  useEffect(() => {
    [0, 1, 2, 3, 4, 5].forEach((i) => {
      setTimeout(() => setAnimatedItems((p) => [...p, i]), 500 + i * 120);
    });
  }, []);

  const checks = [
    "All required tax returns filed",
    "Personal information verified",
    "3 tax years with $47,250 total debt entered",
    "Financial profile complete (assets, income, expenses)",
    "Transcript data reviewed",
    "Household information provided",
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div style={{ padding: "0 20px" }}>
          <div className="progress-bar-wrapper" style={{ marginTop: 4 }}>
            <div className="progress-bar-fill" style={{ width: "90%" }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingTop: 20 }}>
          <div style={{ marginBottom: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <h1 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.25 }}>Almost there!</h1>
              <span style={{ fontSize: 20 }}>&#10024;</span>
            </div>
            <p style={{ fontSize: 13, color: "var(--color-muted-light)", lineHeight: 1.5 }}>Let&apos;s do a final check before running your analysis</p>
          </div>

          <div style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: 16, padding: "4px 16px", marginBottom: 14 }}>
            {checks.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: i < checks.length - 1 ? "1px solid var(--color-border-light)" : "none", opacity: animatedItems.includes(i) ? 1 : 0, transform: animatedItems.includes(i) ? "translateX(0)" : "translateX(-12px)", transition: "all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0, background: "var(--color-success-light)", color: "var(--color-success)" }}>
                  <i className="fas fa-check" />
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-foreground)" }}>{c}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
            {[{ v: "$47,250", l: "Total Debt", c: "var(--brand-red)" }, { v: "$2,850", l: "MDI" }, { v: "$12,400", l: "Assets" }, { v: "3", l: "Years" }].map((s, i) => (
              <div key={i} style={{ flex: 1, background: "white", border: "1px solid var(--color-border)", borderRadius: 12, padding: 12, textAlign: "center" }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: s.c || "var(--color-foreground)", letterSpacing: "-0.01em" }}>{s.v}</div>
                <div style={{ fontSize: 10, fontWeight: 600, color: "var(--color-muted-light)", textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div onClick={() => setConfirmed(!confirmed)} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 16px", background: confirmed ? "var(--brand-blue-light)" : "var(--color-surface-alt)", border: `1.5px solid ${confirmed ? "var(--brand-blue)" : "var(--color-border)"}`, borderRadius: 14, cursor: "pointer", marginBottom: 14, transition: "all 0.3s ease" }}>
            <div style={{ width: 22, height: 22, border: `2px solid ${confirmed ? "var(--brand-blue)" : "var(--color-border)"}`, borderRadius: 6, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: confirmed ? "var(--brand-blue)" : "transparent", marginTop: 1, transition: "all 0.2s ease" }}>
              {confirmed && <i className="fas fa-check" style={{ fontSize: 11, color: "white" }} />}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-foreground)", lineHeight: 1.5 }}>I confirm all information is accurate to the best of my knowledge</div>
          </div>

          <div style={{ flex: 1, minHeight: 12 }} />

          <div style={{ padding: "8px 0 8px" }}>
            <button onClick={() => confirmed && router.push("/processing")} style={{ background: confirmed ? "linear-gradient(135deg, #00A651 0%, #10B981 100%)" : "var(--color-disabled)", color: confirmed ? "white" : "var(--color-placeholder)", border: "none", borderRadius: 9999, padding: "18px 32px", fontSize: 16, fontWeight: 700, cursor: confirmed ? "pointer" : "default", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, boxShadow: confirmed ? "0 8px 32px rgba(0,166,81,0.25)" : "none", transition: "all 0.3s ease", opacity: confirmed ? 1 : 0.5, pointerEvents: confirmed ? "auto" : "none" }}>
              <span>&#10024;</span> Run Analysis
            </button>
          </div>

          <div style={{ textAlign: "center", padding: "8px 0 16px" }}>
            <button onClick={() => router.back()} style={{ background: "none", border: "none", fontSize: 13, fontWeight: 600, color: "var(--color-muted)", cursor: "pointer" }}>
              <i className="fas fa-arrow-left" style={{ fontSize: 11, marginRight: 4 }} /> Back to Edit
            </button>
          </div>

          <div style={{ textAlign: "center", paddingBottom: 16 }}>
            <div style={{ fontSize: 11, color: "var(--color-placeholder)", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <i className="fas fa-clock" style={{ fontSize: 10 }} /> Analysis typically takes 30-60 seconds
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
