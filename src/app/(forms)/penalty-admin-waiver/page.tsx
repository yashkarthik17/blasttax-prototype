"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function PenaltyAdminWaiverPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div className="screen-header" style={{ padding: "14px 20px 12px" }}>
          <div onClick={() => router.push("/penalty-abatement")} style={{ width: 36, height: 36, borderRadius: 12, background: "#F6F6FB", border: "1px solid #E8E8F0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <i className="fas fa-arrow-left" style={{ fontSize: 14, color: "#5C5C7A" }} />
          </div>
          <div style={{ flex: 1, fontSize: "0.95rem", fontWeight: 800, color: "#1A1A2E", textAlign: "center" }}>Administrative Waiver</div>
          <div style={{ width: 36, flexShrink: 0 }} />
        </div>

        <div className="screen-content" style={{ paddingBottom: 32, gap: 14 }}>
          <div className="stagger-item d1" style={{ textAlign: "center", padding: "4px 0" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 12px", background: "#F0FDFA", borderRadius: 9999, fontSize: "0.65rem", fontWeight: 700, color: "#0D9488", marginBottom: 10 }}>
              <i className="fas fa-building-columns" style={{ fontSize: 9 }} /> IRS-INITIATED
            </div>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.2 }}>IRS-Initiated Penalty Removal</h1>
          </div>

          <div className="stagger-item d2" style={{ background: "#F6F6FB", borderRadius: 14, padding: "14px 16px" }}>
            <p style={{ fontSize: "0.78rem", color: "#5C5C7A", lineHeight: 1.65, margin: 0 }}>The IRS can systemically remove penalties through administrative waivers without you requesting it. These are blanket relief programs for widespread issues.</p>
          </div>

          {/* How It Works */}
          <div className="stagger-item d3" style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 18, padding: 18, boxShadow: "0 2px 12px rgba(26,26,46,0.05)" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>How It Works</div>
            {[
              { icon: "fa-magnifying-glass-chart", bg: "#EBF0FF", color: "#003DA5", title: "IRS Identifies Systemic Issues", desc: "The IRS finds widespread problems affecting many taxpayers" },
              { icon: "fa-file-signature", bg: "#F5F0FF", color: "#7C3AED", title: "Issues a Blanket Waiver", desc: "Relief applies to all affected tax periods and taxpayers" },
              { icon: "fa-circle-check", bg: "#E6F9EE", color: "#00A651", title: "TC 271 Posts Automatically", desc: "Penalty removed on your account transcript without any action from you" },
            ].map((step, idx, arr) => (
              <div key={idx} style={{ display: "flex", gap: 12, position: "relative", paddingBottom: idx < arr.length - 1 ? 16 : 0 }}>
                {idx < arr.length - 1 && <div style={{ position: "absolute", left: 15, top: 34, bottom: -8, width: 2, background: "#E8E8F0" }} />}
                <div style={{ width: 32, height: 32, borderRadius: 10, background: step.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1 }}>
                  <i className={`fas ${step.icon}`} style={{ fontSize: 13, color: step.color }} />
                </div>
                <div style={{ flex: 1, paddingTop: 4 }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>{step.title}</div>
                  <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 3, lineHeight: 1.5 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Waivers */}
          <div className="stagger-item d4" style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", padding: "0 4px" }}>Recent Waivers</div>

          {[
            { year: "2024", yearBg: "#EBF0FF", yearColor: "#003DA5", title: "COVID-era Penalty Relief", desc: "Automatic failure-to-pay penalty abatement for 2020-2021 tax years. The IRS provided relief for taxpayers affected by COVID-19 processing delays.", sub: "Tax years 2020 \u2013 2021" },
            { year: "2023", yearBg: "#F5F0FF", yearColor: "#7C3AED", title: "Notice CP14 Processing Delays", desc: "Failure-to-pay penalties waived for taxpayers affected by CP14 notice processing delays during the IRS backlog period.", sub: "Affected CP14 recipients" },
          ].map((waiver, i) => (
            <div key={i} className="stagger-item d4" style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 14, padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div style={{ padding: "3px 10px", background: waiver.yearBg, borderRadius: 8, fontSize: "0.65rem", fontWeight: 800, color: waiver.yearColor }}>{waiver.year}</div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>{waiver.title}</div>
              </div>
              <div style={{ fontSize: "0.75rem", color: "#5C5C7A", lineHeight: 1.6, marginBottom: 8 }}>{waiver.desc}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <i className="fas fa-calendar-check" style={{ fontSize: 10, color: "#00A651" }} />
                <span style={{ fontSize: "0.7rem", color: "#8585A0", fontWeight: 500 }}>{waiver.sub}</span>
              </div>
            </div>
          ))}

          {/* How to Check */}
          <div className="stagger-item d6" style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 18, padding: 18, boxShadow: "0 2px 12px rgba(26,26,46,0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-clipboard-check" style={{ fontSize: 12, color: "#003DA5" }} />
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>How to Check If You Qualify</div>
            </div>
            {[
              { title: "Review your transcript for TC 271", desc: "Transaction code 271 indicates a penalty has been systemically removed" },
              { title: "Check IRS.gov for current programs", desc: "IRS publishes notices for active waiver programs" },
              { title: "Call IRS about systemic relief", desc: "Ask specifically if your account qualifies for any administrative waivers" },
            ].map((step, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 0", borderBottom: i < arr.length - 1 ? "1px solid #F0F0F5" : "none" }}>
                <div style={{ width: 24, height: 24, borderRadius: 8, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 800, color: "#003DA5", flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#1A1A2E" }}>{step.title}</div>
                  <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 2, lineHeight: 1.5 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Alert */}
          <div className="stagger-item d7" style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "14px 16px", background: "#EBF0FF", border: "1px solid #C5D5F5", borderRadius: 14 }}>
            <i className="fas fa-circle-info" style={{ fontSize: 14, color: "#2563EB", marginTop: 1, flexShrink: 0 }} />
            <div style={{ fontSize: "0.75rem", color: "#1E40AF", lineHeight: 1.6, fontWeight: 500 }}>
              <strong>Good to know:</strong> Administrative waivers are applied BEFORE you need to request First-Time Abatement. Check your transcript first to avoid using FTA unnecessarily.
            </div>
          </div>

          {/* CTA */}
          <div className="stagger-item d8" style={{ marginTop: 4 }}>
            <div onClick={() => router.push("/confirm")} style={{ padding: 15, background: "linear-gradient(135deg,#003DA5,#2563EB)", borderRadius: 9999, textAlign: "center", color: "white", fontSize: "0.88rem", fontWeight: 700, boxShadow: "0 8px 24px rgba(0,61,165,0.18)", cursor: "pointer" }}>
              <i className="fas fa-user-check" style={{ marginRight: 6, fontSize: 13 }} /> Check My Account
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
