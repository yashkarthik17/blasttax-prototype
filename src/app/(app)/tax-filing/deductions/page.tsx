"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

const itemizedFields = [
  { label: "Medical expenses", sub: "Exceeding 7.5% AGI" },
  { label: "State/local taxes", sub: "SALT, max $10,000" },
  { label: "Mortgage interest", sub: undefined },
  { label: "Charitable contributions", sub: undefined },
  { label: "Other deductions", sub: undefined },
];

export default function DeductionsPage() {
  const router = useRouter();
  const [deductionType, setDeductionType] = useState<"standard" | "itemized">("standard");
  const [itemizedValues, setItemizedValues] = useState<number[]>([0, 0, 0, 0, 0]);

  const itemizedTotal = itemizedValues.reduce((a, b) => a + b, 0);

  const updateItemized = (index: number, value: string) => {
    const num = parseFloat(value.replace(/,/g, "")) || 0;
    setItemizedValues((prev) => {
      const next = [...prev];
      next[index] = num;
      return next;
    });
  };

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        {/* Header */}
        <div className="screen-header stagger-item d1">
          <button className="btn-icon" onClick={() => router.push("/tax-filing/w2-entry")}>
            <i className="fas fa-arrow-left" />
          </button>
          <span className="screen-header-title">Filing 2025</span>
          <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8585A0" }}>Step 4/6</div>
        </div>

        {/* Progress Bar */}
        <div className="stagger-item d1" style={{ padding: "0 20px 8px" }}>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "66.6%" }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingBottom: 40, gap: 16 }}>

          {/* Title */}
          <div className="stagger-item d2" style={{ paddingTop: 4 }}>
            <h1 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", marginBottom: 6 }}>Deductions</h1>
            <p style={{ fontSize: "0.85rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.5 }}>Choose your deduction method</p>
          </div>

          {/* Standard Deduction Option */}
          <div
            className="stagger-item d3"
            onClick={() => setDeductionType("standard")}
            style={{
              background: deductionType === "standard" ? "linear-gradient(145deg, #FAFAFF 0%, #EBF0FF 100%)" : "white",
              border: `2px solid ${deductionType === "standard" ? "#003DA5" : "#E8E8F0"}`,
              borderRadius: 16, padding: 18, cursor: "pointer", position: "relative", overflow: "hidden",
            }}
          >
            {deductionType === "standard" && (
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(135deg, #003DA5, #2563EB)" }} />
            )}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{
                width: 20, height: 20, borderRadius: "50%",
                border: `2px solid ${deductionType === "standard" ? "#003DA5" : "#D5D5E0"}`,
                background: deductionType === "standard" ? "#003DA5" : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2,
              }}>
                {deductionType === "standard" && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: "0.92rem", fontWeight: 800, color: "#1A1A2E" }}>Standard Deduction</span>
                  <span style={{ fontSize: "1rem", fontWeight: 900, color: "#003DA5" }}>$14,600</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                  <span style={{ padding: "3px 8px", background: "#E6F9EE", borderRadius: 9999, fontSize: "0.62rem", fontWeight: 700, color: "#00A651" }}>RECOMMENDED</span>
                  <span style={{ fontSize: "0.68rem", color: "#8585A0", fontWeight: 500 }}>for single filers</span>
                </div>
                <p style={{ fontSize: "0.76rem", color: "#8585A0", lineHeight: 1.5, margin: 0 }}>
                  Most taxpayers choose this. It&apos;s simpler and often results in a larger deduction.
                </p>
              </div>
            </div>
          </div>

          {/* Itemized Deduction Option */}
          <div
            className="stagger-item d4"
            onClick={() => setDeductionType("itemized")}
            style={{
              background: deductionType === "itemized" ? "linear-gradient(145deg, #FAFAFF 0%, #EBF0FF 100%)" : "white",
              border: `2px solid ${deductionType === "itemized" ? "#003DA5" : "#E8E8F0"}`,
              borderRadius: 16, padding: 18, cursor: "pointer", position: "relative", overflow: "hidden",
            }}
          >
            {deductionType === "itemized" && (
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(135deg, #003DA5, #2563EB)" }} />
            )}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{
                width: 20, height: 20, borderRadius: "50%",
                border: `2px solid ${deductionType === "itemized" ? "#003DA5" : "#D5D5E0"}`,
                background: deductionType === "itemized" ? "#003DA5" : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2,
              }}>
                {deductionType === "itemized" && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: "0.92rem", fontWeight: 800, color: "#1A1A2E" }}>Itemized Deductions</span>
                </div>
                <p style={{ fontSize: "0.76rem", color: "#8585A0", lineHeight: 1.5, margin: 0 }}>
                  If your itemized deductions exceed the standard deduction amount.
                </p>
              </div>
            </div>

            {/* Itemized Detail */}
            {deductionType === "itemized" && (
              <div onClick={(e) => e.stopPropagation()} style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #E8E8F0" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {itemizedFields.map((field, i) => (
                    <div key={field.label} style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
                      padding: "10px 0", borderBottom: i < itemizedFields.length - 1 ? "1px solid #F0F0F5" : "none",
                    }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#1A1A2E" }}>{field.label}</div>
                        {field.sub && <div style={{ fontSize: "0.65rem", color: "#8585A0" }}>{field.sub}</div>}
                      </div>
                      <div style={{ position: "relative", width: 110 }}>
                        <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: "0.88rem", fontWeight: 600, color: "#8585A0", zIndex: 1 }}>$</span>
                        <input
                          type="text"
                          placeholder="0.00"
                          onChange={(e) => updateItemized(i, e.target.value)}
                          style={{
                            width: "100%", padding: "10px 12px 10px 24px", background: "white",
                            border: "1.5px solid #E8E8F0", borderRadius: 12, fontFamily: "inherit",
                            fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E", outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Total */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0 0", marginTop: 8, borderTop: "2px solid #E8E8F0" }}>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>Total Itemized</span>
                  <span style={{ fontSize: "1rem", fontWeight: 900, color: "#1A1A2E" }}>${itemizedTotal.toLocaleString()}</span>
                </div>
              </div>
            )}
          </div>

          {/* Comparison */}
          {deductionType === "itemized" && (
            <div className="stagger-item d5" style={{ background: "linear-gradient(135deg, #EBF0FF, #D6E2FF)", borderRadius: 14, padding: 16 }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#003DA5", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 10 }}>Comparison</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#5C5C7A" }}>Standard</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1A1A2E" }}>$14,600</div>
                </div>
                <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#8585A0" }}>vs</div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#5C5C7A" }}>Itemized</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1A1A2E" }}>${itemizedTotal.toLocaleString()}</div>
                </div>
              </div>
              <div style={{
                padding: "8px 12px", borderRadius: 8, textAlign: "center",
                background: itemizedTotal > 14600 ? "rgba(0,61,165,0.1)" : "rgba(0,166,81,0.1)",
              }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: itemizedTotal > 14600 ? "#003DA5" : "#00A651" }}>
                  <i className="fas fa-circle-check" style={{ fontSize: 10 }} />{" "}
                  {itemizedTotal > 14600 ? "Itemized deductions save you more" : "Standard deduction saves you more"}
                </span>
              </div>
            </div>
          )}

          {/* Continue Button */}
          <div className="stagger-item d6" style={{ paddingTop: 8 }}>
            <button
              className="btn btn-primary"
              onClick={() => router.push("/tax-filing/credits")}
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
