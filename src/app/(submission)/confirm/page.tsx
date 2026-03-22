"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function SubmissionConfirmPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen celebration-bg" style={{ paddingBottom: 0 }}>
        <div
          className="screen-content"
          style={{
            paddingBottom: 40,
            gap: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: 20,
          }}
        >
          {/* Confetti Container */}
          <div style={{ position: "relative", width: "100%", height: 0 }}>
            <div className="confetti" style={{ "--color": "#003DA5", "--size": "8px", "--br": "50%", "--rot": "120deg", "--dur": "2s", "--delay": "0.4s", left: "15%", top: 0 } as React.CSSProperties} />
            <div className="confetti" style={{ "--color": "#00A651", "--size": "6px", "--br": "2px", "--rot": "200deg", "--dur": "2.3s", "--delay": "0.5s", left: "30%", top: 10 } as React.CSSProperties} />
            <div className="confetti" style={{ "--color": "#7C3AED", "--size": "7px", "--br": "50%", "--rot": "150deg", "--dur": "2.1s", "--delay": "0.6s", left: "50%", top: -5 } as React.CSSProperties} />
            <div className="confetti" style={{ "--color": "#2563EB", "--size": "5px", "--br": "1px", "--rot": "280deg", "--dur": "2.4s", "--delay": "0.45s", left: "70%", top: 5 } as React.CSSProperties} />
            <div className="confetti" style={{ "--color": "#E63946", "--size": "6px", "--br": "50%", "--rot": "90deg", "--dur": "2.2s", "--delay": "0.55s", left: "80%", top: 0 } as React.CSSProperties} />
            <div className="confetti" style={{ "--color": "#F5A623", "--size": "7px", "--br": "2px", "--rot": "240deg", "--dur": "2.5s", "--delay": "0.65s", left: "25%", top: 15 } as React.CSSProperties} />
            <div className="confetti" style={{ "--color": "#0D9488", "--size": "5px", "--br": "50%", "--rot": "180deg", "--dur": "2.1s", "--delay": "0.7s", left: "60%", top: 10 } as React.CSSProperties} />
            <div className="confetti" style={{ "--color": "#003DA5", "--size": "6px", "--br": "50%", "--rot": "310deg", "--dur": "2.3s", "--delay": "0.5s", left: "40%", top: -10 } as React.CSSProperties} />
            <div className="confetti" style={{ "--color": "#00A651", "--size": "8px", "--br": "2px", "--rot": "160deg", "--dur": "2.6s", "--delay": "0.75s", left: "85%", top: 15 } as React.CSSProperties} />
            <div className="confetti" style={{ "--color": "#7C3AED", "--size": "5px", "--br": "50%", "--rot": "220deg", "--dur": "2.2s", "--delay": "0.8s", left: "10%", top: 20 } as React.CSSProperties} />
          </div>

          {/* Animated Checkmark */}
          <div
            className="check-hero check-glow"
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#00A651,#10B981)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              marginBottom: 24,
            }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path
                className="check-path"
                d="M12 24L20 32L36 16"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Heading */}
          <div className="heading-reveal" style={{ textAlign: "center", marginBottom: 6 }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#1A1A2E", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Submission Complete!
            </div>
          </div>
          <div className="stagger-item d1" style={{ textAlign: "center", marginBottom: 24 }}>
            <div style={{ fontSize: "0.88rem", color: "#5C5C7A", fontWeight: 500, lineHeight: 1.5 }}>
              Your Form 656 has been submitted to the IRS
            </div>
          </div>

          {/* Summary Card */}
          <div
            className="stagger-item d2"
            style={{
              width: "100%",
              background: "white",
              borderRadius: 20,
              padding: 20,
              border: "1px solid #E8E8F0",
              boxShadow: "0 4px 16px rgba(26,26,46,0.06)",
              marginBottom: 20,
            }}
          >
            {[
              { label: "Case", value: "#1042", color: "#1A1A2E" },
              { label: "Resolution", value: "Offer in Compromise", color: "#1A1A2E" },
              { label: "Offer Amount", value: "$8,500", color: "#00A651", fontSize: "0.88rem", fontWeight: 800 },
              { label: "Submitted", value: "March 15, 2026", color: "#1A1A2E" },
              { label: "Expected Response", value: "6-12 months", color: "#003DA5" },
            ].map((row, i, arr) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: i < arr.length - 1 ? 12 : 0,
                  borderBottom: i < arr.length - 1 ? "1px solid #F0F0F5" : "none",
                  marginBottom: i < arr.length - 1 ? 12 : 0,
                }}
              >
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8585A0" }}>{row.label}</span>
                <span
                  style={{
                    fontSize: row.fontSize || "0.82rem",
                    fontWeight: (row.fontWeight as number) || 700,
                    color: row.color,
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* What Happens Next */}
          <div className="stagger-item d3" style={{ width: "100%", marginBottom: 16 }}>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#B0B0C8",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: 12,
                padding: "0 4px",
              }}
            >
              What happens next?
            </div>
            <div
              style={{
                background: "white",
                borderRadius: 16,
                border: "1px solid #E8E8F0",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(26,26,46,0.04)",
              }}
            >
              {[
                { num: "1", title: "IRS will acknowledge receipt", sub: "Within 30 days of submission" },
                { num: "2", title: "Examiner reviews your financials", sub: "Detailed review of assets and income" },
                { num: "3", title: "You'll receive a decision letter", sub: "Accept, reject, or counter-offer" },
              ].map((step, i, arr) => (
                <div
                  key={step.num}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "14px 16px",
                    borderBottom: i < arr.length - 1 ? "1px solid #F0F0F5" : "none",
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "#EBF0FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#003DA5" }}>{step.num}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>{step.title}</div>
                    <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 2 }}>{step.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reassurance */}
          <div
            className="stagger-item d4"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 16px",
              background: "#E6F9EE",
              borderRadius: 12,
              border: "1px solid rgba(0,166,81,0.12)",
              marginBottom: 20,
            }}
          >
            <i className="fas fa-shield-check" style={{ fontSize: 16, color: "#00A651", flexShrink: 0 }} />
            <div style={{ fontSize: "0.8rem", color: "#065F46", fontWeight: 500, lineHeight: 1.5 }}>
              We&apos;ll notify you of any updates and guide you through every step.
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="stagger-item d5" style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              onClick={() => router.push("/dashboard")}
              style={{
                padding: 16,
                background: "linear-gradient(135deg,#00A651,#10B981)",
                borderRadius: 9999,
                textAlign: "center",
                color: "white",
                fontSize: "0.88rem",
                fontWeight: 700,
                boxShadow: "0 8px 24px rgba(0,166,81,0.2)",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.25,0.1,0.25,1)",
              }}
            >
              <i className="fas fa-house" style={{ marginRight: 8 }} /> Go to Dashboard
            </div>
            <div
              onClick={() => router.push("/cases/1042")}
              style={{
                padding: 12,
                textAlign: "center",
                color: "#003DA5",
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              View Case Details <i className="fas fa-arrow-right" style={{ marginLeft: 4, fontSize: 11 }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .celebration-bg {
          background: linear-gradient(135deg, #FAFAFF 0%, #E6F9EE 30%, #EBF0FF 60%, #FAFAFF 100%);
          background-size: 300% 300%;
          animation: bgShift 8s ease-in-out infinite;
        }
        @keyframes bgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .check-hero {
          animation: checkScale 0.8s 0.1s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        @keyframes checkScale {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); }
          70% { transform: scale(0.95); }
          100% { transform: scale(1); opacity: 1; }
        }
        .check-glow {
          animation: glowBreath 2.5s 1s ease-in-out infinite;
        }
        @keyframes glowBreath {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,166,81,0.3), 0 0 40px rgba(0,166,81,0.15); }
          50% { box-shadow: 0 0 0 16px rgba(0,166,81,0), 0 0 60px rgba(0,166,81,0.2); }
        }
        .check-path {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          animation: checkDraw 0.5s 0.6s ease-out forwards;
        }
        @keyframes checkDraw {
          to { stroke-dashoffset: 0; }
        }
        .confetti {
          position: absolute;
          width: var(--size);
          height: var(--size);
          border-radius: var(--br);
          background: var(--color);
          animation: confettiFloat var(--dur) var(--delay) cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
          opacity: 0;
          animation-fill-mode: both;
        }
        @keyframes confettiFloat {
          0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
          100% { transform: translateY(-180px) rotate(var(--rot)) scale(0); opacity: 0; }
        }
        .heading-reveal {
          animation: headingReveal 0.7s 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both;
        }
        @keyframes headingReveal {
          from { opacity: 0; transform: translateY(16px); filter: blur(6px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
      `}</style>
    </PhoneFrame>
  );
}
