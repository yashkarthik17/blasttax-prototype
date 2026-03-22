"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function BillingAgreementsPage() {
  const router = useRouter();
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <PhoneFrame>
      <StatusBar />
      <ScreenHeader title="Payment Agreements" backPath="/billing" rightAction={<div style={{ width: 36 }} />} />

      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-content" style={{ paddingBottom: 100, gap: 18 }}>

          {/* Active Agreement Card */}
          <div className="stagger-item d2" style={{ background: "linear-gradient(145deg, #FAFAFF 0%, #EBF0FF 100%)", border: "2px solid #003DA5", borderRadius: 20, padding: 22, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(135deg, #003DA5, #2563EB)" }} />

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
              <div>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1A1A2E" }}>Pro Plan</div>
                <div style={{ fontSize: "0.78rem", color: "#8585A0", fontWeight: 500, marginTop: 2 }}>Monthly</div>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "5px 12px", background: "#E6F9EE", borderRadius: 9999, fontSize: "0.68rem", fontWeight: 700, color: "#00A651" }}>
                <i className="fas fa-circle" style={{ fontSize: 5 }} /> Active
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: 14, padding: "4px 16px", border: "1px solid rgba(0,61,165,0.08)" }}>
              {[
                { label: "Started", value: "Jan 15, 2026" },
                { label: "Next payment", value: "Apr 15, 2026" },
              ].map((row, i) => (
                <div key={row.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #F0F0F5" }}>
                  <span style={{ fontSize: "0.78rem", color: "#8585A0", fontWeight: 500 }}>{row.label}</span>
                  <span style={{ fontSize: "0.82rem", color: "#1A1A2E", fontWeight: 600 }}>{row.value}</span>
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #F0F0F5" }}>
                <span style={{ fontSize: "0.78rem", color: "#8585A0", fontWeight: 500 }}>Amount</span>
                <span style={{ fontSize: "0.82rem", color: "#1A1A2E", fontWeight: 700 }}>$49.00<span style={{ fontWeight: 500, color: "#8585A0" }}>/month</span></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0" }}>
                <span style={{ fontSize: "0.78rem", color: "#8585A0", fontWeight: 500 }}>Payment method</span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <i className="fab fa-cc-visa" style={{ fontSize: 18, color: "#1A1F71" }} />
                  <span style={{ fontSize: "0.82rem", color: "#1A1A2E", fontWeight: 600 }}>**** 4242</span>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: 16 }}>
              <a style={{ fontSize: "0.78rem", fontWeight: 600, color: "#E63946", textDecoration: "none", cursor: "pointer" }}>Cancel Plan</a>
            </div>
          </div>

          {/* Agreement Terms */}
          <div className="stagger-item d3">
            <div
              onClick={() => setTermsOpen(!termsOpen)}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", background: "white", border: "1px solid #E8E8F0", borderRadius: termsOpen ? "14px 14px 0 0" : 14, cursor: "pointer" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-file-contract" style={{ fontSize: 13, color: "#003DA5" }} />
                </div>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>Agreement Terms</span>
              </div>
              <i className="fas fa-chevron-down" style={{ fontSize: 11, color: "#8585A0", transition: "transform 0.3s ease", transform: termsOpen ? "rotate(180deg)" : "rotate(0)" }} />
            </div>
            {termsOpen && (
              <div style={{ background: "white", border: "1px solid #E8E8F0", borderTop: "none", borderRadius: "0 0 14px 14px", padding: "14px 16px", marginTop: -1 }}>
                {[
                  { title: "Cancellation Policy", desc: "You may cancel your subscription at any time. Your access will continue until the end of your current billing period. No partial refunds for the remaining billing period." },
                  { title: "Refund Policy", desc: "Full refund available within the first 7 days (trial period). After trial, refunds may be issued on a case-by-case basis within 30 days of charge." },
                  { title: "Auto-Renewal Terms", desc: "Your subscription renews automatically each billing period. We\u2019ll notify you 3 days before renewal. Price changes will be communicated at least 30 days in advance." },
                ].map((item) => (
                  <div key={item.title} style={{ padding: "10px 0", borderBottom: "1px solid #F0F0F5" }}>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: "0.74rem", color: "#8585A0", lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Download Agreement PDF */}
          <div className="stagger-item d4">
            <button style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 14, background: "white", border: "1.5px solid #E8E8F0", borderRadius: 14, fontFamily: "inherit", fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E", cursor: "pointer" }}>
              <i className="fas fa-download" style={{ fontSize: 13 }} /> Download Agreement PDF
            </button>
          </div>

          {/* Past Agreements */}
          <div className="stagger-item d5">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, padding: "0 4px" }}>Past Agreements</div>
            <div style={{ background: "white", borderRadius: 16, border: "1px solid #E8E8F0", padding: 16, boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "#F6F6FB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className="fas fa-file-lines" style={{ fontSize: 13, color: "#8585A0" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E" }}>Starter Plan</div>
                  <div style={{ fontSize: "0.68rem", color: "#8585A0", marginTop: 2 }}>Oct 15, 2025 - Jan 14, 2026</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#1A1A2E" }}>$19/mo</span>
                  <span style={{ padding: "2px 8px", background: "#F6F6FB", borderRadius: 9999, fontSize: "0.6rem", fontWeight: 600, color: "#8585A0" }}>Ended</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </PhoneFrame>
  );
}
