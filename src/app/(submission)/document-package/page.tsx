"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function DocumentPackagePage() {
  const router = useRouter();

  const stepIndicator = (
    <div className="stagger-item d1" style={{ padding: "0 20px 8px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {/* Step 1 complete */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg,#00A651,#10B981)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <i className="fas fa-check" style={{ fontSize: 10, color: "white" }} />
          </div>
          <div style={{ width: 40, height: 3, background: "#00A651", borderRadius: 9999 }} />
        </div>
        {/* Step 2 active */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "white" }}>2</span>
          </div>
          <div style={{ width: 40, height: 3, background: "#E8E8F0", borderRadius: 9999 }} />
        </div>
        {/* Step 3 */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#E8E8F0", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8" }}>3</span>
          </div>
          <div style={{ width: 40, height: 3, background: "#E8E8F0", borderRadius: 9999 }} />
        </div>
        {/* Step 4 */}
        <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#E8E8F0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8" }}>4</span>
        </div>
      </div>
    </div>
  );

  const sections = [
    {
      label: "IRS Forms",
      icon: "fa-file-lines",
      delay: "d3",
      items: [
        { name: "Form 656", pages: "3 pages", icon: "fa-file-contract", iconBg: "#EBF0FF", iconColor: "#003DA5" },
        { name: "Form 433-A(OIC)", pages: "8 pages", icon: "fa-file-contract", iconBg: "#EBF0FF", iconColor: "#003DA5" },
      ],
    },
    {
      label: "Financial Documents",
      icon: "fa-landmark",
      delay: "d4",
      items: [
        { name: "Bank Statements (3 months)", pages: "12 pages", icon: "fa-university", iconBg: "#E6F9EE", iconColor: "#00A651" },
        { name: "Pay Stubs (3 months)", pages: "6 pages", icon: "fa-money-check-dollar", iconBg: "#E6F9EE", iconColor: "#00A651" },
      ],
    },
    {
      label: "IRS Documents",
      icon: "fa-building-columns",
      delay: "d5",
      items: [
        { name: "Account Transcript", pages: "4 pages", icon: "fa-scroll", iconBg: "#F5F0FF", iconColor: "#7C3AED" },
        { name: "Notice of Intent", pages: "2 pages", icon: "fa-triangle-exclamation", iconBg: "#F5F0FF", iconColor: "#7C3AED" },
      ],
    },
    {
      label: "Identification",
      icon: "fa-id-card",
      delay: "d6",
      items: [
        { name: "Government ID", pages: "1 page", icon: "fa-id-badge", iconBg: "#FFFBEB", iconColor: "#D97706" },
      ],
    },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Document Package" backPath="/handoff-intake" />
        {stepIndicator}

        <div className="screen-content" style={{ paddingBottom: 40, gap: 18 }}>
          {/* Heading */}
          <div className="stagger-item d2">
            <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", lineHeight: 1.3 }}>
              Review Your Document Package
            </div>
            <div style={{ fontSize: "0.82rem", color: "#8585A0", marginTop: 6, lineHeight: 1.5 }}>
              These documents will be sent to your tax professional
            </div>
          </div>

          {/* Document Sections */}
          {sections.map((section) => (
            <div key={section.label} className={`stagger-item ${section.delay}`}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
                <i className={`fas ${section.icon}`} style={{ fontSize: 11, marginRight: 4 }} /> {section.label}
              </div>
              <div style={{ background: "white", borderRadius: 16, padding: "4px 16px", border: "1px solid #E8E8F0" }}>
                {section.items.map((item, i) => (
                  <div
                    key={item.name}
                    className="doc-item"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "12px 0",
                      borderBottom: i < section.items.length - 1 ? "1px solid #F0F0F5" : "none",
                    }}
                  >
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className={`fas ${item.icon}`} style={{ fontSize: 14, color: item.iconColor }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>{item.name}</div>
                      <div style={{ fontSize: "0.7rem", color: "#8585A0" }}>{item.pages}</div>
                    </div>
                    {section.label === "IRS Forms" && (
                      <i className="fas fa-eye" style={{ fontSize: 13, color: "#B0B0C8", cursor: "pointer", padding: 4 }} />
                    )}
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className="fas fa-check" style={{ fontSize: 9, color: "#00A651" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="stagger-item d7" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "8px 0" }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="fas fa-folder-open" style={{ fontSize: 12, color: "#003DA5" }} />
            </div>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>7 documents</span>
            <span style={{ fontSize: "0.72rem", color: "#8585A0" }}>&bull;</span>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>36 pages</span>
          </div>

          {/* CTA Section */}
          <div className="stagger-item d8" style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 4 }}>
            <div
              onClick={() => router.push("/expert-review")}
              style={{
                padding: 16,
                background: "linear-gradient(135deg,#00A651,#10B981)",
                borderRadius: 9999,
                textAlign: "center",
                color: "white",
                fontSize: "0.88rem",
                fontWeight: 700,
                boxShadow: "0 8px 24px rgba(0,166,81,0.2)",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.25,0.1,0.25,1)",
              }}
            >
              <i className="fas fa-paper-plane" style={{ marginRight: 6, fontSize: 13 }} /> Send to Expert
            </div>
            <button className="btn btn-outline" style={{ fontSize: "0.82rem", fontWeight: 600, padding: "12px 24px" }}>
              <i className="fas fa-plus" style={{ fontSize: 11, marginRight: 4 }} /> Add More Documents
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .doc-item {
          transition: background 0.2s ease;
        }
        .doc-item:hover {
          background: #F6F6FB;
          margin: 0 -8px;
          padding: 12px 8px !important;
          border-radius: 10px;
        }
      `}</style>
    </PhoneFrame>
  );
}
