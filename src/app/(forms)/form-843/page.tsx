"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";

const reasons = [
  "Death or serious illness",
  "Natural disaster",
  "Unable to obtain records",
  "IRS error or incorrect advice",
  "Other",
];

export default function Form843Page() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<"fta" | "reasonable">("fta");
  const [checkedReasons, setCheckedReasons] = useState<number[]>([]);
  const [explanation, setExplanation] = useState("");

  const toggleReason = (idx: number) => {
    setCheckedReasons((prev) => prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]);
  };

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-header" style={{ padding: "14px 20px 12px" }}>
          <div onClick={() => router.back()} style={{ width: 36, height: 36, borderRadius: 12, background: "#F6F6FB", border: "1px solid #E8E8F0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <i className="fas fa-arrow-left" style={{ fontSize: 14, color: "#5C5C7A" }} />
          </div>
          <div style={{ flex: 1, fontSize: "0.95rem", fontWeight: 800, color: "#1A1A2E", textAlign: "center" }}>Form 843 &mdash; Abatement</div>
          <div style={{ width: 36, flexShrink: 0 }} />
        </div>

        {/* Progress */}
        <div className="stagger-item d1" style={{ padding: "0 20px 4px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#8585A0" }}>Step 1 of 4</span>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#003DA5" }}>25%</span>
          </div>
          <div style={{ height: 5, background: "#F0F0F5", borderRadius: 9999, overflow: "hidden" }}>
            <div style={{ width: "25%", height: "100%", background: "linear-gradient(135deg,#003DA5,#2563EB)", borderRadius: 9999 }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingBottom: 100, gap: 18, paddingTop: 8 }}>
          <div className="stagger-item d2">
            <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", lineHeight: 1.3 }}>Request Penalty Abatement</div>
            <div style={{ fontSize: "0.82rem", color: "#8585A0", marginTop: 6, lineHeight: 1.5 }}>Select the type of abatement that best fits your situation.</div>
          </div>

          {/* Abatement Type */}
          <div className="stagger-item d3">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Abatement Type</div>
            {[
              { type: "fta" as const, title: "First-Time Abatement (FTA)", recommended: true, desc: "Automatic if you have a clean 3-year compliance history. No additional documentation needed." },
              { type: "reasonable" as const, title: "Reasonable Cause", recommended: false, desc: "Provide evidence for why penalties should be removed due to circumstances beyond your control." },
            ].map((opt) => (
              <div key={opt.type} onClick={() => setSelectedType(opt.type)} style={{ padding: 18, background: selectedType === opt.type ? "linear-gradient(135deg,#EBF0FF 0%,#FAFAFF 100%)" : "white", border: `1.5px solid ${selectedType === opt.type ? "#003DA5" : "#E8E8F0"}`, borderRadius: 16, marginBottom: 10, cursor: "pointer", boxShadow: selectedType === opt.type ? "0 0 0 3px rgba(0,61,165,0.1)" : "none", position: "relative", overflow: "hidden", transition: "all 0.3s ease" }}>
                <div style={{ display: "flex", gap: 14 }}>
                  <div style={{ width: 22, height: 22, border: `2px solid ${selectedType === opt.type ? "#003DA5" : "#D5D5E0"}`, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2, background: selectedType === opt.type ? "#003DA5" : "transparent" }}>
                    {selectedType === opt.type && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                      <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E" }}>{opt.title}</span>
                      {opt.recommended && <span style={{ display: "inline-flex", padding: "2px 8px", background: "#E6F9EE", borderRadius: 9999, fontSize: "0.6rem", fontWeight: 700, color: "#00A651" }}>RECOMMENDED</span>}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "#8585A0", lineHeight: 1.5 }}>{opt.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Penalty Breakdown */}
          <div className="stagger-item d4" style={{ background: "white", borderRadius: 20, padding: 20, border: "1px solid #E8E8F0" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>Penalty Breakdown</div>
            {[
              { color: "#E63946", label: "Failure to File", amount: "$3,200" },
              { color: "#F5A623", label: "Failure to Pay", amount: "$2,100" },
              { color: "#D5D5E0", label: "Accuracy-Related", amount: "$0", muted: true },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #F0F0F5" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: row.color }} />
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: row.muted ? "#8585A0" : "#1A1A2E" }}>{row.label}</span>
                </div>
                <span style={{ fontSize: "0.88rem", fontWeight: 800, color: row.muted ? "#8585A0" : row.color }}>{row.amount}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0 4px" }}>
              <span style={{ fontSize: "0.88rem", fontWeight: 800, color: "#1A1A2E" }}>Total Penalties</span>
              <span style={{ fontSize: "1.15rem", fontWeight: 900, color: "#E63946", letterSpacing: "-0.01em" }}>$5,300</span>
            </div>
          </div>

          {/* Reasonable Cause Section */}
          {selectedType === "reasonable" && (
            <>
              <div style={{ background: "white", borderRadius: 20, padding: 20, border: "1px solid #E8E8F0" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>Reason for Abatement</div>
                {reasons.map((reason, idx) => (
                  <div key={idx} onClick={() => toggleReason(idx)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 4px", borderBottom: idx < reasons.length - 1 ? "1px solid #F0F0F5" : "none", cursor: "pointer" }}>
                    <div style={{ width: 22, height: 22, borderRadius: 6, border: `2px solid ${checkedReasons.includes(idx) ? "#003DA5" : "#D5D5E0"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: checkedReasons.includes(idx) ? "#003DA5" : "transparent", transition: "all 0.3s ease" }}>
                      {checkedReasons.includes(idx) && <i className="fas fa-check" style={{ fontSize: 10, color: "white" }} />}
                    </div>
                    <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E" }}>{reason}</span>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>Explanation</div>
                <textarea
                  value={explanation}
                  onChange={(e) => { if (e.target.value.length <= 500) setExplanation(e.target.value); }}
                  placeholder="Describe your circumstances and why penalties should be abated..."
                  style={{ width: "100%", minHeight: 100, padding: "14px 16px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 12, fontFamily: "inherit", fontSize: "0.82rem", fontWeight: 500, color: "#1A1A2E", resize: "vertical", outline: "none", boxSizing: "border-box" }}
                />
                <div style={{ fontSize: "0.68rem", color: "#B0B0C8", marginTop: 6, textAlign: "right" }}>{explanation.length} / 500 characters</div>
              </div>
            </>
          )}

          {/* Continue */}
          <div className="stagger-item d6" style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 4 }}>
            <div onClick={() => router.push("/confirm")} style={{ padding: 16, background: "linear-gradient(135deg,#00A651,#10B981)", borderRadius: 9999, textAlign: "center", color: "white", fontSize: "0.88rem", fontWeight: 700, boxShadow: "0 8px 24px rgba(0,166,81,0.2)", cursor: "pointer" }}>
              Continue <i className="fas fa-arrow-right" style={{ marginLeft: 6, fontSize: 12 }} />
            </div>
          </div>
        </div>
      </div>
      <BottomNav active="Resolve" />
    </PhoneFrame>
  );
}
