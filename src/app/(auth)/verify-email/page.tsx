"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function VerifyEmailPage() {
  const router = useRouter();
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", "", "", ""]);
  const [seconds, setSeconds] = useState(59);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer
  useEffect(() => {
    if (seconds <= 0) {
      setCanResend(true);
      return;
    }
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  // Auto focus first input
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleOtpChange = useCallback((index: number, value: string) => {
    const cleaned = value.replace(/[^0-9]/g, "");
    const newValues = [...otpValues];
    newValues[index] = cleaned;
    setOtpValues(newValues);

    if (cleaned && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }, [otpValues]);

  const handleOtpKeyDown = useCallback((index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      const newValues = [...otpValues];
      newValues[index - 1] = "";
      setOtpValues(newValues);
      inputRefs.current[index - 1]?.focus();
    }
  }, [otpValues]);

  const handlePaste = useCallback((e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, 6);
    const newValues = [...otpValues];
    pasteData.split("").forEach((char, i) => {
      newValues[i] = char;
    });
    setOtpValues(newValues);
    if (pasteData.length > 0) {
      const focusIndex = Math.min(pasteData.length, 5);
      inputRefs.current[focusIndex]?.focus();
    }
  }, [otpValues]);

  const handleResend = useCallback(() => {
    if (!canResend) return;
    setSeconds(59);
    setCanResend(false);
    setOtpValues(["", "", "", "", "", ""]);
  }, [canResend]);

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "60px 20px 40px",
            flex: 1,
          }}
        >
          {/* Envelope icon */}
          <div className="stagger-item d1" style={{ marginBottom: 28 }}>
            <div className="verify-icon-circle">
              <i className="fas fa-envelope" />
            </div>
          </div>

          {/* Heading */}
          <div className="stagger-item d2" style={{ marginBottom: 8 }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", margin: 0 }}>Check your email</h1>
          </div>

          {/* Subtitle */}
          <div className="stagger-item d3" style={{ marginBottom: 36, maxWidth: 280 }}>
            <p style={{ fontSize: "0.85rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.6, margin: 0 }}>
              We&apos;ve sent a verification link to <span style={{ color: "#1A1A2E", fontWeight: 600 }}>jane@example.com</span>
            </p>
          </div>

          {/* OTP inputs */}
          <div className="stagger-item d4" style={{ marginBottom: 20 }}>
            <div className="verify-otp-container">
              {otpValues.map((val, i) => (
                <input
                  key={i}
                  ref={(el) => { inputRefs.current[i] = el; }}
                  type="text"
                  maxLength={1}
                  inputMode="numeric"
                  pattern="[0-9]"
                  className={`verify-otp-input${val ? " filled" : ""}`}
                  value={val}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                  onPaste={i === 0 ? handlePaste : undefined}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>
          </div>

          {/* Resend code */}
          <div className="stagger-item d5" style={{ marginBottom: 36 }}>
            <span
              className={`verify-resend-link${canResend ? " active" : ""}`}
              onClick={handleResend}
            >
              Resend code{!canResend && ` (00:${seconds.toString().padStart(2, "0")})`}
            </span>
          </div>

          {/* Verify button */}
          <div className="stagger-item d6" style={{ width: "100%", maxWidth: 320, marginBottom: 32 }}>
            <button
              className="btn btn-primary"
              style={{ fontSize: "0.95rem", padding: "15px 28px" }}
              onClick={() => router.push("/welcome")}
            >
              Verify Email
            </button>
          </div>

          {/* Reassurance */}
          <div className="stagger-item d7 verify-reassurance-bar">
            <i className="fas fa-shield-halved" />
            <span>This step keeps your account secure</span>
          </div>
        </div>
      </div>

      <style>{`
        .verify-icon-circle {
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
        .verify-icon-circle i {
          font-size: 34px;
          color: #003DA5;
          position: relative;
          z-index: 2;
        }
        .verify-icon-circle::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2px solid rgba(0, 61, 165, 0.1);
          animation: verifyIconPulse 2.5s ease-in-out infinite;
        }
        .verify-icon-circle::after {
          content: '';
          position: absolute;
          inset: -14px;
          border-radius: 50%;
          border: 2px solid rgba(0, 61, 165, 0.05);
          animation: verifyIconPulse 2.5s 0.4s ease-in-out infinite;
        }
        @keyframes verifyIconPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.4; }
        }

        .verify-otp-container {
          display: flex;
          gap: 10px;
          justify-content: center;
        }
        .verify-otp-input {
          width: 48px;
          height: 56px;
          text-align: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #1A1A2E;
          background: #F6F6FB;
          border: 2px solid #E8E8F0;
          border-radius: 14px;
          outline: none;
          transition: all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
          caret-color: #003DA5;
        }
        .verify-otp-input:focus {
          border-color: #003DA5;
          background: white;
          box-shadow: 0 0 0 4px rgba(0, 61, 165, 0.1);
          transform: translateY(-2px);
        }
        .verify-otp-input.filled {
          border-color: #003DA5;
          background: #EBF0FF;
        }

        .verify-resend-link {
          font-size: 0.82rem;
          font-weight: 600;
          color: #B0B0C8;
          text-decoration: none;
          cursor: default;
          transition: color 0.3s ease;
        }
        .verify-resend-link.active {
          color: #003DA5;
          cursor: pointer;
        }
        .verify-resend-link.active:hover {
          color: #2563EB;
        }

        .verify-reassurance-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.75rem;
          color: #8585A0;
          font-weight: 500;
        }
        .verify-reassurance-bar i {
          font-size: 12px;
          color: #00A651;
        }
      `}</style>
    </PhoneFrame>
  );
}
