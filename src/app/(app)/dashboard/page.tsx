"use client";

import { useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";

export default function DashboardPage() {
  const router = useRouter();
  const counterRef = useRef<HTMLDivElement>(null);

  const animateCounter = useCallback(
    (el: HTMLElement, target: number, duration: number) => {
      const startTime = performance.now();
      function update(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(target * eased);
        el.textContent = "$" + current.toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    },
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (counterRef.current) {
        animateCounter(counterRef.current, 47250, 1800);
      }
    }, 600);
    return () => clearTimeout(timeout);
  }, [animateCounter]);

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-content" style={{ paddingBottom: 100, gap: 20 }}>

          {/* Header */}
          <div
            className="stagger-item d1"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 4 }}
          >
            <div>
              <div style={{ fontSize: "0.8rem", color: "#8585A0", fontWeight: 500 }}>Good morning</div>
              <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em" }}>
                Jane{" "}
                <span style={{ display: "inline-block" }}>&#128075;</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ position: "relative", cursor: "pointer" }}>
                <i className="far fa-bell bell-ring" style={{ fontSize: 20, color: "#5C5C7A" }} />
                <div
                  className="notif-dot"
                  style={{
                    position: "absolute",
                    top: -2,
                    right: -2,
                    width: 9,
                    height: 9,
                    background: "#E63946",
                    borderRadius: "50%",
                    border: "2px solid #FAFAFF",
                  }}
                />
              </div>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#003DA5,#2563EB)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,61,165,0.2)",
                }}
              >
                JD
              </div>
            </div>
          </div>

          {/* Hero Card: Total Tax Debt */}
          <div
            className="stagger-item d2"
            style={{
              background: "linear-gradient(145deg,#EBF0FF 0%,#FFF5F5 60%,#FFF0F1 100%)",
              borderRadius: 20,
              padding: 24,
              border: "1px solid rgba(0,61,165,0.08)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -30,
                right: -30,
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: "rgba(230,57,70,0.06)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -20,
                left: -20,
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "rgba(0,61,165,0.05)",
              }}
            />

            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#8585A0",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Total Tax Debt
            </div>
            <div
              ref={counterRef}
              className="debt-counter"
              style={{
                marginTop: 8,
                fontSize: "2.2rem",
                fontWeight: 900,
                color: "#E63946",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              $0
            </div>
            <div style={{ fontSize: "0.8rem", color: "#5C5C7A", marginTop: 6, fontWeight: 500 }}>
              across <strong style={{ color: "#1A1A2E" }}>3 tax years</strong>
            </div>

            {/* CSED Warning */}
            <div
              className="csed-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                marginTop: 14,
                padding: "6px 12px",
                background: "rgba(245,166,35,0.1)",
                border: "1px solid rgba(245,166,35,0.2)",
                borderRadius: 9999,
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "#D97706",
              }}
            >
              <i className="fas fa-clock" style={{ fontSize: 10 }} />
              Nearest expiration: Aug 2028
            </div>

            {/* Sparkline chart */}
            <div style={{ marginTop: 16, height: 40, position: "relative" }}>
              <svg width="100%" height="40" viewBox="0 0 280 40" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#E63946", stopOpacity: 0.15 }} />
                    <stop offset="100%" style={{ stopColor: "#E63946", stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
                <path
                  d="M0,30 Q30,28 60,25 T120,20 T180,15 T240,18 T280,12"
                  fill="none"
                  stroke="#E63946"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="sparkline-path"
                  opacity="0.7"
                />
                <path
                  d="M0,30 Q30,28 60,25 T120,20 T180,15 T240,18 T280,12 L280,40 L0,40 Z"
                  fill="url(#sparkGrad)"
                  className="sparkline-path"
                  style={{ stroke: "none" }}
                />
              </svg>
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 6,
                  width: 8,
                  height: 8,
                  background: "#E63946",
                  borderRadius: "50%",
                  boxShadow: "0 0 8px rgba(230,57,70,0.4)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="stagger-item d3">
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
              Quick Actions
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {/* New Analysis */}
              <div
                className="quick-action stagger-item d4"
                onClick={() => router.push("/type")}
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: "18px 16px",
                  border: "1px solid #E8E8F0",
                  boxShadow: "0 2px 8px rgba(26,26,46,0.04)",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 14,
                    background: "linear-gradient(135deg,#EBF0FF,#D6E2FF)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                >
                  <i className="fas fa-chart-line" style={{ fontSize: 16, color: "#003DA5" }} />
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 3 }}>
                  New Analysis
                </div>
                <div style={{ fontSize: "0.7rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.4 }}>
                  Start a new resolution analysis
                </div>
              </div>

              {/* My Cases */}
              <div
                className="quick-action stagger-item d5"
                onClick={() => router.push("/cases")}
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: "18px 16px",
                  border: "1px solid #E8E8F0",
                  boxShadow: "0 2px 8px rgba(26,26,46,0.04)",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 14,
                    background: "linear-gradient(135deg,#F5F0FF,#E8DEFF)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                >
                  <i className="fas fa-folder-open" style={{ fontSize: 16, color: "#7C3AED" }} />
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 3 }}>
                  My Cases
                </div>
                <div style={{ fontSize: "0.7rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.4 }}>
                  Track your active cases
                </div>
              </div>

              {/* Tax Filing */}
              <div
                className="quick-action stagger-item d6"
                onClick={() => router.push("/tax-filing")}
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: "18px 16px",
                  border: "1px solid #E8E8F0",
                  boxShadow: "0 2px 8px rgba(26,26,46,0.04)",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 14,
                    background: "linear-gradient(135deg,#F0FDFA,#CCFBF1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                >
                  <i className="fas fa-file-lines" style={{ fontSize: 16, color: "#0D9488" }} />
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 3 }}>
                  Tax Filing
                </div>
                <div style={{ fontSize: "0.7rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.4 }}>
                  File or amend returns
                </div>
              </div>

              {/* AI Assistant */}
              <div
                className="quick-action stagger-item d7"
                onClick={() => router.push("/ai-chat")}
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: "18px 16px",
                  border: "1px solid #E8E8F0",
                  boxShadow: "0 2px 8px rgba(26,26,46,0.04)",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 14,
                    background: "linear-gradient(135deg,#EEF2FF,#DDD6FE)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                >
                  <i className="fas fa-sparkles" style={{ fontSize: 16, color: "#4F46E5" }} />
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 3 }}>
                  AI Assistant
                </div>
                <div style={{ fontSize: "0.7rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.4 }}>
                  Get instant help
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="stagger-item d8">
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
              Recent Activity
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
              {/* Activity 1 */}
              <div
                className="activity-item"
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderBottom: "1px solid #F0F0F5" }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "#EBF0FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i className="fas fa-arrow-rotate-right" style={{ fontSize: 13, color: "#003DA5" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "#1A1A2E",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Case #1042 — Status updated
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#8585A0", marginTop: 1 }}>
                    Moved to &ldquo;In Review&rdquo;
                  </div>
                </div>
                <div style={{ fontSize: "0.65rem", color: "#B0B0C8", fontWeight: 500, whiteSpace: "nowrap" }}>
                  2h ago
                </div>
              </div>

              {/* Activity 2 */}
              <div
                className="activity-item"
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderBottom: "1px solid #F0F0F5" }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "#E6F9EE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i className="fas fa-file-check" style={{ fontSize: 13, color: "#00A651" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "#1A1A2E",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    OIC Form 656 — Ready
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#8585A0", marginTop: 1 }}>
                    Ready for submission
                  </div>
                </div>
                <div style={{ fontSize: "0.65rem", color: "#B0B0C8", fontWeight: 500, whiteSpace: "nowrap" }}>
                  5h ago
                </div>
              </div>

              {/* Activity 3 */}
              <div
                className="activity-item"
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px" }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "#F5F0FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i className="fas fa-credit-card" style={{ fontSize: 13, color: "#7C3AED" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E" }}>
                    Payment of $250
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#8585A0", marginTop: 1 }}>
                    Processed successfully
                  </div>
                </div>
                <div style={{ fontSize: "0.65rem", color: "#B0B0C8", fontWeight: 500, whiteSpace: "nowrap" }}>
                  1d ago
                </div>
              </div>
            </div>
          </div>

          {/* AI Assistant Preview Card */}
          <div className="stagger-item d9">
            <div
              className="ai-card-bg"
              style={{ borderRadius: 20, padding: 20, position: "relative", overflow: "hidden" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 120,
                  height: 120,
                  background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className="fas fa-sparkles" style={{ fontSize: 14, color: "white" }} />
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1A1A2E" }}>BlastTax AI</div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "3px 8px",
                    background: "rgba(99,102,241,0.1)",
                    borderRadius: 9999,
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    color: "#4F46E5",
                  }}
                >
                  <i className="fas fa-bolt" style={{ fontSize: 8 }} /> SMART
                </div>
              </div>

              <div style={{ fontSize: "0.85rem", color: "#5C5C7A", fontWeight: 500, marginBottom: 14 }}>
                How can I help you today?
              </div>

              {/* Quick prompt chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
                <div
                  className="prompt-chip"
                  style={{
                    padding: "7px 14px",
                    background: "white",
                    border: "1px solid #E8E8F0",
                    borderRadius: 9999,
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#5C5C7A",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                  onClick={() => router.push("/ai-chat")}
                >
                  <i className="fas fa-check-circle" style={{ fontSize: 10, color: "#2563EB", marginRight: 2 }} />{" "}
                  Check my eligibility
                </div>
                <div
                  className="prompt-chip"
                  style={{
                    padding: "7px 14px",
                    background: "white",
                    border: "1px solid #E8E8F0",
                    borderRadius: 9999,
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#5C5C7A",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                  onClick={() => router.push("/ai-chat")}
                >
                  <i className="fas fa-handshake" style={{ fontSize: 10, color: "#7C3AED", marginRight: 2 }} />{" "}
                  Explain OIC
                </div>
                <div
                  className="prompt-chip"
                  style={{
                    padding: "7px 14px",
                    background: "white",
                    border: "1px solid #E8E8F0",
                    borderRadius: 9999,
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#5C5C7A",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                  onClick={() => router.push("/ai-chat")}
                >
                  <i className="fas fa-arrow-right" style={{ fontSize: 10, color: "#0D9488", marginRight: 2 }} />{" "}
                  Next steps
                </div>
              </div>

              {/* Input bar */}
              <div
                onClick={() => router.push("/ai-chat")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "white",
                  border: "1px solid #E8E8F0",
                  borderRadius: 9999,
                  padding: "8px 12px 8px 16px",
                  cursor: "pointer",
                }}
              >
                <span style={{ flex: 1, fontSize: "0.8rem", color: "#B0B0C8" }}>Ask anything...</span>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#003DA5,#2563EB)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i className="fas fa-arrow-up" style={{ fontSize: 12, color: "white" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav active="Home" />

      <style jsx>{`
        .debt-counter {
          animation: countReveal 0.8s 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both;
        }
        @keyframes countReveal {
          from { opacity: 0; transform: translateY(10px); filter: blur(6px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .sparkline-path {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: drawLine 1.5s 0.8s ease-out forwards;
        }
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        .quick-action:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(26,26,46,0.1);
        }
        .quick-action:active {
          transform: translateY(0) scale(0.98);
        }
        .activity-item {
          transition: all 0.25s ease;
        }
        .activity-item:hover {
          background: #F6F6FB;
          border-radius: 12px;
          margin: 0 -8px;
          padding: 10px 8px;
        }
        .ai-card-bg {
          background: linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(124,58,237,0.06) 50%, rgba(13,148,136,0.04) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(99,102,241,0.12);
        }
        .prompt-chip:hover {
          background: #EBF0FF !important;
          color: #003DA5 !important;
          border-color: #003DA5 !important;
          transform: translateY(-1px);
        }
        .bell-ring {
          animation: bellSwing 2s 1.5s ease-in-out forwards;
        }
        @keyframes bellSwing {
          0% { transform: rotate(0); }
          5% { transform: rotate(12deg); }
          10% { transform: rotate(-10deg); }
          15% { transform: rotate(8deg); }
          20% { transform: rotate(-6deg); }
          25% { transform: rotate(0); }
          100% { transform: rotate(0); }
        }
        .notif-dot {
          animation: dotPulse 2s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(230,57,70,0.4); }
          50% { box-shadow: 0 0 0 4px rgba(230,57,70,0); }
        }
        .csed-badge {
          animation: csedGlow 3s ease-in-out infinite;
        }
        @keyframes csedGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245,166,35,0.2); }
          50% { box-shadow: 0 0 12px 2px rgba(245,166,35,0.15); }
        }
      `}</style>
    </PhoneFrame>
  );
}
