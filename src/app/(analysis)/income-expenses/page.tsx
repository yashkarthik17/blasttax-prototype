"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function IncomeExpensesPage() {
  const router = useRouter();
  const [animatedSections, setAnimatedSections] = useState<number[]>([]);

  useEffect(() => {
    [0, 1].forEach((i) => {
      setTimeout(() => setAnimatedSections((p) => [...p, i]), 300 + i * 200);
    });
  }, []);

  const incomeItems = [
    { label: "Gross monthly wages", value: "$4,500" },
    { label: "Self-employment", value: "$0" },
    { label: "Social Security", value: "$0" },
    { label: "Other income", value: "$200" },
  ];

  const expenseItems = [
    { label: "Housing & utilities", value: "$1,950", note: "IRS standard" },
    { label: "Food/clothing/misc", value: "$785", note: "IRS standard" },
    { label: "Transportation", value: "$662", note: "IRS standard" },
    { label: "Healthcare", value: "$84", note: "IRS standard" },
    { label: "Other (court-ordered, childcare)", value: "$350" },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div style={{ padding: "0 20px" }}>
          <div className="progress-bar-wrapper" style={{ marginTop: 4 }}>
            <div className="progress-bar-fill" style={{ width: "70%" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-muted-light)" }}>Step 5 of 6</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--brand-blue)" }}>Income & Expenses</span>
          </div>
        </div>

        <div className="screen-content" style={{ paddingTop: 14 }}>
          <div style={{ marginBottom: 4 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.25 }}>Monthly Income & Expenses</h1>
            <p style={{ fontSize: 12, color: "var(--color-muted-light)", marginTop: 3, lineHeight: 1.4 }}>We&apos;ll use IRS allowable expense standards to calculate your disposable income</p>
          </div>

          {/* Income */}
          <div style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: 16, padding: 18, boxShadow: "0 2px 8px rgba(26,26,46,0.04)", marginBottom: 12, opacity: animatedSections.includes(0) ? 1 : 0, transform: animatedSections.includes(0) ? "translateY(0)" : "translateY(10px)", transition: "all 0.5s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, background: "var(--color-success-light)", color: "var(--color-success)" }}>
                <i className="fas fa-arrow-down" />
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>Income</span>
            </div>
            {incomeItems.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: i < incomeItems.length - 1 ? "1px solid var(--color-border-light)" : "none" }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: "var(--color-foreground)", flex: 1 }}>{item.label}</span>
                <input type="text" defaultValue={item.value} style={{ width: 90, padding: "6px 10px", background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)", borderRadius: 8, fontSize: 14, fontWeight: 700, color: "var(--color-foreground)", textAlign: "right", outline: "none" }} />
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0 4px", borderTop: "2px solid var(--color-border)", marginTop: 4 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)" }}>Total Monthly Income</span>
              <span style={{ fontSize: 16, fontWeight: 800, color: "var(--color-success)" }}>$4,700</span>
            </div>
          </div>

          {/* Expenses */}
          <div style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: 16, padding: 18, boxShadow: "0 2px 8px rgba(26,26,46,0.04)", marginBottom: 12, opacity: animatedSections.includes(1) ? 1 : 0, transform: animatedSections.includes(1) ? "translateY(0)" : "translateY(10px)", transition: "all 0.5s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, background: "var(--color-danger-light)", color: "var(--color-danger)" }}>
                <i className="fas fa-arrow-up" />
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>Expenses</span>
              <span style={{ fontSize: 10, fontWeight: 600, color: "var(--color-muted-light)", marginLeft: "auto" }}>IRS National Standards</span>
            </div>
            {expenseItems.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: i < expenseItems.length - 1 ? "1px solid var(--color-border-light)" : "none" }}>
                <div style={{ flex: 1, display: "flex", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "var(--color-foreground)" }}>{item.label}</span>
                  {item.note && <span style={{ fontSize: 10, color: "var(--brand-blue)", fontWeight: 600, background: "var(--brand-blue-light)", padding: "2px 6px", borderRadius: 4, whiteSpace: "nowrap" }}>{item.note}</span>}
                </div>
                <input type="text" defaultValue={item.value} style={{ width: 90, padding: "6px 10px", background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)", borderRadius: 8, fontSize: 14, fontWeight: 700, color: "var(--color-foreground)", textAlign: "right", outline: "none" }} />
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0 4px", borderTop: "2px solid var(--color-border)", marginTop: 4 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)" }}>Total Monthly Expenses</span>
              <span style={{ fontSize: 16, fontWeight: 800, color: "var(--color-danger)" }}>$3,831</span>
            </div>
          </div>

          {/* MDI Card */}
          <div style={{ background: "linear-gradient(135deg, #EBF0FF 0%, #F5F0FF 50%, #E6F9EE 100%)", border: "1.5px solid rgba(0, 61, 165, 0.12)", borderRadius: 16, padding: 20, textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(135deg, #003DA5, #7C3AED, #00A651)" }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Monthly Disposable Income (MDI)</span>
            <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--brand-blue)", letterSpacing: "-0.02em", marginTop: 6 }}>$869</div>
            <div style={{ marginTop: 10, padding: "10px 14px", background: "rgba(255,255,255,0.7)", borderRadius: 10 }}>
              <span style={{ fontSize: 12, color: "var(--color-muted)", lineHeight: 1.5 }}>This is what the IRS expects you can pay each month toward your tax debt</span>
            </div>
          </div>

          <div style={{ flex: 1, minHeight: 12 }} />

          <div style={{ padding: "12px 0 20px" }}>
            <button className="btn btn-primary" onClick={() => router.push("/final-verification")} style={{ fontSize: 15, padding: "16px 28px" }}>
              Calculate My Options <i className="fas fa-arrow-right" style={{ fontSize: 13 }} />
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
