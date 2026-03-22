"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function Form656LPage() {
  const router = useRouter();
  const [selectedYears, setSelectedYears] = useState<string[]>(["2022", "2023"]);

  const toggleYear = (year: string) => {
    setSelectedYears((prev) => prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]);
  };

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div className="screen-header" style={{ padding: "14px 20px 12px" }}>
          <div onClick={() => router.back()} style={{ width: 36, height: 36, borderRadius: 12, background: "#F6F6FB", border: "1px solid #E8E8F0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <i className="fas fa-arrow-left" style={{ fontSize: 14, color: "#5C5C7A" }} />
          </div>
          <div style={{ flex: 1, fontSize: "0.95rem", fontWeight: 800, color: "#1A1A2E", textAlign: "center" }}>Form 656-L &mdash; DATL OIC</div>
          <div style={{ width: 36, flexShrink: 0 }} />
        </div>

        {/* Progress bar */}
        <div className="stagger-item d1" style={{ padding: "0 20px 4px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#8585A0" }}>Step 1 of 4</span>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#003DA5" }}>25%</span>
          </div>
          <div style={{ height: 5, background: "#F0F0F5", borderRadius: 9999, overflow: "hidden" }}>
            <div style={{ width: "25%", height: "100%", background: "linear-gradient(135deg,#003DA5,#2563EB)", borderRadius: 9999 }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingBottom: 40, gap: 18, paddingTop: 8 }}>
          <div className="stagger-item d2">
            <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", lineHeight: 1.3 }}>Offer in Compromise &mdash; Doubt as to Liability</div>
            <div style={{ fontSize: "0.82rem", color: "#8585A0", marginTop: 6, lineHeight: 1.5 }}>Unlike standard OIC, DATL does not require financial disclosure</div>
          </div>

          {/* Pre-filled Info */}
          <div className="stagger-item d3">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Taxpayer Information</div>
            {[{ label: "Full Name", value: "Jane M. Doe" }, { label: "Social Security Number", value: "***-**-4589" }].map((field, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#5C5C7A", marginBottom: 6 }}>{field.label}</div>
                <div style={{ background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 12, padding: "12px 16px", position: "relative" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E", letterSpacing: field.label.includes("SSN") || field.label.includes("Social") ? "0.05em" : undefined }}>{field.value}</span>
                  <i className="fas fa-lock" style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "#B0B0C8", fontSize: 12 }} />
                </div>
              </div>
            ))}
          </div>

          {/* Tax Years Disputed */}
          <div className="stagger-item d4">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>Tax Years Disputed</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["2020", "2021", "2022", "2023"].map((year) => (
                <div key={year} onClick={() => toggleYear(year)} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 9999, fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", userSelect: "none", background: selectedYears.includes(year) ? "#EBF0FF" : "#F6F6FB", color: selectedYears.includes(year) ? "#003DA5" : "#8585A0", border: `1.5px solid ${selectedYears.includes(year) ? "#003DA5" : "#E8E8F0"}`, transition: "all 0.25s ease" }}>
                  {selectedYears.includes(year) && <i className="fas fa-check" style={{ fontSize: 10 }} />}
                  {year}
                </div>
              ))}
            </div>
          </div>

          {/* Assessment Details */}
          <div className="stagger-item d5">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Assessment Details</div>
            {[
              { year: "2022", original: "$18,500", proposed: "5,200" },
              { year: "2023", original: "$13,500", proposed: "8,000" },
            ].map((row, i) => (
              <div key={i} style={{ background: "white", borderRadius: 16, padding: 16, border: "1px solid #E8E8F0", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <div style={{ padding: "4px 10px", background: "#EBF0FF", borderRadius: 9999, fontSize: "0.72rem", fontWeight: 700, color: "#003DA5" }}>{row.year}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #F0F0F5" }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#5C5C7A" }}>Original Assessment</span>
                  <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#E63946" }}>{row.original}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0" }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#5C5C7A" }}>Your Proposed</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 2, background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 10, padding: "6px 12px" }}>
                    <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#B0B0C8" }}>$</span>
                    <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1A1A2E" }}>{row.proposed}</span>
                  </div>
                </div>
              </div>
            ))}

            <div style={{ background: "linear-gradient(135deg,#EBF0FF,#F5F0FF)", borderRadius: 14, padding: "14px 16px", border: "1px solid rgba(0,61,165,0.12)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#003DA5" }}>Total Offer Amount</span>
              <span style={{ fontSize: "1.15rem", fontWeight: 900, color: "#003DA5" }}>$13,200</span>
            </div>
          </div>

          {/* Basis for Dispute */}
          <div className="stagger-item d6">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>Basis for Dispute</div>
            <textarea placeholder="Explain why the IRS assessment is incorrect..." style={{ width: "100%", minHeight: 90, padding: "14px 16px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 14, fontFamily: "inherit", fontSize: "0.82rem", fontWeight: 500, color: "#1A1A2E", resize: "vertical", outline: "none", lineHeight: 1.6, boxSizing: "border-box" }} />
          </div>

          {/* Supporting Documents */}
          <div className="stagger-item d7">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>Supporting Documents</div>
            <div style={{ border: "2px dashed #E8E8F0", borderRadius: 14, padding: 20, textAlign: "center", cursor: "pointer" }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                <i className="fas fa-cloud-arrow-up" style={{ fontSize: 18, color: "#003DA5" }} />
              </div>
              <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E", marginBottom: 4 }}>Tap to upload documents</div>
              <div style={{ fontSize: "0.72rem", color: "#8585A0" }}>PDF, JPG, or PNG &mdash; Max 10MB</div>
            </div>
          </div>

          {/* Info Banner */}
          <div className="stagger-item d8" style={{ display: "flex", gap: 10, padding: "12px 14px", background: "#E6F9EE", border: "1px solid rgba(0,166,81,0.15)", borderRadius: 12 }}>
            <i className="fas fa-circle-check" style={{ fontSize: 14, color: "#00A651", flexShrink: 0, marginTop: 2 }} />
            <span style={{ fontSize: "0.78rem", color: "#065F46", lineHeight: 1.5, fontWeight: 500 }}>No application fee or initial payment required for DATL</span>
          </div>

          {/* Continue */}
          <div className="stagger-item d9" style={{ paddingTop: 4 }}>
            <div onClick={() => router.push("/confirm")} style={{ padding: 16, background: "linear-gradient(135deg,#00A651,#10B981)", borderRadius: 9999, textAlign: "center", color: "white", fontSize: "0.88rem", fontWeight: 700, boxShadow: "0 8px 24px rgba(0,166,81,0.2)", cursor: "pointer" }}>
              Continue <i className="fas fa-arrow-right" style={{ marginLeft: 6, fontSize: 12 }} />
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
