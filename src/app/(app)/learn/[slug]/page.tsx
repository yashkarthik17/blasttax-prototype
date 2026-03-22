"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";

export default function LearnArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const [helpfulState, setHelpfulState] = useState<"up" | "down" | null>(null);

  // We display the OIC article content as the prototype example
  void slug;

  return (
    <PhoneFrame>
      <StatusBar />

      {/* Header */}
      <div className="screen-header stagger-item d1">
        <button className="btn-icon" onClick={() => router.push("/learn")}>
          <i className="fas fa-arrow-left" />
        </button>
        <span className="screen-header-title">Learn</span>
        <button className="btn-icon">
          <i className="far fa-bookmark" />
        </button>
      </div>

      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-content" style={{ paddingBottom: 100, gap: 0 }}>

          {/* Hero Image */}
          <div className="hero-image stagger-item d2">
            <i
              className="fas fa-handshake"
              style={{ fontSize: 48, color: "rgba(255,255,255,0.3)", position: "relative", zIndex: 1 }}
            />
          </div>

          {/* Category Badge */}
          <div className="stagger-item d3" style={{ marginTop: 16 }}>
            <span
              style={{
                padding: "4px 12px",
                background: "#EBF0FF",
                borderRadius: 9999,
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "#003DA5",
              }}
            >
              Resolution
            </span>
          </div>

          {/* Title */}
          <div className="stagger-item d4" style={{ marginTop: 12 }}>
            <h1
              style={{
                fontSize: "1.35rem",
                fontWeight: 900,
                color: "#1A1A2E",
                letterSpacing: "-0.02em",
                lineHeight: 1.25,
                margin: 0,
              }}
            >
              What is an Offer in Compromise?
            </h1>
          </div>

          {/* Meta */}
          <div className="stagger-item d4" style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
            <span
              style={{ fontSize: "0.72rem", color: "#8585A0", fontWeight: 500, display: "flex", alignItems: "center", gap: 4 }}
            >
              <i className="far fa-clock" style={{ fontSize: 10 }} /> 5 min read
            </span>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#D5D5E0" }} />
            <span style={{ fontSize: "0.72rem", color: "#8585A0", fontWeight: 500 }}>Updated Mar 2026</span>
          </div>

          {/* Article Body */}
          <div className="article-body stagger-item d5" style={{ marginTop: 20 }}>
            <p>
              If you owe more in taxes than you can realistically pay, you may not be stuck with the full amount. The
              IRS offers a program called an <strong style={{ color: "#1A1A2E" }}>Offer in Compromise (OIC)</strong>{" "}
              that allows qualifying taxpayers to settle their tax debt for less than the total amount owed.
            </p>

            <h2>What is an OIC?</h2>
            <p>
              An Offer in Compromise is a formal agreement between you and the IRS to settle your tax liability for less
              than the full amount. The IRS considers your ability to pay, income, expenses, and asset equity when
              evaluating your offer. It&apos;s essentially a fresh start program designed for taxpayers experiencing
              genuine financial hardship.
            </p>

            <h2>Who Qualifies?</h2>
            <p>Not everyone qualifies for an OIC. The IRS looks at several factors:</p>
            <ul>
              <li>You must be current on all filing requirements</li>
              <li>You cannot be in an open bankruptcy proceeding</li>
              <li>Your estimated offer must meet IRS minimum thresholds</li>
              <li>You must demonstrate inability to pay in full</li>
              <li>All required estimated tax payments must be current</li>
            </ul>

            <h2>The Three Types</h2>
          </div>

          {/* Three Types Cards */}
          <div className="stagger-item d6" style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
            {[
              {
                icon: "fa-question",
                iconBg: "#EBF0FF",
                iconColor: "#003DA5",
                title: "Doubt as to Collectibility (DATC)",
                desc: "The most common type. You agree you owe the tax, but the IRS doubts it can collect the full amount from you based on your financial situation.",
              },
              {
                icon: "fa-scale-balanced",
                iconBg: "#F5F0FF",
                iconColor: "#7C3AED",
                title: "Doubt as to Liability (DATL)",
                desc: "Used when you genuinely believe you don\u2019t owe all or part of the tax. You must provide evidence supporting your position.",
              },
              {
                icon: "fa-hand-holding-heart",
                iconBg: "#E6F9EE",
                iconColor: "#00A651",
                title: "Effective Tax Administration (ETA)",
                desc: "Applies when you owe the tax but paying would create an economic hardship or would be unfair due to exceptional circumstances.",
              },
            ].map((card) => (
              <div key={card.title} className="type-card">
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: card.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className={`fas ${card.icon}`} style={{ fontSize: 11, color: card.iconColor }} />
                  </div>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>{card.title}</span>
                </div>
                <p style={{ fontSize: "0.76rem", color: "#5C5C7A", lineHeight: 1.55, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* How to Apply */}
          <div className="article-body stagger-item d7" style={{ marginTop: 16 }}>
            <h2>How to Apply</h2>
            <ol>
              <li>
                <strong style={{ color: "#1A1A2E" }}>Check eligibility</strong> using the IRS Pre-Qualifier tool or
                consult with a tax professional to assess your chances.
              </li>
              <li>
                <strong style={{ color: "#1A1A2E" }}>Complete IRS Form 656</strong>, the official Offer in Compromise
                application, along with Form 433-A (for individuals).
              </li>
              <li>
                <strong style={{ color: "#1A1A2E" }}>Calculate your offer</strong> based on your Reasonable Collection
                Potential (RCP), which factors in assets, income, and expenses.
              </li>
              <li>
                <strong style={{ color: "#1A1A2E" }}>Submit the $205 application fee</strong> and your initial payment
                (20% for lump sum, or first monthly payment).
              </li>
              <li>
                <strong style={{ color: "#1A1A2E" }}>Wait for IRS review</strong>, which typically takes 6-12 months.
                Stay compliant with all tax obligations during this period.
              </li>
            </ol>
          </div>

          {/* Stat Callout */}
          <div className="stat-callout stagger-item d8">
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <i className="fas fa-chart-line" style={{ fontSize: 14, color: "#003DA5" }} />
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#003DA5",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                Key Statistic
              </span>
            </div>
            <div style={{ fontSize: "1.3rem", fontWeight: 900, color: "#1A1A2E", marginBottom: 4 }}>
              The IRS accepted 33% of OIC applications in 2024
            </div>
            <div style={{ fontSize: "0.72rem", color: "#8585A0", fontWeight: 500 }}>
              Working with a tax professional can significantly improve your chances of acceptance.
            </div>
          </div>

          {/* Related Articles */}
          <div className="stagger-item d9" style={{ marginTop: 16 }}>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#B0B0C8",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: 12,
              }}
            >
              Related Articles
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                {
                  title: "Installment Agreement Types Explained",
                  time: "7 min read",
                  bg: "linear-gradient(135deg,#E6F9EE,#B8F0D3)",
                  icon: "fa-calendar-check",
                  iconColor: "#00A651",
                  slug: "installment-agreement",
                },
                {
                  title: "Penalty Abatement: FTA vs Reasonable Cause",
                  time: "4 min read",
                  bg: "linear-gradient(135deg,#FFF0F1,#FECDD3)",
                  icon: "fa-eraser",
                  iconColor: "#E63946",
                  slug: "penalty-abatement",
                },
              ].map((related) => (
                <div
                  key={related.slug}
                  className="related-card"
                  onClick={() => router.push(`/learn/${related.slug}`)}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 12,
                      background: related.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i className={`fas ${related.icon}`} style={{ fontSize: 18, color: related.iconColor }} />
                  </div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#1A1A2E", lineHeight: 1.3 }}>
                      {related.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.68rem",
                        color: "#8585A0",
                        marginTop: 4,
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      <i className="far fa-clock" style={{ fontSize: 9 }} /> {related.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Was This Helpful */}
          <div
            className="stagger-item d10"
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              padding: "20px 0",
            }}
          >
            <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>Was this helpful?</div>
            <div style={{ display: "flex", gap: 16 }}>
              <button
                className={`helpful-btn${helpfulState === "up" ? " active-up" : ""}`}
                onClick={() => setHelpfulState("up")}
              >
                <i className="fas fa-thumbs-up" style={{ fontSize: 16, color: helpfulState === "up" ? "#00A651" : "#8585A0" }} />
              </button>
              <button
                className={`helpful-btn${helpfulState === "down" ? " active-down" : ""}`}
                onClick={() => setHelpfulState("down")}
              >
                <i
                  className="fas fa-thumbs-down"
                  style={{ fontSize: 16, color: helpfulState === "down" ? "#E63946" : "#8585A0" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />

      <style jsx>{`
        .hero-image {
          width: 100%;
          height: 180px;
          border-radius: 20px;
          background: linear-gradient(145deg, #003DA5 0%, #2563EB 60%, #4F46E5 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .hero-image::before {
          content: '';
          position: absolute;
          top: -30px;
          right: -30px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
        }
        .hero-image::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: -20px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
        }
        .article-body h2 {
          font-size: 1rem;
          font-weight: 800;
          color: #1A1A2E;
          margin: 20px 0 10px;
          letter-spacing: -0.01em;
        }
        .article-body p {
          font-size: 0.82rem;
          color: #5C5C7A;
          line-height: 1.65;
          margin-bottom: 12px;
          font-weight: 400;
        }
        .article-body ul {
          margin: 8px 0 14px 0;
          padding-left: 0;
          list-style: none;
        }
        .article-body ul li {
          font-size: 0.8rem;
          color: #5C5C7A;
          line-height: 1.5;
          padding: 5px 0 5px 20px;
          position: relative;
        }
        .article-body ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 12px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #003DA5;
        }
        .article-body ol {
          margin: 8px 0 14px 0;
          padding-left: 0;
          list-style: none;
          counter-reset: steps;
        }
        .article-body ol li {
          font-size: 0.8rem;
          color: #5C5C7A;
          line-height: 1.5;
          padding: 8px 0 8px 36px;
          position: relative;
          counter-increment: steps;
        }
        .article-body ol li::before {
          content: counter(steps);
          position: absolute;
          left: 0;
          top: 6px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #EBF0FF;
          color: #003DA5;
          font-size: 0.7rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-callout {
          background: linear-gradient(135deg, #EBF0FF 0%, #D6E2FF 100%);
          border-left: 4px solid #003DA5;
          border-radius: 12px;
          padding: 18px;
          margin: 16px 0;
        }
        .type-card {
          background: white;
          border: 1px solid #E8E8F0;
          border-radius: 14px;
          padding: 14px;
          margin-bottom: 0;
          transition: all 0.25s ease;
        }
        .type-card:hover {
          box-shadow: 0 4px 16px rgba(26,26,46,0.06);
          transform: translateY(-1px);
        }
        .related-card {
          display: flex;
          gap: 12px;
          padding: 14px;
          background: white;
          border: 1px solid #E8E8F0;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .related-card:hover {
          box-shadow: 0 4px 16px rgba(26,26,46,0.06);
          transform: translateY(-1px);
        }
        .helpful-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #E8E8F0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .helpful-btn:hover {
          border-color: #003DA5;
          background: #EBF0FF;
        }
        .helpful-btn.active-up {
          border-color: #00A651;
          background: #E6F9EE;
        }
        .helpful-btn.active-down {
          border-color: #E63946;
          background: #FFF0F1;
        }
      `}</style>
    </PhoneFrame>
  );
}
