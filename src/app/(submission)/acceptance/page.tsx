"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function AcceptancePage() {
  const router = useRouter();
  const [isSigned, setIsSigned] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const canSubmit = isSigned && isAuthorized;

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Accept & Authorize" backPath="/recommendation" />

        {/* Step Indicator */}
        <div className="stagger-item d1" style={{ padding: "0 20px 8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {[1, 2, 3].map((step) => (
              <div key={step} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg,#00A651,#10B981)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-check" style={{ fontSize: 10, color: "white" }} />
                </div>
                <div style={{ width: 32, height: 3, background: "#00A651", borderRadius: 9999 }} />
              </div>
            ))}
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "white" }}>4</span>
            </div>
          </div>
        </div>

        <div className="screen-content" style={{ paddingBottom: 40, gap: 16 }}>
          {/* Expert Recommendation Summary */}
          <div className="stagger-item d2" style={{ background: "linear-gradient(135deg,#E6F9EE,#ECFDF5)", borderRadius: 16, padding: 16, border: "1px solid rgba(0,166,81,0.15)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(0,166,81,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-thumbs-up" style={{ fontSize: 12, color: "#00A651" }} />
              </div>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#065F46" }}>Expert Recommends: Proceed with OIC</span>
            </div>
            <div style={{ fontSize: "0.78rem", color: "#065F46", lineHeight: 1.5 }}>Offer $8,500 for $47,250 debt. Strong case with 78% success probability.</div>
          </div>

          {/* Power of Attorney Section */}
          <div className="stagger-item d3">
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", marginBottom: 4 }}>Power of Attorney</div>
            <div style={{ fontSize: "0.82rem", color: "#8585A0", lineHeight: 1.5 }}>By signing Form 2848, you authorize your tax professional to represent you before the IRS</div>
          </div>

          {/* Form 2848 Preview Card */}
          <div className="stagger-item d4" style={{ background: "white", borderRadius: 16, padding: 16, border: "1px solid #E8E8F0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-file-signature" style={{ fontSize: 14, color: "#003DA5" }} />
              </div>
              <div>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E" }}>Form 2848</div>
                <div style={{ fontSize: "0.68rem", color: "#8585A0" }}>Power of Attorney and Declaration of Representative</div>
              </div>
            </div>
            {[
              {
                label: "Tax Years",
                value: (
                  <div style={{ display: "flex", gap: 6 }}>
                    {["2020", "2021", "2022"].map((y) => (
                      <span key={y} style={{ padding: "3px 10px", background: "#EBF0FF", borderRadius: 9999, fontSize: "0.7rem", fontWeight: 700, color: "#003DA5" }}>{y}</span>
                    ))}
                  </div>
                ),
              },
              { label: "Matters", value: "Income tax resolution" },
              { label: "Representative", value: <span style={{ fontWeight: 700 }}>Michael Chen, EA</span> },
              { label: "PTIN", value: <span style={{ letterSpacing: "0.03em" }}>P12345678</span> },
            ].map((row, i, arr) => (
              <div key={row.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: i < arr.length - 1 ? "1px solid #F0F0F5" : "none" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#5C5C7A" }}>{row.label}</span>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#1A1A2E" }}>{row.value}</span>
              </div>
            ))}
          </div>

          {/* Signature Area */}
          <div className="stagger-item d5">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>Your Signature</div>
            <div
              onClick={() => setIsSigned(!isSigned)}
              className={`signature-pad ${isSigned ? "signed" : ""}`}
            >
              {!isSigned ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <i className="fas fa-signature" style={{ fontSize: 22, color: "#B0B0C8" }} />
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#8585A0" }}>Tap to sign</span>
                </div>
              ) : (
                <span className="signature-text">Jane M. Doe</span>
              )}
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10, padding: "10px 14px", background: "#F6F6FB", borderRadius: 10 }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#5C5C7A" }}>Date</span>
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>March 15, 2026</span>
            </div>
          </div>

          {/* Authorization Checkbox */}
          <div className="stagger-item d6">
            <div
              onClick={() => setIsAuthorized(!isAuthorized)}
              className={`checkbox-row ${isAuthorized ? "checked" : ""}`}
            >
              <div className="checkbox-box">
                {isAuthorized && <i className="fas fa-check" style={{ fontSize: 12, color: "white" }} />}
              </div>
              <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E", lineHeight: 1.5 }}>I authorize this representative to act on my behalf with the IRS</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="stagger-item d7" style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 4 }}>
            <div
              onClick={canSubmit ? () => router.push("/dashboard") : undefined}
              style={{
                padding: 16,
                background: "linear-gradient(135deg,#00A651,#10B981)",
                borderRadius: 9999,
                textAlign: "center",
                color: "white",
                fontSize: "0.88rem",
                fontWeight: 700,
                boxShadow: "0 8px 24px rgba(0,166,81,0.2)",
                opacity: canSubmit ? 1 : 0.5,
                pointerEvents: canSubmit ? "auto" : "none",
                cursor: canSubmit ? "pointer" : "default",
                transition: "all 0.3s cubic-bezier(0.25,0.1,0.25,1)",
              }}
            >
              <i className="fas fa-pen-nib" style={{ marginRight: 6, fontSize: 13 }} /> Sign & Submit
            </div>
            <div style={{ padding: 10, textAlign: "center", color: "#003DA5", fontSize: "0.78rem", fontWeight: 600, cursor: "pointer" }}>
              <i className="fas fa-arrow-left" style={{ marginRight: 4, fontSize: 10 }} /> Review Terms Again
            </div>
          </div>

          {/* Reassurance */}
          <div className="stagger-item d8" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "4px 0" }}>
            <i className="fas fa-shield-halved" style={{ fontSize: 12, color: "#00A651" }} />
            <span style={{ fontSize: "0.72rem", color: "#8585A0", fontWeight: 500 }}>You can revoke authorization at any time</span>
          </div>
        </div>
      </div>

      <style>{`
        .signature-pad {
          width: 100%;
          height: 100px;
          background: #FAFAFF;
          border: 2px dashed #E8E8F0;
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .signature-pad:hover {
          border-color: #003DA5;
          background: #EBF0FF;
        }
        .signature-pad.signed {
          border-style: solid;
          border-color: #00A651;
          background: white;
        }
        .signature-text {
          font-family: 'Dancing Script', cursive, 'Plus Jakarta Sans', sans-serif;
          font-size: 1.8rem;
          color: #1A1A2E;
          font-style: italic;
        }
        .checkbox-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          cursor: pointer;
          padding: 14px 16px;
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 14px;
          transition: all 0.2s ease;
        }
        .checkbox-row:hover { border-color: #003DA5; }
        .checkbox-row.checked {
          border-color: #003DA5;
          background: #EBF0FF;
        }
        .checkbox-box {
          width: 24px;
          height: 24px;
          border-radius: 8px;
          border: 2px solid #D5D5E0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .checkbox-row.checked .checkbox-box {
          background: #003DA5;
          border-color: #003DA5;
        }
      `}</style>
    </PhoneFrame>
  );
}
