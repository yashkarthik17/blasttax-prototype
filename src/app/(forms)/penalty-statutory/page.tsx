"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

const situations = [
  { icon: "fa-jet-fighter", bg: "#EBF0FF", color: "#003DA5", title: "Combat Zone Service", irc: "IRC \u00A7 7508", desc: "Automatic extension of filing and payment deadlines for military personnel serving in designated combat zones. Penalties are suspended during the qualifying period.", checks: ["Active duty in combat zone", "180-day extension after return"], claim: "Claim: Attach deployment orders to return" },
  { icon: "fa-hurricane", bg: "#FFF7ED", color: "#F5A623", title: "Presidentially Declared Disaster", irc: "IRC \u00A7 7508A", desc: "IRS postpones tax deadlines for taxpayers in federally declared disaster areas. Filing and payment penalties are automatically abated for the postponement period.", checks: ["Located in FEMA disaster area", "Deadlines extended automatically"], claim: "Claim: Usually automatic; file in affected area" },
  { icon: "fa-people-arrows", bg: "#F5F0FF", color: "#7C3AED", title: "Spousal Signature", irc: "IRC \u00A7 6013(e)", desc: "Relief from joint and several liability on a joint return. If your spouse (or former spouse) understated tax, you may not be responsible for the resulting penalties.", checks: ["Filed joint return with spouse", "Understatement due to other spouse"], claim: "Claim: File Form 8857" },
  { icon: "fa-shield-halved", bg: "#E6F9EE", color: "#00A651", title: "Estimated Tax Safe Harbor", irc: "IRC \u00A7 6654(d)", desc: "No estimated tax penalty if you paid at least 90% of current year tax or 100% of prior year tax (110% if AGI over $150K). The safe harbor protects you by law.", checks: ["Paid 90% of current year liability", "OR 100%/110% of prior year tax"], claim: "Claim: File Form 2210 with return" },
  { icon: "fa-scale-balanced", bg: "#F0FDFA", color: "#0D9488", title: "Reasonable Cause by Law", irc: "IRC \u00A7 6664(c)", desc: "Accuracy-related penalties are removed if you can show reasonable cause and good faith, or had substantial authority for your position.", checks: ["Substantial authority for tax position", "Acted in good faith with reasonable cause"], claim: "Claim: Attach explanation to penalty response" },
];

const qualifyOptions = [
  "I served in a combat zone",
  "I was in a declared disaster area",
  "My spouse caused the tax issue",
  "I met estimated tax safe harbor",
  "I had substantial authority for my position",
];

