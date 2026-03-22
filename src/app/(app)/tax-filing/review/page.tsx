"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function TaxReviewPage() {
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        {/* Header */}
        <div className="screen-header stagger-item d1">
          <button className="btn-icon" onClick={() => router.push("/tax-filing/credits")}>
            <i className="fas fa-arrow-left" />
          </button>
          <span className="screen-header-title">Filing 2025</span>
          <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8585A0" }}>Step 6/6</div>
        </div>

        {/* Progress Bar */}
        <div className="stagger-item d1" style={{ padding: "0 20px 8px" }}>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "100%" }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingBottom: 40, gap: 16 }}>

          {/* Title */}
          <div className="stagger-item d2" style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 4 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="fas fa-clipboard-check" style={{ fontSize: 16, color: "#00A651" }} />
            </div>
            <div>
              <h1 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em" }}>Review Your Return</h1>
            </div>
          </div>

          {/* Tax Year Badge */}
          <div className="stagger-item d2">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 12px",
              background: "#EBF0FF", border: "1px solid rgba(0,61,165,0.1)", borderRadius: 9999,
              fontSize: "0.72rem", fontWeight: 600, color: "#003DA5",
            }}>
              <i className="fas fa-calendar" style={{ fontSize: 10 }} />
              Tax Year 2025
            </div>
          </div>

          {/* Income Summary Card */}
          <div className="stagger-item d3" style={{ background: "white", borderRadius: 16, padding: "16px 18px", border: "1px solid #E8E8F0" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 0 8px" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em" }}>Income</span>
              <i className="fas fa-chevron-down" style={{ fontSize: 10, color: "#B0B0C8" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #F0F0F5" }}>
              <span style={{ fontSize: "0.85rem", color: "#5C5C7A", fontWeight: 500 }}>W-2 Wages</span>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>$52,000</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", paddingTop: 8 }}>
              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E" }}>Total Income</span>
              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E" }}>$52,000</span>
            </div>
          </div>

          {/* Adjustments Card */}
          <div className="stagger-item d4" style={{ background: "white", borderRadius: 16, padding: "16px 18px", border: "1px solid #E8E8F0" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 0 8px" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em" }}>Adjustments & Deductions</span>
              <i className="fas fa-chevron-down" style={{ fontSize: 10, color: "#B0B0C8" }} />
            </div>
            {[
              { label: "Adjustments", value: "-$2,500", color: "#E63946" },
              { label: "Adjusted Gross Income", value: "$49,500", color: "#1A1A2E" },
            ].map((row) => (
              <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #F0F0F5" }}>
                <span style={{ fontSize: "0.85rem", color: "#5C5C7A", fontWeight: 500 }}>{row.label}</span>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: row.color }}>{row.value}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #F0F0F5" }}>
              <div>
                <span style={{ fontSize: "0.85rem", color: "#5C5C7A", fontWeight: 500 }}>Deductions</span>
                <div style={{ fontSize: "0.68rem", color: "#B0B0C8", marginTop: 1 }}>Standard Deduction</div>
              </div>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#E63946" }}>-$14,600</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", paddingTop: 8 }}>
              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E" }}>Taxable Income</span>
              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E" }}>$34,900</span>
            </div>
          </div>

          {/* Tax Calculation Card (Highlighted) */}
          <div className="stagger-item d5" style={{
            background: "linear-gradient(135deg,#E6F9EE 0%,#F0FDF8 100%)",
            borderRadius: 20, padding: 20, border: "1px solid rgba(0,166,81,0.15)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(135deg,#00A651,#10B981)" }} />
            <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(0,166,81,0.06)" }} />

            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#065F46", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Tax Calculation</div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(0,166,81,0.1)" }}>
              <span style={{ fontSize: "0.85rem", color: "#065F46", fontWeight: 500 }}>Tax Liability</span>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>$3,958</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0" }}>
              <span style={{ fontSize: "0.85rem", color: "#065F46", fontWeight: 500 }}>Federal Withholding</span>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#00A651" }}>-$6,240</span>
            </div>

            <div style={{ height: 1, background: "rgba(0,166,81,0.15)", margin: "8px 0 14px" }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "#065F46" }}>Estimated Refund</span>
              <span style={{ fontSize: "1.6rem", fontWeight: 900, color: "#00A651", letterSpacing: "-0.02em" }}>$2,282</span>
            </div>
          </div>

          {/* Confirmation Checkbox */}
          <div
            className="stagger-item d6"
            onClick={() => setConfirmed(!confirmed)}
            style={{
              display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 16px",
              background: "white", border: "1.5px solid #E8E8F0", borderRadius: 14, cursor: "pointer",
            }}
          >
            <div style={{
              width: 22, height: 22, borderRadius: 6,
              border: `2px solid ${confirmed ? "#003DA5" : "#D5D5E0"}`,
              background: confirmed ? "#003DA5" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              {confirmed && <i className="fas fa-check" style={{ fontSize: 11, color: "white" }} />}
            </div>
            <span style={{ fontSize: "0.84rem", color: "#5C5C7A", fontWeight: 500, lineHeight: 1.5 }}>
              I confirm all information is accurate and complete to the best of my knowledge
            </span>
          </div>

          {/* File Return Button */}
          <div className="stagger-item d7" style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 4 }}>
            <button
              className="btn btn-primary"
              onClick={() => router.push("/submission-tracker")}
              style={{ fontSize: "0.95rem", fontWeight: 700, padding: "16px 28px", background: "linear-gradient(135deg,#00A651,#10B981)" }}
            >
              <i className="fas fa-paper-plane" style={{ fontSize: 14 }} />
              File Return
            </button>
            <button
              className="btn btn-ghost"
              style={{ fontSize: "0.88rem", fontWeight: 600, color: "#8585A0", padding: 12 }}
            >
              <i className="fas fa-floppy-disk" style={{ fontSize: 14 }} />
              Save as Draft
            </button>
          </div>

          {/* Reassurance */}
          <div className="stagger-item d8" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "4px 0" }}>
            <i className="fas fa-shield-check" style={{ fontSize: 11, color: "#00A651" }} />
            <span style={{ fontSize: "0.72rem", color: "#8585A0", fontWeight: 500 }}>Powered by IRS e-File</span>
          </div>

        </div>
      </div>
    </PhoneFrame>
  );
}
