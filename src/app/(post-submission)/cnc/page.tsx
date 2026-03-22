"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function CNCStatusPage() {
  const router = useRouter();

  const timelineItems = [
    { title: "CNC Request Made", sub: "Mar 15", done: true },
    { title: "IRS Reviewed Financials (Form 433-F)", sub: "Mar 22", done: true },
    { title: "TC 530 Posted (Closing Code 03: Hardship)", sub: "Mar 25", done: true },
    { title: "Letter 4223 Mailed (Confirmation)", sub: "Mar 28", done: true },
    { title: "Next Annual Review", sub: "Mar 2027", done: false },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="CNC Status" backPath="/cases/1042" rightAction={
          <button className="btn-icon"><i className="fas fa-ellipsis-vertical" style={{ color: "#8585A0" }} /></button>
        } />
        <div className="screen-content" style={{ paddingBottom: 100 }}>
          {/* Title + Badge */}
          <div className="stagger-item d1" style={{ marginBottom: 4, display: "flex", alignItems: "center", gap: 10 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.25, margin: 0 }}>Currently Not Collectible</h1>
            <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "white", background: "#00A651", padding: "3px 10px", borderRadius: 20, whiteSpace: "nowrap" }}>Active</span>
          </div>

          {/* Timeline */}
          <div className="stagger-item d2" style={{ marginTop: 20, marginBottom: 20 }}>
            {timelineItems.map((item, i) => (
              <div key={i} className={`timeline-item ${item.done ? "completed" : ""}`}>
                <div className={`timeline-dot ${item.done ? "done" : "pending"}`}>
                  {item.done ? (
                    <i className="fas fa-check" />
                  ) : (
                    <i className="fas fa-hourglass-half" style={{ fontSize: 11 }} />
                  )}
                </div>
                <div>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#1A1A2E", margin: 0 }}>{item.title}</p>
                  <p style={{ fontSize: "0.75rem", color: item.done ? "#5C5C7A" : "#2563EB", fontWeight: item.done ? 400 : 500, margin: 0 }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Active Effects Card */}
          <div className="stagger-item d3" style={{ marginBottom: 16 }}>
            <div style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 16, padding: 16 }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#5C5C7A", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, margin: 0 }}>Active Effects</p>
              {[
                { icon: "fa-circle-check", color: "#00A651", text: "Collection activity stopped" },
                { icon: "fa-circle-check", color: "#00A651", text: "CSED running", sub: "Debt expires 2028-2031" },
                { icon: "fa-triangle-exclamation", color: "#F5A623", text: "Interest accruing", sub: "~$150/month still adding up" },
                { icon: "fa-triangle-exclamation", color: "#F5A623", text: "Tax refunds will be offset" },
                { icon: "fa-triangle-exclamation", color: "#F5A623", text: "NFTL may be on file" },
              ].map((row, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0", borderBottom: i < 4 ? "1px solid #F0F0F5" : "none" }}>
                  <i className={`fas ${row.icon}`} style={{ color: row.color, fontSize: 14, marginTop: 2 }} />
                  <div>
                    <p style={{ fontSize: "0.8125rem", color: "#1A1A2E", fontWeight: 500, margin: 0 }}>{row.text}</p>
                    {row.sub && <p style={{ fontSize: "0.6875rem", color: "#5C5C7A", margin: 0 }}>{row.sub}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CSED Countdown */}
          <div className="stagger-item d4" style={{ marginBottom: 16 }}>
            <div style={{ background: "linear-gradient(135deg, #F0FDFA, #FAFAFF)", border: "1px solid rgba(13,148,136,0.15)", borderRadius: 16, padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <i className="fas fa-clock" style={{ color: "#0D9488", fontSize: 16 }} />
                <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1A1A2E", margin: 0 }}>CSED Countdown</p>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#0D9488" }}>2 yrs, 6 mo</span>
              </div>
              <p style={{ fontSize: "0.75rem", color: "#5C5C7A", marginBottom: 12, margin: 0 }}>Nearest expiration: <span style={{ fontWeight: 600 }}>Sep 2028</span></p>
              <div style={{ height: 8, background: "#E8E8F0", borderRadius: 4, overflow: "hidden" }}>
                <div className="csed-bar-fill" style={{ width: "75%", height: "100%", borderRadius: 4, background: "linear-gradient(90deg, #00A651, #0D9488)" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                <span style={{ fontSize: "0.625rem", color: "#8585A0" }}>Assessment</span>
                <span style={{ fontSize: "0.625rem", color: "#8585A0" }}>Expiration</span>
              </div>
              <div style={{ marginTop: 14, padding: "10px 12px", background: "white", borderRadius: 10, border: "1px solid #F0F0F5" }}>
                <p style={{ fontSize: "0.75rem", color: "#065F46", fontWeight: 500, margin: 0 }}>
                  <i className="fas fa-sparkles" style={{ color: "#0D9488", marginRight: 4 }} />
                  When CSED expires: TC 608 posts, debt is legally gone
                </p>
              </div>
            </div>
          </div>

          {/* Risk Warnings */}
          <div className="stagger-item d5" style={{ marginBottom: 16 }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#5C5C7A", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, margin: 0 }}>Important Warnings</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { icon: "fa-exclamation-circle", text: "If your income increases significantly, IRS may revoke CNC" },
                { icon: "fa-eye", text: "Annual review via W-2/1099 data matching" },
                { icon: "fa-rotate-left", text: "If revoked (TC 531): back to active collection" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: 12, background: "#FFFBEB", border: "1px solid rgba(245,166,35,0.2)", borderRadius: 12 }}>
                  <i className={`fas ${item.icon}`} style={{ color: "#D97706", fontSize: 14, marginTop: 2 }} />
                  <p style={{ fontSize: "0.75rem", color: "#92400E", fontWeight: 500, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="stagger-item d6" style={{ marginTop: 8 }}>
            <button className="btn btn-primary" style={{ width: "100%" }}>
              <i className="fas fa-pen-to-square" />
              Update Financial Info
            </button>
          </div>
          <div className="stagger-item d7" style={{ marginTop: 12, textAlign: "center" }}>
            <span onClick={() => router.push("/cases/1042")} style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#003DA5", cursor: "pointer" }}>
              <i className="fas fa-clock" style={{ fontSize: 11, marginRight: 4 }} />
              Check CSED Status
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .timeline-item {
          display: flex;
          gap: 14px;
          position: relative;
          padding-bottom: 20px;
        }
        .timeline-item:last-child { padding-bottom: 0; }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: 15px;
          top: 32px;
          bottom: 0;
          width: 2px;
          background: #E8E8F0;
        }
        .timeline-item:last-child::before { display: none; }
        .timeline-item.completed::before {
          background: linear-gradient(to bottom, #00A651, #E8E8F0);
        }
        .timeline-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 13px;
          z-index: 1;
        }
        .timeline-dot.done { background: #E6F9EE; color: #00A651; }
        .timeline-dot.pending {
          background: #EBF0FF;
          color: #2563EB;
          animation: pulseGlow 2s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.2); }
          50% { box-shadow: 0 0 0 8px rgba(37, 99, 235, 0); }
        }
        .csed-bar-fill {
          animation: fillBar 1.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
        }
        @keyframes fillBar { from { width: 0; } }
      `}</style>
    </PhoneFrame>
  );
}
