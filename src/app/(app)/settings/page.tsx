"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ScreenHeader } from "@/components/ScreenHeader";

function Toggle({ defaultOn }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn ?? false);
  return (
    <div
      onClick={() => setOn(!on)}
      style={{
        width: 46, height: 26, borderRadius: 9999, position: "relative", cursor: "pointer", flexShrink: 0,
        background: on ? "linear-gradient(135deg, #00A651, #10B981)" : "#D5D5E0",
        boxShadow: on ? "0 2px 8px rgba(0,166,81,0.25)" : "none",
        transition: "background 0.3s ease",
      }}
    >
      <div style={{
        position: "absolute", top: 3, width: 20, height: 20, borderRadius: "50%", background: "white",
        boxShadow: "0 1px 4px rgba(26,26,46,0.15)",
        transform: on ? "translateX(22px)" : "translateX(3px)",
        transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }} />
    </div>
  );
}

export default function SettingsPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <ScreenHeader title="Settings" backPath="/account" />

      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-content" style={{ paddingBottom: 100, gap: 24 }}>

          {/* Connected Services */}
          <div className="stagger-item d1">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, padding: "0 4px" }}>Connected Services</div>
            <div style={{ background: "white", borderRadius: 16, border: "1px solid #E8E8F0", overflow: "hidden", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
              {[
                { icon: "fas fa-landmark", iconBg: "#EBF0FF", iconColor: "#003DA5", name: "IRS e-Services", action: "Disconnect", actionColor: "#8585A0" },
                { icon: "fas fa-building-columns", iconBg: "#F0FDFA", iconColor: "#0D9488", name: "Plaid (Chase Bank)", action: "Manage", actionColor: "#003DA5" },
                { icon: "fab fa-google", iconBg: "#FFF0F1", iconColor: "#E63946", name: "Google Account", action: "Disconnect", actionColor: "#8585A0", noBorder: true },
              ].map((service) => (
                <div key={service.name} className="setting-row" style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderBottom: service.noBorder ? "none" : "1px solid #F0F0F5" }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: service.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={service.icon} style={{ fontSize: 15, color: service.iconColor }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>{service.name}</div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 3, padding: "2px 8px", background: "#E6F9EE", borderRadius: 9999, fontSize: "0.65rem", fontWeight: 600, color: "#00A651" }}>
                      <i className="fas fa-circle" style={{ fontSize: 5 }} /> Connected
                    </div>
                  </div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: service.actionColor, cursor: "pointer" }}>{service.action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="stagger-item d2">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, padding: "0 4px" }}>Notifications</div>
            <div style={{ background: "white", borderRadius: 16, border: "1px solid #E8E8F0", overflow: "hidden", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
              {[
                { icon: "fa-bell", label: "Push Notifications", defaultOn: true },
                { icon: "fa-envelope", label: "Email Updates", defaultOn: true },
                { icon: "fa-circle-exclamation", label: "Case Status Alerts", defaultOn: true },
                { icon: "fa-bullhorn", label: "Marketing", defaultOn: false, noBorder: true, iconColor: "#B0B0C8" },
              ].map((item) => (
                <div key={item.label} className="setting-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderBottom: item.noBorder ? "none" : "1px solid #F0F0F5" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <i className={`fas ${item.icon}`} style={{ fontSize: 15, color: item.iconColor || "#5C5C7A" }} />
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>{item.label}</span>
                  </div>
                  <Toggle defaultOn={item.defaultOn} />
                </div>
              ))}
            </div>
          </div>

          {/* Data & Privacy */}
          <div className="stagger-item d3">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, padding: "0 4px" }}>Data & Privacy</div>
            <div style={{ background: "white", borderRadius: 16, border: "1px solid #E8E8F0", overflow: "hidden", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
              {[
                { icon: "fa-download", label: "Download My Data", color: "#1A1A2E", endIcon: "fa-chevron-right" },
                { icon: "fa-trash-can", label: "Delete Account", color: "#E63946", iconColor: "#E63946", endIcon: "fa-chevron-right" },
                { icon: "fa-shield-halved", label: "Privacy Policy", color: "#1A1A2E", endIcon: "fa-arrow-up-right-from-square" },
                { icon: "fa-file-contract", label: "Terms of Service", color: "#1A1A2E", endIcon: "fa-arrow-up-right-from-square", noBorder: true },
              ].map((item) => (
                <div key={item.label} className="setting-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderBottom: item.noBorder ? "none" : "1px solid #F0F0F5", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <i className={`fas ${item.icon}`} style={{ fontSize: 15, color: item.iconColor || "#5C5C7A" }} />
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: item.color }}>{item.label}</span>
                  </div>
                  <i className={`fas ${item.endIcon}`} style={{ fontSize: 11, color: "#D5D5E0" }} />
                </div>
              ))}
            </div>
          </div>

          {/* About */}
          <div className="stagger-item d4">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, padding: "0 4px" }}>About</div>
            <div style={{ background: "white", borderRadius: 16, border: "1px solid #E8E8F0", overflow: "hidden", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderBottom: "1px solid #F0F0F5" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <i className="fas fa-code-branch" style={{ fontSize: 15, color: "#5C5C7A" }} />
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>Version</span>
                </div>
                <span style={{ fontSize: "0.8rem", fontWeight: 500, color: "#8585A0" }}>3.0.0</span>
              </div>
              {[
                { icon: "fa-star", label: "Rate the App", iconColor: "#F5A623", endIcon: "fa-arrow-up-right-from-square" },
                { icon: "fa-message", label: "Send Feedback", endIcon: "fa-chevron-right", noBorder: true },
              ].map((item) => (
                <div key={item.label} className="setting-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderBottom: item.noBorder ? "none" : "1px solid #F0F0F5", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <i className={`fas ${item.icon}`} style={{ fontSize: 15, color: item.iconColor || "#5C5C7A" }} />
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>{item.label}</span>
                  </div>
                  <i className={`fas ${item.endIcon}`} style={{ fontSize: 11, color: "#D5D5E0" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav active="Account" />

      <style jsx>{`
        .setting-row {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .setting-row:hover {
          background: #F6F6FB;
        }
      `}</style>
    </PhoneFrame>
  );
}