export default function PenaltyStatutoryPage() {
  const router = useRouter();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [selectedQualify, setSelectedQualify] = useState<number | null>(null);

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div className="screen-header" style={{ padding: "14px 20px 12px" }}>
          <div onClick={() => router.push("/penalty-abatement")} style={{ width: 36, height: 36, borderRadius: 12, background: "#F6F6FB", border: "1px solid #E8E8F0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <i className="fas fa-arrow-left" style={{ fontSize: 14, color: "#5C5C7A" }} />
          </div>
          <div style={{ flex: 1, fontSize: "0.95rem", fontWeight: 800, color: "#1A1A2E", textAlign: "center" }}>Statutory Exception</div>
          <div style={{ width: 36, flexShrink: 0 }} />
        </div>

        <div className="screen-content" style={{ paddingBottom: 32, gap: 14 }}>
          <div className="stagger-item d1" style={{ textAlign: "center", padding: "4px 0" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 12px", background: "#EBF0FF", borderRadius: 9999, fontSize: "0.65rem", fontWeight: 700, color: "#003DA5", marginBottom: 10 }}>
              <i className="fas fa-gavel" style={{ fontSize: 9 }} /> STATUTORY RELIEF
            </div>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.2, letterSpacing: "-0.01em" }}>Penalties Removed by Law</h1>
          </div>

          <div className="stagger-item d2" style={{ background: "#F6F6FB", borderRadius: 14, padding: "14px 16px" }}>
            <p style={{ fontSize: "0.78rem", color: "#5C5C7A", lineHeight: 1.65, margin: 0 }}>Certain IRC provisions automatically remove or prevent penalties in specific circumstances. If you qualify under one of these statutes, the penalty is abated as a matter of law.</p>
          </div>

          <div className="stagger-item d3" style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", padding: "0 4px", marginTop: 2 }}>Qualifying Situations</div>

          {situations.map((sit, idx) => (
            <div key={idx} onClick={() => setExpandedCard(expandedCard === idx ? null : idx)} style={{ background: "white", border: `1px solid ${expandedCard === idx ? "#003DA5" : "#E8E8F0"}`, borderRadius: 16, padding: 16, boxShadow: expandedCard === idx ? "0 4px 20px rgba(0,61,165,0.08)" : "0 2px 8px rgba(26,26,46,0.04)", cursor: "pointer", overflow: "hidden", transition: "all 0.3s ease" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: sit.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className={`fas ${sit.icon}`} style={{ fontSize: 15, color: sit.color }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>{sit.title}</div>
                    <div style={{ fontSize: "0.68rem", color: "#8585A0", marginTop: 1 }}>{sit.irc}</div>
                  </div>
                </div>
                <i className="fas fa-chevron-down" style={{ fontSize: 11, color: "#B0B0C8", transition: "transform 0.3s ease", transform: expandedCard === idx ? "rotate(180deg)" : "none" }} />
              </div>
              {expandedCard === idx && (
                <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid #F0F0F5" }}>
                  <div style={{ fontSize: "0.75rem", color: "#5C5C7A", lineHeight: 1.6, marginBottom: 10 }}>{sit.desc}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {sit.checks.map((c, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <i className="fas fa-check-circle" style={{ fontSize: 11, color: "#00A651" }} />
                        <span style={{ fontSize: "0.72rem", color: "#1A1A2E", fontWeight: 500 }}>{c}</span>
                      </div>
                    ))}
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <i className="fas fa-file-lines" style={{ fontSize: 11, color: "#003DA5" }} />
                      <span style={{ fontSize: "0.72rem", color: "#5C5C7A", fontWeight: 500 }}>{sit.claim}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Check If You Qualify */}
          <div style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 18, padding: 18, boxShadow: "0 2px 12px rgba(26,26,46,0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-magnifying-glass" style={{ fontSize: 12, color: "#003DA5" }} />
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>Check If You Qualify</div>
            </div>
            <div style={{ fontSize: "0.75rem", color: "#5C5C7A", lineHeight: 1.6, marginBottom: 14 }}>Select the situation that best describes your circumstances:</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
              {qualifyOptions.map((opt, idx) => (
                <div key={idx} onClick={() => setSelectedQualify(idx)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: selectedQualify === idx ? "#EBF0FF" : "#F6F6FB", border: `1.5px solid ${selectedQualify === idx ? "#003DA5" : "#E8E8F0"}`, borderRadius: 12, cursor: "pointer", transition: "all 0.2s ease" }}>
                  <div style={{ width: 20, height: 20, border: `2px solid ${selectedQualify === idx ? "#003DA5" : "#E8E8F0"}`, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: selectedQualify === idx ? "#003DA5" : "transparent" }}>
                    {selectedQualify === idx && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "white" }} />}
                  </div>
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#1A1A2E" }}>{opt}</span>
                </div>
              ))}
            </div>
            {selectedQualify !== null && (
              <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: 12, padding: "12px 14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <i className="fas fa-circle-check" style={{ fontSize: 14, color: "#10B981" }} />
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#065F46" }}>You may qualify for statutory exception relief!</span>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div style={{ marginTop: 4 }}>
            <div onClick={() => router.push("/confirm")} style={{ padding: 15, background: "linear-gradient(135deg,#00A651,#10B981)", borderRadius: 9999, textAlign: "center", color: "white", fontSize: "0.88rem", fontWeight: 700, boxShadow: "0 8px 24px rgba(0,166,81,0.2)", cursor: "pointer" }}>
              <i className="fas fa-paper-plane" style={{ marginRight: 6, fontSize: 13 }} /> Request Statutory Abatement
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
