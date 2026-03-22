"use client";

import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function AccountEditPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <ScreenHeader title="Edit Profile" backPath="/account" rightAction={<div style={{ width: 36 }} />} />

      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-content" style={{ paddingBottom: 100, gap: 18 }}>

          {/* Avatar Section */}
          <div className="stagger-item d2" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "10px 0" }}>
            <div style={{ position: "relative" }}>
              <div className="avatar-ring" style={{ width: 84, height: 84, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "1.7rem", fontWeight: 800 }}>
                JD
              </div>
              <div style={{ position: "absolute", bottom: 0, right: 0, width: 28, height: 28, borderRadius: "50%", background: "#003DA5", border: "3px solid #FAFAFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <i className="fas fa-camera" style={{ fontSize: 10, color: "white" }} />
              </div>
            </div>
            <a style={{ fontSize: "0.78rem", fontWeight: 600, color: "#2563EB", textDecoration: "none", cursor: "pointer" }}>Change Photo</a>
          </div>

          {/* Personal Info Fields */}
          <div className="stagger-item d3" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", gap: 10 }}>
              <div className="form-field" style={{ flex: 1 }}>
                <label className="form-label">First Name</label>
                <input className="form-input" type="text" defaultValue="Jane" />
              </div>
              <div className="form-field" style={{ flex: 1 }}>
                <label className="form-label">Last Name</label>
                <input className="form-input" type="text" defaultValue="Doe" />
              </div>
            </div>

            <div className="form-field stagger-item d4">
              <label className="form-label">Email</label>
              <div style={{ position: "relative" }}>
                <input className="form-input" type="email" defaultValue="jane@example.com" style={{ paddingRight: 80 }} />
                <div style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", gap: 4, padding: "3px 8px", background: "#E6F9EE", borderRadius: 9999 }}>
                  <i className="fas fa-circle-check" style={{ fontSize: 9, color: "#00A651" }} />
                  <span style={{ fontSize: "0.62rem", fontWeight: 600, color: "#00A651" }}>Verified</span>
                </div>
              </div>
            </div>

            <div className="form-field stagger-item d5">
              <label className="form-label">Phone</label>
              <input className="form-input" type="tel" defaultValue="(555) 123-4567" />
            </div>

            <div className="form-field stagger-item d5">
              <label className="form-label">Date of Birth</label>
              <input className="form-input" type="text" defaultValue="Jan 15, 1985" />
            </div>
          </div>

          {/* Address Section */}
          <div className="stagger-item d6">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, padding: "0 4px" }}>Address</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div className="form-field">
                <label className="form-label">Street</label>
                <input className="form-input" type="text" defaultValue="123 Main Street" />
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div className="form-field" style={{ flex: 1.5 }}>
                  <label className="form-label">City</label>
                  <input className="form-input" type="text" defaultValue="Austin" />
                </div>
                <div className="form-field" style={{ flex: 0.7 }}>
                  <label className="form-label">State</label>
                  <input className="form-input" type="text" defaultValue="TX" />
                </div>
                <div className="form-field" style={{ flex: 1 }}>
                  <label className="form-label">ZIP</label>
                  <input className="form-input" type="text" defaultValue="73301" />
                </div>
              </div>
            </div>
          </div>

          {/* Save Changes */}
          <div className="stagger-item d7" style={{ paddingTop: 8 }}>
            <button onClick={() => router.push("/account")} className="btn btn-primary" style={{ fontSize: "0.92rem", fontWeight: 700, padding: "16px 28px", background: "#00A651", boxShadow: "0 8px 24px rgba(0,166,81,0.2)" }}>
              Save Changes
            </button>
          </div>

          {/* Cancel */}
          <div className="stagger-item d8" style={{ paddingTop: 0 }}>
            <button onClick={() => router.push("/account")} style={{ width: "100%", padding: "14px 28px", background: "transparent", color: "#5C5C7A", border: "1.5px solid #E8E8F0", borderRadius: 9999, fontFamily: "inherit", fontSize: "0.875rem", fontWeight: 600, cursor: "pointer", transition: "all 0.25s ease" }}>
              Cancel
            </button>
          </div>

          {/* Change Password */}
          <div className="stagger-item d9" style={{ textAlign: "center", padding: "8px 0" }}>
            <a style={{ fontSize: "0.78rem", fontWeight: 600, color: "#2563EB", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
              <i className="fas fa-lock" style={{ fontSize: 11 }} /> Change Password
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-label {
          font-size: 0.72rem;
          font-weight: 600;
          color: #8585A0;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .form-input {
          width: 100%;
          padding: 13px 16px;
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 12px;
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 600;
          color: #1A1A2E;
          outline: none;
          transition: all 0.25s ease;
          box-sizing: border-box;
        }
        .form-input:focus {
          border-color: #003DA5;
          box-shadow: 0 0 0 3px rgba(0,61,165,0.08);
        }
        .form-input::placeholder {
          color: #B0B0C8;
          font-weight: 400;
        }
        .avatar-ring {
          animation: avatarGlow 3s ease-in-out infinite;
        }
        @keyframes avatarGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,61,165,0.15); }
          50% { box-shadow: 0 0 0 6px rgba(0,61,165,0.08); }
        }
      `}</style>
    </PhoneFrame>
  );
}
