"use client";

import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";

export default function AiChatPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />

      {/* Header */}
      <div className="screen-header stagger-item d1">
        <button className="btn-icon" onClick={() => router.push("/dashboard")}>
          <i className="fas fa-arrow-left" />
        </button>
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 9,
              background: "linear-gradient(135deg,#2563EB,#7C3AED)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className="fas fa-sparkles" style={{ fontSize: 12, color: "white" }} />
          </div>
          <div>
            <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1A1A2E" }}>BlastTax AI</div>
          </div>
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            padding: "4px 10px",
            background: "linear-gradient(135deg,#EBF0FF,#F5F0FF)",
            border: "1px solid rgba(99,102,241,0.15)",
            borderRadius: 9999,
            fontSize: "0.62rem",
            fontWeight: 600,
            color: "#4F46E5",
          }}
        >
          <i className="fas fa-bolt" style={{ fontSize: 8 }} /> AI-Powered
        </div>
      </div>

      {/* Chat Area */}
      <div className="screen" style={{ paddingBottom: 0 }}>
        <div
          style={{
            flex: 1,
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            overflowY: "auto",
            paddingBottom: 80,
          }}
        >
          {/* AI Welcome */}
          <div className="stagger-item d2" style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <i className="fas fa-sparkles" style={{ fontSize: 10, color: "white" }} />
            </div>
            <div className="chat-bubble-ai">
              Hi Jane! I&apos;m your BlastTax AI assistant. I can help you understand your tax situation, explain
              resolution options, and guide you through next steps. What would you like to know?
            </div>
          </div>

          {/* Suggested Prompts */}
          <div className="stagger-item d3" style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingLeft: 38 }}>
            <div className="suggest-card">
              <i className="fas fa-check-circle" style={{ fontSize: 10, color: "#2563EB", marginRight: 4 }} />
              What resolution am I eligible for?
            </div>
            <div className="suggest-card">
              <i className="fas fa-handshake" style={{ fontSize: 10, color: "#7C3AED", marginRight: 4 }} />
              Explain the OIC process
            </div>
            <div className="suggest-card">
              <i className="fas fa-file-lines" style={{ fontSize: 10, color: "#0D9488", marginRight: 4 }} />
              What documents do I need?
            </div>
          </div>

          {/* User Message */}
          <div className="stagger-item d4" style={{ display: "flex", justifyContent: "flex-end" }}>
            <div className="chat-bubble-user">What&apos;s an Offer in Compromise?</div>
          </div>

          {/* AI Response */}
          <div className="stagger-item d5" style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <i className="fas fa-sparkles" style={{ fontSize: 10, color: "white" }} />
            </div>
            <div className="chat-bubble-ai">
              <div style={{ fontWeight: 700, color: "#1A1A2E", marginBottom: 8 }}>Offer in Compromise (OIC)</div>
              <div style={{ marginBottom: 10 }}>
                An OIC allows you to settle your tax debt with the IRS for{" "}
                <strong>less than the full amount</strong> you owe. Here&apos;s how it works:
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
                {[
                  "You demonstrate you can\u2019t pay the full amount based on income, expenses, and assets",
                  <>The IRS evaluates your <strong>Reasonable Collection Potential</strong> (RCP)</>,
                  "If accepted, you pay a reduced amount and the remaining debt is forgiven",
                ].map((text, idx) => (
                  <div key={idx} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 6,
                        background: "#EBF0FF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#003DA5" }}>{idx + 1}</span>
                    </div>
                    <div>{text}</div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  background: "#F6F6FB",
                  borderRadius: 10,
                  padding: "10px 12px",
                  fontSize: "0.75rem",
                  color: "#5C5C7A",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 4,
                }}
              >
                <i className="fas fa-lightbulb" style={{ color: "#F5A623", fontSize: 12 }} />
                Based on your profile, you may qualify. Want me to check?
              </div>
              <a
                className="learn-link"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#2563EB",
                  marginTop: 8,
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: 10 }} />
                Learn more about OIC
              </a>
            </div>
          </div>

          {/* Typing Indicator */}
          <div className="stagger-item d7" style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <i className="fas fa-sparkles" style={{ fontSize: 10, color: "white" }} />
            </div>
            <div
              style={{
                background: "white",
                border: "1px solid #E8E8F0",
                borderRadius: "2px 18px 18px 18px",
                padding: "14px 18px",
                display: "flex",
                gap: 5,
                alignItems: "center",
                boxShadow: "0 2px 8px rgba(26,26,46,0.04)",
              }}
            >
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </div>
          </div>
        </div>
      </div>

      {/* Message Input Bar */}
      <div
        className="chat-input-bar"
        style={{
          position: "absolute",
          bottom: 64,
          left: 0,
          right: 0,
          zIndex: 20,
          padding: "10px 16px",
          background: "rgba(250,250,255,0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid #F0F0F5",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "white",
            border: "1.5px solid #E8E8F0",
            borderRadius: 9999,
            padding: "6px 8px 6px 16px",
          }}
        >
          <button
            style={{ background: "none", border: "none", cursor: "pointer", color: "#B0B0C8", fontSize: 16, padding: 4 }}
          >
            <i className="fas fa-paperclip" />
          </button>
          <input
            type="text"
            placeholder="Type your message..."
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontFamily: "inherit",
              fontSize: "0.82rem",
              color: "#1A1A2E",
              background: "transparent",
            }}
          />
          <button
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#003DA5,#2563EB)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              transition: "all 0.25s ease",
            }}
          >
            <i className="fas fa-arrow-up" style={{ fontSize: 13, color: "white" }} />
          </button>
        </div>
      </div>

      <BottomNav />

      <style jsx>{`
        .chat-bubble-ai {
          background: white;
          border: 1px solid #E8E8F0;
          border-radius: 2px 18px 18px 18px;
          padding: 14px 16px;
          max-width: 88%;
          font-size: 0.82rem;
          line-height: 1.6;
          color: #2D2B3D;
          box-shadow: 0 2px 8px rgba(26,26,46,0.04);
        }
        .chat-bubble-user {
          background: linear-gradient(135deg, #003DA5, #2563EB);
          border-radius: 18px 2px 18px 18px;
          padding: 14px 16px;
          max-width: 82%;
          font-size: 0.82rem;
          line-height: 1.6;
          color: white;
          box-shadow: 0 4px 12px rgba(0,61,165,0.2);
          margin-left: auto;
        }
        .suggest-card {
          padding: 10px 14px;
          background: white;
          border: 1px solid #E8E8F0;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #5C5C7A;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 1px 4px rgba(26,26,46,0.03);
        }
        .suggest-card:hover {
          background: #EBF0FF;
          color: #003DA5;
          border-color: #003DA5;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,61,165,0.1);
        }
        .typing-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #B0B0C8;
          display: inline-block;
          animation: typingBounce 1.4s ease-in-out infinite;
        }
        .typing-dot:nth-child(1) { animation-delay: 0s; }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        .learn-link:hover {
          text-decoration: underline;
        }
        .chat-input-bar {
          transition: box-shadow 0.3s ease;
        }
        .chat-input-bar:focus-within {
          box-shadow: 0 -4px 20px rgba(26,26,46,0.08);
        }
      `}</style>
    </PhoneFrame>
  );
}
