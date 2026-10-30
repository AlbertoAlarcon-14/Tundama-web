import type { ReactNode } from "react";

export function SectionHeading({
  title,
  subtitle,
  as: As = "h2",
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <div className="mb-8">
      <As className="section-title">{title}</As>
      <span className="brush-rule mt-3" aria-hidden />
      {subtitle && <p className="mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
