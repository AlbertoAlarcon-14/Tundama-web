import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="Tundama Food Barbecue — Inicio"
      className="group flex items-center gap-2"
    >
      <span
        aria-hidden
        className="grid h-15 w-15 shrink-0 -skew-x-6 place-items-center rounded-sm bg-primary shadow-[var(--shadow-red)] transition-transform group-hover:scale-105"
      >
        <img
          src={logo}
          alt=""
          className="h-13 w-13 object-contain"
        />
      </span>

      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-display text-xl tracking-wide text-foreground sm:text-2xl">
          TUNDAMA
        </span>

        {!compact && (
          <span className="text-[9px] font-semibold tracking-[0.34em] text-muted-foreground">
            FOOD BARBECUE
          </span>
        )}
      </span>
    </Link>
  );
}