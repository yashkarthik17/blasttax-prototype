"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

const countyData: Record<string, string[]> = {
  FL: ["Miami-Dade", "Broward", "Palm Beach", "Hillsborough", "Orange", "Pinellas", "Lee", "Sarasota"],
  TX: ["Harris", "Dallas", "Tarrant", "Bexar", "Travis", "Galveston", "Jefferson", "Chambers"],
  CA: ["Los Angeles", "San Bernardino", "Ventura", "Santa Barbara", "San Diego", "Riverside", "Butte", "Sonoma"],
  LA: ["Orleans", "Jefferson", "East Baton Rouge", "Caddo", "Calcasieu", "St. Tammany"],
  NC: ["Buncombe", "Henderson", "Mecklenburg", "Wake", "Watauga", "Avery"],
};
const disasterCounties: Record<string, string[]> = {
  FL: ["Miami-Dade", "Broward", "Palm Beach", "Hillsborough", "Pinellas", "Lee", "Sarasota"],
  TX: ["Harris", "Galveston", "Jefferson", "Chambers"],
  CA: ["Los Angeles", "San Bernardino", "Ventura", "Santa Barbara", "Butte", "Sonoma"],
  LA: ["Orleans", "Jefferson", "Calcasieu", "St. Tammany"],
  NC: ["Buncombe", "Henderson", "Watauga", "Avery"],
};

