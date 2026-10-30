import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Bike, ClipboardList, MessageCircle, UtensilsCrossed } from "lucide-react";
import heroImage from "@/assets/hero-bbq.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { ProductImage } from "@/components/ProductImage";
import { categories, featuredProducts, countByCategory, type Product } from "@/data/products";
import { siteConfig } from "@/data/config";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tundama Food Barbecue | Domicilios en Duitama" },
      {
        name: "description",
        content:
          "Tundama Food Barbecue. Hamburguesas, BBQ, sushi, hot dogs, pizzas, salchipapas y más. Pide tus favoritos a domicilio en Duitama.",
      },
      { property: "og:title", content: "Tundama Food Barbecue | Domicilios en Duitama" },
      {
        property: "og:description",
        content: "Elige tus favoritos y recíbelos en la puerta de tu casa. Solo domicilios en Duitama.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const steps = [
  { n: "01", title: "ELIGE", text: "Explora nuestro menú y elige tus favoritos.", Icon: UtensilsCrossed },
  { n: "02", title: "ARMA TU PEDIDO", text: "Agrega los productos al carrito y revisa tu pedido.", Icon: ClipboardList },
  { n: "03", title: "RECIBE", text: "Confirma por WhatsApp y recibe tu pedido en casa.", Icon: Bike },
];

function Index() {
  const { add } = useCart();
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Selección de hamburguesas, BBQ, hot dogs y sushi de Tundama Food Barbecue"
            width={1600}
            height={1200}
            className="h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/55" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Solo domicilios · {siteConfig.city}
            </span>
            <h1 className="mt-5 text-[clamp(2.75rem,11vw,6rem)] leading-[0.92] font-normal">
              EL SABOR QUE
              <br />
              SE QUEDA <span className="text-primary">CONTIGO</span>
            </h1>
            <span className="brush-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Hamburguesas, BBQ, Sushi, Hot Dogs y mucho más. Elige tus favoritos y recíbelos en la
              puerta de tu casa.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/menu"
                className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 font-display text-2xl tracking-wide text-primary-foreground shadow-[var(--shadow-red)] transition-colors hover:bg-primary-dark"
              >
                PEDIR AHORA
              </Link>
              <Link
                to="/menu"
                className="inline-flex h-14 items-center justify-center rounded-md border border-border bg-surface/60 px-8 font-display text-2xl tracking-wide text-foreground transition-colors hover:border-primary"
              >
                VER MENÚ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDICADOR DOMICILIOS */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-2xl tracking-wide">
            <span className="text-primary">SOLO</span> DOMICILIOS
          </p>
          <p className="text-sm text-muted-foreground">
            Disfruta Tundama desde donde estés.
            {siteConfig.coverageZones && (
              <span className="ml-2 text-foreground">
                Zonas de cobertura: {siteConfig.coverageZones}
              </span>
            )}
          </p>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="mx-auto max-w-6xl px-4 py-14" id="categorias">
        <SectionHeading title="¿QUÉ SE TE ANTOJA?" subtitle="Elige una categoría y arma tu pedido." />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.id}
              to="/menu"
              search={{ categoria: c.id }}
              className="card-surface group overflow-hidden rounded-xl transition-colors hover:border-primary/60"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <ProductImage
                  src={c.image}
                  alt={c.name}
                  label={c.shortName}
                  fit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-2 p-3">
                <div className="min-w-0">
                  <h3 className="truncate font-display text-xl tracking-wide">{c.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {countByCategory(c.id) > 0 ? `${countByCategory(c.id)} productos` : "Muy pronto"}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-primary" aria-hidden />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DESTACADOS */}
      <section className="border-y border-border bg-surface/40 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading title="LOS FAVORITOS DE TUNDAMA" subtitle="Los que más piden en Duitama." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} onOpen={setSelected} onAdd={(x) => add(x.id, 1)} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/menu"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-border px-6 font-display text-xl tracking-wide transition-colors hover:border-primary"
            >
              VER TODO EL MENÚ <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* CÓMO PEDIR */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading title="PEDIR ES MUY FÁCIL" />
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(({ n, title, text, Icon }) => (
            <div key={n} className="card-surface rounded-xl p-6">
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl text-primary">{n}</span>
                <Icon className="h-6 w-6 text-primary" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-2xl tracking-wide">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOMICILIOS */}
      <section className="border-t border-border bg-surface py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading title="TU ANTOJO, HASTA TU PUERTA." subtitle="Preparamos tu pedido y lo llevamos hasta donde estés." />
            <Link
              to="/menu"
              className="inline-flex h-14 items-center rounded-md bg-primary px-8 font-display text-2xl tracking-wide text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              PEDIR AHORA
            </Link>
          </div>
          <dl className="card-surface grid gap-4 rounded-xl p-6 text-sm">
            <div>
              <dt className="text-xs tracking-[0.2em] text-primary uppercase">Modalidad</dt>
              <dd className="font-display text-2xl tracking-wide">SOLO DOMICILIOS</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.2em] text-primary uppercase">Horario</dt>
              <dd className="text-muted-foreground">
                {siteConfig.schedule || "Consulta nuestro horario de atención."}
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.2em] text-primary uppercase">Cobertura</dt>
              <dd className="text-muted-foreground">{siteConfig.coverageZones || "Por confirmar."}</dd>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MessageCircle className="h-4 w-4 text-primary" aria-hidden />
              Confirmamos disponibilidad y valor del domicilio por WhatsApp.
            </div>
          </dl>
        </div>
      </section>

      <ProductModal product={selected} onClose={() => setSelected(null)} onAdd={(p, q) => add(p.id, q)} />
    </>
  );
}
