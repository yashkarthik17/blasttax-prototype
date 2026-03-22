"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";

const categories = ["All", "Resolution", "Tax Filing", "IRS Process", "Tips"];

const articles = [
  {
    slug: "offer-in-compromise",
    title: "What is an Offer in Compromise?",
    readTime: "5 min read",
    category: "Resolution",
    catBg: "#EBF0FF",
    catColor: "#003DA5",
    thumbBg: "linear-gradient(135deg,#EBF0FF,#D6E2FF)",
    icon: "fa-handshake",
    iconColor: "#003DA5",
  },
  {
    slug: "installment-agreement",
    title: "Installment Agreement Types Explained",
    readTime: "7 min read",
    category: "Resolution",
    catBg: "#E6F9EE",
    catColor: "#00A651",
    thumbBg: "linear-gradient(135deg,#E6F9EE,#B8F0D3)",
    icon: "fa-calendar-check",
    iconColor: "#00A651",
  },
  {
    slug: "transaction-codes",
    title: "Understanding IRS Transaction Codes",
    readTime: "10 min read",
    category: "IRS Process",
    catBg: "#EEF2FF",
    catColor: "#4F46E5",
    thumbBg: "linear-gradient(135deg,#F5F0FF,#E0D4FC)",
    icon: "fa-code",
    iconColor: "#7C3AED",
  },
  {
    slug: "csed-expiration",
    title: "CSED: When Does Your Tax Debt Expire?",
    readTime: "6 min read",
    category: "IRS Process",
    catBg: "#FEF3C7",
    catColor: "#D97706",
    thumbBg: "linear-gradient(135deg,#FEF3C7,#FDE68A)",
    icon: "fa-hourglass-half",
    iconColor: "#D97706",
  },
  {
    slug: "penalty-abatement",
    title: "Penalty Abatement: FTA vs Reasonable Cause",
    readTime: "4 min read",
    category: "Tips",
    catBg: "#FFF0F1",
    catColor: "#E63946",
    thumbBg: "linear-gradient(135deg,#FFF0F1,#FECDD3)",
    icon: "fa-eraser",
    iconColor: "#E63946",
  },
];

export default function LearnPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All" ? articles : articles.filter((a) => a.category === activeCategory);

  return (
    <PhoneFrame>
      <StatusBar />

      {/* Header */}
      <div className="screen-header stagger-item d1">
        <div className="screen-header-title" style={{ fontSize: "1.2rem", fontWeight: 800 }}>
          Learn
        </div>
        <button className="btn-icon">
          <i className="fas fa-magnifying-glass" />
        </button>
      </div>

      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-content" style={{ paddingBottom: 100, gap: 18 }}>
          {/* Featured Article */}
          <div
            className="featured-card stagger-item d2"
            onClick={() => router.push("/learn/tax-debt-guide")}
          >
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "4px 10px",
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: 9999,
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.9)",
                  marginBottom: 14,
                  backdropFilter: "blur(8px)",
                }}
              >
                <i className="fas fa-star" style={{ fontSize: 8 }} /> FEATURED
              </div>
              <div
                style={{ fontSize: "1.1rem", fontWeight: 800, color: "white", lineHeight: 1.3, marginBottom: 10 }}
              >
                Understanding IRS Tax Debt: Your Complete Guide
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: 500,
                  }}
                >
                  <i className="far fa-clock" style={{ fontSize: 10 }} /> 12 min read
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "3px 8px",
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: 9999,
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  Tax Basics
                </div>
              </div>
            </div>
          </div>

          {/* Category Chips */}
          <div
            className="stagger-item d3"
            style={{
              display: "flex",
              gap: 8,
              overflowX: "auto",
              paddingBottom: 4,
              WebkitOverflowScrolling: "touch",
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat}
                className={`cat-chip${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </div>
            ))}
          </div>

          {/* Articles List */}
          <div>
            {filtered.map((article, i) => (
              <div
                key={article.slug}
                className={`article-card stagger-item d${i + 4}`}
                onClick={() => router.push(`/learn/${article.slug}`)}
              >
                <div className="article-thumb" style={{ background: article.thumbBg }}>
                  <i className={`fas ${article.icon}`} style={{ fontSize: 22, color: article.iconColor }} />
                </div>
                <div
                  style={{
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E", lineHeight: 1.35, marginBottom: 6 }}
                  >
                    {article.title}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        color: "#8585A0",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      <i className="far fa-clock" style={{ fontSize: 9 }} /> {article.readTime}
                    </span>
                    <span
                      style={{
                        padding: "2px 8px",
                        background: article.catBg,
                        borderRadius: 9999,
                        fontSize: "0.6rem",
                        fontWeight: 600,
                        color: article.catColor,
                      }}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />

      <style jsx>{`
        .featured-card {
          background: linear-gradient(145deg, #003DA5 0%, #2563EB 60%, #4F46E5 100%);
          border-radius: 20px;
          padding: 24px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .featured-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,61,165,0.3);
        }
        .featured-card::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
        }
        .featured-card::after {
          content: '';
          position: absolute;
          bottom: -30px;
          left: -30px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
        }
        .cat-chip {
          padding: 7px 16px;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 600;
          border: 1px solid #E8E8F0;
          background: white;
          color: #5C5C7A;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .cat-chip:hover {
          border-color: #003DA5;
          color: #003DA5;
          background: #EBF0FF;
        }
        .cat-chip.active {
          background: #003DA5;
          color: white;
          border-color: #003DA5;
        }
        .article-card {
          display: flex;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid #F0F0F5;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .article-card:last-child {
          border-bottom: none;
        }
        .article-card:hover {
          background: #F6F6FB;
          margin: 0 -12px;
          padding: 14px 12px;
          border-radius: 12px;
        }
        .article-thumb {
          width: 72px;
          height: 72px;
          border-radius: 12px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </PhoneFrame>
  );
}
