"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

const bizTypes = [
  { icon: "fa-user", label: "Sole Prop" },
  { icon: "fa-building", label: "LLC" },
  { icon: "fa-chart-bar", label: "S-Corp" },
  { icon: "fa-city", label: "C-Corp" },
  { icon: "fa-handshake", label: "Partnership" },
];

function formatEIN(val: string): string {
  const digits = val.replace(/[^0-9]/g, "");
  if (digits.length > 2) return digits.substring(0, 2) + "-" + digits.substring(2, 9);
  return digits;
}

function formatCurrency(val: string): string {
  const raw = val.replace(/[^\d]/g, "");
  if (raw.length === 0) return "";
  return parseInt(raw).toLocaleString("en-US");
}

export default function BusinessPage() {
  const router = useRouter();
  const [hasBusiness, setHasBusiness] = useState<boolean | null>(true);
  const [bizName, setBizName] = useState("");
  const [selectedType, setSelectedType] = useState("LLC");
  const [ein, setEin] = useState("");
  const [revenue, setRevenue] = useState("");
  const [employees, setEmployees] = useState("");

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 16px", background: "var(--color-surface-alt)",
    border: "1.5px solid var(--color-border)", borderRadius: 12,
    fontFamily: "var(--font-sans)", fontSize: "0.88rem", fontWeight: 600,
    color: "var(--color-fg)", outline: "none", transition: "all 0.2s ease",
    boxSizing: "border-box",
  };

  const fieldLabelStyle: React.CSSProperties = {
    fontSize: "0.72rem", fontWeight: 600, color: "var(--color-muted)", marginBottom: 6,
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
              onClick={() => router.push("/income")}
              style={{
                width: 40, height: 40, borderRadius: 12, border: "none",
                background: "var(--color-surface-alt)", color: "var(--color-fg)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, transition: "all 0.2s ease",
              }}
            >
              <i className="fas fa-arrow-left" />
            </button>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-muted-light)" }}>Step 7 of 9</span>
          </div>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "78%" }} />
          </div>
        </div>

        {/* Question */}
        <div className="stagger-item d1" style={{ padding: "24px 24px 0", position: "relative", zIndex: 2 }}>
          <h1 style={{
            fontSize: "1.625rem", fontWeight: 800, color: "var(--color-fg)",
            lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: 8,
          }}>
            Do you have business income?
          </h1>
          <p style={{ fontSize: "0.9375rem", color: "var(--color-muted)", lineHeight: 1.5, marginBottom: 24 }}>
            This helps us evaluate business-related resolution options
          </p>
        </div>

        {/* Form */}
        <div style={{ padding: "0 24px", flex: 1, position: "relative", zIndex: 2 }}>
          {/* Yes / No Cards */}
          <div className="stagger-item d1">
            {/* Yes card */}
            <div
              onClick={() => setHasBusiness(true)}
              style={{
                display: "flex", alignItems: "center", gap: 14, padding: 18,
                background: hasBusiness === true ? "var(--color-primary-light)" : "white",
                border: hasBusiness === true ? "1.5px solid var(--color-primary)" : "1.5px solid var(--color-border)",
                borderRadius: 16, cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
                marginBottom: 10,
                boxShadow: hasBusiness === true ? "0 0 0 3px rgba(0,61,165,0.1)" : "none",
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: "linear-gradient(135deg,#E6F9EE,#CCFBF1)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <i className="fas fa-briefcase" style={{ fontSize: 16, color: "#00A651" }} />
              </div>
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-fg)" }}>Yes</div>
                <div style={{ fontSize: "0.75rem", color: "var(--color-muted-light)" }}>I have self-employment or business income</div>
              </div>
              <div style={{
                width: 22, height: 22,
                border: hasBusiness === true ? "2px solid var(--color-primary)" : "2px solid var(--color-border)",
                borderRadius: "50%", flexShrink: 0, marginLeft: "auto",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s ease",
                background: hasBusiness === true ? "var(--color-primary)" : "transparent",
              }}>
                {hasBusiness === true && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />}
              </div>
            </div>

            {/* No card */}
            <div
              onClick={() => setHasBusiness(false)}
              style={{
                display: "flex", alignItems: "center", gap: 14, padding: 18,
                background: hasBusiness === false ? "var(--color-primary-light)" : "white",
                border: hasBusiness === false ? "1.5px solid var(--color-primary)" : "1.5px solid var(--color-border)",
                borderRadius: 16, cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
                marginBottom: 10,
                boxShadow: hasBusiness === false ? "0 0 0 3px rgba(0,61,165,0.1)" : "none",
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 12, background: "var(--color-surface-alt)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <i className="fas fa-times" style={{ fontSize: 16, color: "var(--color-muted-light)" }} />
              </div>
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-fg)" }}>No</div>
                <div style={{ fontSize: "0.75rem", color: "var(--color-muted-light)" }}>I only have W-2 employment income</div>
              </div>
              <div style={{
                width: 22, height: 22,
                border: hasBusiness === false ? "2px solid var(--color-primary)" : "2px solid var(--color-border)",
                borderRadius: "50%", flexShrink: 0, marginLeft: "auto",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s ease",
                background: hasBusiness === false ? "var(--color-primary)" : "transparent",
              }}>
                {hasBusiness === false && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />}
              </div>
            </div>
          </div>

          {/* Business Details (shown when Yes) */}
          {hasBusiness === true && (
            <div className="stagger-item d2" style={{
              display: "flex", flexDirection: "column", gap: 16, marginTop: 20, paddingTop: 20,
              borderTop: "1px solid var(--color-border)",
            }}>
              {/* Business Name */}
              <div>
                <div style={fieldLabelStyle}>Business Name</div>
                <input type="text" value={bizName} onChange={(e) => setBizName(e.target.value)} placeholder="Enter business name" style={inputStyle} />
              </div>

              {/* Business Type */}
              <div>
                <div style={fieldLabelStyle}>Business Type</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {bizTypes.map((bt) => {
                    const isSel = selectedType === bt.label;
                    return (
                      <button
                        key={bt.label}
                        onClick={() => setSelectedType(bt.label)}
                        style={{
                          display: "flex", alignItems: "center", gap: 10,
                          padding: "12px 14px", background: isSel ? "var(--color-primary-light)" : "white",
                          border: isSel ? "1.5px solid var(--color-primary)" : "1.5px solid var(--color-border)",
                          borderRadius: 12, cursor: "pointer", transition: "all 0.25s ease",
                          fontSize: "0.82rem", fontWeight: 600,
                          color: isSel ? "var(--color-primary)" : "var(--color-fg)",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        <i className={`fas ${bt.icon}`} style={{ fontSize: 12 }} /> {bt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* EIN */}
              <div>
                <div style={fieldLabelStyle}>EIN (Employer Identification Number)</div>
                <input
                  type="text"
                  value={ein}
                  onChange={(e) => setEin(formatEIN(e.target.value))}
                  placeholder="XX-XXXXXXX"
                  maxLength={10}
                  style={inputStyle}
                />
              </div>

              {/* Annual Business Revenue */}
              <div>
                <div style={fieldLabelStyle}>Approximate Annual Business Revenue</div>
                <div style={{
                  display: "flex", alignItems: "center", background: "var(--color-surface-alt)",
                  border: "1.5px solid var(--color-border)", borderRadius: 12, padding: "4px 16px",
                  transition: "all 0.2s ease",
                }}>
                  <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--color-muted-light)", marginRight: 4 }}>$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={revenue}
                    onChange={(e) => setRevenue(formatCurrency(e.target.value))}
                    placeholder="0"
                    style={{
                      flex: 1, border: "none", background: "transparent",
                      fontFamily: "var(--font-sans)", fontSize: "0.95rem", fontWeight: 700,
                      color: "var(--color-fg)", padding: "10px 0", outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Number of Employees */}
              <div>
                <div style={fieldLabelStyle}>Number of Employees</div>
                <input
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  placeholder="0"
                  min={0}
                  style={{ ...inputStyle, width: 120 }}
                />
              </div>

              {/* Info */}
              <div style={{
                display: "flex", gap: 12, padding: "14px 16px",
                background: "#EFF6FF", border: "1px solid rgba(37,99,235,0.12)",
                borderRadius: 12, fontSize: 13, lineHeight: 1.5, color: "#1E40AF",
              }}>
                <i className="fas fa-lightbulb" style={{ fontSize: 15, flexShrink: 0, marginTop: 1, color: "var(--color-primary-vivid)" }} />
                <span>Business debt requires separate forms (433-B) and may affect resolution strategy</span>
              </div>
            </div>
          )}
        </div>

        {/* Continue */}
        <div style={{ padding: "16px 24px 40px", flexShrink: 0, position: "relative", zIndex: 2 }}>
          <button
            className="btn btn-primary"
            onClick={() => router.push("/address")}
            style={{ fontSize: "1rem", padding: "16px 28px" }}
          >
            Continue
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
