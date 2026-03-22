"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function CaseInfoPage() {
  const router = useRouter();
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);
  const [showOptional, setShowOptional] = useState<Record<number, boolean>>({});

  useEffect(() => {
    [0, 1, 2].forEach((i) => {
      setTimeout(() => setAnimatedCards((p) => [...p, i]), 300 + i * 150);
    });
  }, []);

  const years = [
    { year: "2021", balance: "$18,500", penalty: "$3,200", interest: "$1,850" },
    { year: "2022", balance: "$15,250" },
    { year: "2023", balance: "$13,500" },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div style={{ padding: "0 20px" }}>
          <div className="progress-bar-wrapper" style={{ marginTop: 4 }}>
            <div className="progress-bar-fill" style={{ width: "40%" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-muted-light)" }}>Step 3 of 6</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--brand-blue)" }}>Tax Debt Inventory</span>
          </div>
        </div>

        <div className="screen-content" style={{ paddingTop: 16 }}>
          <div style={{ marginBottom: 6 }}>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.25 }}>Tell us about your tax debt</h1>
            <p style={{ fontSize: 13, color: "var(--color-muted-light)", marginTop: 4 }}>Add each tax year you owe</p>
          </div>

          {years.map((y, i) => (
            <div key={y.year} style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: 16, padding: 18, boxShadow: "0 2px 8px rgba(26,26,46,0.04)", marginBottom: 12, opacity: animatedCards.includes(i) ? 1 : 0, transform: animatedCards.includes(i) ? "translateY(0)" : "translateY(12px)", transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", background: "var(--brand-blue-light)", color: "var(--brand-blue)", borderRadius: 9999, fontSize: 12, fontWeight: 700 }}>
                  <i className="fas fa-calendar" style={{ fontSize: 10 }} /> {y.year}
                </span>
                <span style={{ fontSize: 11, color: "var(--color-muted-light)" }}>Income Tax</span>
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--color-muted-light)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>Tax Year</label>
                  <select defaultValue={y.year} style={{ width: "100%", padding: "10px 12px", background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)", borderRadius: 10, fontSize: 14, fontWeight: 600, color: "var(--color-foreground)", outline: "none", boxSizing: "border-box" }}>
                    {["2020", "2021", "2022", "2023", "2024", "2025"].map((yr) => <option key={yr}>{yr}</option>)}
                  </select>
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--color-muted-light)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>Balance Owed</label>
                  <input type="text" defaultValue={y.balance} placeholder="$0" style={{ width: "100%", padding: "10px 12px", background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)", borderRadius: 10, fontSize: 14, fontWeight: 600, color: "var(--color-foreground)", outline: "none", boxSizing: "border-box" }} />
                </div>
              </div>
              <div style={{ marginTop: 8 }}>
                <button onClick={() => setShowOptional((p) => ({ ...p, [i]: !p[i] }))} style={{ fontSize: 11.5, color: "var(--brand-blue)", fontWeight: 600, cursor: "pointer", background: "none", border: "none", padding: 0, display: "flex", alignItems: "center", gap: 4 }}>
                  <i className={`fas ${showOptional[i] ? "fa-minus" : "fa-plus"}`} style={{ fontSize: 9 }} />
                  {showOptional[i] ? "Hide" : "Add"} penalty & interest
                </button>
                {showOptional[i] && (
                  <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--color-muted-light)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>Penalty</label>
                      <input type="text" defaultValue={y.penalty || ""} placeholder="$0" style={{ width: "100%", padding: "10px 12px", background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)", borderRadius: 10, fontSize: 14, fontWeight: 600, color: "var(--color-foreground)", outline: "none", boxSizing: "border-box" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--color-muted-light)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>Interest</label>
                      <input type="text" defaultValue={y.interest || ""} placeholder="$0" style={{ width: "100%", padding: "10px 12px", background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)", borderRadius: 10, fontSize: 14, fontWeight: 600, color: "var(--color-foreground)", outline: "none", boxSizing: "border-box" }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          <button style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 16, border: "2px dashed var(--color-border)", borderRadius: 16, cursor: "pointer", color: "var(--color-muted)", fontSize: 13, fontWeight: 600, background: "transparent", width: "100%" }}>
            <i className="fas fa-plus" /> Add another tax year
          </button>

          <div style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D2B3D 100%)", borderRadius: 14, padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 16 }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Total Debt</span>
              <div style={{ fontSize: "1.35rem", fontWeight: 900, color: "white", letterSpacing: "-0.02em", marginTop: 2 }}>$47,250</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>across</span>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "white" }}>3 years</div>
            </div>
          </div>

          <div style={{ flex: 1, minHeight: 16 }} />

          <div style={{ padding: "12px 0 20px" }}>
            <button className="btn btn-primary" onClick={() => router.push("/case-info-review")} style={{ fontSize: 15, padding: "16px 28px" }}>
              Continue <i className="fas fa-arrow-right" style={{ fontSize: 13 }} />
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
