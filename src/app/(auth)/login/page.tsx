"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ position: "relative" }}>
        {/* Background orbs */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
          <div className="login-orb login-orb-1" />
          <div className="login-orb login-orb-2" />
          <div className="login-orb login-orb-3" />
        </div>

        <div className="screen-content" style={{ position: "relative", zIndex: 1, paddingTop: 24 }}>
          {/* Logo */}
          <div className="stagger-item d1" style={{ textAlign: "center", marginBottom: 8 }}>
            <div style={{ fontSize: "1.7rem", fontWeight: 900, letterSpacing: "-0.02em" }}>
              <span className="logo-blast">Blast</span><span className="logo-tax">Tax</span>
            </div>
          </div>

          {/* Heading */}
          <div className="stagger-item d2" style={{ textAlign: "center", marginBottom: 4 }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", margin: 0 }}>Welcome back</h1>
          </div>

          {/* Subtitle */}
          <div className="stagger-item d3" style={{ textAlign: "center", marginBottom: 32 }}>
            <p style={{ fontSize: "0.85rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.5, margin: 0 }}>Sign in to continue your tax resolution journey</p>
          </div>

          {/* Email input */}
          <div className="stagger-item d4 input-group">
            <div className="login-input-wrapper">
              <input type="email" className="input" placeholder="Email address" style={{ paddingLeft: 46 }} />
              <i className="fas fa-envelope login-input-icon" />
            </div>
          </div>

          {/* Password input */}
          <div className="stagger-item d5 input-group">
            <div className="login-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
                style={{ paddingLeft: 46, paddingRight: 46 }}
              />
              <i className="fas fa-lock login-input-icon" />
              <button
                className="login-eye-toggle"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div className="stagger-item d5" style={{ textAlign: "right", marginTop: -8, marginBottom: 24 }}>
            <span
              onClick={() => router.push("/reset-password")}
              style={{ fontSize: "0.8rem", fontWeight: 600, color: "#003DA5", textDecoration: "none", cursor: "pointer" }}
            >
              Forgot password?
            </span>
          </div>

          {/* Sign In Button */}
          <div className="stagger-item d6" style={{ marginBottom: 28 }}>
            <button
              className="btn btn-primary"
              style={{ fontSize: "0.95rem", padding: "15px 28px" }}
              onClick={() => router.push("/welcome")}
            >
              Sign In
            </button>
          </div>

          {/* Divider */}
          <div className="stagger-item d7 login-divider-text" style={{ marginBottom: 24 }}>
            <span>or continue with</span>
          </div>

          {/* Social auth */}
          <div className="stagger-item d8" style={{ display: "flex", gap: 12, marginBottom: 28 }}>
            <button className="login-social-btn">
              <svg width="20" height="20" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
              </svg>
              Google
            </button>
            <button className="login-social-btn">
              <i className="fab fa-apple" style={{ fontSize: 20, color: "#1A1A2E" }} />
              Apple
            </button>
          </div>

          {/* Sign up link */}
          <div className="stagger-item d9" style={{ textAlign: "center", marginBottom: 20 }}>
            <p style={{ fontSize: "0.82rem", color: "#8585A0", fontWeight: 400, margin: 0 }}>
              Don&apos;t have an account?{" "}
              <span
                onClick={() => router.push("/register")}
                style={{ fontWeight: 700, color: "#003DA5", textDecoration: "none", cursor: "pointer" }}
              >
                Sign up
              </span>
            </p>
          </div>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Reassurance */}
          <div className="stagger-item d10 login-reassurance-bar" style={{ marginBottom: 16, paddingBottom: 10 }}>
            <i className="fas fa-lock" />
            <span>Your data is encrypted and secure</span>
          </div>
        </div>
      </div>

      <style>{`
        .login-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0;
          animation: loginOrbFadeIn 1.5s ease-out forwards;
        }
        .login-orb-1 {
          width: 200px; height: 200px;
          background: rgba(0, 61, 165, 0.06);
          top: -60px; right: -40px;
          animation-delay: 0.3s;
        }
        .login-orb-2 {
          width: 180px; height: 180px;
          background: rgba(230, 57, 70, 0.04);
          bottom: 15%; left: -50px;
          animation-delay: 0.6s;
        }
        .login-orb-3 {
          width: 140px; height: 140px;
          background: rgba(0, 166, 81, 0.04);
          top: 45%; right: -30px;
          animation-delay: 0.9s;
        }
        @keyframes loginOrbFadeIn {
          from { opacity: 0; transform: scale(0.7); }
          to { opacity: 1; transform: scale(1); }
        }

        .login-input-wrapper {
          position: relative;
        }
        .login-input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #B0B0C8;
          font-size: 15px;
          transition: color 0.2s ease;
          pointer-events: none;
        }
        .login-input-wrapper input:focus ~ .login-input-icon {
          color: #003DA5;
        }
        .login-eye-toggle {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #B0B0C8;
          font-size: 15px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
          transition: color 0.2s ease;
        }
        .login-eye-toggle:hover {
          color: #5C5C7A;
        }

        .login-social-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 16px;
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 9999px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          color: #1A1A2E;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .login-social-btn:hover {
          border-color: #B3C6F0;
          box-shadow: 0 4px 16px rgba(26,26,46,0.06);
          transform: translateY(-1px);
        }
        .login-social-btn:active {
          transform: scale(0.97);
        }

        .login-divider-text {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .login-divider-text::before,
        .login-divider-text::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #E8E8F0;
        }
        .login-divider-text span {
          font-size: 0.75rem;
          font-weight: 600;
          color: #B0B0C8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        .login-reassurance-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.72rem;
          color: #8585A0;
          font-weight: 500;
        }
        .login-reassurance-bar i {
          font-size: 11px;
          color: #00A651;
        }
      `}</style>
    </PhoneFrame>
  );
}
