"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { BottomNav } from "@/components/BottomNav";

export default function ResolutionDetailCNCPage() {
  const router = useRouter();
  const [csedWidth, setCsedWidth] = useState(0);
  useEffect(() => { setTimeout(() => setCsedWidth(40), 800); }, []);

  const points = [
    { icon: "fa-circle-check", color: "#00A651", text: "IRS stops active collection (levies, garnishments)" },
    { icon: "fa-circle-check", color: "#00A651", text: "CSED continues running -- debt can expire!" },
    { icon: "fa-triangle-exclamation", color: "#F5A623", text: "Interest & penalties continue accruing", muted: true },
    { icon: "fa-triangle-exclamation", color: "#F5A623", text: "IRS reviews annually -- if income increases, CNC revoked", muted: true },
    { icon: "fa-triangle-exclamation", color: "#F5A623", text: "Tax refunds will still be offset", muted: true },
    { icon: "fa-triangle-exclamation", color: "#F5A623", text: "Lien may still be filed for balance >$10K", muted: true },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Currently Not Collectible" backPath="/results" />
        <div className="screen-content" style={{ gap: 16, paddingBottom: 24 }}>
          <div>
            <h1 className="text-h1 text-foreground" style={{ marginBottom: 4 }}>Pause Collection Activity</h1>
            <p className="text-body-sm text-muted-light">Stop IRS collections while your debt clock runs down</p>
          </div>

          {/* MDI Warning */}
          <div className="card" style={{ borderColor: "rgba(245, 166, 35, 0.3)", background: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "linear-gradient(135deg, #F5A623, #fbbf24)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-triangle-exclamation" style={{ color: "white", fontSize: 13 }} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#92400E" }}>ELIGIBILITY CONCERN</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 11, color: "#92400E", fontWeight: 600 }}>Your MDI:</span>
              <span style={{ fontSize: 22, fontWeight: 800, color: "#92400E" }}>$869<span style={{ fontSize: 12, fontWeight: 500 }}>/mo</span></span>
            </div>
            <div style={{ fontSize: 12, color: "#78350F", lineHeight: 1.5 }}>CNC typically requires $0 monthly disposable income. Your MDI of $869 may disqualify you unless expenses increase or income drops.</div>
          </div>

          {/* What CNC Means */}
          <div className="card">
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-placeholder)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>What CNC Means</div>
            {points.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0", fontSize: 13, lineHeight: 1.5 }}>
                <i className={`fas ${p.icon}`} style={{ fontSize: 14, color: p.color, marginTop: 2, flexShrink: 0 }} />
                <span style={{ color: p.muted ? "var(--color-muted)" : "var(--color-foreground)", fontWeight: 500 }}>{p.text}</span>
              </div>
            ))}
          </div>

          {/* CSED Timeline */}
          <div className="card" style={{ background: "linear-gradient(135deg, #F0FDFA, #FAFAFF)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <i className="fas fa-clock" style={{ color: "#0D9488", fontSize: 16 }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)" }}>CSED Expiration Timeline</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--color-muted)", marginBottom: 6 }}>
              <span>Today (2026)</span><span>Debts Expire (2028-2031)</span>
            </div>
            <div style={{ position: "relative", background: "var(--color-surface-alt)", borderRadius: 12, padding: 4, height: 32, overflow: "hidden" }}>
              <div style={{ height: "100%", borderRadius: 10, background: "linear-gradient(135deg, #0D9488, #2dd4bf)", transition: "width 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)", width: `${csedWidth}%`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white" }}>40% elapsed</div>
            </div>
            <div style={{ marginTop: 10, padding: 10, background: "rgba(13, 148, 136, 0.06)", borderRadius: 10 }}>
              <div style={{ fontSize: 12, color: "#065F46", fontWeight: 600, lineHeight: 1.5 }}>If CNC is maintained: <strong>$0 paid</strong>, debt gone by 2031</div>
            </div>
          </div>

          {/* CNC vs OIC */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-placeholder)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>CNC vs OIC Decision</div>
            <div style={{ display: "flex", gap: 10 }}>
              {[{ icon: "fa-pause", color: "#0D9488", bg: "linear-gradient(135deg, #F0FDFA, #ccfbf1)", title: "CNC", desc: "Pay nothing. Wait 2-5 years. Risk of annual review & revocation." },
                { icon: "fa-handshake", color: "#00A651", bg: "linear-gradient(135deg, #E6F9EE, #d1fae5)", title: "OIC", desc: "Pay $8,500 now. Resolved in 6-12 months. Certainty." }].map((vs, i) => (
                <div key={i} style={{ flex: 1, background: "white", border: "1.5px solid var(--color-border)", borderRadius: 14, padding: 14 }}>
                  <div style={{ textAlign: "center", marginBottom: 8 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: vs.bg, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      <i className={`fas ${vs.icon}`} style={{ color: vs.color, fontSize: 14 }} />
                    </div>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-foreground)", textAlign: "center", marginBottom: 6 }}>{vs.title}</div>
                  <div style={{ fontSize: 11, color: "var(--color-muted)", lineHeight: 1.5 }}>{vs.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 4 }}>
            <button className="btn btn-outline" style={{ opacity: 0.6, pointerEvents: "none", marginBottom: 8 }}>
              Not Eligible &mdash; Your MDI is $869
            </button>
            <div style={{ textAlign: "center", marginTop: 6 }}>
              <a onClick={() => router.push("/resolution-detail-oic")} style={{ fontSize: 13, fontWeight: 600, color: "var(--brand-blue)", cursor: "pointer" }}>
                <i className="fas fa-arrow-right" style={{ fontSize: 11, marginRight: 4 }} /> Consider OIC Instead
              </a>
            </div>
          </div>
        </div>
      </div>
      <BottomNav active="Analysis" />
    </PhoneFrame>
  );
}
