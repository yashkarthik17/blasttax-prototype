"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

const issuesList = [
  "I want to set up an installment agreement",
  "I want to make an offer in compromise",
  "I am currently not collectible",
  "The statute of limitations has expired",
  "I received a substitute return (SFR) and want to file my own",
  "I want to raise an innocent spouse claim",
  "Other",
];

export default function Form12153Page() {
  const router = useRouter();
  const [checkedIssues, setCheckedIssues] = useState<number[]>([0]);
  const [otherText, setOtherText] = useState("");

  const toggleIssue = (idx: number) => {
    setCheckedIssues((prev) => prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]);
  };

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Form 12153 — CDP Hearing" backPath="/other-relief" />

        {/* Progress Steps */}
        <div style={{ padding: "0 20px 8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 24, height: 8, borderRadius: 9999, background: "#003DA5" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E8E8F0" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E8E8F0" }} />
          </div>
          <span style={{ fontSize: 11, fontWeight: 600, color: "#8585A0" }}>Step 1 of 3</span>
        </div>

        <div className="screen-content" style={{ paddingTop: 8 }}>
          <div style={{ marginBottom: 6 }}>
            <h1 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.3 }}>Request a Collection Due Process Hearing</h1>
            <p style={{ fontSize: 12, color: "#8585A0", marginTop: 6, lineHeight: 1.5 }}>You have 30 days from the date of your notice to request a CDP hearing</p>
          </div>

          {/* Notice Information */}
          <div style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 16, padding: 16, boxShadow: "0 2px 8px rgba(26,26,46,0.04)", marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "#FFFBEB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-envelope-open-text" style={{ fontSize: 14, color: "#F5A623" }} />
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#1A1A2E" }}>Notice Information</span>
            </div>
            <div style={{ marginBottom: 12 }}>
              <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>Notice Type</label>
              <select defaultValue="LT11" style={{ width: "100%", padding: "10px 12px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 10, fontFamily: "inherit", fontSize: 14, fontWeight: 600, color: "#1A1A2E", outline: "none", boxSizing: "border-box" }}>
                <option value="LT11">LT11 — Final Notice of Intent to Levy</option>
                <option value="1058">Letter 1058 — Final Notice</option>
                <option value="CP504">CP504 — Intent to Levy</option>
                <option value="3172">Letter 3172 — Notice of Federal Tax Lien</option>
              </select>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>Date of Notice</label>
                <input type="date" defaultValue="2026-03-01" style={{ width: "100%", padding: "10px 12px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 10, fontFamily: "inherit", fontSize: 14, fontWeight: 600, color: "#1A1A2E", outline: "none", boxSizing: "border-box" }} />
              </div>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 9999, fontSize: 13, fontWeight: 700, background: "#FFFBEB", color: "#92400E", border: "1px solid #FED7AA" }}>
                  <i className="fas fa-clock" style={{ fontSize: 12 }} />
                  <span>15 days remaining</span>
                </div>
              </div>
            </div>
          </div>

          {/* Issues to Raise */}
          <div style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 16, padding: 16, boxShadow: "0 2px 8px rgba(26,26,46,0.04)", marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-list-check" style={{ fontSize: 14, color: "#003DA5" }} />
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#1A1A2E" }}>Issues to Raise at Hearing</span>
            </div>

            {issuesList.map((issue, idx) => (
              <div key={idx} onClick={() => toggleIssue(idx)} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 0", borderBottom: idx < issuesList.length - 1 ? "1px solid #F0F0F5" : "none", cursor: "pointer" }}>
                <div style={{ width: 22, height: 22, border: `2px solid ${checkedIssues.includes(idx) ? "#003DA5" : "#E8E8F0"}`, borderRadius: 6, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: checkedIssues.includes(idx) ? "#003DA5" : "transparent", marginTop: 1, transition: "all 0.2s ease" }}>
                  {checkedIssues.includes(idx) && <i className="fas fa-check" style={{ fontSize: 11, color: "white" }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A2E" }}>{issue}</div>
                  {idx === issuesList.length - 1 && checkedIssues.includes(idx) && (
                    <textarea
                      value={otherText}
                      onChange={(e) => setOtherText(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      placeholder="Describe the issue you want to raise..."
                      style={{ display: "block", marginTop: 8, width: "100%", padding: "10px 12px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 10, fontFamily: "inherit", fontSize: 13, color: "#1A1A2E", outline: "none", resize: "vertical", minHeight: 60, boxSizing: "border-box" }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="alert alert-success" style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "12px 14px", background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: 12 }}>
            <i className="fas fa-shield-halved" style={{ fontSize: 14, color: "#10B981", marginTop: 1, flexShrink: 0 }} />
            <span style={{ fontSize: "0.78rem", color: "#065F46", lineHeight: 1.5 }}><strong>Important:</strong> Filing a CDP request stops levy action while your hearing is pending</span>
          </div>

          <div style={{ flex: 1, minHeight: 16 }} />

          <div style={{ padding: "12px 0 20px" }}>
            <button className="btn btn-primary" onClick={() => router.push("/confirm")} style={{ fontSize: 15, padding: "16px 28px" }}>
              Continue <i className="fas fa-arrow-right" style={{ fontSize: 13 }} />
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
