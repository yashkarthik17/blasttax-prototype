"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function NamePage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const isValid = firstName.trim() !== "" && lastName.trim() !== "";

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ position: "relative" }}>
        {/* Floating shapes */}
        <div className="floating-shapes">
          <div className="float-shape float-shape-1" />
          <div className="float-shape float-shape-2" />
        </div>

        {/* Header: back + progress + step */}
        <div style={{ padding: "8px 20px 0", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <button
              onClick={() => router.push("/welcome")}
              style={{
                width: 40, height: 40, borderRadius: 12, border: "none",
                background: "var(--color-surface-alt)", color: "var(--color-fg)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, transition: "all 0.2s ease",
              }}
            >
              <i className="fas fa-arrow-left" />
            </button>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-muted-light)" }}>Step 1 of 9</span>
          </div>
          {/* Progress bar */}
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "11%" }} />
          </div>
        </div>

        {/* Question */}
        <div className="stagger-item d1" style={{ padding: "24px 24px 0", position: "relative", zIndex: 2 }}>
          <h1 style={{
            fontSize: "1.625rem", fontWeight: 800, color: "var(--color-fg)",
            lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: 8,
          }}>
            What&apos;s your name?
          </h1>
          <p style={{ fontSize: "0.9375rem", color: "var(--color-muted)", lineHeight: 1.5, marginBottom: 32 }}>
            We&apos;ll use this to personalize your experience
          </p>
        </div>

        {/* Form */}
        <div style={{ padding: "0 24px", flex: 1, position: "relative", zIndex: 2 }}>
          <div className="stagger-item d2" style={{ marginBottom: 20 }}>
            <label style={{
              display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-muted)",
              textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6,
            }}>
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="e.g. Alex"
              autoFocus
              style={{
                width: "100%", padding: "14px 16px", background: "var(--color-surface-alt)",
                border: "1.5px solid var(--color-border)", borderRadius: 12,
                fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500,
                color: "var(--color-fg)", transition: "all 0.2s ease", outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div className="stagger-item d3" style={{ marginBottom: 20 }}>
            <label style={{
              display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-muted)",
              textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6,
            }}>
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="e.g. Johnson"
              style={{
                width: "100%", padding: "14px 16px", background: "var(--color-surface-alt)",
                border: "1.5px solid var(--color-border)", borderRadius: 12,
                fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500,
                color: "var(--color-fg)", transition: "all 0.2s ease", outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Reassurance */}
          <div className="stagger-item d4" style={{
            display: "flex", alignItems: "center", gap: 8,
            fontSize: 13, color: "var(--color-muted-light)",
          }}>
            <i className="fas fa-lock" style={{ fontSize: 13 }} />
            <span>We keep your information private and secure</span>
          </div>
        </div>

        {/* Continue button */}
        <div style={{ padding: "16px 24px 40px", flexShrink: 0, position: "relative", zIndex: 2 }}>
          <button
            className="btn btn-primary"
            onClick={() => router.push("/dob")}
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
