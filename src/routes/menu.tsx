
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import {
  categories,
  products,
  type CategoryId,
  type Product,
} from "@/data/products";
import { useCart } from "@/lib/cart";

type Filter = CategoryId | "todos";

const validIds = new Set<string>([
  ...categories.map((c) => c.id),
  "todos",
]);

export const Route = createFileRoute("/menu")({
  validateSearch: (
    search: Record<string, unknown>,
  ): { categoria?: Filter } => {
    const raw =
      typeof search["categoria"] === "string"
        ? (search["categoria"] as string)
        : "todos";

    return {
      categoria: (validIds.has(raw) ? raw : "todos") as Filter,
    };
  },

  head: () => ({
    meta: [
      {
        title: "Menú | Tundama Food Barbecue",
      },
      {
        name: "description",
        content:
          "Explora el menú de Tundama Food Barbecue: hamburguesas, sushi, hot dogs, pizzas, salchipapas y combos a domicilio en Duitama.",
      },
      {
        property: "og:title",
        content: "Menú | Tundama Food Barbecue",
      },
      {
        property: "og:description",
        content:
          "Hamburguesas, sushi, hot dogs y más. Pide a domicilio en Duitama.",
      },
      {
        property: "og:url",
        content: "/menu",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "/menu",
      },
    ],
  }),

  component: MenuPage,
});

function MenuPage() {
  const { categoria = "todos" } = Route.useSearch();

  const navigate = useNavigate({
    from: "/menu",
  });

  const { add } = useCart();

  const [selected, setSelected] = useState<Product | null>(null);

  const visible = products.filter(
    (p) =>
      p.available &&
      (categoria === "todos" || p.category === categoria),
  );

  const tabs: {
    id: Filter;
    label: string;
  }[] = [
    {
      id: "todos",
      label: "Todos",
    },
    ...categories.map((c) => ({
      id: c.id as Filter,
      label: c.name,
    })),
  ];

  function handleAdd(product: Product) {
    setSelected(product);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <SectionHeading
        as="h1"
        title="MENÚ"
        subtitle="Elige tus favoritos y agrégalos al pedido."
      />

      {/* Categorías */}
      <div
        role="tablist"
        aria-label="Categorías del menú"
        className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2"
      >
        {tabs.map((t) => {
          const active = t.id === categoria;

          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={active}
              type="button"
              onClick={() =>
                navigate({
                  search: {
                    categoria: t.id,
                  },
                })
              }
              className={`h-11 shrink-0 rounded-md border px-4 text-sm font-bold tracking-wide uppercase transition-colors ${
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-surface text-muted-foreground hover:border-primary/60 hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Productos */}
      {visible.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpen={setSelected}
              onAdd={handleAdd}
            />
          ))}
        </div>
      ) : (
        <div className="card-surface rounded-xl p-10 text-center">
          <h2 className="font-display text-3xl tracking-wide">
            MUY PRONTO
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Estamos cargando los productos de esta categoría.
          </p>
        </div>
      )}

      {/* Modal del producto */}
      <ProductModal
        product={selected}
        onClose={() => setSelected(null)}
        onAdd={(
          product,
          quantity,
          size,
          selectedAddons,
          selectedFlavors,
        ) =>
          add(
            product,
            quantity,
            size,
            selectedAddons,
            selectedFlavors,
          )
        }
      />
    </div>
  );
}
