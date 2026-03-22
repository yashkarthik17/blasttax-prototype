"use client";
import { useRouter, usePathname } from "next/navigation";

const tabs = [
  { icon: "fa-house", label: "Home", path: "/dashboard" },
  { icon: "fa-chart-pie", label: "Analysis", path: "/type" },
  { icon: "fa-scale-balanced", label: "Resolve", path: "/resolution-center" },
  { icon: "fa-folder", label: "Cases", path: "/cases" },
  { icon: "fa-user", label: "Account", path: "/account" },
];

export function BottomNav({ active }: { active?: string }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="bottom-nav">
      {tabs.map((tab) => {
        const isActive = active === tab.label || pathname === tab.path;
        return (
          <button
            key={tab.label}
            className={`bottom-nav-item ${isActive ? "active" : ""}`}
            onClick={() => router.push(tab.path)}
          >
            <i className={`fas ${tab.icon}`} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
