"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function FailureCNCPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="CNC Review" backPath="/cases/1042" />
        <div className="screen-content" style={{ paddingBottom: 100 }}>
          {/* Amber Alert Header */}
          <div className="stagger-item d1 amber-glow" style={{ marginBottom: 20, padding: 20, background: "linear-gradient(135deg, #FFFBEB, #FEF3C7)", border: "1.5px solid rgba(245,166,35,0.25)", borderRadius: 18, textAlign: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(245,166,35,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
              <i className="fas fa-triangle-exclamation" style={{ fontSize: 24, color: "#D97706" }} />
            </div>
            <h1 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#92400E", lineHeight: 1.3, marginBottom: 4, margin: 0 }}>Your CNC Status May Be Changing</h1>
            <p style={{ fontSize: "0.8125rem", color: "#B45309", margin: 0, marginTop: 4 }}>Action needed to maintain your protection</p>
          </div>

          {/* Trigger Card */}
          <div className="stagger-item d2" style={{ marginBottom: 16 }}>
            <div style={{ padding: 16, background: "white", border: "1px solid #E8E8F0", borderRadius: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <i className="fas fa-bolt" style={{ color: "#D97706", fontSize: 14 }} />
                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#5C5C7A", textTransform: "uppercase", letterSpacing: "0.06em", margin: 0 }}>Trigger Detected</p>
              </div>
              <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1A1A2E", marginBottom: 6, margin: 0 }}>IRS detected increased income from W-2 data</p>
              <p style={{ fontSize: "0.75rem", color: "#5C5C7A", margin: 0, marginTop: 6 }}>TC 531 may post &mdash; CNC removal</p>
            </div>
          </div>

          {/* What This Means */}
          <div className="stagger-item d3" style={{ marginBottom: 16 }}>
            <div style={{ padding: 16, background: "#FEF2F2", border: "1px solid rgba(230,57,70,0.12)", borderRadius: 14 }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#991B1B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, margin: 0 }}>What This Means</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {["IRS believes you may now be able to pay", "Active collection could resume", "No automatic grace period"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <i className="fas fa-circle" style={{ fontSize: 5, color: "#E63946", marginTop: 6 }} />
                    <p style={{ fontSize: "0.8125rem", color: "#991B1B", fontWeight: 500, margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Your Options */}
          <div className="stagger-item d4" style={{ marginBottom: 20 }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#5C5C7A", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, margin: 0 }}>Your Options</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { num: "1", title: "Explain Temporary Change", sub: "If income increase is temporary, call IRS to explain circumstances" },
                { num: "2", title: "Update Financials", sub: "Complete updated Form 433-F, document current hardship" },
                { num: "3", title: "Request New CNC", sub: "If still in hardship, reapply with updated 433-F" },
                { num: "4", title: "Negotiate IA", sub: "If you can now afford payments, set up an installment plan" },
              ].map((opt) => (
                <div key={opt.num} className="option-action">
                  <div className="option-num">{opt.num}</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 2, margin: 0 }}>{opt.title}</p>
                    <p style={{ fontSize: "0.75rem", color: "#5C5C7A", margin: 0, marginTop: 2 }}>{opt.sub}</p>
                  </div>
                  <i className="fas fa-chevron-right" style={{ color: "#B0B0C8", fontSize: 11, marginTop: 4 }} />
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="stagger-item d5">
            <button className="btn btn-primary" style={{ width: "100%" }}>
              <i className="fas fa-pen-to-square" />
              Update Financial Info
            </button>
          </div>
          <div className="stagger-item d6" style={{ marginTop: 12, textAlign: "center" }}>
            <span onClick={() => router.push("/resolution-switching")} style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#003DA5", cursor: "pointer" }}>
              <i className="fas fa-headset" style={{ fontSize: 11, marginRight: 4 }} />
              Talk to Expert
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .amber-glow {
          animation: amberPulse 3s ease-in-out infinite;
        }
        @keyframes amberPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245, 166, 35, 0.15); }
          50% { box-shadow: 0 0 20px 4px rgba(245, 166, 35, 0.08); }
        }
        .option-action {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px;
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .option-action:hover {
          border-color: rgba(0, 61, 165, 0.2);
          box-shadow: 0 4px 16px rgba(26,26,46,0.08);
          transform: translateY(-1px);
        }
        .option-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #003DA5, #2563EB);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
        }
      `}</style>
    </PhoneFrame>
  );
}
