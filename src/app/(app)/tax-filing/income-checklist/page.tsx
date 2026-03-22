"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

const incomeTypes = [
  { id: "w2", label: "W-2 Employment Income", sub: "Wages, salary, tips", icon: "fa-briefcase", iconColor: "#003DA5", bg: "linear-gradient(135deg,#EBF0FF,#D6E2FF)" },
  { id: "1099nec", label: "1099-NEC Self-Employment", sub: "Freelance, contract work", icon: "fa-laptop", iconColor: "#7C3AED", bg: "linear-gradient(135deg,#F5F0FF,#E8DEFF)" },
  { id: "1099int", label: "1099-INT Interest Income", sub: "Bank interest, savings", icon: "fa-building-columns", iconColor: "#0D9488", bg: "linear-gradient(135deg,#F0FDFA,#CCFBF1)" },
  { id: "1099div", label: "1099-DIV Dividend Income", sub: "Stock dividends, distributions", icon: "fa-chart-line", iconColor: "#D97706", bg: "linear-gradient(135deg,#FEF3C7,#FDE68A)" },
  { id: "1099r", label: "1099-R Retirement", sub: "Pension, IRA distributions", icon: "fa-piggy-bank", iconColor: "#E63946", bg: "linear-gradient(135deg,#FFF0F1,#FECDD3)" },
  { id: "1099g", label: "1099-G Unemployment", sub: "Government payments", icon: "fa-file-alt", iconColor: "#4F46E5", bg: "linear-gradient(135deg,#EEF2FF,#DDD6FE)" },
  { id: "1099ssa", label: "1099-SSA Social Security", sub: "Social security benefits", icon: "fa-shield-halved", iconColor: "#003DA5", bg: "linear-gradient(135deg,#EBF0FF,#D6E2FF)" },
  { id: "rental", label: "Rental Income", sub: "Property rental earnings", icon: "fa-house", iconColor: "#0D9488", bg: "linear-gradient(135deg,#F0FDFA,#CCFBF1)" },
  { id: "other", label: "Other Income", sub: "Gambling, alimony, etc.", icon: "fa-ellipsis", iconColor: "#5C5C7A", bg: "linear-gradient(135deg,#F6F6FB,#E8E8F0)" },
];

export default function IncomeChecklistPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<string>>(new Set(["w2"]));

  const toggle = (id: string) => {
    setSelected((prev) => {
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
          <button className="btn-icon" onClick={() => router.push("/tax-filing/security")}>
            <i className="fas fa-arrow-left" />
          </button>
          <span className="screen-header-title">Filing 2025</span>
          <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8585A0" }}>Step 3/6</div>
        </div>

        {/* Progress Bar */}
        <div className="stagger-item d1" style={{ padding: "0 20px 8px" }}>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "50%" }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingBottom: 40, gap: 16 }}>

          {/* Title */}
          <div className="stagger-item d2" style={{ paddingTop: 4 }}>
            <h1 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", marginBottom: 6 }}>
              What income did you receive?
            </h1>
            <p style={{ fontSize: "0.82rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.5 }}>
              Select all that apply for tax year 2025
            </p>
          </div>

          {/* Checkbox Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {incomeTypes.map((item, idx) => {
              const isSelected = selected.has(item.id);
              return (
                <div
                  key={item.id}
                  className={`stagger-item d${idx + 3}`}
                  onClick={() => toggle(item.id)}
                  style={{
                    display: "flex", alignItems: "center", gap: 12, padding: "14px 16px",
                    background: isSelected ? "#EBF0FF" : "white",
                    border: `1.5px solid ${isSelected ? "#003DA5" : "#E8E8F0"}`,
                    borderRadius: 14, cursor: "pointer", userSelect: "none",
                    boxShadow: isSelected ? "0 0 0 3px rgba(0,61,165,0.08)" : undefined,
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 12, background: item.bg,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <i className={`fas ${item.icon}`} style={{ fontSize: 15, color: item.iconColor }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#1A1A2E" }}>{item.label}</div>
                    <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 1 }}>{item.sub}</div>
                  </div>
                  <div style={{
                    width: 22, height: 22, borderRadius: 6,
                    border: `2px solid ${isSelected ? "#003DA5" : "#D5D5E0"}`,
                    background: isSelected ? "#003DA5" : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    {isSelected && <i className="fas fa-check" style={{ fontSize: 11, color: "white" }} />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Min selection hint */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 4px" }}>
            <i className="fas fa-circle-info" style={{ fontSize: 11, color: "#B0B0C8" }} />
            <span style={{ fontSize: "0.72rem", color: "#8585A0", fontWeight: 500 }}>At least one must be selected</span>
          </div>

          {/* Continue Button */}
          <div style={{ paddingTop: 4 }}>
            <button
              className="btn btn-primary"
              onClick={() => router.push("/tax-filing/w2-entry")}
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
