"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [strengthWidth, setStrengthWidth] = useState("0%");
  const [strengthColor, setStrengthColor] = useState("#E8E8F0");
  const [strengthLabel, setStrengthLabel] = useState("");
  const [strengthLabelColor, setStrengthLabelColor] = useState("#B0B0C8");

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    let score = 0;
    if (val.length >= 6) score++;
    if (val.length >= 10) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    if (val.length === 0) {
      setStrengthWidth("0%");
      setStrengthColor("#E8E8F0");
      setStrengthLabel("");
      setStrengthLabelColor("#B0B0C8");
    } else if (score <= 1) {
      setStrengthWidth("25%");
      setStrengthColor("#E63946");
      setStrengthLabel("Weak");
      setStrengthLabelColor("#E63946");
    } else if (score <= 3) {
      setStrengthWidth("55%");
      setStrengthColor("#F5A623");
      setStrengthLabel("Medium");
      setStrengthLabelColor("#F5A623");
    } else {
      setStrengthWidth("100%");
      setStrengthColor("#00A651");
      setStrengthLabel("Strong");
      setStrengthLabelColor("#00A651");
    }
  }, []);

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ position: "relative" }}>
        {/* Background orbs */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
          <div className="reg-orb reg-orb-1" />
          <div className="reg-orb reg-orb-2" />
        </div>

        <div className="screen-content" style={{ position: "relative", zIndex: 1, paddingTop: 8 }}>
          {/* Back button */}
          <div className="stagger-item d1" style={{ marginBottom: 16 }}>
            <button className="reg-back-btn" onClick={() => router.push("/login")}>
              <i className="fas fa-arrow-left" />
            </button>
          </div>

          {/* Heading */}
          <div className="stagger-item d2" style={{ marginBottom: 4 }}>
            <h1 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", margin: 0 }}>Create your account</h1>
          </div>

          <div className="stagger-item d3" style={{ marginBottom: 26 }}>
            <p style={{ fontSize: "0.85rem", color: "#8585A0", fontWeight: 400, margin: 0 }}>Start your journey to tax freedom</p>
          </div>

          {/* Full Name */}
          <div className="stagger-item d4 input-group">
            <div className="reg-input-wrapper">
              <input type="text" className="input" placeholder="Full name" style={{ paddingLeft: 44 }} />
              <i className="fas fa-user reg-input-icon" />
            </div>
          </div>

          {/* Email */}
          <div className="stagger-item d5 input-group">
            <div className="reg-input-wrapper">
              <input type="email" className="input" placeholder="Email address" style={{ paddingLeft: 44 }} />
              <i className="fas fa-envelope reg-input-icon" />
            </div>
          </div>

          {/* Phone */}
          <div className="stagger-item d6 input-group">
            <div className="reg-input-wrapper">
              <input type="tel" className="input" placeholder="Phone number" style={{ paddingLeft: 44 }} />
              <i className="fas fa-phone reg-input-icon" />
            </div>
          </div>

          {/* Password */}
          <div className="stagger-item d7 input-group" style={{ marginBottom: 2 }}>
            <div className="reg-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
                style={{ paddingLeft: 44, paddingRight: 44 }}
                onChange={handlePasswordChange}
              />
              <i className="fas fa-lock reg-input-icon" />
              <button
                className="reg-eye-toggle"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
              </button>
            </div>
            <div className="reg-strength-bar-bg">
              <div
                className="reg-strength-bar-fill"
                style={{ width: strengthWidth, background: strengthColor }}
              />
            </div>
            <div className="reg-strength-label" style={{ color: strengthLabelColor }}>
              {strengthLabel}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="stagger-item d8 input-group" style={{ marginTop: 14 }}>
            <div className="reg-input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="input"
                placeholder="Confirm password"
                style={{ paddingLeft: 44, paddingRight: 44 }}
              />
              <i className="fas fa-lock reg-input-icon" />
              <button
                className="reg-eye-toggle"
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <i className={`fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`} />
              </button>
            </div>
          </div>

          {/* Terms checkbox */}
          <div className="stagger-item d9" style={{ marginBottom: 22 }}>
            <label className="reg-custom-checkbox" onClick={() => setTermsChecked(!termsChecked)}>
              <div className="reg-checkbox-box" style={termsChecked ? { background: "#003DA5", borderColor: "#003DA5" } : undefined}>
                <i className="fas fa-check" style={{ opacity: termsChecked ? 1 : 0, transform: termsChecked ? "scale(1)" : "scale(0)", transition: "all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)" }} />
              </div>
              <span className="reg-checkbox-label">
                I agree to the <span style={{ color: "#003DA5", fontWeight: 600 }}>Terms of Service</span> and <span style={{ color: "#003DA5", fontWeight: 600 }}>Privacy Policy</span>
              </span>
            </label>
          </div>

          {/* Create Account Button */}
          <div className="stagger-item d10" style={{ marginBottom: 20 }}>
            <button
              className="btn btn-primary"
              style={{ fontSize: "0.95rem", padding: "15px 28px" }}
              onClick={() => router.push("/verify-email")}
            >
              Create Account
            </button>
          </div>

          {/* Sign in link */}
          <div className="stagger-item d11" style={{ textAlign: "center", marginBottom: 16 }}>
            <p style={{ fontSize: "0.82rem", color: "#8585A0", fontWeight: 400, margin: 0 }}>
              Already have an account?{" "}
              <span
                onClick={() => router.push("/login")}
                style={{ fontWeight: 700, color: "#003DA5", textDecoration: "none", cursor: "pointer" }}
              >
                Sign in
              </span>
            </p>
          </div>

          <div style={{ flex: 1 }} />

          {/* Reassurance */}
          <div className="stagger-item d11 reg-reassurance-bar" style={{ paddingBottom: 14 }}>
            <i className="fas fa-shield-halved" />
            <span>We never share your information</span>
          </div>
        </div>
      </div>

      <style>{`
        .reg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0;
          animation: regOrbFadeIn 1.5s ease-out forwards;
        }
        .reg-orb-1 {
          width: 180px; height: 180px;
          background: rgba(0, 61, 165, 0.06);
          top: -40px; left: -40px;
          animation-delay: 0.3s;
        }
        .reg-orb-2 {
          width: 160px; height: 160px;
          background: rgba(230, 57, 70, 0.04);
          bottom: 20%; right: -50px;
          animation-delay: 0.6s;
        }
        @keyframes regOrbFadeIn {
          from { opacity: 0; transform: scale(0.7); }
          to { opacity: 1; transform: scale(1); }
        }

        .reg-back-btn {
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
        }
        .reg-back-btn:hover {
          border-color: #B3C6F0;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(26,26,46,0.08);
        }
        .reg-back-btn:active {
          transform: scale(0.95);
        }

        .reg-input-wrapper {
          position: relative;
        }
        .reg-input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #B0B0C8;
          font-size: 14px;
          transition: color 0.2s ease;
          pointer-events: none;
        }
        .reg-input-wrapper input:focus ~ .reg-input-icon {
          color: #003DA5;
        }
        .reg-eye-toggle {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #B0B0C8;
          font-size: 14px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
          transition: color 0.2s ease;
        }
        .reg-eye-toggle:hover {
          color: #5C5C7A;
        }

        .reg-strength-bar-bg {
          height: 4px;
          border-radius: 9999px;
          background: #E8E8F0;
          margin-top: 8px;
          overflow: hidden;
        }
        .reg-strength-bar-fill {
          height: 100%;
          border-radius: 9999px;
          transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
          width: 0%;
        }
        .reg-strength-label {
          font-size: 0.7rem;
          font-weight: 600;
          margin-top: 4px;
          transition: color 0.3s ease;
          color: #B0B0C8;
        }

        .reg-custom-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .reg-checkbox-box {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          border: 2px solid #E8E8F0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          margin-top: 1px;
        }
        .reg-checkbox-box i {
          font-size: 10px;
          color: white;
        }
        .reg-checkbox-label {
          font-size: 0.8rem;
          color: #5C5C7A;
          line-height: 1.4;
          font-weight: 400;
        }

        .reg-reassurance-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.72rem;
          color: #8585A0;
          font-weight: 500;
        }
        .reg-reassurance-bar i {
          font-size: 12px;
          color: #00A651;
        }
      `}</style>
    </PhoneFrame>
  );
}
