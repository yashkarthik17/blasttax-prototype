"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function BillingPlansPage() {
  const router = useRouter();
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [compareOpen, setCompareOpen] = useState(false);

  const starterPrice = billing === "monthly" ? "$19" : "$15";
  const proPrice = billing === "monthly" ? "$49" : "$39";

  return (
    <PhoneFrame>
      <StatusBar />
      <ScreenHeader title="Plans" backPath="/billing" rightAction={<div style={{ width: 36 }} />} />

      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-content" style={{ paddingBottom: 100, gap: 18 }}>

          {/* Billing Toggle */}
          <div className="stagger-item d2">
            <div style={{ display: "flex", background: "#F0F0F5", borderRadius: 12, padding: 4 }}>
              <button
                className={`billing-toggle-btn${billing === "monthly" ? " active" : ""}`}
                onClick={() => setBilling("monthly")}
              >
                Monthly
              </button>
              <button
                className={`billing-toggle-btn${billing === "annual" ? " active" : ""}`}
                onClick={() => setBilling("annual")}
              >
                Annual
                <span style={{ display: "inline-flex", marginLeft: 4, padding: "2px 6px", background: "#E6F9EE", borderRadius: 9999, fontSize: "0.58rem", fontWeight: 700, color: "#00A651" }}>Save 20%</span>
              </button>
            </div>
          </div>

          {/* Starter Plan */}
          <div className="plan-card-base stagger-item d3">
            <div style={{ fontSize: "0.68rem", fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Starter</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 3, marginBottom: 14 }}>
              <span style={{ fontSize: "1.6rem", fontWeight: 900, color: "#1A1A2E" }}>{starterPrice}</span>
              <span style={{ fontSize: "0.82rem", color: "#8585A0", fontWeight: 500 }}>/mo</span>
            </div>
            {["Full analysis", "Form generation", "AI chat", "Email support"].map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
                <i className="fas fa-check" style={{ fontSize: 11, color: "#00A651" }} />
                <span style={{ fontSize: "0.78rem", color: "#5C5C7A", fontWeight: 500 }}>{f}</span>
              </div>
            ))}
          </div>

          {/* Pro Plan */}
          <div className="plan-card-base plan-card-recommended stagger-item d4">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
              <div style={{ fontSize: "0.68rem", fontWeight: 600, color: "#003DA5", textTransform: "uppercase", letterSpacing: "0.05em" }}>Pro</div>
              <span style={{ padding: "4px 10px", background: "#003DA5", borderRadius: 9999, fontSize: "0.6rem", fontWeight: 700, color: "white" }}>RECOMMENDED</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 3, marginBottom: 14 }}>
              <span style={{ fontSize: "1.6rem", fontWeight: 900, color: "#003DA5" }}>{proPrice}</span>
              <span style={{ fontSize: "0.82rem", color: "#8585A0", fontWeight: 500 }}>/mo</span>
            </div>
            {[
              { text: "Everything in Starter", bold: false },
              { text: "Expert consultation", bold: true },
              { text: "IRS representation", bold: true },
              { text: "Priority support", bold: true },
              { text: "Unlimited analyses", bold: true },
            ].map((f) => (
              <div key={f.text} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
                <i className="fas fa-check" style={{ fontSize: 11, color: f.bold ? "#003DA5" : "#00A651" }} />
                <span style={{ fontSize: "0.78rem", color: f.bold ? "#1A1A2E" : "#5C5C7A", fontWeight: f.bold ? 600 : 500 }}>{f.text}</span>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 14, padding: "8px 12px", background: "rgba(0,61,165,0.06)", borderRadius: 10 }}>
              <i className="fas fa-circle-check" style={{ fontSize: 12, color: "#003DA5" }} />
              <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#003DA5" }}>Your current plan</span>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="plan-card-base stagger-item d5" style={{ background: "linear-gradient(145deg, #1A1A2E 0%, #2D2B3D 100%)", borderColor: "transparent" }}>
            <div style={{ fontSize: "0.68rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Enterprise</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 3, marginBottom: 14 }}>
              <span style={{ fontSize: "1.6rem", fontWeight: 900, color: "white" }}>Custom</span>
            </div>
            <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", fontWeight: 500, marginBottom: 14 }}>For tax professionals</div>
            {["Bulk client management", "API access", "Dedicated account manager"].map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
                <i className="fas fa-check" style={{ fontSize: 11, color: "#00A651" }} />
                <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{f}</span>
              </div>
            ))}
            <button style={{ width: "100%", marginTop: 16, padding: 12, background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: 12, fontFamily: "inherit", fontSize: "0.8rem", fontWeight: 600, color: "white", cursor: "pointer" }}>Contact Sales</button>
          </div>

          {/* Feature Comparison */}
          <div className="stagger-item d6">
            <div
              onClick={() => setCompareOpen(!compareOpen)}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", background: "white", border: "1px solid #E8E8F0", borderRadius: 14, cursor: "pointer" }}
            >
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>Feature Comparison</span>
              <i className="fas fa-chevron-down" style={{ fontSize: 11, color: "#8585A0", transition: "transform 0.3s ease", transform: compareOpen ? "rotate(180deg)" : "rotate(0)" }} />
            </div>
            {compareOpen && (
              <div style={{ background: "white", border: "1px solid #E8E8F0", borderTop: "none", borderRadius: "0 0 14px 14px", padding: "8px 16px", marginTop: -4 }}>
                {[
                  { label: "Analyses/mo", starter: "1", pro: "Unlimited", enterprise: "Unlimited", proHighlight: true },
                  { label: "Form generation", starter: "check", pro: "check", enterprise: "check" },
                  { label: "Expert consult", starter: "x", pro: "check", enterprise: "check" },
                  { label: "IRS representation", starter: "x", pro: "check", enterprise: "check" },
                ].map((row) => (
                  <div key={row.label} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #F0F0F5", fontSize: "0.72rem" }}>
                    <div style={{ fontWeight: 600, color: "#5C5C7A" }}>{row.label}</div>
                    <div style={{ textAlign: "center", fontWeight: 600, color: "#1A1A2E" }}>
                      {row.starter === "check" ? <i className="fas fa-check" style={{ fontSize: 11, color: "#00A651" }} /> : row.starter === "x" ? <i className="fas fa-xmark" style={{ fontSize: 11, color: "#D5D5E0" }} /> : row.starter}
                    </div>
                    <div style={{ textAlign: "center", fontWeight: 600, color: row.proHighlight ? "#003DA5" : "#1A1A2E" }}>
                      {row.pro === "check" ? <i className="fas fa-check" style={{ fontSize: 11, color: "#00A651" }} /> : row.pro}
                    </div>
                    <div style={{ textAlign: "center", fontWeight: 600, color: "#1A1A2E" }}>
                      {row.enterprise === "check" ? <i className="fas fa-check" style={{ fontSize: 11, color: "#00A651" }} /> : row.enterprise}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Upgrade CTA */}
          <div className="stagger-item d7" style={{ paddingTop: 4 }}>
            <button className="btn btn-primary" style={{ fontSize: "0.92rem", fontWeight: 700, padding: "16px 28px", background: "#00A651", boxShadow: "0 8px 24px rgba(0,166,81,0.2)" }}>
              <i className="fas fa-arrow-up" style={{ fontSize: 13 }} /> Upgrade to Pro
            </button>
          </div>

          {/* Trial note */}
          <div className="stagger-item d8" style={{ textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", background: "#F6F6FB", borderRadius: 9999 }}>
              <i className="fas fa-shield-check" style={{ fontSize: 11, color: "#00A651" }} />
              <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#5C5C7A" }}>All plans include 7-day free trial</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />

      <style jsx>{`
        .billing-toggle-btn {
          flex: 1;
          padding: 10px 16px;
          border: none;
          background: transparent;
          font-family: inherit;
          font-size: 0.78rem;
          font-weight: 600;
          color: #8585A0;
          cursor: pointer;
          border-radius: 10px;
          transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          position: relative;
          z-index: 1;
        }
        .billing-toggle-btn.active {
          background: white;
          color: #1A1A2E;
          box-shadow: 0 2px 8px rgba(26,26,46,0.08);
        }
        .plan-card-base {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 20px;
          padding: 22px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .plan-card-base:hover {
          box-shadow: 0 4px 16px rgba(26,26,46,0.06);
          transform: translateY(-1px);
        }
        .plan-card-recommended {
          background: linear-gradient(145deg, #FAFAFF 0%, #EBF0FF 100%);
          border: 2px solid #003DA5;
          box-shadow: 0 8px 28px rgba(0,61,165,0.12);
        }
        .plan-card-recommended::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(135deg, #003DA5, #2563EB);
        }
      `}</style>
    </PhoneFrame>
  );
}
