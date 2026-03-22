"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

const incomeSources = [
  { icon: "fa-briefcase", label: "Employment" },
  { icon: "fa-laptop-code", label: "Self-employment" },
  { icon: "fa-landmark", label: "Social Security" },
  { icon: "fa-piggy-bank", label: "Pension" },
  { icon: "fa-ellipsis", label: "Other" },
];

function formatWithCommas(val: string): string {
  const raw = val.replace(/[^\d]/g, "");
  if (raw.length === 0) return "";
  return parseInt(raw).toLocaleString("en-US");
}

export default function IncomePage() {
  const router = useRouter();
  const [income, setIncome] = useState("");
  const [activeChips, setActiveChips] = useState<Set<string>>(new Set());

  const isValid = income.replace(/[^\d]/g, "").length > 0;

  const toggleChip = (label: string) => {
    setActiveChips((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
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
              onClick={() => router.push("/dependents")}
              style={{
                width: 40, height: 40, borderRadius: 12, border: "none",
                background: "var(--color-surface-alt)", color: "var(--color-fg)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, transition: "all 0.2s ease",
              }}
            >
              <i className="fas fa-arrow-left" />
            </button>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-muted-light)" }}>Step 6 of 9</span>
          </div>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "67%" }} />
          </div>
        </div>

        {/* Question */}
        <div className="stagger-item d1" style={{ padding: "24px 24px 0", position: "relative", zIndex: 2 }}>
          <h1 style={{
            fontSize: "1.625rem", fontWeight: 800, color: "var(--color-fg)",
            lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: 8,
          }}>
            What&apos;s your approximate annual income?
          </h1>
          <p style={{ fontSize: "0.9375rem", color: "var(--color-muted)", lineHeight: 1.5, marginBottom: 28 }}>
            This helps us calculate your monthly disposable income
          </p>
        </div>

        {/* Form */}
        <div style={{ padding: "0 24px", flex: 1, position: "relative", zIndex: 2 }}>
          {/* Currency input */}
          <div className="stagger-item d1" style={{
            display: "flex", alignItems: "center",
            background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)",
            borderRadius: 14, padding: "4px 16px", transition: "all 0.2s ease", marginBottom: 24,
          }}>
            <span style={{
              fontSize: "1.75rem", fontWeight: 800, color: "var(--color-muted-light)", marginRight: 4, lineHeight: 1,
            }}>
              $
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={income}
              onChange={(e) => setIncome(formatWithCommas(e.target.value))}
              placeholder="0"
              autoFocus
              style={{
                flex: 1, border: "none", background: "transparent",
                fontFamily: "var(--font-sans)", fontSize: "1.75rem", fontWeight: 800,
                color: "var(--color-fg)", padding: "12px 0", outline: "none",
              }}
            />
          </div>

          {/* Source chips */}
          <div className="stagger-item d2">
            <div style={{
              fontSize: 12, fontWeight: 700, color: "var(--color-muted)",
              textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 10,
            }}>
              Income Sources (select all that apply)
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
              {incomeSources.map((src) => {
                const active = activeChips.has(src.label);
                return (
                  <button
                    key={src.label}
                    onClick={() => toggleChip(src.label)}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      padding: "8px 16px", borderRadius: 9999, fontSize: 13, fontWeight: 600,
                      background: active ? "var(--color-primary-light)" : "var(--color-surface-alt)",
                      color: active ? "var(--color-primary)" : "var(--color-muted)",
                      border: active ? "1.5px solid var(--color-primary)" : "1.5px solid var(--color-border)",
                      cursor: "pointer", transition: "all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1)",
                      userSelect: "none", fontFamily: "var(--font-sans)",
                    }}
                  >
                    <i className={`fas ${src.icon}`} style={{ fontSize: 12 }} />
                    {src.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tip */}
          <div className="stagger-item d3" style={{
            display: "flex", gap: 12, padding: "14px 16px",
            background: "#EFF6FF", border: "1px solid rgba(37,99,235,0.12)",
            borderRadius: 12, fontSize: 13, lineHeight: 1.5, color: "#1E40AF",
          }}>
            <i className="fas fa-lightbulb" style={{ fontSize: 15, flexShrink: 0, marginTop: 1, color: "var(--color-primary-vivid)" }} />
            <span>Include all sources — wages, self-employment, benefits, investments, and any other income.</span>
          </div>
        </div>

        {/* Continue */}
        <div style={{ padding: "16px 24px 40px", flexShrink: 0, position: "relative", zIndex: 2 }}>
          <button
            className="btn btn-primary"
            onClick={() => router.push("/business")}
            style={{
              fontSize: "1rem", padding: "16px 28px",
              opacity: isValid ? 1 : 0.5,
              pointerEvents: isValid ? "auto" : "none",
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
