"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { BottomNav } from "@/components/BottomNav";

export default function FailureIAPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="IA Default" backPath="/cases/1042" />
        <div className="screen-content" style={{ gap: 14, paddingBottom: 24 }}>
          {/* Heading */}
          <div className="stagger-item d1">
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#F5A623", margin: 0, marginBottom: 4 }}>Your Installment Agreement is at Risk</h1>
            <p style={{ fontSize: "0.82rem", color: "#8585A0", margin: 0 }}>Action required within 30 days to prevent termination</p>
          </div>

          {/* Default Trigger Card */}
          <div className="card stagger-item d2" style={{ borderColor: "rgba(245,166,35,0.4)", background: "linear-gradient(135deg, #FFFBEB, #FEF3C7)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div className="countdown-ring">
                <div className="countdown-ring-inner">
                  <div style={{ fontSize: 18, fontWeight: 900, color: "#F5A623" }}>18</div>
                  <div style={{ fontSize: 8, fontWeight: 700, color: "#92400E", textTransform: "uppercase" }}>days left</div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#92400E" }}>Missed Payment</div>
                <div style={{ fontSize: 12, color: "#78350F", marginTop: 2 }}>April 28, 2026 &mdash; $657 not received</div>
                <div style={{ fontSize: 11, color: "#92400E", marginTop: 4, fontWeight: 600 }}>
                  <i className="fas fa-envelope" style={{ fontSize: 10, marginRight: 3 }} />
                  CP523 Notice received
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="card stagger-item d3" style={{ padding: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Default Timeline</div>
            {[
              { icon: "fa-triangle-exclamation", bg: "linear-gradient(135deg, #F5A623, #fbbf24)", label: "Default Trigger", sub: "Missed payment \u2014 Apr 28", labelColor: "#92400E", cls: "warn" },
              { icon: "fa-envelope", bg: "linear-gradient(135deg, #E63946, #f87171)", label: "CP523 Notice Sent", sub: '"Intent to Terminate IA"', labelColor: "#991B1B", cls: "danger" },
              { icon: "fa-clock", bg: "linear-gradient(135deg, #2563EB, #60a5fa)", label: "30-Day Cure Period", sub: "You have until May 28 to fix this", labelColor: "#2563EB", pulse: true },
              { icon: "fa-question", bg: "#F6F6FB", color: "#B0B0C8", border: "2px solid #E8E8F0", label: "Outcome", sub: "IA continues OR terminated (TC 971 AC 073)", labelColor: "#8585A0" },
            ].map((step, i, arr) => (
              <div key={i} className={`timeline-step ${step.cls || ""}`}>
                <div className="timeline-dot" style={{ background: step.bg, color: step.color || "white", border: step.border, ...(step.pulse ? { animation: "pulseGlow 2s ease-in-out infinite" } : {}) }}>
                  <i className={`fas ${step.icon}`} style={{ fontSize: 10 }} />
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: step.labelColor }}>{step.label}</div>
                  <div style={{ fontSize: 10, color: "#5C5C7A" }} dangerouslySetInnerHTML={{ __html: step.sub }} />
                </div>
              </div>
            ))}
          </div>

          {/* How to Cure */}
          <div className="stagger-item d4">
            <div style={{ fontSize: 12, fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>How to Cure (Within 30 Days)</div>
            {[
              { icon: "fa-credit-card", iconColor: "#00A651", iconBg: "linear-gradient(135deg, #E6F9EE, #d1fae5)", title: "Make Missed Payment", sub: "Pay $657 to restore agreement" },
              { icon: "fa-phone", iconColor: "#003DA5", iconBg: "linear-gradient(135deg, #EBF0FF, #dbeafe)", title: "Call IRS to Explain", sub: "800-829-1040 \u2014 Hardship exception" },
              { icon: "fa-file-signature", iconColor: "#7C3AED", iconBg: "linear-gradient(135deg, #F5F0FF, #ede9fe)", title: "File Form 9423 (CAP Appeal)", sub: "Formal Collection Appeals Program" },
            ].map((action) => (
              <div key={action.title} className="cure-action">
                <div style={{ width: 40, height: 40, borderRadius: 12, background: action.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className={`fas ${action.icon}`} style={{ color: action.iconColor, fontSize: 16 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A2E" }}>{action.title}</div>
                  <div style={{ fontSize: 11, color: "#5C5C7A" }}>{action.sub}</div>
                </div>
                <i className="fas fa-chevron-right" style={{ color: "#B0B0C8", fontSize: 12 }} />
              </div>
            ))}
          </div>

          {/* Protection Notice */}
          <div className="alert alert-info stagger-item d5" style={{ borderRadius: 14, display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 16px", background: "#EBF0FF", border: "1px solid rgba(37,99,235,0.15)" }}>
            <i className="fas fa-shield-halved" style={{ color: "#2563EB", fontSize: 16, marginTop: 2 }} />
            <div style={{ fontSize: 12, lineHeight: 1.5, color: "#1A1A2E" }}>
              <strong>Protection:</strong> No levy for 90 days after CP523 notice. You have time to act.
            </div>
          </div>

          {/* If Terminated Options */}
          <div className="card stagger-item d6">
            <div style={{ fontSize: 12, fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>If Agreement is Terminated</div>
            {[
              { title: "Reinstate Same IA", badge: "Fastest", sub: "$89 online / $130 phone reinstatement fee" },
              { title: "Negotiate New IA", sub: "New Form 9465 \u2014 may get different terms" },
              { title: "Switch to OIC or CNC", sub: "If hardship justifies a different resolution path" },
            ].map((opt) => (
              <div key={opt.title} className="option-card-sm">
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#1A1A2E" }}>{opt.title}</span>
                  {opt.badge && <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 8px", background: "#EBF0FF", color: "#003DA5", borderRadius: 9999 }}>{opt.badge}</span>}
                </div>
                <div style={{ fontSize: 11, color: "#5C5C7A", lineHeight: 1.4 }}>{opt.sub}</div>
              </div>
            ))}
            <div style={{ marginTop: 8, padding: "8px 10px", background: "rgba(230,57,70,0.05)", borderRadius: 10 }}>
              <div style={{ fontSize: 10, color: "#991B1B", lineHeight: 1.4 }}>
                <i className="fas fa-triangle-exclamation" style={{ fontSize: 9, marginRight: 3 }} />
                TC 971 AC 073 = extra scrutiny on next attempt
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="stagger-item d7" style={{ marginTop: 4 }}>
            <button className="btn btn-primary" style={{ marginBottom: 10 }}>
              <i className="fas fa-credit-card" style={{ fontSize: 13 }} />
              Make Payment Now
            </button>
            <button className="btn btn-outline">
              <i className="fas fa-phone" style={{ fontSize: 13 }} />
              Call IRS (800-829-1040)
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
        .timeline-step.warn:not(:last-child)::after { background: #F5A623; }
        .timeline-step.danger:not(:last-child)::after { background: #E63946; }
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
        .countdown-ring {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background: conic-gradient(#F5A623 0deg, #F5A623 216deg, #E8E8F0 216deg);
          flex-shrink: 0;
        }
        .countdown-ring-inner {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .cure-action {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 8px;
        }
        .cure-action:hover {
          border-color: #003DA5;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(26,26,46,0.06);
        }
        .option-card-sm {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 14px;
          padding: 14px;
          margin-bottom: 8px;
          transition: all 0.3s ease;
        }
        .option-card-sm:hover {
          border-color: rgba(0, 61, 165, 0.2);
          box-shadow: 0 4px 16px rgba(26,26,46,0.06);
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 8px rgba(37,99,235,0.2); }
          50% { box-shadow: 0 0 20px rgba(37,99,235,0.4); }
        }
      `}</style>
    </PhoneFrame>
  );
}
