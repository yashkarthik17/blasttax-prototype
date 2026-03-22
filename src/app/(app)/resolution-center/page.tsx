"use client";

import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ScreenHeader } from "@/components/ScreenHeader";

const resolutionOptions = [
  {
    title: "Installment Agreement",
    desc: "Pay over time with monthly installments",
    icon: "fa-calendar-check",
    iconColor: "#00A651",
    bgGradient: "linear-gradient(135deg,#E6F9EE,#B8F0D3)",
    href: "/resolution-detail-ia",
  },
  {
    title: "Offer in Compromise",
    desc: "Settle your debt for less than you owe",
    icon: "fa-handshake",
    iconColor: "#003DA5",
    bgGradient: "linear-gradient(135deg,#EBF0FF,#C5D5F7)",
    href: "/resolution-detail-oic",
  },
  {
    title: "Currently Not Collectible",
    desc: "Pause collections if you can\u2019t pay",
    icon: "fa-pause-circle",
    iconColor: "#D97706",
    bgGradient: "linear-gradient(135deg,#FEF3C7,#FDE68A)",
    href: "/resolution-detail-cnc",
  },
  {
    title: "Penalty Abatement",
    desc: "Remove penalties from your balance",
    icon: "fa-eraser",
    iconColor: "#7C3AED",
    bgGradient: "linear-gradient(135deg,#F5F0FF,#E0D4FC)",
    href: "/resolution-detail-pa",
  },
  {
    title: "Innocent Spouse Relief",
    desc: "Relief from a spouse\u2019s tax liability",
    icon: "fa-shield-halved",
    iconColor: "#E63946",
    bgGradient: "linear-gradient(135deg,#FFF0F1,#FECDD3)",
    href: "/resolution-detail-isr",
  },
  {
    title: "CDP Hearing",
    desc: "Appeal a collection action",
    icon: "fa-gavel",
    iconColor: "#4F46E5",
    bgGradient: "linear-gradient(135deg,#EEF2FF,#C7D2FE)",
    href: "/resolution-detail-cdp",
  },
];

export default function ResolutionCenterPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <ScreenHeader title="Resolution Center" backPath="/dashboard" />

      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-content" style={{ paddingBottom: 100, gap: 14 }}>
          {/* Subtitle */}
          <div className="stagger-item d2" style={{ padding: "0 4px", marginBottom: 4 }}>
            <div style={{ fontSize: "0.95rem", fontWeight: 500, color: "#5C5C7A", lineHeight: 1.5 }}>
              Choose your path to resolve your tax debt
            </div>
          </div>

          {/* Resolution Options */}
          {resolutionOptions.map((opt, i) => (
            <div
              key={opt.title}
              className={`resolution-card stagger-item d${i + 3}`}
              onClick={() => router.push(opt.href)}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: opt.bgGradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <i className={`fas ${opt.icon}`} style={{ fontSize: 18, color: opt.iconColor }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1A1A2E" }}>{opt.title}</div>
                <div style={{ fontSize: "0.75rem", color: "#8585A0", marginTop: 2, lineHeight: 1.4 }}>
                  {opt.desc}
                </div>
              </div>
              <i className="fas fa-chevron-right" style={{ fontSize: 12, color: "#D5D5E0", flexShrink: 0 }} />
            </div>
          ))}

          {/* AI Analysis Link */}
          <div className="stagger-item d9" style={{ textAlign: "center", marginTop: 8, padding: 16 }}>
            <a
              onClick={() => router.push("/ai-chat")}
              className="ai-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#2563EB",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <i className="fas fa-sparkles" style={{ fontSize: 12 }} />
              Not sure which is right? Start with our AI analysis
              <i className="fas fa-arrow-right" style={{ fontSize: 10 }} />
            </a>
          </div>
        </div>
      </div>

      <BottomNav active="Resolve" />

      <style jsx>{`
        .resolution-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 16px;
          background: white;
          border: 1px solid #E8E8F0;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          box-shadow: 0 2px 8px rgba(26,26,46,0.04);
        }
        .resolution-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(26,26,46,0.1);
          border-color: rgba(0,61,165,0.15);
        }
        .resolution-card:active {
          transform: translateY(0) scale(0.98);
        }
        .ai-link {
          transition: all 0.3s ease;
        }
        .ai-link:hover {
          text-shadow: 0 0 12px rgba(37,99,235,0.3);
        }
      `}</style>
    </PhoneFrame>
  );
}
