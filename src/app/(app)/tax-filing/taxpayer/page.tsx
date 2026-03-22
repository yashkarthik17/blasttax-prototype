"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

type YNState = "yes" | "no" | null;

function YNGroup({ value, onChange }: { value: YNState; onChange: (v: YNState) => void }) {
  return (
    <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
      <button
        onClick={() => onChange("yes")}
        style={{
          flex: 1, padding: "10px 0", border: "1.5px solid #E8E8F0", borderRadius: 10,
          background: value === "yes" ? "#EBF0FF" : "white", fontFamily: "inherit",
          fontSize: "0.82rem", fontWeight: 600,
          color: value === "yes" ? "#003DA5" : "#5C5C7A",
          borderColor: value === "yes" ? "#003DA5" : "#E8E8F0",
          cursor: "pointer", textAlign: "center",
        }}
      >
        Yes
      </button>
      <button
        onClick={() => onChange("no")}
        style={{
          flex: 1, padding: "10px 0", border: "1.5px solid #E8E8F0", borderRadius: 10,
          background: value === "no" ? "#FFF0F1" : "white", fontFamily: "inherit",
          fontSize: "0.82rem", fontWeight: 600,
          color: value === "no" ? "#E63946" : "#5C5C7A",
          borderColor: value === "no" ? "#E63946" : "#E8E8F0",
          cursor: "pointer", textAlign: "center",
        }}
      >
        No
      </button>
    </div>
  );
}

export default function TaxpayerDetailsPage() {
  const router = useRouter();
  const [healthIns, setHealthIns] = useState<YNState>(null);
  const [dependent, setDependent] = useState<YNState>(null);
  const [notices, setNotices] = useState<YNState>(null);
  const [identityTheft, setIdentityTheft] = useState<YNState>(null);

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        {/* Header */}
        <div className="screen-header stagger-item d1">
          <button className="btn-icon" onClick={() => router.push("/tax-filing/personal")}>
            <i className="fas fa-arrow-left" />
          </button>
          <span className="screen-header-title">Filing 2025</span>
          <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8585A0" }}>Step 2/6</div>
        </div>

        {/* Progress Bar */}
        <div className="stagger-item d1" style={{ padding: "0 20px 8px" }}>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "33.3%" }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingBottom: 40, gap: 16 }}>

          {/* Title */}
          <div className="stagger-item d2" style={{ paddingTop: 4 }}>
            <h1 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", marginBottom: 6 }}>
              Taxpayer Details
            </h1>
            <p style={{ fontSize: "0.85rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.5 }}>
              Additional information needed for your return
            </p>
          </div>

          {/* SSN Entry */}
          <div className="stagger-item d3" style={{ background: "white", border: "1.5px solid #E8E8F0", borderRadius: 16, padding: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-lock" style={{ fontSize: 11, color: "#003DA5" }} />
              </div>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>Social Security Number</span>
            </div>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="XXX-XX-XXXX"
                maxLength={11}
                style={{
                  width: "100%", padding: "13px 40px 13px 16px", background: "white",
                  border: "1.5px solid #E8E8F0", borderRadius: 12, fontFamily: "inherit",
                  fontSize: "0.88rem", fontWeight: 600, color: "#1A1A2E", outline: "none",
                  letterSpacing: "0.1em", boxSizing: "border-box",
                }}
              />
              <i className="fas fa-eye-slash" style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", fontSize: 13, color: "#B0B0C8", cursor: "pointer" }} />
            </div>
            <div style={{ fontSize: "0.68rem", color: "#8585A0", marginTop: 6, display: "flex", alignItems: "center", gap: 4 }}>
              <i className="fas fa-shield-halved" style={{ fontSize: 9, color: "#00A651" }} />
              Encrypted and stored securely
            </div>
          </div>

          {/* Occupation */}
          <div className="stagger-item d4" style={{ background: "white", border: "1.5px solid #E8E8F0", borderRadius: 16, padding: 18 }}>
            <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 10 }}>Occupation</div>
            <input
              type="text"
              placeholder="e.g., Software Engineer"
              style={{
                width: "100%", padding: "13px 16px", background: "white",
                border: "1.5px solid #E8E8F0", borderRadius: 12, fontFamily: "inherit",
                fontSize: "0.88rem", fontWeight: 600, color: "#1A1A2E", outline: "none",
                boxSizing: "border-box",
              }}
            />
            <div style={{ fontSize: "0.68rem", color: "#8585A0", marginTop: 6 }}>As it will appear on your tax return</div>
          </div>

          {/* Health Insurance */}
          <div className="stagger-item d5" style={{ background: "white", border: "1.5px solid #E8E8F0", borderRadius: 16, padding: 18 }}>
            <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>Did you have health insurance all year?</div>
            <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 4 }}>Required for Form 8965 / ACA compliance</div>
            <YNGroup value={healthIns} onChange={setHealthIns} />
          </div>

          {/* Dependent */}
          <div className="stagger-item d6" style={{ background: "white", border: "1.5px solid #E8E8F0", borderRadius: 16, padding: 18 }}>
            <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>Can anyone else claim you as a dependent?</div>
            <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 4 }}>This affects your standard deduction amount</div>
            <YNGroup value={dependent} onChange={setDependent} />
          </div>

          {/* IRS Notices */}
          <div className="stagger-item d7" style={{ background: "white", border: "1.5px solid #E8E8F0", borderRadius: 16, padding: 18 }}>
            <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>Did you receive any IRS notices?</div>
            <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 4 }}>Letters or notices from the IRS this tax year</div>
            <YNGroup value={notices} onChange={setNotices} />
            {notices === "yes" && (
              <div style={{ marginTop: 12 }}>
                <select style={{
                  width: "100%", padding: "13px 36px 13px 16px", background: "white",
                  border: "1.5px solid #E8E8F0", borderRadius: 12, fontFamily: "inherit",
                  fontSize: "0.85rem", fontWeight: 500, color: "#5C5C7A", outline: "none",
                  boxSizing: "border-box", appearance: "none" as const,
                }}>
                  <option value="">Select notice type</option>
                  <option value="cp2000">CP2000 - Income Discrepancy</option>
                  <option value="cp14">CP14 - Balance Due</option>
                  <option value="cp504">CP504 - Intent to Levy</option>
                  <option value="other">Other Notice</option>
                </select>
              </div>
            )}
          </div>

          {/* Identity Theft */}
          <div className="stagger-item d8" style={{ background: "white", border: "1.5px solid #E8E8F0", borderRadius: 16, padding: 18 }}>
            <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>Were you a victim of identity theft?</div>
            <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 4 }}>Tax-related identity theft involving your SSN</div>
            <YNGroup value={identityTheft} onChange={setIdentityTheft} />
          </div>

          {/* Continue Button */}
          <div className="stagger-item d9" style={{ paddingTop: 8 }}>
            <button
              className="btn btn-primary"
              onClick={() => router.push("/tax-filing/security")}
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
