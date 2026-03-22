"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { BottomNav } from "@/components/BottomNav";

export default function TaxFilingPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Tax Filing" backPath="/dashboard" rightAction={
          <button className="btn-icon">
            <i className="fas fa-circle-info" style={{ fontSize: 16 }} />
          </button>
        } />

        <div className="screen-content" style={{ paddingBottom: 100, gap: 18 }}>

          {/* Hero Card */}
          <div className="stagger-item d2" style={{
            background: "linear-gradient(160deg,#003DA5 0%,#2563EB 60%,#4F46E5 100%)",
            borderRadius: 20, padding: 24, position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
            <div style={{ position: "absolute", bottom: -20, left: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 14,
                  background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <i className="fas fa-file-lines" style={{ fontSize: 18, color: "white" }} />
                </div>
              </div>
              <h1 style={{ fontSize: "1.3rem", fontWeight: 800, color: "white", letterSpacing: "-0.01em", marginBottom: 6 }}>
                File or Amend Your Returns
              </h1>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.8)", fontWeight: 400, lineHeight: 1.5, marginBottom: 12 }}>
                Get current with the IRS to unlock resolution options
              </p>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                padding: "5px 12px", background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 9999, fontSize: "0.7rem", fontWeight: 600, color: "white",
              }}>
                <i className="fas fa-star" style={{ fontSize: 9 }} />
                Required for resolution eligibility
              </div>
            </div>
          </div>

          {/* Tax Year Cards */}
          <div className="stagger-item d3">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, padding: "0 4px" }}>
              Filing Status by Year
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

              {/* 2025 - Not Filed */}
              <div className="stagger-item d4" style={{
                background: "white", borderRadius: 16, padding: "16px 18px",
                border: "1px solid #E8E8F0", display: "flex", alignItems: "center", gap: 14, cursor: "pointer",
              }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "#FFF0F1", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#E63946" }}>25</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A2E" }}>2025</span>
                    <span style={{ padding: "2px 8px", background: "#FFF0F1", borderRadius: 9999, fontSize: "0.65rem", fontWeight: 600, color: "#E63946" }}>Not Filed</span>
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 2 }}>Federal & State returns due</div>
                </div>
                <button
                  onClick={() => router.push("/tax-filing/personal")}
                  style={{
                    padding: "6px 14px", borderRadius: 9999, fontSize: "0.72rem", fontWeight: 600,
                    border: "none", cursor: "pointer", fontFamily: "inherit",
                    background: "linear-gradient(135deg,#E63946,#DC2626)", color: "white",
                    boxShadow: "0 2px 8px rgba(230,57,70,0.2)",
                  }}
                >
                  File Now
                </button>
              </div>

              {/* 2024 - Filed */}
              <div className="stagger-item d5" style={{
                background: "white", borderRadius: 16, padding: "16px 18px",
                border: "1px solid #E8E8F0", display: "flex", alignItems: "center", gap: 14, cursor: "pointer",
              }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#00A651" }}>24</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A2E" }}>2024</span>
                    <span style={{ padding: "2px 8px", background: "#E6F9EE", borderRadius: 9999, fontSize: "0.65rem", fontWeight: 600, color: "#00A651" }}>Filed</span>
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 2 }}>Filed on Apr 12, 2025</div>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <a href="#" style={{ fontSize: "0.72rem", fontWeight: 600, color: "#003DA5" }}>View</a>
                  <span style={{ color: "#E8E8F0" }}>|</span>
                  <a href="#" style={{ fontSize: "0.72rem", fontWeight: 600, color: "#8585A0" }}>Amend</a>
                </div>
              </div>

              {/* 2023 - Filed */}
              <div className="stagger-item d6" style={{
                background: "white", borderRadius: 16, padding: "16px 18px",
                border: "1px solid #E8E8F0", display: "flex", alignItems: "center", gap: 14, cursor: "pointer",
              }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#00A651" }}>23</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A2E" }}>2023</span>
                    <span style={{ padding: "2px 8px", background: "#E6F9EE", borderRadius: 9999, fontSize: "0.65rem", fontWeight: 600, color: "#00A651" }}>Filed</span>
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 2 }}>Filed on Apr 8, 2024</div>
                </div>
                <a href="#" style={{ fontSize: "0.72rem", fontWeight: 600, color: "#003DA5" }}>View</a>
              </div>

              {/* 2022 - Unfiled */}
              <div className="stagger-item d7" style={{
                background: "white", borderRadius: 16, padding: "16px 18px",
                border: "1px solid #E8E8F0", display: "flex", alignItems: "center", gap: 14, cursor: "pointer",
              }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "#FFF0F1", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#E63946" }}>22</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1A1A2E" }}>2022</span>
                    <span style={{ padding: "2px 8px", background: "#FFF0F1", borderRadius: 9999, fontSize: "0.65rem", fontWeight: 600, color: "#E63946" }}>Unfiled</span>
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 2 }}>Federal & State returns overdue</div>
                </div>
                <button style={{
                  padding: "6px 14px", borderRadius: 9999, fontSize: "0.72rem", fontWeight: 600,
                  border: "none", cursor: "pointer", fontFamily: "inherit",
                  background: "linear-gradient(135deg,#E63946,#DC2626)", color: "white",
                  boxShadow: "0 2px 8px rgba(230,57,70,0.2)",
                }}>
                  File Now
                </button>
              </div>

            </div>
          </div>

          {/* Info Alert */}
          <div className="stagger-item d8">
            <div style={{ display: "flex", gap: 10, padding: "14px 16px", background: "#EEF2FF", border: "1px solid #C7D2FE", borderRadius: 14 }}>
              <i className="fas fa-circle-info" style={{ fontSize: 15, color: "#2563EB", flexShrink: 0, marginTop: 1 }} />
              <div style={{ fontSize: "0.8rem", color: "#3730A3", lineHeight: 1.5, fontWeight: 500 }}>
                All returns must be filed before applying for most resolution types
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="stagger-item d9" style={{ paddingTop: 4 }}>
            <button
              className="btn btn-primary"
              onClick={() => router.push("/tax-filing/personal")}
              style={{ fontSize: "0.95rem", fontWeight: 700, padding: "16px 28px" }}
            >
              Start Filing 2025
              <i className="fas fa-arrow-right" style={{ fontSize: 14 }} />
            </button>
          </div>

        </div>
      </div>
      <BottomNav active="Filing" />
    </PhoneFrame>
  );
}
