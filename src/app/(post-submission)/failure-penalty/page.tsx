"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function FailurePenaltyPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Abatement Result" backPath="/cases/1042" />
        <div className="screen-content" style={{ paddingBottom: 100 }}>
          {/* Amber Header */}
          <div className="stagger-item d1" style={{ marginBottom: 20, padding: 20, background: "linear-gradient(135deg, #FFFBEB, #FEF3C7)", border: "1.5px solid rgba(245,166,35,0.25)", borderRadius: 18, textAlign: "center" }}>
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(245,166,35,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
              <i className="fas fa-ban" style={{ fontSize: 22, color: "#D97706" }} />
            </div>
            <h1 style={{ fontSize: "1.125rem", fontWeight: 800, color: "#92400E", lineHeight: 1.3, marginBottom: 4, margin: 0 }}>Penalty Abatement Denied</h1>
            <p style={{ fontSize: "0.8125rem", color: "#B45309", margin: 0, marginTop: 4 }}>Don&apos;t worry &mdash; there are next steps</p>
          </div>

          {/* Denial Reason Card */}
          <div className="stagger-item d2" style={{ marginBottom: 20 }}>
            <div style={{ padding: 16, background: "#FFF0F1", border: "1px solid rgba(230,57,70,0.15)", borderRadius: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <i className="fas fa-file-circle-xmark" style={{ color: "#E63946", fontSize: 14 }} />
                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#991B1B", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0 }}>Denial Reason</p>
              </div>
              <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#991B1B", marginBottom: 4, margin: 0 }}>FTA Not Available &mdash; TC 271 found in lookback period</p>
              <p style={{ fontSize: "0.75rem", color: "#B91C1C", margin: 0, marginTop: 4 }}>A prior penalty was abated in 2022</p>
            </div>
          </div>

          {/* Escalation Ladder */}
          <div className="stagger-item d3" style={{ marginBottom: 20 }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#5C5C7A", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14, margin: 0 }}>Escalation Path</p>

            {/* Step 1: FTA Denied */}
            <div className="ladder-step">
              <div className="ladder-connector" />
              <div className="ladder-num" style={{ background: "#FFF0F1", color: "#E63946" }}>1</div>
              <div className="ladder-content">
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1A1A2E", margin: 0 }}>FTA Denied</p>
                  <span style={{ fontSize: "0.625rem", fontWeight: 600, color: "white", background: "#E63946", padding: "2px 8px", borderRadius: 20 }}>You&apos;re here</span>
                </div>
              </div>
            </div>

            {/* Step 2: Reasonable Cause */}
            <div className="ladder-step">
              <div className="ladder-connector" />
              <div className="ladder-num" style={{ background: "#EBF0FF", color: "#003DA5" }}>2</div>
              <div className="ladder-content">
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1A1A2E", margin: 0 }}>Try Reasonable Cause</p>
                  <span style={{ fontSize: "0.625rem", fontWeight: 600, color: "white", background: "#003DA5", padding: "2px 8px", borderRadius: 20 }}>Next step</span>
                </div>
                <p style={{ fontSize: "0.75rem", color: "#5C5C7A", marginBottom: 8, margin: 0 }}>Qualifying reasons:</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
                  {[
                    { icon: "fa-heart-pulse", color: "#E63946", label: "Death/Illness" },
                    { icon: "fa-cloud-bolt", color: "#2563EB", label: "Natural disaster" },
                    { icon: "fa-fire", color: "#D97706", label: "Fire" },
                    { icon: "fa-building-columns", color: "#7C3AED", label: "IRS error" },
                  ].map((chip) => (
                    <span key={chip.label} className="reason-chip">
                      <i className={`fas ${chip.icon}`} style={{ fontSize: 10, color: chip.color }} /> {chip.label}
                    </span>
                  ))}
                </div>
                <p style={{ fontSize: "0.6875rem", color: "#003DA5", fontWeight: 600, marginTop: 8, margin: 0 }}>
                  <i className="fas fa-lightbulb" style={{ fontSize: 10, marginRight: 3 }} />
                  Stronger documentation = better odds
                </p>
              </div>
            </div>

            {/* Step 3: Form 843 */}
            <div className="ladder-step">
              <div className="ladder-connector" />
              <div className="ladder-num" style={{ background: "#F6F6FB", color: "#5C5C7A" }}>3</div>
              <div className="ladder-content">
                <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1A1A2E", margin: 0 }}>File Form 843 with Appeals</p>
                <p style={{ fontSize: "0.75rem", color: "#5C5C7A", margin: 0, marginTop: 4 }}>If reasonable cause is denied, escalate to IRS Appeals</p>
              </div>
            </div>

            {/* Step 4: CDP */}
            <div className="ladder-step">
              <div className="ladder-num" style={{ background: "#F6F6FB", color: "#5C5C7A" }}>4</div>
              <div className="ladder-content">
                <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1A1A2E", margin: 0 }}>CDP Hearing Option</p>
                <p style={{ fontSize: "0.75rem", color: "#5C5C7A", margin: 0, marginTop: 4 }}>If tied to collection notice, request CDP hearing</p>
              </div>
            </div>
          </div>

          {/* Reasonable Cause Preparation */}
          <div className="stagger-item d4" style={{ marginBottom: 16 }}>
            <div style={{ padding: 16, background: "white", border: "1.5px solid #E8E8F0", borderRadius: 16 }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#5C5C7A", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, margin: 0 }}>Reasonable Cause Preparation</p>
              <div style={{ marginBottom: 14 }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "#1A1A2E", display: "block", marginBottom: 6 }}>Describe your circumstances</label>
                <textarea
                  style={{
                    width: "100%",
                    minHeight: 80,
                    padding: "12px 14px",
                    background: "#FAFAFF",
                    border: "1.5px solid #E8E8F0",
                    borderRadius: 12,
                    fontFamily: "inherit",
                    fontSize: "0.8125rem",
                    color: "#1A1A2E",
                    resize: "vertical",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  placeholder="Explain what prevented you from filing/paying on time..."
                />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 600, color: "#1A1A2E", display: "block", marginBottom: 6 }}>Upload supporting documents</label>
                <div className="upload-zone">
                  <i className="fas fa-cloud-arrow-up" style={{ fontSize: 24, color: "#B0B0C8", marginBottom: 8 }} />
                  <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#1A1A2E", margin: 0 }}>Tap to upload files</p>
                  <p style={{ fontSize: "0.6875rem", color: "#5C5C7A", marginTop: 4, margin: 0 }}>Medical records, disaster declarations, written IRS advice</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="stagger-item d5">
            <button className="btn btn-primary" style={{ width: "100%" }}>
              <i className="fas fa-paper-plane" />
              Submit Reasonable Cause Request
            </button>
          </div>
          <div className="stagger-item d6" style={{ marginTop: 12, textAlign: "center" }}>
            <span onClick={() => router.push("/resolution-switching")} style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#003DA5", cursor: "pointer" }}>
              <i className="fas fa-headset" style={{ fontSize: 11, marginRight: 4 }} />
              Consult Expert
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .ladder-step {
          display: flex;
          gap: 14px;
          position: relative;
          padding-bottom: 0;
        }
        .ladder-connector {
          position: absolute;
          left: 19px;
          top: 40px;
          bottom: -8px;
          width: 2px;
          background: #E8E8F0;
        }
        .ladder-num {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 0.8125rem;
          font-weight: 800;
          z-index: 1;
        }
        .ladder-content {
          flex: 1;
          padding-bottom: 20px;
        }
        .upload-zone {
          border: 2px dashed #E8E8F0;
          border-radius: 14px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          background: #F6F6FB;
        }
        .upload-zone:hover {
          border-color: #003DA5;
          background: #EBF0FF;
        }
        .reason-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: white;
          border: 1px solid #E8E8F0;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #1A1A2E;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .reason-chip:hover {
          border-color: #003DA5;
          color: #003DA5;
          background: #EBF0FF;
        }
      `}</style>
    </PhoneFrame>
  );
}
