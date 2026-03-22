"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function CSEDReviewPage() {
  const router = useRouter();
  const [animatedBars, setAnimatedBars] = useState(false);
  useEffect(() => { setTimeout(() => setAnimatedBars(true), 600); }, []);

  const years = [
    { year: "2020", expires: "Aug 2030", left: "4 yrs left", pct: 60, color: "linear-gradient(90deg, #00A651, #10B981)", iconBg: "#E6F9EE", iconColor: "#00A651", badgeBg: "#E6F9EE", badgeColor: "#00A651", assessed: "Assessed Aug 2020", expiresLabel: "Expires Aug 2030" },
    { year: "2021", expires: "Mar 2031", left: "5 yrs left", pct: 50, color: "linear-gradient(90deg, #003DA5, #2563EB)", iconBg: "#EBF0FF", iconColor: "#003DA5", badgeBg: "#EBF0FF", badgeColor: "#003DA5", assessed: "Assessed Mar 2021", expiresLabel: "Expires Mar 2031" },
    { year: "2022", expires: "Sep 2028", left: "2 yrs left", pct: 80, color: "linear-gradient(90deg, #F5A623, #FBBF24)", iconBg: "#FEF3C7", iconColor: "#D97706", badgeBg: "#FEF3C7", badgeColor: "#D97706", assessed: "Assessed Sep 2018", expiresLabel: "Expires Sep 2028", nearest: true, highlight: true },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="CSED Review" backPath="/results" />
        <div className="screen-content" style={{ paddingBottom: 32, gap: 16 }}>
          <div style={{ textAlign: "center", padding: "4px 0 8px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 12px", background: "#EBF0FF", borderRadius: 9999, fontSize: "0.65rem", fontWeight: 700, color: "#003DA5", marginBottom: 10 }}>
              <i className="fas fa-clock" style={{ fontSize: 9 }} /> COLLECTION TIMELINE
            </div>
            <h1 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.2 }}>When does your tax debt expire?</h1>
          </div>

          <div style={{ background: "linear-gradient(135deg, #EBF0FF 0%, #F5F0FF 100%)", border: "1px solid rgba(0,61,165,0.1)", borderRadius: 16, padding: 16, display: "flex", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,61,165,0.08)" }}>
              <i className="fas fa-info-circle" style={{ fontSize: 16, color: "#003DA5" }} />
            </div>
            <div>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 4 }}>What is CSED?</div>
              <div style={{ fontSize: "0.72rem", color: "#5C5C7A", lineHeight: 1.6 }}>The IRS has <strong style={{ color: "#1A1A2E" }}>10 years</strong> from assessment to collect. After the CSED, the debt is legally uncollectible.</div>
            </div>
          </div>

          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", padding: "0 4px", marginTop: 4 }}>Your Tax Year Timeline</div>

          {years.map((y) => (
            <div key={y.year} style={{ background: "white", border: y.highlight ? "2px solid #F5A623" : "1px solid #E8E8F0", borderRadius: 16, padding: 16, boxShadow: y.highlight ? "0 2px 12px rgba(245,166,35,0.1)" : "0 2px 8px rgba(26,26,46,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: y.iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="fas fa-calendar-check" style={{ fontSize: 13, color: y.iconColor }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>Tax Year {y.year}</div>
                    <div style={{ fontSize: "0.68rem", color: "#8585A0", marginTop: 1 }}>Expires {y.expires}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  {y.nearest && <div style={{ display: "inline-flex", alignItems: "center", gap: 3, padding: "4px 10px", background: "#E63946", borderRadius: 9999, fontSize: "0.62rem", fontWeight: 800, color: "white", textTransform: "uppercase" }}><i className="fas fa-bolt" style={{ fontSize: 8 }} /> Nearest!</div>}
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "4px 10px", background: y.badgeBg, borderRadius: 9999, fontSize: "0.68rem", fontWeight: 700, color: y.badgeColor }}>
                    <i className="fas fa-hourglass-half" style={{ fontSize: 9 }} /> {y.left}
                  </div>
                </div>
              </div>
              <div style={{ height: 8, background: "#F0F0F5", borderRadius: 9999, overflow: "hidden" }}>
                <div style={{ height: "100%", background: y.color, borderRadius: 9999, width: animatedBars ? `${y.pct}%` : "0%", transition: "width 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                <span style={{ fontSize: "0.62rem", color: "#B0B0C8", fontWeight: 500 }}>{y.assessed}</span>
                <span style={{ fontSize: "0.62rem", color: y.highlight ? "#D97706" : "#B0B0C8", fontWeight: y.highlight ? 600 : 500 }}>{y.expiresLabel}</span>
              </div>
            </div>
          ))}

          {/* Tolling Warning */}
          <div style={{ display: "flex", gap: 10, padding: "14px 16px", background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 14 }}>
            <i className="fas fa-triangle-exclamation" style={{ fontSize: 14, color: "#D97706", flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#92400E", marginBottom: 3 }}>Tolling Events</div>
              <div style={{ fontSize: "0.72rem", color: "#92400E", lineHeight: 1.55 }}>Filing an OIC or requesting a CDP hearing <strong>pauses the CSED clock</strong>.</div>
            </div>
          </div>

          {/* Summary */}
          <div style={{ background: "linear-gradient(145deg, #003DA5 0%, #2563EB 100%)", borderRadius: 18, padding: 20, position: "relative", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-chart-line" style={{ fontSize: 14, color: "white" }} />
              </div>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "white" }}>Summary</div>
            </div>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "white", marginBottom: 6, lineHeight: 1.3 }}>Your debts expire between 2028-2031</div>
            <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>The nearest CSED is September 2028 (Tax Year 2022).</div>
          </div>

          <button className="btn btn-primary" style={{ fontSize: "0.9rem", padding: "16px 28px" }} onClick={() => router.push("/results")}>
            Continue <i className="fas fa-arrow-right" style={{ fontSize: 13 }} />
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
