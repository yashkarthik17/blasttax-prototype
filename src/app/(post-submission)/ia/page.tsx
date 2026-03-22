"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { BottomNav } from "@/components/BottomNav";

export default function IAStatusPage() {
  const router = useRouter();

  const timelineSteps = [
    { title: "Application Submitted", sub: "Mar 15 \u2014 Online via IRS.gov", done: true },
    { title: "TC 971 AC 043 Posted", sub: "Mar 15 \u2014 Pending status confirmed", done: true },
    { title: "Levy Protection Active", sub: "IRC \u00a7 6331(k) \u2014 Protected from levies", done: true },
    { title: "Approved \u2014 TC 971 AC 063", sub: "Mar 16 \u2014 Online = immediate approval", done: true },
    { title: "First Payment Due", sub: "Apr 28 \u2014 $657 via Direct Debit", done: false, current: true },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="IA Status" backPath="/cases/1042" />
        <div className="screen-content" style={{ gap: 16, paddingBottom: 24 }}>
          {/* Heading + Status */}
          <div className="stagger-item d1">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
              <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", margin: 0 }}>Your Installment Agreement</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="badge badge-success" style={{ fontSize: 11, padding: "4px 12px", display: "inline-flex", alignItems: "center", gap: 4 }}>
                <i className="fas fa-circle" style={{ fontSize: 6 }} /> Active
              </span>
              <span style={{ fontSize: 12, color: "#5C5C7A" }}>Streamlined DDIA</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="card stagger-item d2">
            <div style={{ fontSize: 12, fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>Timeline</div>
            {timelineSteps.map((step, i) => (
              <div key={i} className={`timeline-step ${step.done ? "completed" : ""}`}>
                <div className={`timeline-dot ${step.done ? "done" : step.current ? "current" : "pending"}`}>
                  {step.done ? (
                    <i className="fas fa-check" style={{ fontSize: 11 }} />
                  ) : step.current ? (
                    <i className="fas fa-arrow-right" style={{ fontSize: 11 }} />
                  ) : (
                    <i className="fas fa-hourglass-half" style={{ fontSize: 11 }} />
                  )}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: step.current ? "#2563EB" : "#1A1A2E" }}>{step.title}</div>
                  <div style={{ fontSize: 11, color: "#5C5C7A" }}>{step.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Agreement Details */}
          <div className="card stagger-item d3">
            <div style={{ fontSize: 12, fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>Agreement Details</div>
            {[
              { label: "Monthly Payment", value: "$657", bold: true },
              { label: "Payment Method", value: "Direct Debit (DDIA)" },
              { label: "Payment Date", value: "28th of each month" },
              { label: "Remaining Balance", value: "$46,593", color: "#E63946", bold: true },
              { label: "Payments Made", value: "1 of 72" },
              {
                label: "FTP Penalty Rate",
                value: (
                  <span>
                    <span style={{ fontWeight: 600, color: "#00A651" }}>0.25%/mo</span>
                    <span style={{ fontSize: 10, color: "#5C5C7A", textDecoration: "line-through", marginLeft: 4 }}>0.5%</span>
                  </span>
                ),
              },
            ].map((row, i, arr) => (
              <div key={row.label} className="detail-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderTop: i > 0 ? "1px solid #F0F0F5" : "none", fontSize: 12 }}>
                <span style={{ color: "#5C5C7A" }}>{row.label}</span>
                <span style={{ fontWeight: row.bold ? 700 : 600, color: row.color || "#1A1A2E" }}>{row.value}</span>
              </div>
            ))}
          </div>

          {/* NFTL Status */}
          <div className="alert alert-success stagger-item d4" style={{ borderRadius: 14, display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 16px", background: "#E6F9EE", border: "1px solid rgba(0,166,81,0.15)" }}>
            <i className="fas fa-shield-check" style={{ color: "#00A651", fontSize: 16, marginTop: 2 }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#065F46", marginBottom: 2 }}>No Lien Filed</div>
              <div style={{ fontSize: 12, color: "#065F46", lineHeight: 1.4 }}>Balance under $25K DDIA threshold. NFTL will not be filed.</div>
            </div>
          </div>

          {/* Compliance Requirements */}
          <div className="card stagger-item d5">
            <div style={{ fontSize: 12, fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
              <i className="fas fa-triangle-exclamation" style={{ fontSize: 10, marginRight: 4, color: "#F5A623" }} />
              Compliance Requirements
            </div>
            {["File all future returns on time", "Pay current-year taxes on time", "Make all IA payments on time"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0", fontSize: 12, lineHeight: 1.5 }}>
                <i className="fas fa-triangle-exclamation" style={{ color: "#F5A623", fontSize: 14, marginTop: 1 }} />
                <span style={{ color: "#1A1A2E", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
            <div style={{ marginTop: 8, padding: 10, background: "rgba(245,166,35,0.06)", borderRadius: 10, fontSize: 11, color: "#92400E", lineHeight: 1.5 }}>
              <i className="fas fa-info-circle" style={{ fontSize: 10, marginRight: 4 }} />
              Default triggers CP523 notice with a 30-day cure period before termination.
            </div>
          </div>

          {/* CTAs */}
          <div className="stagger-item d6" style={{ marginTop: 4 }}>
            <button className="btn btn-primary" style={{ marginBottom: 10 }}>
              <i className="fas fa-credit-card" style={{ fontSize: 13 }} />
              Make a Payment
            </button>
            <button className="btn btn-outline">
              <i className="fas fa-clock-rotate-left" style={{ fontSize: 13 }} />
              View Payment History
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
          padding-bottom: 16px;
        }
        .timeline-step:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 15px;
          top: 34px;
          bottom: 0;
          width: 2px;
          background: #E8E8F0;
        }
        .timeline-step.completed:not(:last-child)::after {
          background: #00A651;
        }
        .timeline-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
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
          animation: glowPulse 2.5s ease-in-out infinite;
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 12px rgba(37, 99, 235, 0.2); }
          50% { box-shadow: 0 0 24px rgba(37, 99, 235, 0.4); }
        }
        .timeline-dot.pending {
          background: #F6F6FB;
          color: #B0B0C8;
          border: 2px solid #E8E8F0;
        }
      `}</style>
    </PhoneFrame>
  );
}
