"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 14px", background: "#F6F6FB",
  border: "1.5px solid #E8E8F0", borderRadius: 12, fontFamily: "inherit",
  fontSize: "0.88rem", fontWeight: 500, color: "#1A1A2E", outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "0.72rem", fontWeight: 600, color: "#5C5C7A",
  marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.03em",
};

export default function W2EntryPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        {/* Header */}
        <div className="screen-header stagger-item d1">
          <button className="btn-icon" onClick={() => router.push("/tax-filing/income-checklist")}>
            <i className="fas fa-arrow-left" />
          </button>
          <span className="screen-header-title">Filing 2025</span>
          <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#8585A0" }}>Step 3/6</div>
        </div>

        {/* Progress Bar */}
        <div className="stagger-item d1" style={{ padding: "0 20px 8px" }}>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "50%" }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingBottom: 40, gap: 14 }}>

          {/* Title */}
          <div className="stagger-item d2" style={{ paddingTop: 4 }}>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", marginBottom: 4 }}>
              Enter your W-2 information
            </h1>
            <p style={{ fontSize: "0.82rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.5 }}>
              From employer: <strong style={{ color: "#1A1A2E" }}>Acme Corp</strong>
            </p>
          </div>

          {/* Scan W-2 Button */}
          <div className="stagger-item d3">
            <button style={{
              width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              padding: 12, background: "white", border: "1.5px dashed #D5D5E0", borderRadius: 14,
              fontFamily: "inherit", fontSize: "0.84rem", fontWeight: 600, color: "#5C5C7A", cursor: "pointer",
            }}>
              <i className="fas fa-camera" style={{ fontSize: 16, color: "#003DA5" }} />
              Scan W-2 with Camera
            </button>
          </div>

          {/* Divider */}
          <div className="stagger-item d3" style={{ display: "flex", alignItems: "center", gap: 10, padding: "2px 0" }}>
            <div style={{ flex: 1, height: 1, background: "#E8E8F0" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em" }}>or enter manually</span>
            <div style={{ flex: 1, height: 1, background: "#E8E8F0" }} />
          </div>

          {/* Form */}
          <div className="stagger-item d4" style={{ background: "white", borderRadius: 16, padding: 18, border: "1px solid #E8E8F0" }}>

            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>Employer Name</label>
              <input type="text" defaultValue="Acme Corp" style={inputStyle} />
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>Employer EIN</label>
              <input type="text" defaultValue="12-3456789" placeholder="XX-XXXXXXX" style={inputStyle} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ marginBottom: 14 }}>
                <label style={labelStyle}>Box 1 — Wages</label>
                <input type="text" defaultValue="$52,000" style={inputStyle} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={labelStyle}>Box 2 — Fed Tax Withheld</label>
                <input type="text" defaultValue="$6,240" style={inputStyle} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ marginBottom: 14 }}>
                <label style={labelStyle}>Box 3 — SS Wages</label>
                <input type="text" defaultValue="$52,000" style={inputStyle} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={labelStyle}>Box 4 — SS Tax</label>
                <input type="text" defaultValue="$3,224" style={inputStyle} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ marginBottom: 14 }}>
                <label style={labelStyle}>Box 5 — Medicare Wages</label>
                <input type="text" defaultValue="$52,000" style={inputStyle} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={labelStyle}>Box 6 — Medicare Tax</label>
                <input type="text" defaultValue="$754" style={inputStyle} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ marginBottom: 14 }}>
                <label style={labelStyle}>Box 16 — State Wages</label>
                <input type="text" defaultValue="$52,000" style={inputStyle} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={labelStyle}>Box 17 — State Tax</label>
                <input type="text" defaultValue="$2,600" style={inputStyle} />
              </div>
            </div>

          </div>

          {/* Add Another */}
          <div className="stagger-item d5" style={{ textAlign: "center" }}>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.84rem", fontWeight: 600, color: "#003DA5" }}>
              <i className="fas fa-plus-circle" style={{ fontSize: 14 }} />
              Add another W-2
            </a>
          </div>

          {/* Continue Button */}
          <div className="stagger-item d6" style={{ paddingTop: 4 }}>
            <button
              className="btn btn-primary"
              onClick={() => router.push("/tax-filing/deductions")}
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
