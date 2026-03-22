"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

const reliefTypes = [
  { id: "innocent", title: "Innocent Spouse Relief", irc: "IRC 6015(b)", desc: "You didn't know about the error", detail: "You may qualify if you filed a joint return with an understatement of tax that is attributable to erroneous items of your spouse." },
  { id: "separation", title: "Separation of Liability", irc: "IRC 6015(c)", desc: "Divide the tax between spouses", detail: "Allocates the understatement of tax between you and your former spouse, assigning each person their share." },
  { id: "equitable", title: "Equitable Relief", irc: "IRC 6015(f)", desc: "Other circumstances warrant relief", detail: "If you don't qualify under (b) or (c), you may still get relief if it would be unfair to hold you liable." },
];

export default function Form8857Page() {
  const router = useRouter();
  const [selectedRelief, setSelectedRelief] = useState("innocent");
  const [selectedYears, setSelectedYears] = useState<string[]>(["2021", "2022"]);
  const [benefitAnswer, setBenefitAnswer] = useState("No");

  const toggleYear = (year: string) => {
    setSelectedYears((prev) => prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]);
  };

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Form 8857 — Innocent Spouse" backPath="/other-relief" />

        {/* Progress Steps */}
        <div style={{ padding: "0 20px 8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 24, height: 8, borderRadius: 9999, background: "#003DA5" }} />
            {[...Array(4)].map((_, i) => (
              <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "#E8E8F0" }} />
            ))}
          </div>
          <span style={{ fontSize: 11, fontWeight: 600, color: "#8585A0" }}>Step 1 of 5</span>
        </div>

        <div className="screen-content" style={{ paddingTop: 8 }}>
          <div style={{ marginBottom: 14 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.3 }}>Request Innocent Spouse Relief</h1>
          </div>

          {/* Relief Type */}
          <div style={{ fontSize: 12, fontWeight: 700, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 8 }}>Relief Type</div>

          {reliefTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelectedRelief(type.id)}
              style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 16, background: selectedRelief === type.id ? "#EBF0FF" : "white", border: `1.5px solid ${selectedRelief === type.id ? "#003DA5" : "#E8E8F0"}`, borderRadius: 14, cursor: "pointer", transition: "all 0.3s ease", marginBottom: 8, boxShadow: selectedRelief === type.id ? "0 0 0 3px rgba(0,61,165,0.1)" : "none" }}
            >
              <div style={{ width: 22, height: 22, border: `2px solid ${selectedRelief === type.id ? "#003DA5" : "#E8E8F0"}`, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: selectedRelief === type.id ? "#003DA5" : "transparent", marginTop: 2 }}>
                {selectedRelief === type.id && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A2E", marginBottom: 3 }}>{type.title}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <span style={{ display: "inline-flex", padding: "2px 8px", background: "#F6F6FB", borderRadius: 6, fontSize: 10, fontWeight: 700, color: "#5C5C7A" }}>{type.irc}</span>
                </div>
                <div style={{ fontSize: 12, color: "#8585A0", lineHeight: 1.4 }}>{type.desc}</div>
                {selectedRelief === type.id && (
                  <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(0,61,165,0.1)" }}>
                    <div style={{ fontSize: 11, color: "#5C5C7A", lineHeight: 1.5 }}>{type.detail}</div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Spouse Information */}
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 10 }}>Spouse Information</div>
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ flex: 1, marginBottom: 12 }}>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>Spouse Name</label>
                <input type="text" placeholder="Full name" style={{ width: "100%", padding: "10px 12px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 10, fontFamily: "inherit", fontSize: 14, fontWeight: 600, color: "#1A1A2E", outline: "none", boxSizing: "border-box" }} />
              </div>
              <div style={{ flex: 1, marginBottom: 12 }}>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>SSN</label>
                <input type="text" placeholder="***-**-****" style={{ width: "100%", padding: "10px 12px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 10, fontFamily: "inherit", fontSize: 14, fontWeight: 600, color: "#1A1A2E", outline: "none", boxSizing: "border-box" }} />
              </div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ flex: 1, marginBottom: 12 }}>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>Date of Marriage</label>
                <input type="date" style={{ width: "100%", padding: "10px 12px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 10, fontFamily: "inherit", fontSize: 14, fontWeight: 600, color: "#1A1A2E", outline: "none", boxSizing: "border-box" }} />
              </div>
              <div style={{ flex: 1, marginBottom: 12 }}>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>Separation/Divorce</label>
                <input type="date" style={{ width: "100%", padding: "10px 12px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 10, fontFamily: "inherit", fontSize: 14, fontWeight: 600, color: "#1A1A2E", outline: "none", boxSizing: "border-box" }} />
              </div>
            </div>
          </div>

          {/* Tax Years */}
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 8 }}>Tax Years Requesting Relief</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["2020", "2021", "2022", "2023"].map((year) => (
                <div key={year} onClick={() => toggleYear(year)} style={{ display: "inline-flex", alignItems: "center", padding: "8px 16px", border: `1.5px solid ${selectedYears.includes(year) ? "#003DA5" : "#E8E8F0"}`, borderRadius: 9999, fontSize: 13, fontWeight: 600, color: selectedYears.includes(year) ? "#003DA5" : "#8585A0", cursor: "pointer", background: selectedYears.includes(year) ? "#EBF0FF" : "white", transition: "all 0.2s ease" }}>
                  {year}
                </div>
              ))}
            </div>
          </div>

          {/* Reason */}
          <div style={{ marginTop: 16, marginBottom: 12 }}>
            <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>Why are you requesting relief?</label>
            <textarea placeholder="Describe your situation..." style={{ width: "100%", minHeight: 70, padding: "10px 12px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 10, fontFamily: "inherit", fontSize: 14, fontWeight: 600, color: "#1A1A2E", outline: "none", resize: "vertical", boxSizing: "border-box" }} />
          </div>

          {/* Benefit Question */}
          <div style={{ marginTop: 4 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 8 }}>Did you benefit from the understatement?</div>
            <div style={{ display: "flex", gap: 10 }}>
              {["Yes", "No"].map((opt) => (
                <div key={opt} onClick={() => setBenefitAnswer(opt)} style={{ flex: 1, padding: 12, border: `1.5px solid ${benefitAnswer === opt ? "#003DA5" : "#E8E8F0"}`, borderRadius: 12, textAlign: "center", cursor: "pointer", background: benefitAnswer === opt ? "#EBF0FF" : "white", fontFamily: "inherit", fontSize: 13, fontWeight: 600, color: benefitAnswer === opt ? "#003DA5" : "#5C5C7A", transition: "all 0.25s ease" }}>
                  {opt}
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, minHeight: 16 }} />

          {/* Continue */}
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
