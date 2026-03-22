"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function ExpertChatPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ display: "flex", flexDirection: "column" }}>
        {/* Chat Header */}
        <div className="screen-header stagger-item d1" style={{ borderBottom: "1px solid #E8E8F0" }}>
          <button className="btn-icon" onClick={() => router.push("/workspace")}>
            <i className="fas fa-arrow-left" />
          </button>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "white" }}>MC</span>
            <div style={{ position: "absolute", bottom: -1, right: -1, width: 11, height: 11, background: "#00A651", borderRadius: "50%", border: "2px solid white" }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E" }}>Michael Chen, EA</div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00A651" }} />
              <span style={{ fontSize: "0.7rem", color: "#00A651", fontWeight: 500 }}>Online</span>
            </div>
          </div>
          <button className="btn-icon">
            <i className="fas fa-phone" style={{ fontSize: 14 }} />
          </button>
        </div>

        {/* Chat Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 16, position: "relative" }}>
          {/* Date separator */}
          <div className="stagger-item d2" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "#B0B0C8", background: "#FAFAFF", padding: "4px 12px", borderRadius: 9999, border: "1px solid #F0F0F5" }}>Today, 10:24 AM</span>
          </div>

          {/* Expert message 1 */}
          <div className="stagger-item d3" style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "white" }}>MC</span>
            </div>
            <div style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: "18px 18px 18px 4px", padding: "12px 16px", fontSize: "0.84rem", color: "#1A1A2E", lineHeight: 1.55, maxWidth: "82%", boxShadow: "0 1px 4px rgba(26,26,46,0.04)" }}>
              Hi Jane, I&apos;ve reviewed your OIC application. Everything looks great. I have a few suggestions to strengthen your case.
            </div>
          </div>

          {/* Expert message 2 */}
          <div className="stagger-item d4" style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
            <div style={{ width: 28, flexShrink: 0 }} />
            <div style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: "18px 18px 18px 4px", padding: "12px 16px", fontSize: "0.84rem", color: "#1A1A2E", lineHeight: 1.55, maxWidth: "82%", boxShadow: "0 1px 4px rgba(26,26,46,0.04)" }}>
              For the income section, I&apos;d recommend including documentation of your medical expenses as they may increase your allowable expenses.
            </div>
          </div>

          {/* User message */}
          <div className="stagger-item d5">
            <div style={{ background: "linear-gradient(135deg,#003DA5,#2563EB)", borderRadius: "18px 18px 4px 18px", padding: "12px 16px", fontSize: "0.84rem", color: "white", lineHeight: 1.55, maxWidth: "82%", marginLeft: "auto", boxShadow: "0 2px 8px rgba(0,61,165,0.15)" }}>
              That makes sense. Should I include the receipts from last year too?
            </div>
            <div style={{ textAlign: "right", marginTop: 4 }}>
              <span style={{ fontSize: "0.65rem", color: "#B0B0C8" }}>10:28 AM</span>
              <i className="fas fa-check-double" style={{ fontSize: 10, color: "#2563EB", marginLeft: 4 }} />
            </div>
          </div>

          {/* Expert message 3 */}
          <div className="stagger-item d6" style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "white" }}>MC</span>
            </div>
            <div style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: "18px 18px 18px 4px", padding: "12px 16px", fontSize: "0.84rem", color: "#1A1A2E", lineHeight: 1.55, maxWidth: "82%", boxShadow: "0 1px 4px rgba(26,26,46,0.04)" }}>
              Yes, include the last 12 months of medical receipts. This could reduce your offer amount by ~$1,200.
            </div>
          </div>

          {/* File attachment */}
          <div className="stagger-item d7" style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
            <div style={{ width: 28, flexShrink: 0 }} />
            <div style={{ maxWidth: "82%" }}>
              <div style={{ background: "#F6F6FB", border: "1px solid #E8E8F0", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer", transition: "all 0.25s ease" }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "#FFF0F1", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className="fas fa-file-pdf" style={{ fontSize: 16, color: "#E63946" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#1A1A2E", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>OIC_Tips_Guide.pdf</div>
                  <div style={{ fontSize: "0.68rem", color: "#8585A0" }}>245 KB</div>
                </div>
                <i className="fas fa-download" style={{ fontSize: 13, color: "#003DA5" }} />
              </div>
              <div style={{ marginTop: 4 }}>
                <span style={{ fontSize: "0.65rem", color: "#B0B0C8" }}>10:31 AM</span>
              </div>
            </div>
          </div>

          {/* Typing indicator */}
          <div className="stagger-item d8" style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "white" }}>MC</span>
            </div>
            <div style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: "18px 18px 18px 4px", padding: "14px 18px", display: "flex", gap: 5, alignItems: "center" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#B0B0C8", display: "inline-block", animation: "typingBounce 1.4s ease-in-out infinite" }} />
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#B0B0C8", display: "inline-block", animation: "typingBounce 1.4s ease-in-out infinite 0.2s" }} />
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#B0B0C8", display: "inline-block", animation: "typingBounce 1.4s ease-in-out infinite 0.4s" }} />
            </div>
          </div>

          <div style={{ height: 40 }} />
        </div>

        {/* Schedule Call Floating Pill */}
        <div style={{ position: "absolute", bottom: 80, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
          <button style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", background: "linear-gradient(135deg,#7C3AED,#6D28D9)", color: "white", border: "none", borderRadius: 9999, fontFamily: "inherit", fontSize: "0.8rem", fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 16px rgba(124,58,237,0.3)" }}>
            <i className="fas fa-calendar-check" style={{ fontSize: 13 }} />
            Schedule a call
          </button>
        </div>

        {/* Message Input */}
        <div style={{ padding: "12px 16px 20px", background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)", borderTop: "1px solid #E8E8F0", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 9999, padding: "6px 8px 6px 16px" }}>
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
              <i className="fas fa-paperclip" style={{ fontSize: 16, color: "#8585A0" }} />
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ flex: 1, border: "none", outline: "none", fontFamily: "inherit", fontSize: "0.84rem", color: "#1A1A2E", background: "transparent" }}
            />
            <button style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,61,165,0.2)" }}>
              <i className="fas fa-paper-plane" style={{ fontSize: 13, color: "white" }} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </PhoneFrame>
  );
}
