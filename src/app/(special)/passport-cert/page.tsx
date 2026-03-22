"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

const whatCounts = [
  "Assessed tax, penalties, and interest exceeding $66,000",
  "NFTL filed and all admin remedies exhausted, OR",
  "Levy issued",
];

const excluded = [
  "Debt in IA (TC 971 AC 063)",
  "Debt in OIC (TC 480)",
  "Debt in CDP (pending hearing)",
  "Debt of taxpayer in bankruptcy",
  "Victim of identity theft",
  "Debt in CNC hardship status",
  "Combat zone service",
];

const resolveMethods = [
  { num: "1", numBg: "#EBF0FF", numColor: "#003DA5", title: "Pay balance below $66,000", desc: null },
  { num: "2", numBg: "#EBF0FF", numColor: "#003DA5", title: "Enter Installment Agreement", desc: "Removes certification" },
  { num: "3", numBg: "#F5F0FF", numColor: "#7C3AED", title: "File OIC", desc: "Removes certification while pending" },
  { num: "4", numBg: "#F0FDFA", numColor: "#0D9488", title: "Request CNC", desc: "Removes certification" },
  { num: "5", numBg: "#FFF7ED", numColor: "#D97706", title: "Dispute the debt", desc: "If you believe it's incorrect" },
];

const decertSteps = [
  "IRS reverses within 30 days of qualifying event",
  "TC 972 AC 641 posts (reversal)",
  "State Department notified",
];

export default function PassportCertPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Passport Alert" backPath="/cases/1042" />

        <div className="screen-content" style={{ paddingBottom: 100 }}>
          {/* Title */}
          <div className="stagger-item d1" style={{ marginBottom: 4 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#92400E", lineHeight: 1.25 }}>
              Your Passport May Be At Risk
            </h1>
          </div>
          <div className="stagger-item d2" style={{ marginBottom: 18 }}>
            <p style={{ fontSize: "0.8125rem", color: "#5C5C7A" }}>IRS passport certification under IRC 7345</p>
          </div>

          {/* Warning Card */}
          <div className="stagger-item d3" style={{ marginBottom: 16 }}>
            <div style={{ background: "linear-gradient(135deg, #FFF7ED, #FFFBEB)", border: "1.5px solid rgba(245,166,35,0.3)", borderRadius: 16, padding: 16 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(245,166,35,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className="fas fa-passport" style={{ fontSize: 16, color: "#D97706" }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#92400E", marginBottom: 4 }}>Seriously Delinquent Tax Debt</p>
                  <p style={{ fontSize: "0.75rem", color: "#92400E", lineHeight: 1.5 }}>
                    The IRS certifies seriously delinquent tax debt to the State Department, which can <strong>deny, revoke, or limit</strong> your passport.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Threshold */}
          <div className="stagger-item d4" style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ flex: 1, padding: 14, background: "#FFF0F1", border: "1px solid rgba(230,57,70,0.12)", borderRadius: 14, textAlign: "center" }}>
                <p style={{ fontSize: "1.5rem", fontWeight: 900, color: "#E63946" }}>$66,000</p>
                <p style={{ fontSize: "0.6875rem", color: "#991B1B", fontWeight: 600 }}>2026 Threshold</p>
              </div>
              <div style={{ flex: 1, padding: 14, background: "#EBF0FF", border: "1px solid rgba(0,61,165,0.12)", borderRadius: 14, textAlign: "center" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 800, color: "#003DA5", marginBottom: 4 }}>TC 971 AC 641</p>
                <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>Debt certified to State Dept.</p>
              </div>
            </div>
          </div>

          {/* What Counts */}
          <div className="stagger-item d5" style={{ marginBottom: 16 }}>
            <div className="pp-info-card">
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "#FFF0F1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-circle-exclamation" style={{ fontSize: 13, color: "#E63946" }} />
                </div>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>What Counts as Seriously Delinquent</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {whatCounts.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "5px 0" }}>
                    <span style={{ fontSize: "0.75rem", color: "#E63946", flexShrink: 0, width: 16, textAlign: "center" }}>&#10003;</span>
                    <p style={{ fontSize: "0.75rem", color: "#1A1A2E" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What's Excluded */}
          <div className="stagger-item d6" style={{ marginBottom: 16 }}>
            <div className="pp-info-card">
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-shield-halved" style={{ fontSize: 13, color: "#00A651" }} />
                </div>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>What&apos;s EXCLUDED</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {excluded.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "5px 0" }}>
                    <span style={{ fontSize: "0.75rem", color: "#00A651", flexShrink: 0, width: 16, textAlign: "center" }}>&#10007;</span>
                    <p style={{ fontSize: "0.75rem", color: "#5C5C7A" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How to Resolve */}
          <div className="stagger-item d7" style={{ marginBottom: 16 }}>
            <div className="pp-info-card">
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-wrench" style={{ fontSize: 13, color: "#003DA5" }} />
                </div>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>How to Resolve</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {resolveMethods.map((m) => (
                  <div key={m.num} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0" }}>
                    <div className="pp-resolve-dot" style={{ background: m.numBg, color: m.numColor }}>{m.num}</div>
                    <div>
                      <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#1A1A2E" }}>{m.title}</p>
                      {m.desc && <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>{m.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decertification Process */}
          <div className="stagger-item d8" style={{ marginBottom: 20 }}>
            <div style={{ padding: "14px 16px", background: "linear-gradient(135deg, #E6F9EE, #EBF0FF)", border: "1px solid rgba(0,166,81,0.15)", borderRadius: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <i className="fas fa-rotate-left" style={{ fontSize: 13, color: "#00A651" }} />
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#166534" }}>Decertification Process</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {decertSteps.map((step) => (
                  <div key={step} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <i className="fas fa-check" style={{ fontSize: 9, color: "#00A651" }} />
                    <p style={{ fontSize: "0.75rem", color: "#1A1A2E" }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="stagger-item d9">
            <button
              onClick={() => router.push("/ai-chat")}
              style={{ width: "100%", height: 52, borderRadius: 16, background: "#E63946", color: "white", fontSize: "0.9375rem", fontWeight: 700, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
            >
              <i className="fas fa-bolt" />
              Resolve Now
            </button>
          </div>
          <div className="stagger-item d10" style={{ marginTop: 12, textAlign: "center" }}>
            <span
              onClick={() => router.push("/landing")}
              style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#003DA5", textDecoration: "none", cursor: "pointer" }}
            >
              <i className="fas fa-magnifying-glass" style={{ fontSize: 10, marginRight: 4 }} />
              Check My Status
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .pp-info-card {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 16px;
          padding: 16px;
        }
        .pp-resolve-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 0.6875rem;
          font-weight: 800;
        }
      `}</style>
    </PhoneFrame>
  );
}
