"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function SecurityVerificationPage() {
  const router = useRouter();
  const [showPinHelp, setShowPinHelp] = useState(false);
  const pinRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handlePinInput = (index: number, value: string) => {
    if (value.length === 1 && index < 5) {
      pinRefs.current[index + 1]?.focus();
    }
  };

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        {/* Header */}
        <div className="screen-header stagger-item d1">
          <button className="btn-icon" onClick={() => router.push("/tax-filing/taxpayer")}>
            <i className="fas fa-arrow-left" />
          </button>
          <span className="screen-header-title">Filing 2025</span>
          <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8585A0" }}>Step 2.5/6</div>
        </div>

        {/* Progress Bar */}
        <div className="stagger-item d1" style={{ padding: "0 20px 8px" }}>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "41.6%" }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingBottom: 40, gap: 16 }}>

          {/* Title */}
          <div className="stagger-item d2" style={{ paddingTop: 4 }}>
            <h1 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", marginBottom: 6 }}>
              Security Verification
            </h1>
            <p style={{ fontSize: "0.85rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.5 }}>
              The IRS requires identity verification for e-filing
            </p>
          </div>

          {/* IP PIN Section */}
          <div className="stagger-item d3" style={{ background: "white", border: "1.5px solid #E8E8F0", borderRadius: 16, padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-key" style={{ fontSize: 13, color: "#003DA5" }} />
              </div>
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>IP PIN</div>
                <div style={{ fontSize: "0.68rem", color: "#8585A0", marginTop: 1 }}>If you have one from the IRS</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <input
                  key={i}
                  ref={(el) => { pinRefs.current[i] = el; }}
                  type="text"
                  maxLength={1}
                  inputMode="numeric"
                  onInput={(e) => handlePinInput(i, (e.target as HTMLInputElement).value)}
                  style={{
                    width: 44, height: 52, border: "1.5px solid #E8E8F0", borderRadius: 12,
                    background: "white", fontFamily: "inherit", fontSize: "1.2rem", fontWeight: 700,
                    color: "#1A1A2E", textAlign: "center", outline: "none",
                  }}
                />
              ))}
            </div>
            {/* Help toggle */}
            <div style={{ marginTop: 14 }}>
              <div
                onClick={() => setShowPinHelp(!showPinHelp)}
                style={{
                  display: "flex", alignItems: "center", gap: 6, padding: "10px 14px",
                  background: "#F6F6FB", borderRadius: 10, cursor: "pointer",
                }}
              >
                <i className="fas fa-circle-question" style={{ fontSize: 12, color: "#2563EB" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#2563EB" }}>Don&apos;t have an IP PIN?</span>
                <i className="fas fa-chevron-down" style={{ fontSize: 9, color: "#2563EB", marginLeft: "auto" }} />
              </div>
              {showPinHelp && (
                <div style={{ padding: "12px 14px", background: "#F6F6FB", borderRadius: "0 0 10px 10px", marginTop: -2 }}>
                  <p style={{ fontSize: "0.74rem", color: "#5C5C7A", lineHeight: 1.55, margin: 0 }}>
                    You can request an IP PIN from the IRS at <strong style={{ color: "#1A1A2E" }}>irs.gov/ippin</strong>. It&apos;s a 6-digit number that helps prevent the misuse of your Social Security number on fraudulent returns. If you haven&apos;t received one, you can skip this field.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Driver's License / State ID */}
          <div className="stagger-item d4" style={{ background: "white", border: "1.5px solid #E8E8F0", borderRadius: 16, padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "#F5F0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-id-card" style={{ fontSize: 13, color: "#7C3AED" }} />
              </div>
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>Driver&apos;s License / State ID</div>
                <div style={{ fontSize: "0.68rem", color: "#8585A0", marginTop: 1 }}>Required for identity verification</div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {/* State issued */}
              <div>
                <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6, display: "block" }}>
                  State Issued
                </label>
                <select style={{
                  width: "100%", padding: "13px 36px 13px 16px", background: "white",
                  border: "1.5px solid #E8E8F0", borderRadius: 12, fontFamily: "inherit",
                  fontSize: "0.85rem", fontWeight: 500, color: "#5C5C7A", outline: "none",
                  boxSizing: "border-box", appearance: "none" as const,
                }}>
                  <option value="">Select state</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="IL">Illinois</option>
                  <option value="NY">New York</option>
                  <option value="TX">Texas</option>
                </select>
              </div>

              {/* License number */}
              <div>
                <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6, display: "block" }}>
                  License Number
                </label>
                <input
                  type="text"
                  placeholder="Enter license number"
                  style={{
                    width: "100%", padding: "13px 16px", background: "white",
                    border: "1.5px solid #E8E8F0", borderRadius: 12, fontFamily: "inherit",
                    fontSize: "0.88rem", fontWeight: 600, color: "#1A1A2E", outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Dates row */}
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6, display: "block" }}>
                    Issue Date
                  </label>
                  <input type="text" placeholder="MM/DD/YYYY" style={{
                    width: "100%", padding: "13px 16px", background: "white",
                    border: "1.5px solid #E8E8F0", borderRadius: 12, fontFamily: "inherit",
                    fontSize: "0.88rem", fontWeight: 600, color: "#1A1A2E", outline: "none",
                    boxSizing: "border-box",
                  }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6, display: "block" }}>
                    Expiration Date
                  </label>
                  <input type="text" placeholder="MM/DD/YYYY" style={{
                    width: "100%", padding: "13px 16px", background: "white",
                    border: "1.5px solid #E8E8F0", borderRadius: 12, fontFamily: "inherit",
                    fontSize: "0.88rem", fontWeight: 600, color: "#1A1A2E", outline: "none",
                    boxSizing: "border-box",
                  }} />
                </div>
              </div>
            </div>
          </div>

          {/* Info Alert */}
          <div className="stagger-item d5" style={{
            display: "flex", alignItems: "flex-start", gap: 10, padding: "14px 16px",
            background: "#EBF0FF", border: "1px solid rgba(0,61,165,0.1)", borderRadius: 12,
          }}>
            <i className="fas fa-circle-info" style={{ fontSize: 14, color: "#2563EB", marginTop: 1, flexShrink: 0 }} />
            <span style={{ fontSize: "0.78rem", color: "#003DA5", fontWeight: 500, lineHeight: 1.5 }}>
              This information is used only for IRS identity verification and is not stored beyond the filing process.
            </span>
          </div>

          {/* Continue Button */}
          <div className="stagger-item d6" style={{ paddingTop: 8 }}>
            <button
              className="btn btn-primary"
              onClick={() => router.push("/tax-filing/income-checklist")}
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
