"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";

export default function AccountPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />

      <div className="screen-header stagger-item d1">
        <div className="screen-header-title" style={{ fontSize: "1.2rem", fontWeight: 800 }}>My Account</div>
        <button className="btn-icon" onClick={() => router.push("/account/edit")}>
          <i className="fas fa-pen-to-square" />
        </button>
      </div>

      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-content" style={{ paddingBottom: 100, gap: 20 }}>

          {/* Profile Card */}
          <div className="stagger-item d2" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 16px", background: "white", borderRadius: 20, border: "1px solid #E8E8F0", boxShadow: "0 2px 12px rgba(26,26,46,0.04)" }}>
            <div className="avatar-ring" style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "1.5rem", fontWeight: 800, marginBottom: 14 }}>
              JD
            </div>
            <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#1A1A2E" }}>Jane Doe</div>
            <div style={{ fontSize: "0.8rem", color: "#8585A0", fontWeight: 500, marginTop: 3 }}>jane.doe@email.com</div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, marginTop: 10, padding: "4px 12px", background: "#F6F6FB", borderRadius: 9999, fontSize: "0.68rem", fontWeight: 600, color: "#5C5C7A" }}>
              <i className="far fa-calendar" style={{ fontSize: 10 }} /> Member since Oct 2025
            </div>
          </div>

          {/* Personal Information */}
          <div className="stagger-item d3">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, padding: "0 4px" }}>Personal Information</div>
            <div style={{ background: "white", borderRadius: 16, border: "1px solid #E8E8F0", padding: "4px 16px", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
              {[
                { icon: "fa-user", label: "Name", value: "Jane Doe" },
                { icon: "fa-envelope", label: "Email", value: "jane.doe@email.com" },
                { icon: "fa-phone", label: "Phone", value: "(555) 123-4567" },
                { icon: "fa-location-dot", label: "Address", value: "123 Main St, Austin, TX" },
              ].map((row, i) => (
                <div key={row.label} className="settings-row" onClick={() => router.push("/account/edit")} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: i < 3 ? "1px solid #F0F0F5" : "none", cursor: "pointer" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={`fas ${row.icon}`} style={{ fontSize: 13, color: "#003DA5" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.7rem", color: "#8585A0", fontWeight: 500 }}>{row.label}</div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>{row.value}</div>
                  </div>
                  <i className="fas fa-chevron-right" style={{ fontSize: 11, color: "#D5D5E0" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Tax Information */}
          <div className="stagger-item d4">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, padding: "0 4px" }}>Tax Information</div>
            <div style={{ background: "white", borderRadius: 16, border: "1px solid #E8E8F0", padding: "4px 16px", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
              {[
                { icon: "fa-file-invoice", label: "Filing Status", value: "Single", hasChevron: true },
                { icon: "fa-id-card", label: "SSN", value: "***-**-6789", endIcon: "fa-eye-slash" },
                { icon: "fa-users", label: "Dependents", value: "2", hasChevron: true },
              ].map((row, i) => (
                <div key={row.label} className="settings-row" style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: i < 2 ? "1px solid #F0F0F5" : "none", cursor: "pointer" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "#F5F0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={`fas ${row.icon}`} style={{ fontSize: 13, color: "#7C3AED" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.7rem", color: "#8585A0", fontWeight: 500 }}>{row.label}</div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>{row.value}</div>
                  </div>
                  {row.hasChevron && <i className="fas fa-chevron-right" style={{ fontSize: 11, color: "#D5D5E0" }} />}
                  {row.endIcon && <i className={`fas ${row.endIcon}`} style={{ fontSize: 11, color: "#B0B0C8" }} />}
                </div>
              ))}
            </div>
          </div>

          {/* Preferences */}
          <div className="stagger-item d5">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, padding: "0 4px" }}>Preferences</div>
            <div style={{ background: "white", borderRadius: 16, border: "1px solid #E8E8F0", padding: "4px 16px", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
              <ToggleRow icon="fa-bell" iconBg="#E6F9EE" iconColor="#00A651" title="Notifications" subtitle="Push & email alerts" defaultOn />
              <ToggleRow icon="fa-moon" iconBg="#F6F6FB" iconColor="#5C5C7A" title="Dark Mode" subtitle="Reduce eye strain" border />
              <div className="settings-row" onClick={() => router.push("/settings")} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", cursor: "pointer" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className="fas fa-globe" style={{ fontSize: 13, color: "#4F46E5" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>Language</div>
                  <div style={{ fontSize: "0.68rem", color: "#8585A0", marginTop: 1 }}>English (US)</div>
                </div>
                <i className="fas fa-chevron-right" style={{ fontSize: 11, color: "#D5D5E0" }} />
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="stagger-item d6">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, padding: "0 4px" }}>Support</div>
            <div style={{ background: "white", borderRadius: 16, border: "1px solid #E8E8F0", padding: "4px 16px", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
              {[
                { icon: "fa-circle-question", label: "Help Center" },
                { icon: "fa-headset", label: "Contact Us" },
                { icon: "fa-book-open", label: "FAQ", onClick: () => router.push("/faq") },
              ].map((row, i) => (
                <div key={row.label} className="settings-row" onClick={row.onClick} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: i < 2 ? "1px solid #F0F0F5" : "none", cursor: "pointer" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "#F0FDFA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={`fas ${row.icon}`} style={{ fontSize: 13, color: "#0D9488" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>{row.label}</div>
                  </div>
                  <i className="fas fa-chevron-right" style={{ fontSize: 11, color: "#D5D5E0" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Sign Out */}
          <div className="stagger-item d7" style={{ paddingTop: 4, paddingBottom: 8 }}>
            <button className="signout-btn" style={{ width: "100%", padding: "14px 28px", background: "transparent", color: "#E63946", border: "1.5px solid #FFF0F1", borderRadius: 9999, fontFamily: "inherit", fontSize: "0.875rem", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all 0.3s ease" }}>
              <i className="fas fa-right-from-bracket" style={{ fontSize: 14 }} /> Sign Out
            </button>
          </div>
        </div>
      </div>

      <BottomNav active="Account" />

      <style jsx>{`
        .settings-row {
          transition: all 0.2s ease;
        }
        .settings-row:hover {
          background: #F6F6FB;
          border-radius: 12px;
          margin: 0 -12px;
          padding: 14px 12px;
        }
        .avatar-ring {
          animation: avatarGlow 3s ease-in-out infinite;
        }
        @keyframes avatarGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,61,165,0.15); }
          50% { box-shadow: 0 0 0 6px rgba(0,61,165,0.08); }
        }
        .signout-btn:hover {
          background: #FFF0F1;
        }
        .signout-btn:active {
          transform: scale(0.98);
        }
      `}</style>
    </PhoneFrame>
  );
}

function ToggleRow({ icon, iconBg, iconColor, title, subtitle, defaultOn, border }: {
  icon: string; iconBg: string; iconColor: string; title: string; subtitle: string; defaultOn?: boolean; border?: boolean;
}) {
  const [on, setOn] = useState(defaultOn ?? false);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: border ? "none" : "1px solid #F0F0F5" }}>
      <div style={{ width: 36, height: 36, borderRadius: 10, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <i className={`fas ${icon}`} style={{ fontSize: 13, color: iconColor }} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>{title}</div>
        <div style={{ fontSize: "0.68rem", color: "#8585A0", marginTop: 1 }}>{subtitle}</div>
      </div>
      <div
        onClick={() => setOn(!on)}
        style={{
          width: 46, height: 26, borderRadius: 13, background: on ? "#003DA5" : "#D5D5E0",
          position: "relative", cursor: "pointer", transition: "background 0.3s ease", flexShrink: 0,
        }}
      >
        <div style={{
          width: 22, height: 22, borderRadius: "50%", background: "white",
          position: "absolute", top: 2, left: 2,
          transform: on ? "translateX(20px)" : "translateX(0)",
          transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          boxShadow: "0 1px 4px rgba(26,26,46,0.15)",
        }} />
      </div>
    </div>
  );
}
