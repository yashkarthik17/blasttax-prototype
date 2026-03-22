"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function RecommendationPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <ScreenHeader title="Expert Recommendation" backPath="/expert-review" />
      <div className="screen">
        <div className="screen-content" style={{ paddingBottom: 40, gap: 20 }}>
          {/* Expert Profile */}
          <div className="stagger-item d1" style={{ display: "flex", alignItems: "center", gap: 14, padding: "4px 0" }}>
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,61,165,0.2)", position: "relative" }}>
              <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "white" }}>MC</span>
              <div style={{ position: "absolute", bottom: -1, right: -1, width: 18, height: 18, borderRadius: "50%", background: "#00A651", border: "2.5px solid #FAFAFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-check" style={{ fontSize: 7, color: "white" }} />
              </div>
            </div>
            <div>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "#1A1A2E" }}>Michael Chen, EA</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#8585A0" }}>Enrolled Agent</span>
                <span style={{ fontSize: "0.55rem", color: "#B0B0C8" }}>|</span>
                <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <i className="fas fa-star" style={{ fontSize: 9, color: "#F5A623" }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#8585A0" }}>4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendation Card */}
          <div className="stagger-item d2 rec-card" style={{ background: "white", borderRadius: 18, border: "1px solid #E8E8F0", padding: 0, overflow: "hidden" }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: 5, background: "linear-gradient(to bottom, #003DA5, #2563EB, #7C3AED)", flexShrink: 0, borderRadius: "5px 0 0 5px" }} />
              <div style={{ flex: 1, padding: "18px 16px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", background: "linear-gradient(135deg,#EBF0FF,#F5F0FF)", border: "1px solid rgba(0,61,165,0.12)", borderRadius: 9999, fontSize: "0.68rem", fontWeight: 700, color: "#003DA5", marginBottom: 12 }}>
                  <i className="fas fa-sparkles" style={{ fontSize: 9, color: "#7C3AED" }} />
                  Recommended
                </div>
                <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.3, marginBottom: 4 }}>Offer in Compromise &mdash; Lump Sum</div>
                <div style={{ fontSize: "0.8rem", color: "#8585A0", fontWeight: 500, lineHeight: 1.5, marginBottom: 16 }}>Based on my review, OIC gives you the best outcome</div>

                {/* Offer Amount */}
                <div style={{ background: "linear-gradient(135deg,#E6F9EE,#F0FDF4)", border: "1px solid rgba(0,166,81,0.15)", borderRadius: 14, padding: 16, textAlign: "center" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Proposed Offer Amount</div>
                  <div className="offer-amount" style={{ fontSize: "2rem", fontWeight: 900, color: "#00A651", letterSpacing: "-0.02em" }}>$8,500</div>
                </div>

                {/* Insight note */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginTop: 14, padding: "10px 12px", background: "#FFF5F5", borderRadius: 10, border: "1px solid rgba(230,57,70,0.08)" }}>
                  <i className="fas fa-lightbulb" style={{ fontSize: 13, color: "#F5A623", marginTop: 2, flexShrink: 0 }} />
                  <div style={{ fontSize: "0.76rem", color: "#5C5C7A", fontWeight: 500, lineHeight: 1.5 }}>I&apos;ve identified opportunities to reduce your offer with medical expenses</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div className="stagger-item d3">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, padding: "0 4px" }}>Key Findings</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { num: "1", text: "Your RCP supports a low offer amount", bg: "linear-gradient(135deg,#EBF0FF,#D6E2FF)", color: "#003DA5" },
                { num: "2", text: "Strong reasonable cause for penalty abatement", bg: "linear-gradient(135deg,#F5F0FF,#E8DEFF)", color: "#7C3AED" },
                { num: "3", text: "FTA eligible \u2014 should be done first", bg: "linear-gradient(135deg,#F0FDFA,#CCFBF1)", color: "#0D9488" },
              ].map((f) => (
                <div key={f.num} className="finding-item" style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 12 }}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: f.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: f.color }}>{f.num}</span>
                  </div>
                  <div style={{ fontSize: "0.84rem", fontWeight: 600, color: "#1A1A2E", lineHeight: 1.45, paddingTop: 4 }}>{f.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategy Timeline */}
          <div className="stagger-item d4">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, padding: "0 4px" }}>Strategy Timeline</div>
            <div style={{ background: "white", borderRadius: 16, border: "1px solid #E8E8F0", padding: "18px 16px", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
              {/* Step 1 */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, paddingBottom: 16, position: "relative" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#0D9488,#14B8A6)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(13,148,136,0.2)" }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "white" }}>1</span>
                  </div>
                  <div style={{ width: 2, height: 24, background: "linear-gradient(to bottom,#0D9488,#E8E8F0)", marginTop: 4 }} />
                </div>
                <div style={{ paddingTop: 4 }}>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E" }}>Apply for First Time Abatement</div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 6, padding: "3px 10px", background: "#E6F9EE", borderRadius: 9999, fontSize: "0.68rem", fontWeight: 700, color: "#00A651" }}>
                    <i className="fas fa-arrow-down" style={{ fontSize: 8 }} /> Reduces by $5,300
                  </div>
                </div>
              </div>
              {/* Step 2 */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, paddingBottom: 16, position: "relative" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,61,165,0.2)" }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "white" }}>2</span>
                  </div>
                  <div style={{ width: 2, height: 24, background: "linear-gradient(to bottom,#003DA5,#E8E8F0)", marginTop: 4 }} />
                </div>
                <div style={{ paddingTop: 4 }}>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E" }}>Submit OIC with reduced balance</div>
                  <div style={{ fontSize: "0.72rem", color: "#8585A0", fontWeight: 500, marginTop: 4 }}>Lump sum payment option</div>
                </div>
              </div>
              {/* Step 3 */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#00A651,#10B981)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,166,81,0.2)" }}>
                    <i className="fas fa-flag-checkered" style={{ fontSize: 12, color: "white" }} />
                  </div>
                </div>
                <div style={{ paddingTop: 4 }}>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E" }}>Expected savings</div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 6, padding: "4px 12px", background: "linear-gradient(135deg,#E6F9EE,#F0FDF4)", border: "1px solid rgba(0,166,81,0.15)", borderRadius: 9999, fontSize: "0.82rem", fontWeight: 800, color: "#00A651" }}>
                    85%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="stagger-item d5" style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 8 }}>
            <button className="btn btn-primary" onClick={() => router.push("/acceptance")} style={{ fontSize: "0.95rem", fontWeight: 700, padding: "16px 28px" }}>
              <i className="fas fa-check" style={{ fontSize: 14 }} />
              Accept Recommendation
            </button>
            <button className="btn btn-outline" style={{ fontSize: "0.88rem", fontWeight: 600, padding: "14px 28px" }}>
              <i className="fas fa-pen" style={{ fontSize: 12, color: "#5C5C7A" }} />
              Request Changes
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .rec-card {
          position: relative;
          overflow: hidden;
          animation: recGlow 4s ease-in-out infinite;
        }
        @keyframes recGlow {
          0%, 100% { box-shadow: 0 4px 20px rgba(0,61,165,0.08); }
          50% { box-shadow: 0 8px 32px rgba(0,61,165,0.14); }
        }
        .offer-amount {
          animation: offerReveal 0.8s 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) both;
        }
        @keyframes offerReveal {
          from { opacity: 0; transform: translateY(8px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .finding-item {
          transition: all 0.25s ease;
          cursor: default;
        }
        .finding-item:hover {
          background: #F6F6FB;
          border-radius: 12px;
        }
      `}</style>
    </PhoneFrame>
  );
}
