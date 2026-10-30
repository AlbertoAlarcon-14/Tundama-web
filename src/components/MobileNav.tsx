import { Link } from "@tanstack/react-router";
import { Home, ShoppingCart, UtensilsCrossed } from "lucide-react";
import { useCart } from "@/lib/cart";

export function MobileNav() {
  const { count } = useCart();

  const item = "flex flex-1 flex-col items-center gap-1 py-2 text-[11px] font-semibold";
  const active = { className: "text-primary" };

  return (
    <nav
      aria-label="Navegación rápida"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/97 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
    >
      <div className="mx-auto flex max-w-md items-stretch">
        <Link to="/" activeOptions={{ exact: true }} activeProps={active} className={`${item} text-muted-foreground`}>
          <Home className="h-5 w-5" aria-hidden />
          Inicio
        </Link>
        <Link to="/menu" activeProps={active} className={`${item} text-muted-foreground`}>
          <UtensilsCrossed className="h-5 w-5" aria-hidden />
          Menú
        </Link>
        <Link to="/carrito" activeProps={active} className={`${item} relative text-muted-foreground`}>
          <span className="relative">
            <ShoppingCart className="h-5 w-5" aria-hidden />
            {count > 0 && (
              <span className="absolute -top-2 -right-2.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </span>
          Carrito
        </Link>
      </div>
    </nav>
  );
}
