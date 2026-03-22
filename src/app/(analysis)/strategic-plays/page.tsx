"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function StrategicPlaysPage() {
  const router = useRouter();
  const [expanded, setExpanded] = useState<string | null>(null);

  const strategies = [
    { id: "a", title: "Play A: Balance Reducer", recommended: true, badge: "Compound Strategy", badgeColor: "#003DA5", icon: "fa-arrow-trend-down", iconBg: "linear-gradient(135deg, #EBF0FF, #dbeafe)", iconColor: "#003DA5",
      desc: "Apply FTA first to reduce balance, then file OIC with lower RCP",
      steps: ["Apply First-Time Abatement (FTA)", "Balance drops by $5,300", "File OIC with lower RCP", "Offer amount decreases"] },
    { id: "b", title: "Play B: Compliance Shield", badge: "Protective", badgeColor: "#00A651", icon: "fa-shield-halved", iconBg: "linear-gradient(135deg, #E6F9EE, #d1fae5)", iconColor: "#00A651",
      desc: "Get into IA first for compliance, then pivot to OIC",
      steps: ["Start Streamlined IA", "Demonstrate compliance", "Build payment history", "Pivot to OIC when ready"] },
    { id: "c", title: "Play C: Dual Track", badge: "Advanced", badgeColor: "#7C3AED", icon: "fa-code-branch", iconBg: "linear-gradient(135deg, #F5F0FF, #ede9fe)", iconColor: "#7C3AED",
      desc: "File OIC while maintaining temporary IA payments",
      steps: ["File OIC application", "Request IA during OIC review", "CSED tolled during OIC", "If denied, IA is backup"] },
    { id: "d", title: "Play D: Penalty Stack", badge: "Multi-Layer", badgeColor: "#D97706", icon: "fa-layer-group", iconBg: "linear-gradient(135deg, #FFFBEB, #fef3c7)", iconColor: "#D97706",
      desc: "Stack FTA + Reasonable Cause across multiple years",
      steps: ["Apply FTA for first year", "Apply Reasonable Cause for other years", "Reduce total balance significantly", "Then pursue OIC or IA"] },
    { id: "e", title: "Play E: Expiration Play", badge: "Long-Term", badgeColor: "#0D9488", icon: "fa-hourglass-half", iconBg: "linear-gradient(135deg, #F0FDFA, #ccfbf1)", iconColor: "#0D9488",
      desc: "Request CNC and wait for CSED to expire",
      steps: ["Apply for CNC status", "CSED continues running", "Apply FTA to reduce balance", "Debt expires 2028-2031"] },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Resolution Strategies" backPath="/results" />
        <div className="screen-content" style={{ paddingBottom: 100 }}>
          <div style={{ marginBottom: 6 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.25 }}>Advanced Resolution Strategies</h1>
          </div>
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)" }}>Combine multiple approaches for optimal outcomes</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {strategies.map((s) => {
              const isExpanded = expanded === s.id;
              return (
                <div key={s.id} onClick={() => setExpanded(isExpanded ? null : s.id)} style={{ background: s.recommended ? "linear-gradient(135deg, #FAFAFF 0%, #E6F9EE 100%)" : "var(--color-surface)", border: `1.5px solid ${isExpanded ? (s.recommended ? "#00A651" : "#003DA5") : "var(--color-border)"}`, borderRadius: 16, overflow: "hidden", cursor: "pointer", transition: "all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)", boxShadow: isExpanded ? (s.recommended ? "0 8px 32px rgba(0, 166, 81, 0.15)" : "0 8px 32px rgba(0, 61, 165, 0.12)") : undefined }}>
                  <div style={{ padding: 16, display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: s.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className={`fas ${s.icon}`} style={{ color: s.iconColor, fontSize: 16 }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>{s.title}</span>
                        {s.recommended && <span style={{ fontSize: 9, fontWeight: 700, color: "#00A651", background: "rgba(0,166,81,0.08)", padding: "2px 6px", borderRadius: 4 }}>Best</span>}
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 600, color: s.badgeColor, background: `${s.badgeColor}15`, padding: "2px 8px", borderRadius: 6 }}>{s.badge}</span>
                      <p style={{ fontSize: 12, color: "var(--color-muted)", lineHeight: 1.5, marginTop: 6 }}>{s.desc}</p>
                    </div>
                    <i className="fas fa-chevron-down" style={{ fontSize: 12, color: "var(--color-placeholder)", transition: "transform 0.35s ease", transform: isExpanded ? "rotate(180deg)" : "none", marginTop: 4 }} />
                  </div>
                  {isExpanded && (
                    <div style={{ padding: "0 16px 16px", borderTop: "1px solid var(--color-border-light)" }}>
                      <div style={{ position: "relative", paddingLeft: 24, marginTop: 12 }}>
                        <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 2, background: "linear-gradient(to bottom, #003DA5, #00A651)", borderRadius: 2 }} />
                        {s.steps.map((step, si) => (
                          <div key={si} style={{ position: "relative", padding: "8px 0" }}>
                            <div style={{ position: "absolute", left: -20, top: 14, width: 10, height: 10, borderRadius: "50%", background: "#003DA5", border: "2px solid white", boxShadow: "0 0 0 2px #003DA5" }} />
                            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-foreground)" }}>{step}</div>
                          </div>
                        ))}
                      </div>
                      <button className="btn btn-primary btn-sm" style={{ marginTop: 12, fontSize: 13 }} onClick={(e) => { e.stopPropagation(); router.push("/resolution-plan"); }}>
                        Use This Strategy <i className="fas fa-arrow-right" style={{ fontSize: 11 }} />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 16, textAlign: "center" }}>
            <a onClick={() => router.push("/compatibility-matrix")} style={{ fontSize: 13, fontWeight: 600, color: "var(--brand-blue)", cursor: "pointer" }}>
              <i className="fas fa-grid-2" style={{ fontSize: 11, marginRight: 4 }} /> View Compatibility Matrix
            </a>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
