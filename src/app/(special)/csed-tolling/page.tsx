"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function CsedTollingPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="CSED Calculator" backPath="/cases/1042" />

        <div className="screen-content" style={{ paddingBottom: 120 }}>
          {/* Title */}
          <div className="stagger-item d1" style={{ marginBottom: 16 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.3 }}>
              Calculate Your True Expiration Date
            </h1>
          </div>

          {/* Input Section */}
          <div className="csed-info-card stagger-item d2" style={{ marginBottom: 16 }}>
            <div className="csed-input-group">
              <label className="csed-input-label">Tax Year</label>
              <input type="text" className="csed-input-field" value="2022" readOnly />
            </div>
            <div className="csed-input-group">
              <label className="csed-input-label">Original TC 150 Date</label>
              <input type="text" className="csed-input-field" value="Sep 10, 2022" readOnly />
            </div>
            <div style={{ marginBottom: 0 }}>
              <label className="csed-input-label">Base CSED (10 Years from TC 150)</label>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: 12, background: "#EBF0FF", borderRadius: 12 }}>
                <i className="fas fa-calendar" style={{ color: "#003DA5", fontSize: 14 }} />
                <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#003DA5" }}>Sep 10, 2032</span>
              </div>
            </div>
          </div>

          {/* Tolling Events */}
          <div className="stagger-item d3" style={{ marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>Tolling Events</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 }}>
            {/* Event 1: OIC Pending */}
            <div className="csed-event-card active stagger-item d3">
              <button className="csed-remove-btn"><i className="fas fa-xmark" style={{ fontSize: 10, color: "#E63946" }} /></button>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span className="csed-event-badge" style={{ background: "#EDE9FE", color: "#7C3AED" }}>
                  <i className="fas fa-hand-holding-dollar" style={{ fontSize: 10 }} /> OIC Pending
                </span>
                <span className="csed-event-badge" style={{ background: "#F6F6FB", color: "#5C5C7A" }}>TC 480</span>
              </div>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: "0.625rem", fontWeight: 600, color: "#5C5C7A", display: "block", marginBottom: 4 }}>Start</span>
                  <div style={{ padding: "8px 10px", background: "#F6F6FB", borderRadius: 8, fontSize: "0.75rem", fontWeight: 600, color: "#1A1A2E" }}>Mar 15, 2024</div>
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: "0.625rem", fontWeight: 600, color: "#5C5C7A", display: "block", marginBottom: 4 }}>End</span>
                  <div style={{ padding: "8px 10px", background: "#F6F6FB", borderRadius: 8, fontSize: "0.75rem", fontWeight: 600, color: "#1A1A2E" }}>Nov 15, 2024</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>Duration + 30 days</span>
                <span className="csed-toll-days" style={{ color: "#7C3AED" }}>8 mo + 30 days</span>
              </div>
            </div>

            {/* Event 2: Bankruptcy */}
            <div className="csed-event-card active stagger-item d4">
              <button className="csed-remove-btn"><i className="fas fa-xmark" style={{ fontSize: 10, color: "#E63946" }} /></button>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span className="csed-event-badge" style={{ background: "#FFF0F1", color: "#E63946" }}>
                  <i className="fas fa-building-columns" style={{ fontSize: 10 }} /> Bankruptcy
                </span>
                <span className="csed-event-badge" style={{ background: "#F6F6FB", color: "#5C5C7A" }}>TC 520</span>
              </div>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: "0.625rem", fontWeight: 600, color: "#5C5C7A", display: "block", marginBottom: 4 }}>Start</span>
                  <div style={{ padding: "8px 10px", background: "#F6F6FB", borderRadius: 8, fontSize: "0.75rem", fontWeight: 600, color: "#1A1A2E" }}>Sep 1, 2024</div>
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: "0.625rem", fontWeight: 600, color: "#5C5C7A", display: "block", marginBottom: 4 }}>End</span>
                  <div style={{ padding: "8px 10px", background: "#F6F6FB", borderRadius: 8, fontSize: "0.75rem", fontWeight: 600, color: "#1A1A2E" }}>Feb 1, 2025</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>Duration + 6 months</span>
                <span className="csed-toll-days" style={{ color: "#E63946" }}>5 mo + 6 mo</span>
              </div>
            </div>
          </div>

          {/* Add Event Button */}
          <button className="csed-add-event-btn stagger-item d5" style={{ marginBottom: 20 }}>
            <i className="fas fa-plus" style={{ fontSize: 12 }} />
            Add Tolling Event
          </button>

          {/* Concurrent Tolling Rules */}
          <div className="stagger-item d5" style={{ marginBottom: 8 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>Concurrent Tolling Rules</h2>
          </div>

          <div className="csed-info-card stagger-item d6" style={{ marginBottom: 6 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 12 }}>
              <i className="fas fa-circle-info" style={{ color: "#2563EB", fontSize: 14, marginTop: 2 }} />
              <p style={{ fontSize: "0.75rem", color: "#1A1A2E", lineHeight: 1.6 }}>
                If OIC + Bankruptcy overlap, tolling does <strong>NOT</strong> double. Only the longest concurrent period counts.
              </p>
            </div>

            {/* Visual Overlap Diagram */}
            <div style={{ marginBottom: 8 }}>
              <p style={{ fontSize: "0.625rem", fontWeight: 700, color: "#5C5C7A", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>Visual Overlap</p>
              <div className="csed-overlap-bar" style={{ marginBottom: 6 }}>
                <div className="csed-overlap-segment" style={{ left: "0%", width: "65%", background: "rgba(124,58,237,0.7)", zIndex: 1 }}>OIC (Mar-Nov 2024)</div>
              </div>
              <div className="csed-overlap-bar" style={{ marginBottom: 6 }}>
                <div className="csed-overlap-segment" style={{ left: "45%", width: "42%", background: "rgba(230,57,70,0.7)", zIndex: 1 }}>BK (Sep 24 - Feb 25)</div>
              </div>
              <div className="csed-overlap-bar">
                <div className="csed-overlap-segment" style={{ left: "45%", width: "20%", background: "rgba(245,166,35,0.8)", zIndex: 2 }}>Overlap (2 mo)</div>
              </div>
            </div>
          </div>

          {/* Calculated Result */}
          <div className="stagger-item d7" style={{ marginBottom: 8 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>Calculated Result</h2>
          </div>

          <div className="csed-result-card stagger-item d7" style={{ marginBottom: 16 }}>
            <div className="csed-result-row" style={{ borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: 10 }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 500, opacity: 0.8 }}>Base CSED</span>
              <span style={{ fontSize: "0.875rem", fontWeight: 700 }}>Sep 10, 2032</span>
            </div>
            <div className="csed-result-row" style={{ borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: 10 }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 500, opacity: 0.8 }}>Total Tolling</span>
              <span style={{ fontSize: "0.875rem", fontWeight: 700 }}>14 months</span>
            </div>
            <div style={{ padding: "6px 0 10px", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                <span style={{ fontSize: "0.625rem", padding: "3px 8px", background: "rgba(124,58,237,0.3)", borderRadius: 6 }}>OIC: 8 mo + 30 days</span>
                <span style={{ fontSize: "0.625rem", padding: "3px 8px", background: "rgba(230,57,70,0.3)", borderRadius: 6 }}>BK: 5 mo + 6 mo</span>
                <span style={{ fontSize: "0.625rem", padding: "3px 8px", background: "rgba(245,166,35,0.3)", borderRadius: 6 }}>Overlap: -2 mo</span>
              </div>
            </div>
            <div className="csed-result-row" style={{ paddingTop: 12, paddingBottom: 4 }}>
              <span style={{ fontSize: "0.875rem", fontWeight: 700 }}>Adjusted CSED</span>
              <span style={{ fontSize: "1.125rem", fontWeight: 800, color: "#FDE68A" }}>Nov 10, 2033</span>
            </div>
            <div style={{ textAlign: "center", paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.15)", marginTop: 4 }}>
              <p style={{ fontSize: "0.75rem", opacity: 0.7, marginBottom: 2 }}>Time Remaining</p>
              <p style={{ fontSize: "1.25rem", fontWeight: 800, letterSpacing: "-0.02em" }}>7 years, 8 months</p>
            </div>
          </div>

          {/* Warning */}
          <div className="csed-warning-card stagger-item d8" style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <i className="fas fa-triangle-exclamation" style={{ color: "#F5A623", fontSize: 16, marginTop: 1 }} />
              <p style={{ fontSize: "0.8125rem", color: "#1A1A2E", fontWeight: 600, lineHeight: 1.5 }}>
                Filing an OIC <strong>extends your CSED</strong>. Weigh this against potential savings.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", paddingBottom: 28, background: "linear-gradient(to top, #FAFAFF 70%, transparent)", zIndex: 10 }}>
          <button
            onClick={() => router.push("/ai-chat")}
            style={{ width: "100%", height: 52, borderRadius: 16, background: "linear-gradient(135deg, #00A651, #008C44)", color: "white", fontSize: "0.9375rem", fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(0,166,81,0.3)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
          >
            <i className="fas fa-floppy-disk" />
            Save Calculation
          </button>
        </div>
      </div>

      <style>{`
        .csed-info-card {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 16px;
          padding: 16px;
        }
        .csed-input-group { margin-bottom: 14px; }
        .csed-input-label {
          display: block;
          font-size: 0.6875rem;
          font-weight: 700;
          color: #5C5C7A;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
        }
        .csed-input-field {
          width: 100%;
          height: 44px;
          border: 1.5px solid #E8E8F0;
          border-radius: 12px;
          padding: 0 14px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #1A1A2E;
          background: white;
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
        }
        .csed-input-field:focus {
          border-color: #003DA5;
          box-shadow: 0 0 0 3px rgba(0,61,165,0.1);
        }
        .csed-event-card {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 14px;
          padding: 14px;
          position: relative;
          transition: all 0.3s ease;
        }
        .csed-event-card.active {
          border-color: rgba(0, 61, 165, 0.25);
          box-shadow: 0 4px 16px rgba(26,26,46,0.06);
        }
        .csed-event-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 8px;
          font-size: 0.6875rem;
          font-weight: 700;
        }
        .csed-remove-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: #FFF0F1;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .csed-remove-btn:hover {
          background: #E63946;
        }
        .csed-remove-btn:hover i { color: white !important; }
        .csed-add-event-btn {
          width: 100%;
          height: 44px;
          border: 2px dashed #E8E8F0;
          border-radius: 12px;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.8125rem;
          font-weight: 700;
          color: #003DA5;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        .csed-add-event-btn:hover {
          border-color: #003DA5;
          background: #EBF0FF;
        }
        .csed-toll-days {
          font-size: 0.6875rem;
          font-weight: 700;
          font-family: 'Inter', monospace;
          padding: 3px 8px;
          border-radius: 6px;
          background: #F6F6FB;
        }
        .csed-result-card {
          background: linear-gradient(135deg, #003DA5, #002D7A);
          border-radius: 18px;
          padding: 20px;
          color: white;
        }
        .csed-result-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
        }
        .csed-overlap-bar {
          height: 32px;
          border-radius: 8px;
          background: #F6F6FB;
          position: relative;
          overflow: hidden;
        }
        .csed-overlap-segment {
          position: absolute;
          top: 0;
          height: 100%;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.5625rem;
          font-weight: 700;
          color: white;
        }
        .csed-warning-card {
          background: #FFFBEB;
          border: 1.5px solid #FDE68A;
          border-radius: 14px;
          padding: 14px;
        }
      `}</style>
    </PhoneFrame>
  );
}
