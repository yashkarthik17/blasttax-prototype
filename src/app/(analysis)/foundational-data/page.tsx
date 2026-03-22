"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function FoundationalDataPage() {
  const router = useRouter();
  const [selectedReasons, setSelectedReasons] = useState<number[]>([]);
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);
  const [activeYears, setActiveYears] = useState<number[]>([1, 2]);

  useEffect(() => {
    [0, 1, 2, 3, 4, 5].forEach((i) => {
      setTimeout(() => setAnimatedCards((p) => [...p, i]), 400 + i * 100);
    });
  }, []);

  const reasons = [
    "Mathematical or clerical error by IRS",
    "Income was incorrectly attributed to me",
    "Deductions or credits were improperly disallowed",
    "Substitute for Return (SFR) was filed incorrectly",
    "Penalty was assessed in error",
    "Other assessment dispute",
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Doubt as to Liability" backPath="/income-expenses" />
        <div className="screen-content" style={{ paddingTop: 8 }}>
          <div style={{ marginBottom: 6 }}>
            <h1 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.3 }}>Do you believe the IRS assessed your tax incorrectly?</h1>
            <p style={{ fontSize: 12, color: "var(--color-muted-light)", marginTop: 6, lineHeight: 1.5 }}>DATL allows you to dispute the amount the IRS says you owe through Form 656-L</p>
          </div>

          <div style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-muted-light)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 8 }}>Qualifying Reasons</div>
          </div>

          {reasons.map((r, i) => {
            const isSelected = selectedReasons.includes(i);
            return (
              <div key={i} onClick={() => setSelectedReasons((p) => p.includes(i) ? p.filter((x) => x !== i) : [...p, i])} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 14, background: isSelected ? "var(--brand-blue-light)" : "white", border: `1.5px solid ${isSelected ? "var(--brand-blue)" : "var(--color-border)"}`, borderRadius: 14, cursor: "pointer", marginBottom: 8, opacity: animatedCards.includes(i) ? 1 : 0, transform: animatedCards.includes(i) ? "translateY(0)" : "translateY(12px)", transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)", boxShadow: isSelected ? "0 0 0 3px rgba(0, 61, 165, 0.1)" : undefined }}>
                <div style={{ width: 22, height: 22, border: `2px solid ${isSelected ? "var(--brand-blue)" : "var(--color-border)"}`, borderRadius: 6, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: isSelected ? "var(--brand-blue)" : "transparent", marginTop: 1, transition: "all 0.2s ease" }}>
                  {isSelected && <i className="fas fa-check" style={{ fontSize: 11, color: "white" }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-foreground)" }}>{r}</div>
                  {isSelected && (
                    <div style={{ marginTop: 10 }}>
                      <textarea onClick={(e) => e.stopPropagation()} placeholder="Describe the error..." style={{ width: "100%", padding: "10px 12px", background: "white", border: "1.5px solid var(--color-border)", borderRadius: 10, fontSize: 13, color: "var(--color-foreground)", outline: "none", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Upload */}
          <div style={{ marginTop: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-muted-light)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 8 }}>Supporting Evidence</div>
            <div style={{ border: "2px dashed var(--color-border)", borderRadius: 12, padding: 16, textAlign: "center", cursor: "pointer" }}>
              <i className="fas fa-cloud-arrow-up" style={{ fontSize: 20, color: "var(--color-muted)", marginBottom: 6, display: "block" }} />
              <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-muted)" }}>Upload documents</div>
              <div style={{ fontSize: 11, color: "var(--color-placeholder)", marginTop: 2 }}>PDF, JPG, PNG</div>
            </div>
          </div>

          {/* Tax Years */}
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-muted-light)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 8 }}>Tax Years Affected</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {[2020, 2021, 2022, 2023].map((yr, i) => (
                <div key={yr} onClick={() => setActiveYears((p) => p.includes(i) ? p.filter((x) => x !== i) : [...p, i])} style={{ display: "inline-flex", alignItems: "center", padding: "8px 16px", border: `1.5px solid ${activeYears.includes(i) ? "var(--brand-blue)" : "var(--color-border)"}`, borderRadius: 9999, fontSize: 13, fontWeight: 600, color: activeYears.includes(i) ? "var(--brand-blue)" : "var(--color-muted)", cursor: "pointer", background: activeYears.includes(i) ? "var(--brand-blue-light)" : "white", transition: "all 0.2s ease" }}>
                  {yr}
                </div>
              ))}
            </div>
          </div>

          {/* Disputed Amount */}
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-muted-light)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 8 }}>Disputed Amount Per Year</div>
            <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-muted-light)", marginBottom: 4 }}>2021</div>
                <input type="text" defaultValue="$8,200" style={{ width: "100%", padding: "10px 12px", background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)", borderRadius: 10, fontSize: 14, fontWeight: 600, color: "var(--color-foreground)", outline: "none", boxSizing: "border-box" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-muted-light)", marginBottom: 4 }}>2022</div>
                <input type="text" defaultValue="$5,400" style={{ width: "100%", padding: "10px 12px", background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)", borderRadius: 10, fontSize: 14, fontWeight: 600, color: "var(--color-foreground)", outline: "none", boxSizing: "border-box" }} />
              </div>
            </div>
          </div>

          {/* Total */}
          <div style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D2B3D 100%)", borderRadius: 14, padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Total Disputed</span>
              <div style={{ fontSize: "1.25rem", fontWeight: 900, color: "white", letterSpacing: "-0.02em", marginTop: 2 }}>$13,600</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>via</span>
              <div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>Form 656-L</div>
            </div>
          </div>

          <div className="alert alert-info" style={{ marginTop: 12 }}>
            <i className="fas fa-circle-info" />
            <span>Unlike DATC, DATL does not require a financial disclosure</span>
          </div>

          <div style={{ flex: 1, minHeight: 12 }} />

          <div style={{ padding: "12px 0 20px" }}>
            <button className="btn btn-primary" onClick={() => router.push("/final-verification")} style={{ fontSize: 15, padding: "16px 28px" }}>
              Continue <i className="fas fa-arrow-right" style={{ fontSize: 13 }} />
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
