"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function ComplianceCheckPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    { id: "q1", q: "Have you filed ALL required tax returns?", sub: "Check all years -- unfiled returns block most resolutions" },
    { id: "q2", q: "Are you current on estimated tax payments?", sub: "Self-employed: quarterly 1040-ES payments" },
    { id: "q3", q: "Are you current on payroll tax deposits?", sub: "941/940 deposits must be current for OIC" },
    { id: "q4", q: "Do you have an existing installment agreement?", sub: "TC 971 AC 043 -- must close before filing OIC" },
    { id: "q5", q: "Are you currently in bankruptcy?", sub: "TC 520 -- blocks most resolution types" },
    { id: "q6", q: "Have you had an OIC accepted in the past 5 years?", sub: "TC 481 -- 5-year compliance period blocks new OIC" },
  ];

  function selectAnswer(qId: string, value: string) {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  }

  const allAnswered = Object.keys(answers).length >= 6;

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div style={{ padding: "0 20px", flexShrink: 0 }}>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "20%" }} />
          </div>
          <p style={{ fontSize: "0.6875rem", color: "var(--color-muted-light)", fontWeight: 600, marginTop: 6 }}>Step 3 of 15</p>
        </div>

        <div className="screen-content" style={{ paddingBottom: 140 }}>
          <div style={{ marginTop: 16, marginBottom: 4 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.25 }}>Are You Current with the IRS?</h1>
          </div>
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)" }}>The IRS requires compliance before most resolution options</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {questions.map((q) => {
              const ans = answers[q.id];
              let borderColor = "var(--color-border)";
              let bg = "var(--color-surface)";
              if (ans === "yes") { borderColor = "rgba(0, 166, 81, 0.25)"; bg = "linear-gradient(135deg, #FAFAFF, #E6F9EE)"; }
              if (ans === "no") { borderColor = "rgba(230, 57, 70, 0.2)"; bg = "linear-gradient(135deg, #FAFAFF, #FFF0F1)"; }
              if (ans === "unsure") { borderColor = "rgba(245, 166, 35, 0.25)"; bg = "linear-gradient(135deg, #FAFAFF, #FFFBEB)"; }
              return (
                <div key={q.id} style={{ padding: 16, background: bg, border: `1.5px solid ${borderColor}`, borderRadius: 14, transition: "all 0.3s ease" }}>
                  <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-foreground)", marginBottom: 4 }}>{q.q}</p>
                  <p style={{ fontSize: "0.6875rem", color: "var(--color-muted)", marginBottom: 10 }}>{q.sub}</p>
                  <div style={{ display: "flex", gap: 8 }}>
                    {(["yes", "no", "unsure"] as const).map((v) => {
                      let cls = "";
                      if (ans === v) {
                        if (v === "yes") cls = "selected-yes";
                        if (v === "no") cls = "selected-no";
                        if (v === "unsure") cls = "selected-unsure";
                      }
                      const baseStyle: React.CSSProperties = { padding: "6px 14px", border: "1.5px solid var(--color-border)", borderRadius: 20, fontSize: "0.75rem", fontWeight: 600, background: "white", color: "var(--color-muted)", cursor: "pointer", transition: "all 0.25s ease" };
                      if (cls === "selected-yes") Object.assign(baseStyle, { borderColor: "#00A651", background: "#E6F9EE", color: "#00A651" });
                      if (cls === "selected-no") Object.assign(baseStyle, { borderColor: "#E63946", background: "#FFF0F1", color: "#E63946" });
                      if (cls === "selected-unsure") Object.assign(baseStyle, { borderColor: "#F5A623", background: "#FFFBEB", color: "#D97706" });
                      return (
                        <button key={v} onClick={() => selectAnswer(q.id, v)} style={baseStyle}>
                          {v.charAt(0).toUpperCase() + v.slice(1)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ position: "sticky", bottom: 0, left: 0, right: 0, padding: "14px 20px", background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)", borderTop: "1px solid var(--color-border-light)", zIndex: 10 }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
            {Object.keys(answers).length === 0 ? (
              <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted-light)" }}>Answer questions to see eligibility...</span>
            ) : (
              <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)" }}>
                {Object.keys(answers).length} of 6 answered
              </span>
            )}
          </div>
          <button className="btn btn-primary" style={{ width: "100%" }} disabled={!allAnswered} onClick={() => router.push("/business-screening")}>
            Continue <i className="fas fa-arrow-right" style={{ fontSize: 12 }} />
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
