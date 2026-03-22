"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

const credits = [
  { id: "child", label: "Child Tax Credit", sub: "$2,000 per qualifying child", badge: "0 qualifying children", badgeBg: "#F6F6FB", badgeColor: "#5C5C7A", expandLabel: "Number of qualifying children", isNumber: true },
  { id: "eic", label: "Earned Income Credit (EIC)", sub: "Based on income and filing status", badge: "Estimated: $0", badgeBg: "#F6F6FB", badgeColor: "#5C5C7A" },
  { id: "aoc", label: "American Opportunity Credit", sub: "Education expenses", badge: "Up to $2,500", badgeBg: "#EBF0FF", badgeColor: "#003DA5", expandLabel: "Qualified education expenses" },
  { id: "llc", label: "Lifetime Learning Credit", sub: "Education expenses", badge: "Up to $2,000", badgeBg: "#EBF0FF", badgeColor: "#003DA5", expandLabel: "Qualified tuition & fees" },
  { id: "dependent-care", label: "Child & Dependent Care Credit", sub: "Daycare/childcare expenses", expandLabel: "Total care expenses" },
  { id: "saver", label: "Saver's Credit", sub: "Retirement contributions", expandLabel: "Retirement contributions amount" },
  { id: "energy", label: "Energy Credits", sub: "Solar, EV, home improvements", expandLabel: "Qualified energy expenses" },
];

export default function TaxCreditsPage() {
  const router = useRouter();
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        {/* Header */}
        <div className="screen-header stagger-item d1">
          <button className="btn-icon" onClick={() => router.push("/tax-filing/deductions")}>
            <i className="fas fa-arrow-left" />
          </button>
          <span className="screen-header-title">Filing 2025</span>
          <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8585A0" }}>Step 5/6</div>
        </div>

        {/* Progress Bar */}
        <div className="stagger-item d1" style={{ padding: "0 20px 8px" }}>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "83.3%" }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingBottom: 40, gap: 12 }}>

          {/* Title */}
          <div className="stagger-item d2" style={{ paddingTop: 4 }}>
            <h1 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", marginBottom: 6 }}>Tax Credits</h1>
            <p style={{ fontSize: "0.85rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.5 }}>Credits directly reduce your tax -- check all that apply</p>
          </div>

          {/* Credit Cards */}
          {credits.map((credit, idx) => {
            const isChecked = checked.has(credit.id);
            return (
              <div
                key={credit.id}
                className={`stagger-item d${idx + 3}`}
                onClick={() => toggle(credit.id)}
                style={{
                  background: isChecked ? "linear-gradient(145deg, #FAFAFF 0%, #EBF0FF 100%)" : "white",
                  border: `1.5px solid ${isChecked ? "#003DA5" : "#E8E8F0"}`,
                  borderRadius: 14, padding: 16, cursor: "pointer", position: "relative",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 6,
                    border: `2px solid ${isChecked ? "#003DA5" : "#D5D5E0"}`,
                    background: isChecked ? "#003DA5" : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <i className="fas fa-check" style={{ fontSize: 11, color: "white", opacity: isChecked ? 1 : 0 }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>{credit.label}</div>
                    <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 2 }}>{credit.sub}</div>
                    {credit.badge && (
                      <div style={{
                        display: "inline-flex", marginTop: 6, padding: "3px 8px",
                        background: credit.badgeBg, borderRadius: 9999,
                        fontSize: "0.65rem", fontWeight: 600, color: credit.badgeColor,
                      }}>
                        {credit.badge}
                      </div>
                    )}
                  </div>
                </div>

                {/* Expandable content */}
                {isChecked && credit.expandLabel && (
                  <div onClick={(e) => e.stopPropagation()} style={{ paddingTop: 14, marginTop: 12, borderTop: "1px solid #E8E8F0" }}>
                    <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#8585A0", display: "block", marginBottom: 6 }}>
                      {credit.expandLabel}
                    </label>
                    <div style={{ position: "relative" }}>
                      {!credit.isNumber && (
                        <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: "0.82rem", fontWeight: 600, color: "#8585A0", zIndex: 1 }}>$</span>
                      )}
                      <input
                        type={credit.isNumber ? "number" : "text"}
                        placeholder={credit.isNumber ? "0" : "0.00"}
                        min={credit.isNumber ? 0 : undefined}
                        style={{
                          width: credit.isNumber ? 100 : "100%",
                          padding: credit.isNumber ? "10px 14px 10px 12px" : "10px 14px 10px 24px",
                          background: "white", border: "1.5px solid #E8E8F0", borderRadius: 10,
                          fontFamily: "inherit", fontSize: "0.82rem", fontWeight: 600,
                          color: "#1A1A2E", outline: "none", boxSizing: "border-box",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Total Credits */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 14, background: "linear-gradient(135deg, #E6F9EE, #B8F0D3)",
            borderRadius: 14, marginTop: 4,
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#00A651", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>Total Credits</div>
              <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "#00A651" }}>$0</div>
            </div>
          </div>

          {/* Continue Button */}
          <div style={{ paddingTop: 4 }}>
            <button
              className="btn btn-primary"
              onClick={() => router.push("/tax-filing/review")}
              style={{ fontSize: "0.95rem", fontWeight: 700, padding: "16px 28px" }}
            >
              Continue
              <i className="fas fa-arrow-right" style={{ fontSize: 14 }} />
            </button>
          </div>

        </div>
      </div>
    </PhoneFrame>
  );
}
