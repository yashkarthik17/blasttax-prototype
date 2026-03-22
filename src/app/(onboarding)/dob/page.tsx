"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

const months = [
  { value: "01", label: "January" }, { value: "02", label: "February" },
  { value: "03", label: "March" }, { value: "04", label: "April" },
  { value: "05", label: "May" }, { value: "06", label: "June" },
  { value: "07", label: "July" }, { value: "08", label: "August" },
  { value: "09", label: "September" }, { value: "10", label: "October" },
  { value: "11", label: "November" }, { value: "12", label: "December" },
];

export default function DobPage() {
  const router = useRouter();
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const days = useMemo(() => Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0")), []);
  const years = useMemo(() => {
    const arr: number[] = [];
    for (let y = 2008; y >= 1930; y--) arr.push(y);
    return arr;
  }, []);

  const isValid = month !== "" && day !== "" && year !== "";

  const selectStyle: React.CSSProperties = {
    width: "100%", padding: "14px 36px 14px 16px",
    background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)",
    borderRadius: 12, fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500,
    color: "var(--color-fg)", transition: "all 0.2s ease", outline: "none",
    appearance: "none" as const, cursor: "pointer", boxSizing: "border-box" as const,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%238585A0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 14px center",
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
              onClick={() => router.push("/name")}
              style={{
                width: 40, height: 40, borderRadius: 12, border: "none",
                background: "var(--color-surface-alt)", color: "var(--color-fg)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, transition: "all 0.2s ease",
              }}
            >
              <i className="fas fa-arrow-left" />
            </button>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-muted-light)" }}>Step 2 of 9</span>
          </div>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "22%" }} />
          </div>
        </div>

        {/* Question */}
        <div className="stagger-item d1" style={{ padding: "24px 24px 0", position: "relative", zIndex: 2 }}>
          <h1 style={{
            fontSize: "1.625rem", fontWeight: 800, color: "var(--color-fg)",
            lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: 8,
          }}>
            When were you born?
          </h1>
          <p style={{ fontSize: "0.9375rem", color: "var(--color-muted)", lineHeight: 1.5, marginBottom: 32 }}>
            This helps us verify your identity with the IRS
          </p>
        </div>

        {/* Form */}
        <div style={{ padding: "0 24px", flex: 1, position: "relative", zIndex: 2 }}>
          <div className="stagger-item d2" style={{ display: "flex", gap: 12 }}>
            {/* Month */}
            <div style={{ flex: 1.3 }}>
              <label style={{
                display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-muted)",
                textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6,
              }}>
                Month
              </label>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                style={{
                  ...selectStyle,
                  color: month === "" ? "var(--color-placeholder)" : "var(--color-fg)",
                }}
              >
                <option value="" disabled>Month</option>
                {months.map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
            </div>
            {/* Day */}
            <div style={{ flex: 0.7 }}>
              <label style={{
                display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-muted)",
                textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6,
              }}>
                Day
              </label>
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                style={{
                  ...selectStyle,
                  color: day === "" ? "var(--color-placeholder)" : "var(--color-fg)",
                }}
              >
                <option value="" disabled>Day</option>
                {days.map((d) => (
                  <option key={d} value={d}>{parseInt(d)}</option>
                ))}
              </select>
            </div>
            {/* Year */}
            <div style={{ flex: 1 }}>
              <label style={{
                display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-muted)",
                textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6,
              }}>
                Year
              </label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                style={{
                  ...selectStyle,
                  color: year === "" ? "var(--color-placeholder)" : "var(--color-fg)",
                }}
              >
                <option value="" disabled>Year</option>
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Reassurance */}
          <div className="stagger-item d3" style={{
            display: "flex", alignItems: "center", gap: 8, marginTop: 24,
            fontSize: 13, color: "var(--color-muted-light)",
          }}>
            <i className="fas fa-shield-halved" style={{ fontSize: 13 }} />
            <span>Required for IRS verification</span>
          </div>
        </div>

        {/* Continue */}
        <div style={{ padding: "16px 24px 40px", flexShrink: 0, position: "relative", zIndex: 2 }}>
          <button
            className="btn btn-primary"
            onClick={() => router.push("/email")}
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
