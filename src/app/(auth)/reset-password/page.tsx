"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSendReset = useCallback(() => {
    if (sending) return;
    setSending(true);
    setTimeout(() => {
      setShowSuccess(true);
      setSending(false);
    }, 1200);
  }, [sending]);

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div className="screen-content" style={{ paddingTop: 8 }}>
          {/* Back button */}
          <div className="stagger-item d1" style={{ marginBottom: 40 }}>
            <button className="reset-back-btn" onClick={() => router.push("/login")}>
              <i className="fas fa-arrow-left" />
            </button>
          </div>

          {/* Form State */}
          {!showSuccess && (
            <div>
              {/* Icon */}
              <div className="stagger-item d2" style={{ marginBottom: 24 }}>
                <div className="reset-icon-circle">
                  <i className="fas fa-lock reset-lock-icon" />
                  <div className="reset-shield-badge">
                    <i className="fas fa-shield-halved" />
                  </div>
                </div>
              </div>

              {/* Heading */}
              <div className="stagger-item d3" style={{ textAlign: "center", marginBottom: 8 }}>
                <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", margin: 0 }}>Reset your password</h1>
              </div>

              {/* Subtitle */}
              <div className="stagger-item d4" style={{ textAlign: "center", marginBottom: 36, maxWidth: 300, marginLeft: "auto", marginRight: "auto" }}>
                <p style={{ fontSize: "0.85rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.6, margin: 0 }}>
                  Enter your email and we&apos;ll send you a reset link
                </p>
              </div>

              {/* Email input */}
              <div className="stagger-item d5 input-group" style={{ marginBottom: 28 }}>
                <div className="reset-input-wrapper">
                  <input type="email" className="input" placeholder="Email address" style={{ paddingLeft: 46 }} />
                  <i className="fas fa-envelope reset-input-icon" />
                </div>
              </div>

              {/* Send Reset Link Button */}
              <div className="stagger-item d6" style={{ marginBottom: 28 }}>
                <button
                  className="btn btn-primary"
                  style={{ fontSize: "0.95rem", padding: "15px 28px", opacity: sending ? 0.8 : 1, pointerEvents: sending ? "none" : "auto" }}
                  onClick={handleSendReset}
                >
                  {sending ? (
                    <>
                      <i className="fas fa-circle-notch fa-spin" style={{ marginRight: 8 }} />
                      Sending...
                    </>
                  ) : (
                    "Send Reset Link"
                  )}
                </button>
              </div>

              {/* Sign in link */}
              <div className="stagger-item d7" style={{ textAlign: "center" }}>
                <p style={{ fontSize: "0.82rem", color: "#8585A0", fontWeight: 400, margin: 0 }}>
                  Remember your password?{" "}
                  <span
                    onClick={() => router.push("/login")}
                    style={{ fontWeight: 700, color: "#003DA5", textDecoration: "none", cursor: "pointer" }}
                  >
                    Sign in
                  </span>
                </p>
              </div>
            </div>
          )}

          {/* Success State */}
          {showSuccess && (
            <div style={{ paddingTop: 40, textAlign: "center" }}>
              <div className="reset-success-icon">
                <i className="fas fa-check" />
              </div>
              <div className="reset-success-text">
                <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1A1A2E", marginBottom: 8, marginTop: 0 }}>Check your inbox</h2>
                <p style={{ fontSize: "0.85rem", color: "#8585A0", lineHeight: 1.6, marginBottom: 32, maxWidth: 260, marginLeft: "auto", marginRight: "auto" }}>
                  We&apos;ve sent a password reset link to your email address
                </p>
                <button
                  className="btn btn-outline"
                  style={{ fontSize: "0.9rem", padding: "14px 28px", display: "inline-flex", width: "auto", minWidth: 200 }}
                  onClick={() => router.push("/login")}
                >
                  Back to Sign In
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .reset-back-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: white;
          border: 1.5px solid #E8E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          color: #1A1A2E;
          font-size: 16px;
          box-shadow: 0 2px 8px rgba(26,26,46,0.05);
          text-decoration: none;
        }
        .reset-back-btn:hover {
          border-color: #B3C6F0;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(26,26,46,0.08);
        }
        .reset-back-btn:active {
          transform: scale(0.95);
        }

        .reset-icon-circle {
          width: 88px;
          height: 88px;
          border-radius: 50%;
          background: linear-gradient(135deg, #EBF0FF 0%, #F5F0FF 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin: 0 auto;
        }
        .reset-lock-icon {
          font-size: 28px;
          color: #003DA5;
          position: relative;
          z-index: 2;
        }
        .reset-shield-badge {
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00A651 0%, #10B981 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 166, 81, 0.3);
          z-index: 3;
        }
        .reset-shield-badge i {
          font-size: 14px;
          color: white;
        }
        .reset-icon-circle::before {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 2px solid rgba(0, 61, 165, 0.08);
          animation: resetBreatheRing 3s ease-in-out infinite;
        }
        @keyframes resetBreatheRing {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.06); opacity: 0.3; }
        }

        .reset-input-wrapper {
          position: relative;
        }
        .reset-input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #B0B0C8;
          font-size: 15px;
          transition: color 0.2s ease;
          pointer-events: none;
        }
        .reset-input-wrapper input:focus ~ .reset-input-icon {
          color: #003DA5;
        }

        .reset-success-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #E6F9EE 0%, #ECFDF5 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          opacity: 0;
          transform: scale(0.5);
          animation: resetSuccessPop 0.6s 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .reset-success-icon i {
          font-size: 28px;
          color: #00A651;
        }
        @keyframes resetSuccessPop {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }

        .reset-success-text {
          opacity: 0;
          transform: translateY(12px);
          animation: resetSuccessTextIn 0.6s 0.5s ease-out forwards;
        }
        @keyframes resetSuccessTextIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </PhoneFrame>
  );
}
