"use client";
import { useRouter } from "next/navigation";

export function ScreenHeader({
  title,
  backPath,
  rightAction,
}: {
  title: string;
  backPath?: string;
  rightAction?: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <div className="screen-header stagger-item d1">
      {backPath && (
        <button className="btn-icon" onClick={() => router.push(backPath)}>
          <i className="fas fa-arrow-left" />
        </button>
      )}
      <div className="screen-header-title">{title}</div>
      {rightAction}
    </div>
  );
}
