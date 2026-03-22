"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

const shortMonths = [
  { value: "01", label: "Jan" }, { value: "02", label: "Feb" },
  { value: "03", label: "Mar" }, { value: "04", label: "Apr" },
  { value: "05", label: "May" }, { value: "06", label: "Jun" },
  { value: "07", label: "Jul" }, { value: "08", label: "Aug" },
  { value: "09", label: "Sep" }, { value: "10", label: "Oct" },
  { value: "11", label: "Nov" }, { value: "12", label: "Dec" },
];

function formatSSN(raw: string): string {
  const digits = raw.replace(/[^\d]/g, "");
  if (digits.length > 5) return digits.slice(0, 3) + "-" + digits.slice(3, 5) + "-" + digits.slice(5, 9);
  if (digits.length > 3) return digits.slice(0, 3) + "-" + digits.slice(3);
  return digits;
}

export default function SpousePage() {
  const router = useRouter();
  const [spouseFirst, setSpouseFirst] = useState("");
  const [spouseLast, setSpouseLast] = useState("");
  const [ssn, setSsn] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const days = useMemo(() => Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0")), []);
  const years = useMemo(() => {
    const arr: number[] = [];
    for (let y = 2006; y >= 1930; y--) arr.push(y);
    return arr;
  }, []);

  const isValid =
    spouseFirst.trim() !== "" &&
    spouseLast.trim() !== "" &&
    ssn.replace(/[^\d]/g, "").length === 9 &&
    month !== "" &&
    day !== "" &&
    year !== "";

  const selectStyle: React.CSSProperties = {
    width: "100%", padding: "14px 36px 14px 16px",
    background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)",
    borderRadius: 12, fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500,
    color: "var(--color-fg)", transition: "all 0.2s ease", outline: "none",
    appearance: "none" as const, cursor: "pointer", boxSizing: "border-box" as const,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%238585A0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 16px", background: "var(--color-surface-alt)",
    border: "1.5px solid var(--color-border)", borderRadius: 12,
    fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500,
    color: "var(--color-fg)", transition: "all 0.2s ease", outline: "none",
    boxSizing: "border-box" as const,
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-muted)",
    textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6,
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
              onClick={() => router.push("/filing")}
              style={{
                width: 40, height: 40, borderRadius: 12, border: "none",
                background: "var(--color-surface-alt)", color: "var(--color-fg)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, transition: "all 0.2s ease",
              }}
            >
              <i className="fas fa-arrow-left" />
            </button>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-muted-light)" }}>Step 4b</span>
          </div>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "50%" }} />
          </div>
        </div>

        {/* Question */}
        <div className="stagger-item d1" style={{ padding: "24px 24px 0", position: "relative", zIndex: 2 }}>
          <h1 style={{
            fontSize: "1.625rem", fontWeight: 800, color: "var(--color-fg)",
            lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: 8,
          }}>
            Tell us about your spouse
          </h1>
          <p style={{ fontSize: "0.9375rem", color: "var(--color-muted)", lineHeight: 1.5, marginBottom: 28 }}>
            We need this information for joint filing purposes
          </p>
        </div>

        {/* Form */}
        <div style={{ padding: "0 24px", flex: 1, overflowY: "auto", position: "relative", zIndex: 2 }}>
          {/* Names */}
          <div className="stagger-item d1" style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1, marginBottom: 18 }}>
              <label style={labelStyle}>First Name</label>
              <input type="text" value={spouseFirst} onChange={(e) => setSpouseFirst(e.target.value)} placeholder="First" style={inputStyle} />
            </div>
            <div style={{ flex: 1, marginBottom: 18 }}>
              <label style={labelStyle}>Last Name</label>
              <input type="text" value={spouseLast} onChange={(e) => setSpouseLast(e.target.value)} placeholder="Last" style={inputStyle} />
            </div>
          </div>

          {/* SSN */}
          <div className="stagger-item d2" style={{ marginBottom: 18 }}>
            <label style={labelStyle}>Social Security Number</label>
            <div style={{ position: "relative" }}>
              <input
                type="password"
                value={ssn}
                onChange={(e) => setSsn(formatSSN(e.target.value))}
                placeholder="XXX-XX-XXXX"
                maxLength={11}
                style={{ ...inputStyle, letterSpacing: 2, fontVariantNumeric: "tabular-nums" }}
              />
              <i className="fas fa-lock" style={{
                position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
                color: "var(--color-placeholder)", fontSize: 14,
              }} />
            </div>
          </div>

          {/* DOB */}
          <div className="stagger-item d3" style={{ marginBottom: 18 }}>
            <label style={labelStyle}>Date of Birth</label>
            <div style={{ display: "flex", gap: 10 }}>
              <select value={month} onChange={(e) => setMonth(e.target.value)}
                style={{ ...selectStyle, flex: 1.3, color: month === "" ? "var(--color-placeholder)" : "var(--color-fg)" }}>
                <option value="" disabled>Month</option>
                {shortMonths.map((m) => <option key={m.value} value={m.value}>{m.label}</option>)}
              </select>
              <select value={day} onChange={(e) => setDay(e.target.value)}
                style={{ ...selectStyle, flex: 0.7, color: day === "" ? "var(--color-placeholder)" : "var(--color-fg)" }}>
                <option value="" disabled>Day</option>
                {days.map((d) => <option key={d} value={d}>{parseInt(d)}</option>)}
              </select>
              <select value={year} onChange={(e) => setYear(e.target.value)}
                style={{ ...selectStyle, flex: 1, color: year === "" ? "var(--color-placeholder)" : "var(--color-fg)" }}>
                <option value="" disabled>Year</option>
                {years.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>

          {/* Security badge */}
          <div className="stagger-item d4" style={{
            display: "flex", alignItems: "center", gap: 10, padding: "12px 14px",
            background: "linear-gradient(135deg, #EBF0FF 0%, #F5F0FF 100%)",
            border: "1px solid rgba(0,61,165,0.08)", borderRadius: 12, marginTop: 4,
          }}>
            <i className="fas fa-shield-halved" style={{ fontSize: 18, color: "var(--color-primary)" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-muted)", lineHeight: 1.4 }}>
              SSN is encrypted with AES-256 military-grade encryption
            </span>
          </div>
        </div>

        {/* Continue */}
        <div style={{ padding: "16px 24px 40px", flexShrink: 0, position: "relative", zIndex: 2 }}>
          <button
            className="btn btn-primary"
            onClick={() => router.push("/dependents")}
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
