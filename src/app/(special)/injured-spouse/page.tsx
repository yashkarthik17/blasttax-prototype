"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

const debtTags = [
  { icon: "fa-child", label: "Past-due child support" },
  { icon: "fa-landmark", label: "Federal tax debt" },
  { icon: "fa-building-columns", label: "State tax debt" },
  { icon: "fa-graduation-cap", label: "Student loans" },
];

const howItWorksSteps = [
  "IRS allocates income, deductions, and credits between spouses",
  "Your portion of the refund is returned to you",
  "Spouse's portion remains offset against their debt",
];

const requiredInfo = [
  "Income for both spouses",
  "Withholding amounts for each",
  "Credits claimed by each spouse",
];

export default function InjuredSpousePage() {
  const router = useRouter();
  const [selectedFiling, setSelectedFiling] = useState<number | null>(null);

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Injured Spouse" backPath="/cases/1042" />

        <div className="screen-content" style={{ paddingBottom: 100 }}>
          {/* Title */}
          <div className="stagger-item d1" style={{ marginBottom: 4 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.25 }}>
              Protect Your Share of the Refund
            </h1>
          </div>
          <div className="stagger-item d2" style={{ marginBottom: 20 }}>
            <p style={{ fontSize: "0.8125rem", color: "#5C5C7A" }}>Form 8379 &mdash; Injured Spouse Allocation</p>
          </div>

          {/* Important Distinction Card */}
          <div className="stagger-item d3" style={{ marginBottom: 16 }}>
            <div style={{ background: "linear-gradient(135deg, #FFF7ED, #FFFBEB)", border: "1.5px solid rgba(245,166,35,0.25)", borderRadius: 16, padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(245,166,35,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-scale-balanced" style={{ fontSize: 13, color: "#D97706" }} />
                </div>
                <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "#92400E" }}>Important Distinction</span>
              </div>

              <div className="is-distinction-row">
                <div className="is-distinction-box" style={{ background: "rgba(0,61,165,0.06)", border: "1px solid rgba(0,61,165,0.12)" }}>
                  <div style={{ fontSize: "0.6875rem", fontWeight: 800, color: "#003DA5", marginBottom: 4 }}>INJURED SPOUSE (8379)</div>
                  <p style={{ fontSize: "0.6875rem", color: "#5C5C7A", lineHeight: 1.4 }}>
                    Protects <strong>YOUR</strong> refund share from being offset against <strong>SPOUSE&apos;s</strong> debt
                  </p>
                </div>
                <div className="is-distinction-box" style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.12)" }}>
                  <div style={{ fontSize: "0.6875rem", fontWeight: 800, color: "#7C3AED", marginBottom: 4 }}>INNOCENT SPOUSE (8857)</div>
                  <p style={{ fontSize: "0.6875rem", color: "#5C5C7A", lineHeight: 1.4 }}>
                    Relieves you from <strong>TAX LIABILITY</strong> caused by spouse&apos;s error
                  </p>
                </div>
              </div>

              <div style={{ textAlign: "center", padding: "6px 10px", background: "rgba(245,166,35,0.1)", borderRadius: 8 }}>
                <p style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#92400E" }}>
                  <i className="fas fa-triangle-exclamation" style={{ marginRight: 4 }} />
                  These are completely different programs
                </p>
              </div>
            </div>
          </div>

          {/* When to Use */}
          <div className="stagger-item d4" style={{ marginBottom: 16 }}>
            <div className="is-info-card">
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-clipboard-check" style={{ fontSize: 13, color: "#003DA5" }} />
                </div>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>When to Use Form 8379</span>
              </div>
              <p style={{ fontSize: "0.75rem", color: "#5C5C7A", marginBottom: 10 }}>
                You filed a joint return and your share of the refund was (or will be) taken to pay your spouse&apos;s:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 0 }}>
                {debtTags.map((tag) => (
                  <span key={tag.label} className="is-debt-tag">
                    <i className={`fas ${tag.icon}`} /> {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="stagger-item d5" style={{ marginBottom: 16 }}>
            <div className="is-info-card">
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-gears" style={{ fontSize: 13, color: "#00A651" }} />
                </div>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>How It Works</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {howItWorksSteps.map((step, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#00A651" }}>{i + 1}</span>
                    </div>
                    <p style={{ fontSize: "0.8125rem", color: "#1A1A2E", fontWeight: 500 }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Filing Options */}
          <div className="stagger-item d6" style={{ marginBottom: 16 }}>
            <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 10 }}>Filing Options</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div
                className={`is-filing-option${selectedFiling === 0 ? " selected" : ""}`}
                onClick={() => setSelectedFiling(0)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className="fas fa-paperclip" style={{ fontSize: 14, color: "#003DA5" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>File with your return</p>
                    <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>Attach Form 8379 to joint return</p>
                  </div>
                </div>
              </div>
              <div
                className={`is-filing-option${selectedFiling === 1 ? " selected" : ""}`}
                onClick={() => setSelectedFiling(1)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: "#F5F0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className="fas fa-paper-plane" style={{ fontSize: 14, color: "#7C3AED" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>File separately after offset</p>
                    <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>Submit Form 8379 alone after refund is taken</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Processing Time */}
          <div className="stagger-item d7" style={{ marginBottom: 16 }}>
            <div style={{ padding: "14px 16px", background: "#EBF0FF", border: "1px solid rgba(0,61,165,0.1)", borderRadius: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <i className="fas fa-clock" style={{ fontSize: 13, color: "#003DA5" }} />
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#003DA5" }}>Processing Time</span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ flex: 1, padding: "8px 10px", background: "white", borderRadius: 10, textAlign: "center" }}>
                  <p style={{ fontSize: "0.875rem", fontWeight: 800, color: "#003DA5" }}>8-14 wks</p>
                  <p style={{ fontSize: "0.625rem", color: "#5C5C7A" }}>Filed with return</p>
                </div>
                <div style={{ flex: 1, padding: "8px 10px", background: "white", borderRadius: 10, textAlign: "center" }}>
                  <p style={{ fontSize: "0.875rem", fontWeight: 800, color: "#7C3AED" }}>11-14 wks</p>
                  <p style={{ fontSize: "0.625rem", color: "#5C5C7A" }}>Filed separately</p>
                </div>
              </div>
            </div>
          </div>

          {/* Required Info */}
          <div className="stagger-item d8" style={{ marginBottom: 20 }}>
            <div className="is-info-card">
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <i className="fas fa-file-lines" style={{ fontSize: 13, color: "#5C5C7A" }} />
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>Required Information</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {requiredInfo.map((info) => (
                  <div key={info} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <i className="fas fa-check" style={{ fontSize: 10, color: "#00A651" }} />
                    <p style={{ fontSize: "0.75rem", color: "#5C5C7A" }}>{info}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="stagger-item d9">
            <button
              onClick={() => router.push("/ai-chat")}
              style={{ width: "100%", height: 52, borderRadius: 16, background: "#00A651", color: "white", fontSize: "0.9375rem", fontWeight: 700, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
            >
              <i className="fas fa-file-signature" />
              File Form 8379
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .is-info-card {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 16px;
          padding: 16px;
        }
        .is-distinction-row {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }
        .is-distinction-box {
          flex: 1;
          padding: 12px;
          border-radius: 12px;
        }
        .is-filing-option {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 14px;
          padding: 14px 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .is-filing-option:hover {
          border-color: rgba(0, 61, 165, 0.3);
          box-shadow: 0 4px 16px rgba(26,26,46,0.06);
        }
        .is-filing-option.selected {
          border-color: #003DA5;
          background: #EBF0FF;
        }
        .is-debt-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: #FFF0F1;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #991B1B;
          margin: 3px 4px 3px 0;
        }
      `}</style>
    </PhoneFrame>
  );
}