export default function PenaltyDisasterPage() {
  const router = useRouter();
  const [state, setState] = useState("");
  const [county, setCounty] = useState("");
  const [result, setResult] = useState<null | "eligible" | "not" | "incomplete">(null);

  const checkEligibility = () => {
    if (!state || !county) { setResult("incomplete"); return; }
    const isDisaster = disasterCounties[state]?.includes(county);
    setResult(isDisaster ? "eligible" : "not");
  };

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div className="screen-header" style={{ padding: "14px 20px 12px" }}>
          <div onClick={() => router.push("/penalty-abatement")} style={{ width: 36, height: 36, borderRadius: 12, background: "#F6F6FB", border: "1px solid #E8E8F0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <i className="fas fa-arrow-left" style={{ fontSize: 14, color: "#5C5C7A" }} />
          </div>
          <div style={{ flex: 1, fontSize: "0.95rem", fontWeight: 800, color: "#1A1A2E", textAlign: "center" }}>Disaster Relief</div>
          <div style={{ width: 36, flexShrink: 0 }} />
        </div>

        <div className="screen-content" style={{ paddingBottom: 32, gap: 14 }}>
          <div className="stagger-item d1" style={{ textAlign: "center", padding: "4px 0" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 12px", background: "#FFF7ED", borderRadius: 9999, fontSize: "0.65rem", fontWeight: 700, color: "#D97706", marginBottom: 10 }}>
              <i className="fas fa-house-tsunami" style={{ fontSize: 9 }} /> FEMA RELIEF
            </div>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.2 }}>Tax Relief for Disaster Areas</h1>
          </div>

          <div className="stagger-item d2" style={{ background: "#F6F6FB", borderRadius: 14, padding: "14px 16px" }}>
            <p style={{ fontSize: "0.78rem", color: "#5C5C7A", lineHeight: 1.65, margin: 0 }}>When FEMA declares a federal disaster area, the IRS automatically extends deadlines and may abate penalties for taxpayers in affected regions.</p>
          </div>

          {/* Check Your Area */}
          <div className="stagger-item d3" style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 18, padding: 18, boxShadow: "0 2px 12px rgba(26,26,46,0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: "#FFF7ED", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-map-location-dot" style={{ fontSize: 12, color: "#D97706" }} />
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>Check Your Area</div>
            </div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ display: "block", fontSize: "0.68rem", fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>State</label>
              <select value={state} onChange={(e) => { setState(e.target.value); setCounty(""); setResult(null); }} style={{ width: "100%", padding: "10px 12px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 10, fontFamily: "inherit", fontSize: "0.8rem", fontWeight: 600, color: "#1A1A2E", outline: "none", boxSizing: "border-box" }}>
                <option value="">Select your state...</option>
                <option value="FL">Florida</option>
                <option value="TX">Texas</option>
                <option value="CA">California</option>
                <option value="LA">Louisiana</option>
                <option value="NC">North Carolina</option>
              </select>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: "0.68rem", fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>County</label>
              <select value={county} onChange={(e) => { setCounty(e.target.value); setResult(null); }} disabled={!state} style={{ width: "100%", padding: "10px 12px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 10, fontFamily: "inherit", fontSize: "0.8rem", fontWeight: 600, color: "#1A1A2E", outline: "none", boxSizing: "border-box" }}>
                <option value="">{state ? "Select your county..." : "Select state first..."}</option>
                {(countyData[state] || []).map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div onClick={checkEligibility} style={{ padding: 12, background: "#003DA5", borderRadius: 12, textAlign: "center", color: "white", fontSize: "0.82rem", fontWeight: 700, cursor: "pointer" }}>
              <i className="fas fa-search" style={{ marginRight: 6, fontSize: 11 }} /> Check Eligibility
            </div>
            {result === "eligible" && (
              <div style={{ marginTop: 14, background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: 12, padding: "12px 14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}><i className="fas fa-circle-check" style={{ fontSize: 14, color: "#10B981" }} /><span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#065F46" }}>Your county IS in a declared disaster area</span></div>
                <div style={{ fontSize: "0.72rem", color: "#065F46", lineHeight: 1.5 }}>{county} County, {state} qualifies for automatic tax deadline extensions and penalty relief.</div>
              </div>
            )}
            {result === "not" && (
              <div style={{ marginTop: 14, background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 12, padding: "12px 14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}><i className="fas fa-circle-xmark" style={{ fontSize: 14, color: "#EF4444" }} /><span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#991B1B" }}>Your county is NOT in a declared disaster area</span></div>
                <div style={{ fontSize: "0.72rem", color: "#991B1B", lineHeight: 1.5 }}>{county} County, {state} is not currently covered. Check other penalty relief options.</div>
              </div>
            )}
            {result === "incomplete" && (
              <div style={{ marginTop: 14, background: "#FFF7ED", border: "1px solid #FED7AA", borderRadius: 12, padding: "12px 14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}><i className="fas fa-exclamation-triangle" style={{ fontSize: 14, color: "#D97706" }} /><span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#92400E" }}>Please select both state and county.</span></div>
              </div>
            )}
          </div>

          {/* Current Declarations */}
          <div className="stagger-item d4" style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", padding: "0 4px" }}>Current Disaster Declarations</div>
          {[
            { icon: "fa-hurricane", iconBg: "#FFF0F1", iconColor: "#E63946", title: "Hurricane Milton", sub: "FL, TX \u2014 Extended to Oct 15, 2026", badge: "FEMA-4831", badgeBg: "#FFF0F1", badgeColor: "#E63946" },
            { icon: "fa-fire", iconBg: "#FFF7ED", iconColor: "#F5A623", title: "California Wildfires", sub: "CA \u2014 Extended to Jun 15, 2026", badge: "FEMA-4815", badgeBg: "#FFF7ED", badgeColor: "#D97706" },
          ].map((d, i) => (
            <div key={i} style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 14, padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: d.iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}><i className={`fas ${d.icon}`} style={{ fontSize: 12, color: d.iconColor }} /></div>
                <div style={{ flex: 1 }}><div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>{d.title}</div><div style={{ fontSize: "0.68rem", color: "#8585A0" }}>{d.sub}</div></div>
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <span style={{ padding: "3px 8px", background: d.badgeBg, borderRadius: 6, fontSize: "0.62rem", fontWeight: 600, color: d.badgeColor }}>{d.badge}</span>
                <span style={{ padding: "3px 8px", background: "#E6F9EE", borderRadius: 6, fontSize: "0.62rem", fontWeight: 600, color: "#00A651" }}>Active</span>
              </div>
            </div>
          ))}

          {/* What's Covered */}
          <div className="stagger-item d6" style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 18, padding: 18 }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>What&apos;s Covered</div>
            {["Filing deadline extensions", "Payment deadline extensions", "FTF and FTP penalty abatement", "Interest abatement (sometimes)", "Estimated tax penalty waiver"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 0" }}>
                <div style={{ width: 20, height: 20, borderRadius: 6, background: "#00A651", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><i className="fas fa-check" style={{ fontSize: 10, color: "white" }} /></div>
                <span style={{ fontSize: "0.78rem", fontWeight: 500, color: "#1A1A2E" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Info callouts */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "14px 16px", background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: 14 }}>
            <i className="fas fa-circle-check" style={{ fontSize: 14, color: "#10B981", marginTop: 1, flexShrink: 0 }} />
            <div style={{ fontSize: "0.75rem", color: "#065F46", lineHeight: 1.6, fontWeight: 500 }}><strong>No action needed:</strong> Relief is automatic if your address on file with the IRS is in the declared disaster area.</div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "14px 16px", background: "#EBF0FF", border: "1px solid #C5D5F5", borderRadius: 14 }}>
            <i className="fas fa-circle-info" style={{ fontSize: 14, color: "#2563EB", marginTop: 1, flexShrink: 0 }} />
            <div style={{ fontSize: "0.75rem", color: "#1E40AF", lineHeight: 1.6, fontWeight: 500 }}><strong>Not applied automatically?</strong> Call the IRS at 866-562-5227 or submit Form 4506-T to verify your address is linked to the disaster area.</div>
          </div>

          <div style={{ textAlign: "center", padding: "4px 0" }}>
            <span style={{ fontSize: "0.78rem", color: "#2563EB", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 5 }}>
              <i className="fas fa-external-link-alt" style={{ fontSize: 10 }} /> View IRS Disaster Relief Page
            </span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
