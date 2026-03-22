"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function BusinessScreeningPage() {
  const router = useRouter();
  const [showTfrpWarning, setShowTfrpWarning] = useState(false);
  const [empCount, setEmpCount] = useState(0);

  function ToggleGroup({ onSelect }: { onSelect?: (v: string) => void }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div style={{ display: "flex", gap: 0, border: "1.5px solid var(--color-border)", borderRadius: 10, overflow: "hidden", background: "var(--color-surface-alt)" }}>
        {["Yes", "No"].map((v) => (
          <button key={v} onClick={() => { setActive(v); onSelect?.(v); }} style={{ flex: 1, padding: "8px 16px", fontSize: "0.8125rem", fontWeight: 600, color: active === v ? (v === "Yes" ? "#00A651" : "#E63946") : "var(--color-muted)", background: active === v ? (v === "Yes" ? "#E6F9EE" : "#FFF0F1") : "transparent", border: "none", cursor: "pointer", borderRight: v === "Yes" ? "1px solid var(--color-border)" : "none", transition: "all 0.25s ease" }}>
            {v}
          </button>
        ))}
      </div>
    );
  }

  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const taxTypes = ["941 Employment Tax", "940 Federal Unemployment Tax", "720 Excise Tax", "1120 Corporate Income Tax"];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div style={{ padding: "0 20px", flexShrink: 0 }}>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "22%" }} />
          </div>
          <p style={{ fontSize: "0.6875rem", color: "var(--color-muted-light)", fontWeight: 600, marginTop: 6 }}>Step 4 of 15</p>
        </div>

        <div className="screen-content" style={{ paddingBottom: 100 }}>
          <div style={{ marginTop: 16, marginBottom: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-briefcase" style={{ fontSize: 13, color: "#003DA5" }} />
              </div>
              <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.25 }}>Business Tax Information</h1>
            </div>
          </div>
          <div style={{ marginBottom: 22 }}>
            <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)" }}>Additional questions for business tax debt</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {/* Q1 */}
            <div style={{ padding: 16, background: "var(--color-surface)", border: "1.5px solid var(--color-border)", borderRadius: 14 }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-foreground)", marginBottom: 4 }}>Is your business still operating?</p>
              <p style={{ fontSize: "0.6875rem", color: "var(--color-muted)", marginBottom: 10 }}>Affects which IA types are available</p>
              <ToggleGroup />
            </div>

            {/* Q2: Tax Types */}
            <div style={{ padding: 16, background: "var(--color-surface)", border: "1.5px solid var(--color-border)", borderRadius: 14 }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-foreground)", marginBottom: 4 }}>What type of business tax debt?</p>
              <p style={{ fontSize: "0.6875rem", color: "var(--color-muted)", marginBottom: 10 }}>Select all that apply</p>
              {taxTypes.map((t, i) => (
                <div key={i} onClick={() => setCheckedItems((p) => p.includes(i) ? p.filter((x) => x !== i) : [...p, i])} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10, cursor: "pointer", transition: "all 0.25s ease" }}>
                  <div style={{ width: 22, height: 22, border: `2px solid ${checkedItems.includes(i) ? "#003DA5" : "var(--color-border)"}`, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", background: checkedItems.includes(i) ? "#003DA5" : "transparent", transition: "all 0.25s ease" }}>
                    {checkedItems.includes(i) && <i className="fas fa-check" style={{ fontSize: 10, color: "white" }} />}
                  </div>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-foreground)" }}>{t}</p>
                </div>
              ))}
            </div>

            {/* Q3: TFRP */}
            <div style={{ padding: 16, background: "var(--color-surface)", border: "1.5px solid var(--color-border)", borderRadius: 14 }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-foreground)", marginBottom: 4 }}>Do you have Trust Fund Recovery Penalty (TFRP)?</p>
              <p style={{ fontSize: "0.6875rem", color: "var(--color-muted)", marginBottom: 10 }}>TC 246 on your personal transcript?</p>
              <ToggleGroup onSelect={(v) => setShowTfrpWarning(v === "Yes")} />
              {showTfrpWarning && (
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "10px 12px", background: "#FFF0F1", border: "1px solid rgba(230,57,70,0.15)", borderRadius: 10, marginTop: 10 }}>
                  <i className="fas fa-triangle-exclamation" style={{ color: "#E63946", fontSize: 13, marginTop: 2 }} />
                  <p style={{ fontSize: "0.75rem", color: "#991B1B", fontWeight: 500 }}>TFRP makes you <strong>PERSONALLY</strong> liable for trust fund portion</p>
                </div>
              )}
            </div>

            {/* Q4: Employees */}
            <div style={{ padding: 16, background: "var(--color-surface)", border: "1.5px solid var(--color-border)", borderRadius: 14 }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-foreground)", marginBottom: 10 }}>Number of employees currently?</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <button onClick={() => setEmpCount(Math.max(0, empCount - 1))} style={{ width: 36, height: 36, borderRadius: "50%", border: "1.5px solid var(--color-border)", background: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <i className="fas fa-minus" style={{ fontSize: 12 }} />
                </button>
                <input type="number" value={empCount} onChange={(e) => setEmpCount(Math.max(0, parseInt(e.target.value) || 0))} style={{ width: 80, padding: "8px 12px", background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)", borderRadius: 10, fontSize: "0.875rem", fontWeight: 600, color: "var(--color-foreground)", textAlign: "center", outline: "none" }} />
                <button onClick={() => setEmpCount(empCount + 1)} style={{ width: 36, height: 36, borderRadius: "50%", border: "1.5px solid var(--color-border)", background: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <i className="fas fa-plus" style={{ fontSize: 12 }} />
                </button>
              </div>
            </div>

            {/* Q5 & Q6 */}
            <div style={{ padding: 16, background: "var(--color-surface)", border: "1.5px solid var(--color-border)", borderRadius: 14 }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-foreground)", marginBottom: 4 }}>Are current payroll deposits up to date?</p>
              <p style={{ fontSize: "0.6875rem", color: "var(--color-muted)", marginBottom: 10 }}>Required for OIC and most IAs</p>
              <ToggleGroup />
            </div>

            <div style={{ padding: 16, background: "var(--color-surface)", border: "1.5px solid var(--color-border)", borderRadius: 14 }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-foreground)", marginBottom: 4 }}>Has a Revenue Officer been assigned?</p>
              <p style={{ fontSize: "0.6875rem", color: "var(--color-muted)", marginBottom: 10 }}>TC 971 AC 044 on transcript</p>
              <ToggleGroup />
            </div>
          </div>

          <div style={{ marginTop: 18, marginBottom: 20, padding: "12px 14px", background: "#EBF0FF", border: "1px solid rgba(0,61,165,0.1)", borderRadius: 12, display: "flex", alignItems: "flex-start", gap: 10 }}>
            <i className="fas fa-info-circle" style={{ color: "#003DA5", fontSize: 14, marginTop: 2 }} />
            <p style={{ fontSize: "0.75rem", color: "#003DA5", fontWeight: 500 }}>Business debt requires <strong>Form 433-B</strong> in addition to Form 433-A</p>
          </div>

          <button className="btn btn-primary" style={{ width: "100%" }} onClick={() => router.push("/case-info")}>
            Continue <i className="fas fa-arrow-right" style={{ fontSize: 12 }} />
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
