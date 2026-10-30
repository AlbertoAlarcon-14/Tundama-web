import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { Logo } from "./Logo";
import { useCart } from "@/lib/cart";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/menu", label: "Menú" },
  { to: "/como-pedir", label: "¿Cómo pedir?" },
  { to: "/domicilios", label: "Domicilios" },
] as const;

export function Navbar() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/92 backdrop-blur">
      <nav
        aria-label="Navegación principal"
        className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3"
      >
        <div className="flex min-w-0 items-center gap-8">
          <Logo />
          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeProps={{ className: "text-primary" }}
                  className="text-sm font-semibold tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/carrito"
            aria-label={`Carrito, ${count} producto(s)`}
            className="relative grid h-11 w-11 place-items-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-primary"
          >
            <ShoppingCart className="h-5 w-5" aria-hidden />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
          <Link
            to="/menu"
            className="hidden h-11 items-center rounded-md bg-primary px-5 font-display text-lg tracking-wide text-primary-foreground shadow-[var(--shadow-red)] transition-colors hover:bg-primary-dark sm:inline-flex"
          >
            PEDIR AHORA
          </Link>
        </div>
      </nav>
    </header>
  );
}
