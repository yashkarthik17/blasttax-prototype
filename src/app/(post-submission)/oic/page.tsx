"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { BottomNav } from "@/components/BottomNav";

export default function OICStatusPage() {
  const router = useRouter();

  const timelineSteps = [
    { title: "Day 0: OIC Submitted", sub: "Mar 15 \u2014 Certified mail", done: true },
    { title: "Wk 1-3: Processability Review", sub: "Passed \u2014 Mar 28", subColor: "#00A651", done: true },
    { title: "TC 480 Posted \u2014 CSED Tolled", sub: "Mar 28 \u2014 Collection statute paused", done: true },
    { title: "Letter 3756 Received", sub: "Apr 5 \u2014 24-month clock started", done: true },
    { title: "Routed to COIC", sub: "Apr 20 \u2014 Brookhaven, NY", done: true },
    { title: "Mo 2-6: Examiner Assignment", sub: "Letter 4450 expected", current: true },
    { title: "Mo 3-12: Investigation Phase", sub: "Examiner reviews financials", pending: true },
    { title: "Mo 6-18: Decision", sub: "Accept, reject, or counteroffer", pending: true },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="OIC Status" backPath="/cases/1042" />
        <div className="screen-content" style={{ gap: 14, paddingBottom: 24 }}>
          {/* Heading */}
          <div className="stagger-item d1">
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", margin: 0, marginBottom: 6 }}>Your Offer in Compromise</h1>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="badge badge-info" style={{ fontSize: 11, padding: "4px 12px", display: "inline-flex", alignItems: "center", gap: 4, background: "#EBF0FF", color: "#2563EB", borderRadius: 9999, fontWeight: 700 }}>
                <i className="fas fa-clock" style={{ fontSize: 8 }} /> In Review
              </span>
              <span style={{ fontSize: 12, color: "#5C5C7A" }}>DATC &mdash; $8,500</span>
            </div>
          </div>

          {/* Detailed Timeline */}
          <div className="card stagger-item d2" style={{ padding: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Lifecycle Timeline</div>
            {timelineSteps.map((step, i) => (
              <div key={i} className={`timeline-step ${step.done ? "completed" : ""}`}>
                <div className={`timeline-dot ${step.done ? "done" : step.current ? "current" : "pending"}`}>
                  {step.done ? (
                    <i className="fas fa-check" style={{ fontSize: 10 }} />
                  ) : step.current ? (
                    <i className="fas fa-hourglass-half" style={{ fontSize: 10 }} />
                  ) : step.pending && i === 6 ? (
                    <i className="fas fa-magnifying-glass" style={{ fontSize: 10 }} />
                  ) : (
                    <i className="fas fa-gavel" style={{ fontSize: 10 }} />
                  )}
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: step.pending ? 600 : 700, color: step.current ? "#2563EB" : step.pending ? "#8585A0" : "#1A1A2E" }}>{step.title}</div>
                  <div style={{ fontSize: 10, color: step.subColor || (step.pending ? "#B0B0C8" : "#5C5C7A"), fontWeight: step.subColor ? 600 : 400 }}>{step.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Current Status Card */}
          <div className="stagger-item d3">
            <div className="status-pulse" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 16px", background: "linear-gradient(135deg, #EBF0FF, #F5F0FF)", border: "1.5px solid rgba(37,99,235,0.15)", borderRadius: 14, width: "100%" }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg, #2563EB, #60a5fa)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className="fas fa-satellite-dish" style={{ color: "white", fontSize: 16 }} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A2E" }}>Awaiting Examiner Assignment</div>
                <div style={{ fontSize: 11, color: "#5C5C7A", marginTop: 2 }}>24-month deadline: <strong>Apr 5, 2028</strong></div>
                <div style={{ fontSize: 10, color: "#2563EB", fontWeight: 600, marginTop: 2 }}>
                  If no decision by then: Deemed Accepted (IRC &sect; 7122(f))
                </div>
              </div>
            </div>
          </div>

          {/* During Process Reminders */}
          <div className="card stagger-item d4">
            <div style={{ fontSize: 11, fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
              <i className="fas fa-bell" style={{ fontSize: 10, marginRight: 4 }} />
              During Review Reminders
            </div>
            {[
              { icon: "fa-triangle-exclamation", color: "#F5A623", text: "Stay current on all tax filings", textColor: "#1A1A2E" },
              { icon: "fa-triangle-exclamation", color: "#F5A623", text: "Continue periodic payments (not refunded if rejected)", textColor: "#1A1A2E" },
              { icon: "fa-triangle-exclamation", color: "#F5A623", text: "Respond to all IRS requests within deadlines", textColor: "#1A1A2E" },
              { icon: "fa-triangle-exclamation", color: "#F5A623", text: "Refunds will be offset (TC 826)", textColor: "#5C5C7A" },
              { icon: "fa-circle-check", color: "#00A651", text: "No levy while TC 480 active", textColor: "#1A1A2E" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "7px 0", fontSize: 12, lineHeight: 1.5 }}>
                <i className={`fas ${item.icon}`} style={{ color: item.color, fontSize: 13, marginTop: 2, flexShrink: 0 }} />
                <span style={{ color: item.textColor, fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="stagger-item d5" style={{ marginTop: 4 }}>
            <button className="btn btn-secondary" style={{ marginBottom: 10 }}>
              <i className="fas fa-folder-open" style={{ fontSize: 13 }} />
              View Documents
            </button>
            <button className="btn btn-outline">
              <i className="fas fa-comment-dots" style={{ fontSize: 13 }} />
              Message Expert
            </button>
          </div>
        </div>
      </div>
      <BottomNav active="Cases" />

      <style>{`
        .timeline-step {
          display: flex;
          gap: 14px;
          position: relative;
          padding-bottom: 14px;
        }
        .timeline-step:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 14px;
          top: 32px;
          bottom: 0;
          width: 2px;
          background: #E8E8F0;
        }
        .timeline-step.completed:not(:last-child)::after {
          background: #00A651;
        }
        .timeline-dot {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          flex-shrink: 0;
          z-index: 1;
        }
        .timeline-dot.done {
          background: linear-gradient(135deg, #00A651, #10B981);
          color: white;
        }
        .timeline-dot.current {
          background: linear-gradient(135deg, #2563EB, #60a5fa);
          color: white;
          animation: pulseGlow 2.5s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 12px rgba(37, 99, 235, 0.2); }
          50% { box-shadow: 0 0 24px rgba(37, 99, 235, 0.4); }
        }
        .timeline-dot.pending {
          background: #F6F6FB;
          color: #B0B0C8;
          border: 2px solid #E8E8F0;
        }
        .status-pulse {
          animation: statusBreathe 3s ease-in-out infinite;
        }
        @keyframes statusBreathe {
          0%, 100% { box-shadow: 0 0 16px rgba(37, 99, 235, 0.08); }
          50% { box-shadow: 0 0 28px rgba(37, 99, 235, 0.16); }
        }
      `}</style>
    </PhoneFrame>
  );
}
