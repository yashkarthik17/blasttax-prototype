"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { BottomNav } from "@/components/BottomNav";

export default function ExpertReviewPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ paddingBottom: 0 }}>
        <ScreenHeader title="Expert Review" backPath="/document-package" />

        <div className="screen-content" style={{ paddingBottom: 100, gap: 18 }}>
          {/* Status Timeline */}
          <div className="stagger-item d1" style={{ background: "white", borderRadius: 16, padding: 20, border: "1px solid #E8E8F0" }}>
            {/* Step 1: Documents Sent */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#00A651,#10B981)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className="fas fa-check" style={{ fontSize: 13, color: "white" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>Documents Sent</div>
                <div style={{ fontSize: "0.7rem", color: "#00A651", fontWeight: 500 }}>Mar 12</div>
              </div>
            </div>
            <div style={{ width: 2, height: 28, marginLeft: 15, background: "linear-gradient(180deg,#00A651,#00A651)" }} />

            {/* Step 2: Expert Received */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#00A651,#10B981)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className="fas fa-check" style={{ fontSize: 13, color: "white" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>Expert Received</div>
                <div style={{ fontSize: "0.7rem", color: "#00A651", fontWeight: 500 }}>Mar 12</div>
              </div>
            </div>
            <div style={{ width: 2, height: 28, marginLeft: 15, background: "linear-gradient(180deg,#00A651,#2563EB)" }} />

            {/* Step 3: Under Review (active) */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div className="active-pulse" style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className="fas fa-rotate" style={{ fontSize: 13, color: "white", animation: "spin 2s linear infinite" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#003DA5" }}>Under Review</div>
                <div style={{ fontSize: "0.7rem", color: "#2563EB", fontWeight: 600 }}>Mar 13 &mdash; In progress</div>
              </div>
            </div>
            <div style={{ width: 2, height: 28, marginLeft: 15, background: "linear-gradient(180deg,#2563EB,#E8E8F0)" }} />

            {/* Step 4: Recommendation Ready (pending) */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#F0F0F5", border: "2px dashed #D5D5E0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className="fas fa-hourglass-half" style={{ fontSize: 12, color: "#B0B0C8" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#8585A0" }}>Recommendation Ready</div>
                <div style={{ fontSize: "0.7rem", color: "#B0B0C8", fontWeight: 500 }}>Expected Mar 15</div>
              </div>
            </div>
          </div>

          {/* Expert Activity Card */}
          <div className="stagger-item d2" style={{ background: "white", borderRadius: 16, padding: 16, border: "1px solid #E8E8F0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative" }}>
                <span style={{ fontSize: "0.88rem", fontWeight: 800, color: "white" }}>MC</span>
                <div style={{ position: "absolute", bottom: 0, right: 0, width: 12, height: 12, borderRadius: "50%", background: "#00A651", border: "2px solid white" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1A1A2E" }}>Michael Chen is reviewing your case</div>
                <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 2 }}>
                  <i className="fas fa-clock" style={{ fontSize: 10, marginRight: 3 }} /> Last active: 2 hours ago
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#5C5C7A" }}>Documents reviewed</span>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#003DA5" }}>5 of 7</span>
            </div>
            <div style={{ height: 5, background: "#F0F0F5", borderRadius: 9999, overflow: "hidden" }}>
              <div style={{ width: "71%", height: "100%", background: "linear-gradient(90deg,#003DA5,#2563EB)", borderRadius: 9999, transition: "width 0.8s ease" }} />
            </div>
          </div>

          {/* Notes from Expert */}
          <div className="stagger-item d3">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>Notes from Expert</div>
            <div style={{ background: "white", borderRadius: 16, padding: 16, border: "1px solid #E8E8F0", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 24, width: 3, height: "100%", background: "linear-gradient(180deg,#003DA5,transparent)", borderRadius: 9999 }} />
              <div style={{ paddingLeft: 16 }}>
                <p style={{ fontSize: "0.85rem", color: "#1A1A2E", lineHeight: 1.6, fontWeight: 500, marginBottom: 10 }}>
                  &ldquo;Initial review looks promising. Strong case for OIC. Will have full recommendation by tomorrow.&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <i className="fas fa-clock" style={{ fontSize: 10, color: "#B0B0C8" }} />
                  <span style={{ fontSize: "0.7rem", color: "#8585A0" }}>Today, 2:34 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Message Expert Button */}
          <div className="stagger-item d4">
            <button className="btn btn-secondary" style={{ fontSize: "0.88rem", fontWeight: 700, padding: "14px 28px" }}>
              <i className="fas fa-comment" style={{ fontSize: 14 }} />
              Message Expert
            </button>
          </div>

          {/* Estimated Completion */}
          <div className="stagger-item d5" style={{ textAlign: "center", padding: "4px 0" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <i className="fas fa-calendar-check" style={{ fontSize: 12, color: "#003DA5" }} />
              <span style={{ fontSize: "0.78rem", color: "#8585A0", fontWeight: 500 }}>
                Estimated completion: <strong style={{ color: "#1A1A2E" }}>1-2 business days</strong>
              </span>
            </div>
          </div>
        </div>

        <BottomNav active="Resolve" />
      </div>

      <style>{`
        .active-pulse {
          animation: activePulse 2s ease-in-out infinite;
        }
        @keyframes activePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.3); }
          50% { box-shadow: 0 0 0 8px rgba(37,99,235,0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </PhoneFrame>
  );
}
