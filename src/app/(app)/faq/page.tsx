"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ScreenHeader } from "@/components/ScreenHeader";

const faqItems = [
  { q: "What is an Offer in Compromise?", a: "An Offer in Compromise (OIC) is an agreement between you and the IRS that settles your tax debt for less than the full amount owed. The IRS considers your ability to pay, income, expenses, and asset equity when evaluating your offer." },
  { q: "How long does the IRS resolution process take?", a: "The timeline varies by resolution type. Installment agreements can be set up in days, while an Offer in Compromise typically takes 6-12 months for the IRS to process. Penalty abatement requests usually take 2-4 months." },
  { q: "Will I be audited during the process?", a: "Applying for a resolution does not trigger an audit. However, the IRS will review your financial information to evaluate your case. Being accurate and transparent with your documentation helps ensure a smooth process." },
  { q: "What happens if my offer is rejected?", a: "If your OIC is rejected, you have 30 days to appeal the decision. You can also explore alternative resolutions like installment agreements or Currently Not Collectible status. Our experts can help you navigate the next steps." },
  { q: "Can I negotiate with the IRS myself?", a: "Yes, you have the right to negotiate directly with the IRS. BlastTax helps you prepare your case and forms. For complex situations, our licensed experts can represent you and handle all IRS communications on your behalf." },
  { q: "What are IRS allowable expenses?", a: "The IRS uses national and local standards to determine reasonable living expenses. These include housing, food, transportation, healthcare, and other necessities. Your allowable expenses directly affect how much you can offer in a settlement." },
  { q: "How does penalty abatement work?", a: "Penalty abatement removes or reduces IRS penalties on your tax debt. You may qualify through first-time abatement if you have a clean compliance history, or through reasonable cause if circumstances prevented you from filing or paying on time." },
  { q: "What is CSED and why does it matter?", a: "CSED stands for Collection Statute Expiration Date \u2014 the deadline by which the IRS must collect a tax debt, typically 10 years from assessment. Understanding your CSED is crucial as it affects your resolution strategy and negotiating position." },
];

export default function FaqPage() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PhoneFrame>
      <StatusBar />
      <ScreenHeader title="FAQ" backPath="/account" rightAction={<div style={{ width: 40 }} />} />

      <div className="screen">
        <div className="screen-content" style={{ paddingBottom: 100, gap: 14 }}>

          {/* Search Bar */}
          <div className="stagger-item d2">
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "white", border: "1.5px solid #E8E8F0", borderRadius: 9999, padding: "10px 16px" }}>
              <i className="fas fa-magnifying-glass" style={{ fontSize: 14, color: "#B0B0C8" }} />
              <input type="text" placeholder="Search questions..." style={{ flex: 1, border: "none", outline: "none", fontFamily: "inherit", fontSize: "0.85rem", color: "#1A1A2E", background: "transparent" }} />
            </div>
          </div>

          {/* FAQ Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqItems.map((item, i) => (
              <div
                key={i}
                className={`faq-item stagger-item d${i + 3}${openIndex === i ? " open" : ""}`}
                onClick={() => toggleFaq(i)}
              >
                <div className="faq-question">
                  <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#1A1A2E", lineHeight: 1.4 }}>{item.q}</span>
                  <i className="fas fa-chevron-down faq-chevron" style={{ fontSize: 11, color: "#B0B0C8" }} />
                </div>
                <div className="faq-answer">
                  <p style={{ fontSize: "0.82rem", color: "#5C5C7A", lineHeight: 1.6 }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions Card */}
          <div className="stagger-item d11" style={{ background: "linear-gradient(135deg,#FAFAFF 0%,#EBF0FF 100%)", borderRadius: 20, padding: 24, border: "1px solid rgba(0,61,165,0.08)", textAlign: "center" }}>
            <div style={{ width: 48, height: 48, borderRadius: 16, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
              <i className="fas fa-comments" style={{ fontSize: 20, color: "#003DA5" }} />
            </div>
            <div style={{ fontSize: "1rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 4 }}>Still have questions?</div>
            <div style={{ fontSize: "0.8rem", color: "#8585A0", marginBottom: 16 }}>We&apos;re here to help you navigate your tax resolution</div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => router.push("/ai-chat")} className="help-btn" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 12, background: "linear-gradient(135deg,#003DA5,#2563EB)", color: "white", border: "none", borderRadius: 14, fontFamily: "inherit", fontSize: "0.82rem", fontWeight: 600, boxShadow: "0 2px 8px rgba(0,61,165,0.2)", cursor: "pointer" }}>
                <i className="fas fa-sparkles" style={{ fontSize: 13 }} /> Chat with AI
              </button>
              <button className="help-btn" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 12, background: "white", color: "#1A1A2E", border: "1.5px solid #E8E8F0", borderRadius: 14, fontFamily: "inherit", fontSize: "0.82rem", fontWeight: 600, cursor: "pointer" }}>
                <i className="fas fa-user-tie" style={{ fontSize: 13, color: "#7C3AED" }} /> Contact Expert
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />

      <style jsx>{`
        .faq-item {
          background: white;
          border: 1px solid #E8E8F0;
          border-radius: 14px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .faq-item:hover {
          border-color: rgba(0,61,165,0.12);
        }
        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          cursor: pointer;
          gap: 12px;
          user-select: none;
          transition: background 0.2s ease;
        }
        .faq-question:hover {
          background: #FAFAFF;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), padding 0.3s ease;
          padding: 0 16px;
        }
        .faq-item.open .faq-answer {
          max-height: 200px;
          padding: 0 16px 14px;
        }
        .faq-item.open {
          border-color: rgba(0,61,165,0.15);
          box-shadow: 0 2px 12px rgba(26,26,46,0.06);
        }
        .faq-chevron {
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .faq-item.open .faq-chevron {
          transform: rotate(180deg);
        }
        .help-btn {
          transition: all 0.25s ease;
        }
        .help-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(26,26,46,0.08);
        }
        .help-btn:active {
          transform: scale(0.97);
        }
      `}</style>
    </PhoneFrame>
  );
}
