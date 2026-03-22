"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function PersonalInfoPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        {/* Header */}
        <div className="screen-header stagger-item d1">
          <button className="btn-icon" onClick={() => router.push("/tax-filing")}>
            <i className="fas fa-arrow-left" />
          </button>
          <span className="screen-header-title">Filing 2025</span>
          <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8585A0" }}>Step 1/6</div>
        </div>

        {/* Progress Bar */}
        <div className="stagger-item d1" style={{ padding: "0 20px 8px" }}>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "16.6%" }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingBottom: 40, gap: 18 }}>

          {/* Title */}
          <div className="stagger-item d2" style={{ paddingTop: 4 }}>
            <h1 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", marginBottom: 6 }}>
              Personal Information
            </h1>
            <p style={{ fontSize: "0.85rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.5 }}>
              Let&apos;s confirm your details
            </p>
          </div>

          {/* Pre-filled badge */}
          <div className="stagger-item d3" style={{
            display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px",
            background: "#EBF0FF", border: "1px solid rgba(0,61,165,0.1)", borderRadius: 9999,
            fontSize: "0.72rem", fontWeight: 600, color: "#003DA5", alignSelf: "flex-start",
          }}>
            <i className="fas fa-sparkles" style={{ fontSize: 10 }} />
            Pre-filled from your profile
          </div>

          {/* Form Fields */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: "Full Name", value: "Jane Doe", delay: "d4" },
              { label: "Social Security Number", value: "\u2022\u2022\u2022-\u2022\u2022-1234", delay: "d5", hasLock: true },
              { label: "Date of Birth", value: "January 15, 1985", delay: "d6" },
              { label: "Filing Status", value: "Single", delay: "d7" },
            ].map((field) => (
              <div key={field.label} className={`stagger-item ${field.delay}`} style={{
                background: "white", border: "1.5px solid #E8E8F0", borderRadius: 14,
                padding: "14px 16px", display: "flex", alignItems: "center",
                justifyContent: "space-between", cursor: "pointer",
              }}>
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 3 }}>
                    {field.label}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: "0.92rem", fontWeight: 600, color: "#1A1A2E", letterSpacing: field.hasLock ? "0.05em" : undefined }}>
                      {field.value}
                    </span>
                    {field.hasLock && <i className="fas fa-lock" style={{ fontSize: 10, color: "#00A651" }} />}
                  </div>
                </div>
                <i className="fas fa-pen" style={{ fontSize: 12, color: "#B0B0C8" }} />
              </div>
            ))}

            {/* Address */}
            <div className="stagger-item d8" style={{
              background: "white", border: "1.5px solid #E8E8F0", borderRadius: 14,
              padding: "14px 16px", display: "flex", alignItems: "center",
              justifyContent: "space-between", cursor: "pointer",
            }}>
              <div>
                <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 3 }}>
                  Mailing Address
                </div>
                <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#1A1A2E", lineHeight: 1.4 }}>
                  123 Main Street<br />
                  <span style={{ fontSize: "0.82rem" }}>Los Angeles, CA 90001</span>
                </div>
              </div>
              <i className="fas fa-pen" style={{ fontSize: 12, color: "#B0B0C8" }} />
            </div>
          </div>

          {/* Reassurance */}
          <div className="stagger-item d9" style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "#ECFDF5", borderRadius: 12 }}>
            <i className="fas fa-shield-check" style={{ fontSize: 14, color: "#00A651" }} />
            <span style={{ fontSize: "0.8rem", color: "#065F46", fontWeight: 500 }}>Everything look correct?</span>
          </div>

          {/* Continue Button */}
          <div className="stagger-item d9" style={{ paddingTop: 4 }}>
            <button
              className="btn btn-primary"
              onClick={() => router.push("/tax-filing/taxpayer")}
              style={{ fontSize: "0.95rem", fontWeight: 700, padding: "16px 28px" }}
            >
              Continue
              <i className="fas fa-arrow-right" style={{ fontSize: 14 }} />
            </button>
          </div>

        </div>
      </div>
    </PhoneFrame>
  );
}
