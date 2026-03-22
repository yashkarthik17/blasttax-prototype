"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function ResolutionSwitchingPage() {
  const router = useRouter();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const switchCards = [
    {
      iconBg: "linear-gradient(135deg, #EBF0FF, #F5F0FF)",
      iconColor: "#003DA5",
      from: { label: "IA", bg: "#EBF0FF", color: "#003DA5" },
      to: { label: "OIC", bg: "#F5F0FF", color: "#7C3AED" },
      subtitle: "Must terminate IA first",
      detail: "TC 971 AC 043/063 must close before TC 480 posts",
      steps: ["Call IRS to terminate current IA", "Wait for IA closure to process", "File Form 656 (OIC application)"],
    },
    {
      iconBg: "linear-gradient(135deg, #EBF0FF, #F0FDFA)",
      iconColor: "#0D9488",
      from: { label: "IA", bg: "#EBF0FF", color: "#003DA5" },
      to: { label: "CNC", bg: "#F0FDFA", color: "#0D9488" },
      subtitle: "If you can no longer afford payments",
      detail: "Demonstrate $0 monthly disposable income (MDI)",
      steps: ["Call IRS, explain financial hardship", "Submit Form 433-F with financials", "Request CNC status"],
    },
    {
      iconBg: "linear-gradient(135deg, #F0FDFA, #EBF0FF)",
      iconColor: "#003DA5",
      from: { label: "CNC", bg: "#F0FDFA", color: "#0D9488" },
      to: { label: "IA", bg: "#EBF0FF", color: "#003DA5" },
      subtitle: "If your financial situation improves",
      detail: "Better to self-initiate than wait for IRS to revoke",
      tip: "Proactively setting up an IA shows good faith and avoids enforcement",
      tipIcon: "fa-lightbulb",
      tipBg: "#E6F9EE",
      tipColor: "#065F46",
      tipIconColor: "#00A651",
    },
    {
      iconBg: "linear-gradient(135deg, #FFF0F1, #EBF0FF)",
      iconColor: "#E63946",
      from: { label: "OIC Rejected", bg: "#FFF0F1", color: "#E63946" },
      to: { label: "IA", bg: "#EBF0FF", color: "#003DA5" },
      subtitle: "IA is always available, no waiting period",
      detail: "If offer denied, you can immediately set up an installment agreement",
      tip: "No waiting period required between OIC rejection and IA setup",
      tipIcon: "fa-circle-check",
      tipBg: "#E6F9EE",
      tipColor: "#065F46",
      tipIconColor: "#00A651",
    },
    {
      iconBg: "linear-gradient(135deg, #FEF3C7, #FAFAFF)",
      iconColor: "#D97706",
      icon: "fa-gavel",
      from: { label: "Any", bg: "#F6F6FB", color: "#5C5C7A" },
      to: { label: "CDP", bg: "#FEF3C7", color: "#D97706" },
      subtitle: "If you receive a collection notice",
      detail: "30-day window to file Form 12153",
      steps: ["Receive collection notice (levy/lien)", "File Form 12153 within 30 days", "Propose alternative resolution at hearing"],
      warning: "30-day deadline is strict \u2014 do not miss it",
    },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Change Resolution" backPath="/cases/1042" />
        <div className="screen-content" style={{ paddingBottom: 100 }}>
          {/* Title */}
          <div className="stagger-item d1" style={{ marginBottom: 4 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.25, margin: 0 }}>Switching Your Resolution Path</h1>
          </div>
          <div className="stagger-item d2" style={{ marginBottom: 22 }}>
            <p style={{ fontSize: "0.8125rem", color: "#5C5C7A", margin: 0 }}>Sometimes circumstances change and a different resolution makes sense</p>
          </div>

          {/* Switch Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {switchCards.map((card, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <div
                  key={i}
                  className={`switch-card stagger-item d${i + 3} ${isExpanded ? "expanded" : ""}`}
                  onClick={() => toggleCard(i)}
                >
                  <div className="switch-header">
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: card.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className={`fas ${card.icon || "fa-arrows-rotate"}`} style={{ fontSize: 16, color: card.iconColor }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                        <span className="switch-arrow-badge" style={{ background: card.from.bg, color: card.from.color }}>{card.from.label}</span>
                        <i className="fas fa-arrow-right" style={{ fontSize: 10, color: "#B0B0C8" }} />
                        <span className="switch-arrow-badge" style={{ background: card.to.bg, color: card.to.color }}>{card.to.label}</span>
                      </div>
                      <p style={{ fontSize: "0.75rem", color: "#5C5C7A", margin: 0 }}>{card.subtitle}</p>
                    </div>
                    <i className={`fas fa-chevron-down chevron-icon ${isExpanded ? "rotated" : ""}`} />
                  </div>
                  <div className="switch-body" style={{ maxHeight: isExpanded ? 400 : 0 }}>
                    <div className="switch-body-inner">
                      <p style={{ fontSize: "0.75rem", color: "#5C5C7A", marginBottom: 12, margin: 0 }}>{card.detail}</p>
                      {card.steps && card.steps.map((step, si) => (
                        <div key={si} className="step-mini">
                          <div className="step-mini-dot">{si + 1}</div>
                          <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#1A1A2E", margin: 0 }}>{step}</p>
                        </div>
                      ))}
                      {card.tip && (
                        <div style={{ padding: "10px 12px", background: card.tipBg, borderRadius: 10, display: "flex", gap: 8, alignItems: "flex-start", marginTop: card.steps ? 10 : 12 }}>
                          <i className={`fas ${card.tipIcon}`} style={{ color: card.tipIconColor, fontSize: 13, marginTop: 2 }} />
                          <p style={{ fontSize: "0.75rem", color: card.tipColor, fontWeight: 500, margin: 0 }}>{card.tip}</p>
                        </div>
                      )}
                      {card.warning && (
                        <div style={{ padding: "10px 12px", background: "#FFFBEB", border: "1px solid rgba(245,166,35,0.2)", borderRadius: 10, marginTop: 10, display: "flex", gap: 8, alignItems: "flex-start" }}>
                          <i className="fas fa-clock" style={{ color: "#D97706", fontSize: 13, marginTop: 2 }} />
                          <p style={{ fontSize: "0.75rem", color: "#92400E", fontWeight: 500, margin: 0 }}>{card.warning}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Warning Card */}
          <div className="stagger-item d8" style={{ marginTop: 18, marginBottom: 20 }}>
            <div style={{ padding: "14px 16px", background: "#FFF0F1", border: "1px solid rgba(230,57,70,0.15)", borderRadius: 14, display: "flex", alignItems: "flex-start", gap: 10 }}>
              <i className="fas fa-exclamation-triangle" style={{ color: "#E63946", fontSize: 14, marginTop: 2 }} />
              <div>
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#991B1B", marginBottom: 2, margin: 0 }}>Prior Defaults Matter</p>
                <p style={{ fontSize: "0.75rem", color: "#B91C1C", margin: 0, marginTop: 2 }}>Prior defaults (TC 971 AC 073) = extra scrutiny on new applications</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="stagger-item d9">
            <button className="btn btn-primary" style={{ width: "100%" }}>
              <i className="fas fa-comments" />
              Talk to Expert About Options
            </button>
          </div>
          <div style={{ marginTop: 12, textAlign: "center" }}>
            <span onClick={() => router.push("/dashboard")} style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#5C5C7A", cursor: "pointer" }}>
              <i className="fas fa-arrow-left" style={{ fontSize: 10, marginRight: 4 }} />
              Back to Results
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .switch-card {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .switch-card:hover {
          border-color: rgba(0, 61, 165, 0.2);
          box-shadow: 0 4px 20px rgba(26,26,46,0.08);
          transform: translateY(-1px);
        }
        .switch-card.expanded {
          border-color: #003DA5;
          box-shadow: 0 8px 28px rgba(0, 61, 165, 0.1);
        }
        .switch-header {
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .switch-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .switch-body-inner {
          padding: 0 16px 16px;
          border-top: 1px solid #F0F0F5;
          padding-top: 14px;
        }
        .switch-arrow-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .chevron-icon {
          transition: transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
          color: #B0B0C8;
          font-size: 12px;
        }
        .chevron-icon.rotated {
          transform: rotate(180deg);
        }
        .step-mini {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
        }
        .step-mini-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #EBF0FF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 0.6875rem;
          font-weight: 700;
          color: #003DA5;
        }
      `}</style>
    </PhoneFrame>
  );
}
