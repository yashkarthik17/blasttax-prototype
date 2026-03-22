"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function ResultsPage() {
  const router = useRouter();
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);
  const [animatedBars, setAnimatedBars] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    [0, 1, 2, 3].forEach((i) => {
      setTimeout(() => {
        setAnimatedCards((p) => [...p, i]);
        setTimeout(() => setAnimatedBars(true), 400);
      }, 800 + i * 350);
    });
  }, []);

  const cards = [
    { rank: 1, recommended: true, title: "Offer in Compromise", amount: "$8,500", original: "$47,250", savings: "Save 82%", savingsAmount: "Save $38,750", desc: "Lump sum: $8,500 or 24 monthly payments of $354", confidence: 85, confidenceLabel: "High eligibility", color: "var(--color-success)", detailPath: "/resolution-detail-oic" },
    { rank: 2, title: "Streamlined Installment Agreement", amount: "$657", amountSuffix: "/month for 72 months", desc: "No financial disclosure required under $50K", confidence: 90, confidenceLabel: "Very high", color: "var(--color-success)", detailPath: "/resolution-detail-ia" },
    { rank: 3, title: "Currently Not Collectible", amount: "Pause payments", desc: "Debt expires Aug 2028 -- Your MDI qualifies you for CNC status", confidence: 60, confidenceLabel: "Medium", color: "var(--color-warning)", detailPath: "/resolution-detail-cnc" },
    { rank: 4, title: "Penalty Abatement", amount: "$12,800", amountPrefix: "Remove", amountSuffix: "in penalties", desc: "First-time abatement + reasonable cause", confidence: 75, confidenceLabel: "High", color: "var(--color-success)", detailPath: "/resolution-detail-penalty" },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ position: "relative" }}>
        <div className="screen-content" style={{ position: "relative", zIndex: 5 }}>
          <div style={{ textAlign: "center", padding: "20px 0 16px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: "var(--brand-blue)", background: "var(--brand-blue-light)", padding: "4px 12px", borderRadius: 9999, marginBottom: 12, letterSpacing: "0.02em" }}>
              <i className="fas fa-wand-magic-sparkles" style={{ fontSize: 10 }} /> Analysis Complete
            </div>
            <h1 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.2, letterSpacing: "-0.01em" }}>Your Resolution Options</h1>
            <p style={{ fontSize: 12.5, color: "var(--color-muted-light)", marginTop: 6, lineHeight: 1.4 }}>Based on your financial profile, here are your best paths forward</p>
          </div>

          {cards.map((c, i) => (
            <div key={i} style={{ background: c.recommended ? "linear-gradient(180deg, #FAFAFF 0%, white 100%)" : "white", border: `${c.recommended ? "2px" : "1px"} solid ${c.recommended ? "var(--brand-blue)" : "var(--color-border)"}`, borderRadius: 18, marginBottom: 14, overflow: "hidden", opacity: animatedCards.includes(i) ? 1 : 0, transform: animatedCards.includes(i) ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)", transition: "all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)", position: "relative", boxShadow: c.recommended ? "0 4px 20px rgba(0, 61, 165, 0.1)" : "0 2px 12px rgba(26,26,46,0.05)" }}>
              {c.recommended && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(135deg, #003DA5, #2563EB, #7C3AED)", zIndex: 1 }} />}
              <div style={{ padding: 18, position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: c.recommended ? 14 : 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, flexShrink: 0, background: c.recommended ? "var(--brand-blue)" : "var(--color-surface-alt)", color: c.recommended ? "white" : "var(--color-muted)" }}>{c.rank}</div>
                    {c.recommended && <span style={{ fontSize: 9.5, fontWeight: 800, color: "white", background: "linear-gradient(135deg, #003DA5, #2563EB)", padding: "3px 10px", borderRadius: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>Recommended</span>}
                  </div>
                  {c.savings && <div style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", background: "var(--color-success-light)", color: "var(--color-success)", borderRadius: 9999, fontSize: 11, fontWeight: 700 }}><i className="fas fa-arrow-down" style={{ fontSize: 9 }} />{c.savings}</div>}
                </div>

                <h3 style={{ fontSize: c.recommended ? 16 : 15, fontWeight: c.recommended ? 800 : 700, color: "var(--color-foreground)", marginBottom: 10 }}>{c.title}</h3>

                <div style={{ display: "flex", alignItems: "baseline", gap: c.recommended ? 10 : 6, marginBottom: 6 }}>
                  {c.amountPrefix && <span style={{ fontSize: 12, color: "var(--color-muted)", fontWeight: 500 }}>{c.amountPrefix}</span>}
                  <span style={{ fontSize: c.recommended ? 28 : (c.rank === 3 ? 18 : 22), fontWeight: c.recommended ? 900 : 800, color: c.rank === 3 ? "var(--color-violet)" : (c.recommended ? "var(--color-success)" : "var(--brand-blue)"), letterSpacing: "-0.02em" }}>{c.amount}</span>
                  {c.original && <span style={{ fontSize: 14, color: "var(--color-placeholder)", textDecoration: "line-through", fontWeight: 500 }}>{c.original}</span>}
                  {c.amountSuffix && <span style={{ fontSize: 13, color: "var(--color-muted)", fontWeight: 500 }}>{c.amountSuffix}</span>}
                </div>

                {c.savingsAmount && (
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", background: "var(--color-success-light)", borderRadius: 8, marginBottom: 12 }}>
                    <i className="fas fa-piggy-bank" style={{ fontSize: 11, color: "var(--color-success)" }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#065F46" }}>{c.savingsAmount}</span>
                  </div>
                )}

                <p style={{ fontSize: 12.5, color: "var(--color-muted)", lineHeight: 1.45, marginBottom: 14 }}>{c.desc}</p>

                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: c.color }}>{c.confidenceLabel}</span>
                  <div style={{ height: 6, background: "var(--color-border-light)", borderRadius: 3, overflow: "hidden", flex: 1 }}>
                    <div style={{ height: "100%", borderRadius: 3, background: c.confidence >= 75 ? "linear-gradient(90deg, #00A651, #10B981)" : "linear-gradient(90deg, #F5A623, #FBBF24)", width: animatedBars ? `${c.confidence}%` : "0%", transition: "width 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)" }} />
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: c.color }}>{c.confidence}%</span>
                </div>

                <div style={{ marginTop: 12 }}>
                  <button onClick={() => router.push(c.detailPath)} style={{ background: "none", border: "none", color: "var(--brand-blue)", fontSize: 12, fontWeight: 600, cursor: "pointer", padding: 0, display: "inline-flex", alignItems: "center", gap: 4 }}>
                    View details <i className="fas fa-chevron-right" style={{ fontSize: 9 }} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 10 }}>
            <button className="btn btn-primary" style={{ fontSize: 15, padding: "16px 28px" }}>
              Choose a Resolution <i className="fas fa-arrow-right" style={{ fontSize: 13 }} />
            </button>
            <button className="btn btn-outline" onClick={() => router.push("/resolution-compare")} style={{ fontSize: 14, padding: "14px 28px" }}>
              <i className="fas fa-arrows-left-right" style={{ fontSize: 14 }} /> Compare Options
            </button>
          </div>

          <div style={{ textAlign: "center", padding: "16px 0 24px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <i className="fas fa-shield-halved" style={{ fontSize: 11, color: "var(--color-muted-light)" }} />
              <span style={{ fontSize: 11.5, color: "var(--color-muted-light)", lineHeight: 1.4 }}>Based on current IRS guidelines and your financial profile</span>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
