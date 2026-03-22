"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

const filingOptions = [
  { value: "single", icon: "fa-user", title: "Single", desc: "Unmarried or legally separated", bg: "#EBF0FF", color: "#003DA5" },
  { value: "mfj", icon: "fa-user-group", title: "Married Filing Jointly", desc: "Filing together with your spouse", bg: "#F5F0FF", color: "#7C3AED" },
  { value: "mfs", icon: "fa-users-slash", title: "Married Filing Separately", desc: "Married but filing independent returns", bg: "#FFF0F1", color: "#E63946" },
  { value: "hoh", icon: "fa-house-user", title: "Head of Household", desc: "Unmarried and paying for dependents", bg: "#E6F9EE", color: "#00A651" },
  { value: "qss", icon: "fa-heart", title: "Qualifying Surviving Spouse", desc: "Spouse passed in last 2 tax years", bg: "#FFFBEB", color: "#D97706" },
];

export default function FilingPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const handleContinue = () => {
    if (!selected) return;
    if (selected === "mfj") {
      router.push("/spouse");
    } else {
      router.push("/dependents");
    }
  };

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ position: "relative" }}>
        <div className="floating-shapes">
          <div className="float-shape float-shape-1" />
          <div className="float-shape float-shape-2" />
        </div>

        {/* Header */}
        <div style={{ padding: "8px 20px 0", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <button
              onClick={() => router.push("/email")}
              style={{
                width: 40, height: 40, borderRadius: 12, border: "none",
                background: "var(--color-surface-alt)", color: "var(--color-fg)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, transition: "all 0.2s ease",
              }}
            >
              <i className="fas fa-arrow-left" />
            </button>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-muted-light)" }}>Step 4 of 9</span>
          </div>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "44%" }} />
          </div>
        </div>

        {/* Question */}
        <div className="stagger-item d1" style={{ padding: "24px 24px 0", position: "relative", zIndex: 2 }}>
          <h1 style={{
            fontSize: "1.625rem", fontWeight: 800, color: "var(--color-fg)",
            lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: 8,
          }}>
            What&apos;s your filing status?
          </h1>
          <p style={{ fontSize: "0.9375rem", color: "var(--color-muted)", lineHeight: 1.5, marginBottom: 24 }}>
            This determines which resolution options you qualify for
          </p>
        </div>

        {/* Options */}
        <div style={{ padding: "0 24px", flex: 1, overflowY: "auto", position: "relative", zIndex: 2 }}>
          {filingOptions.map((opt, i) => {
            const isSelected = selected === opt.value;
            return (
              <div
                key={opt.value}
                className={`stagger-item d${i + 1}`}
                onClick={() => setSelected(opt.value)}
                style={{
                  display: "flex", alignItems: "center", gap: 14, padding: "14px 16px",
                  background: isSelected ? "var(--color-primary-light)" : "white",
                  border: isSelected ? "1.5px solid var(--color-primary)" : "1.5px solid var(--color-border)",
                  borderRadius: 14, cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  marginBottom: 10,
                  boxShadow: isSelected ? "0 0 0 3px rgba(0,61,165,0.1)" : "none",
                }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: 12,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 17, flexShrink: 0,
                  background: opt.bg, color: opt.color,
                }}>
                  <i className={`fas ${opt.icon}`} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-fg)", lineHeight: 1.3 }}>
                    {opt.title}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--color-muted-light)", lineHeight: 1.4, marginTop: 2 }}>
                    {opt.desc}
                  </div>
                </div>
                <div style={{
                  width: 22, height: 22,
                  border: isSelected ? "2px solid var(--color-primary)" : "2px solid var(--color-border)",
                  borderRadius: "50%", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.2s ease",
                  background: isSelected ? "var(--color-primary)" : "transparent",
                }}>
                  {isSelected && (
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Continue */}
        <div style={{ padding: "16px 24px 40px", flexShrink: 0, position: "relative", zIndex: 2 }}>
          <button
            className="btn btn-primary"
            onClick={handleContinue}
            style={{
              fontSize: "1rem", padding: "16px 28px",
              opacity: selected ? 1 : 0.5,
              pointerEvents: selected ? "auto" : "none",
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
