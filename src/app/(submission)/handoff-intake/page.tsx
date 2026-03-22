"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function HandoffIntakePage() {
  const router = useRouter();

  const documents = [
    { name: "Form 656", status: "Generated", done: true, delay: "0.3s" },
    { name: "Form 433-A(OIC)", status: "Generated", done: true, delay: "0.45s" },
    { name: "IRS Transcript", status: "Retrieved", done: true, delay: "0.6s" },
    { name: "Last 3 months bank statements", status: "Upload needed", done: false },
    { name: "Last 3 pay stubs", status: "Upload needed", done: false },
    { name: "Photo ID", status: "Upload needed", done: false },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <ScreenHeader title="Expert Handoff" backPath="/cases/1042" />

      <div className="screen">
        <div className="screen-content" style={{ paddingBottom: 40, gap: 20 }}>
          {/* Step Indicator */}
          <div className="stagger-item d1" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {[1, 2, 3, 4].map((step, i) => (
              <div key={step} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: i === 0 ? "linear-gradient(135deg,#003DA5,#2563EB)" : "#E8E8F0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, color: i === 0 ? "white" : "#B0B0C8" }}>
                    {step}
                  </span>
                </div>
                {i < 3 && (
                  <div
                    style={{
                      width: 40,
                      height: 3,
                      background: i === 0 ? "#003DA5" : "#E8E8F0",
                      borderRadius: 9999,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Heading */}
          <div className="stagger-item d2">
            <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", lineHeight: 1.25 }}>
              Prepare Your Case for Expert Review
            </div>
            <div style={{ fontSize: "0.82rem", color: "#8585A0", fontWeight: 500, marginTop: 8, lineHeight: 1.5 }}>
              We&apos;ll package everything your tax professional needs
            </div>
          </div>

          {/* Document Checklist */}
          <div
            className="stagger-item d3"
            style={{
              background: "white",
              borderRadius: 16,
              border: "1px solid #E8E8F0",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(26,26,46,0.04)",
            }}
          >
            {documents.map((doc, i) => (
              <div
                key={doc.name}
                className="doc-row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  borderBottom: i < documents.length - 1 ? "1px solid #F0F0F5" : "none",
                }}
              >
                {doc.done ? (
                  <div
                    className="check-pop"
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,#00A651,#10B981)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      animationDelay: doc.delay || "0s",
                    }}
                  >
                    <i className="fas fa-check" style={{ fontSize: 13, color: "white" }} />
                  </div>
                ) : (
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "#FFF0F1",
                      border: "2px dashed #E8E8F0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fas fa-arrow-up-from-bracket" style={{ fontSize: 11, color: "#E63946" }} />
                  </div>
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>{doc.name}</div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: doc.done ? "#00A651" : "#E63946",
                      fontWeight: 500,
                      marginTop: 1,
                    }}
                  >
                    {doc.status}
                  </div>
                </div>
                {doc.done ? (
                  <i className="fas fa-file-lines" style={{ fontSize: 16, color: "#B0B0C8" }} />
                ) : (
                  <button
                    className="upload-btn"
                    style={{
                      padding: "6px 14px",
                      background: "#EBF0FF",
                      border: "none",
                      borderRadius: 9999,
                      fontFamily: "inherit",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#003DA5",
                      cursor: "pointer",
                    }}
                  >
                    Upload
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Progress Summary */}
          <div className="stagger-item d4">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E" }}>3 of 6 documents ready</span>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#003DA5" }}>50%</span>
            </div>
            <div style={{ height: 6, background: "#E8E8F0", borderRadius: 9999, overflow: "hidden" }}>
              <div
                className="progress-fill-anim"
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg,#003DA5,#2563EB)",
                  borderRadius: 9999,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: -1,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#003DA5",
                    boxShadow: "0 0 8px rgba(0,61,165,0.4)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="stagger-item d5" style={{ paddingTop: 8 }}>
            <button
              className="btn btn-primary"
              style={{ fontSize: "0.95rem", fontWeight: 700, padding: "16px 28px", opacity: 0.5, cursor: "not-allowed" }}
              disabled
            >
              Continue to Review
              <i className="fas fa-arrow-right" style={{ fontSize: 13, marginLeft: 4 }} />
            </button>
            <div style={{ textAlign: "center", marginTop: 10, fontSize: "0.72rem", color: "#8585A0", fontWeight: 500 }}>
              <i className="fas fa-info-circle" style={{ fontSize: 10, marginRight: 2 }} />
              Upload remaining documents to continue
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .check-pop {
          animation: checkBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes checkBounce {
          0% { transform: scale(0); }
          60% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        .upload-btn {
          transition: all 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .upload-btn:hover {
          background: #003DA5 !important;
          color: white !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,61,165,0.2);
        }
        .upload-btn:active {
          transform: scale(0.96);
        }
        .progress-fill-anim {
          animation: fillProgress 1.2s 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both;
        }
        @keyframes fillProgress {
          from { width: 0%; }
          to { width: 50%; }
        }
        .doc-row {
          transition: all 0.25s ease;
        }
        .doc-row:hover {
          background: #F6F6FB;
        }
      `}</style>
    </PhoneFrame>
  );
}
