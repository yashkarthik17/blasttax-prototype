"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

function isValidEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

export default function EmailPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [tipsChecked, setTipsChecked] = useState(false);

  const isValid = isValidEmail(email);

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ position: "relative" }}>
        <div className="floating-shapes">
          <div className="float-shape float-shape-1" />
          <div className="float-shape float-shape-2" />
        </div>

        {/* Header */}
        <div style={{ padding: "8px 20px 0", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <button
              onClick={() => router.push("/dob")}
              style={{
                width: 40, height: 40, borderRadius: 12, border: "none",
                background: "var(--color-surface-alt)", color: "var(--color-fg)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, transition: "all 0.2s ease",
              }}
            >
              <i className="fas fa-arrow-left" />
            </button>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-muted-light)" }}>Step 3 of 9</span>
          </div>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "33%" }} />
          </div>
        </div>

        {/* Question */}
        <div className="stagger-item d1" style={{ padding: "24px 24px 0", position: "relative", zIndex: 2 }}>
          <h1 style={{
            fontSize: "1.625rem", fontWeight: 800, color: "var(--color-fg)",
            lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: 8,
          }}>
            What&apos;s your email?
          </h1>
          <p style={{ fontSize: "0.9375rem", color: "var(--color-muted)", lineHeight: 1.5, marginBottom: 32 }}>
            We&apos;ll send important updates about your case here
          </p>
        </div>

        {/* Form */}
        <div style={{ padding: "0 24px", flex: 1, position: "relative", zIndex: 2 }}>
          <div className="stagger-item d2">
            <label style={{
              display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-muted)",
              textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6,
            }}>
              Email Address
            </label>
            <div style={{ position: "relative" }}>
              <i
                className="fas fa-envelope"
                style={{
                  position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
                  color: "var(--color-placeholder)", fontSize: 15, transition: "color 0.2s ease",
                }}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoFocus
                style={{
                  width: "100%", padding: "14px 16px 14px 44px",
                  background: "var(--color-surface-alt)",
                  border: "1.5px solid var(--color-border)", borderRadius: 12,
                  fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500,
                  color: "var(--color-fg)", transition: "all 0.2s ease", outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          {/* Checkbox */}
          <div
            className="stagger-item d3"
            onClick={() => setTipsChecked(!tipsChecked)}
            style={{
              display: "flex", alignItems: "flex-start", gap: 12, marginTop: 24, cursor: "pointer",
            }}
          >
            <div style={{
              width: 22, height: 22,
              border: tipsChecked ? "2px solid var(--color-primary)" : "2px solid var(--color-border)",
              borderRadius: 6, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s ease", marginTop: 1,
              background: tipsChecked ? "var(--color-primary)" : "transparent",
            }}>
              {tipsChecked && <i className="fas fa-check" style={{ color: "white", fontSize: 11 }} />}
            </div>
            <span style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.5 }}>
              Send me helpful tax tips and updates
            </span>
          </div>
        </div>

        {/* Continue */}
        <div style={{ padding: "16px 24px 40px", flexShrink: 0, position: "relative", zIndex: 2 }}>
          <button
            className="btn btn-primary"
            onClick={() => router.push("/filing")}
            style={{
              fontSize: "1rem", padding: "16px 28px",
              opacity: isValid ? 1 : 0.5,
              pointerEvents: isValid ? "auto" : "none",
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
