import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ShoppingCart, UtensilsCrossed, Bike } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { whatsappGreetingUrl } from "@/lib/whatsapp";
import { isWhatsappConfigured } from "@/data/config";

export const Route = createFileRoute("/como-pedir")({
  head: () => ({
    meta: [
      { title: "¿Cómo pedir? | Tundama Food Barbecue" },
      {
        name: "description",
        content:
          "Pedir en Tundama Food Barbecue es simple: elige tu comida, agrégala al carrito y envía el pedido por WhatsApp. Domicilios en Duitama.",
      },
      { property: "og:title", content: "¿Cómo pedir? | Tundama Food Barbecue" },
      {
        property: "og:description",
        content: "Cuatro pasos: elige, agrega, envía por WhatsApp y recibe en casa.",
      },
    ],
  }),
  component: HowToOrderPage,
});

const steps = [
  {
    icon: UtensilsCrossed,
    title: "ELIGE TU COMIDA",
    text: "Explora el menú por categorías y abre cada producto para ver el detalle.",
  },
  {
    icon: ShoppingCart,
    title: "AGREGA AL CARRITO",
    text: "Suma las cantidades que quieras. El carrito guarda tu pedido mientras navegas.",
  },
  {
    icon: MessageCircle,
    title: "ENVÍA POR WHATSAPP",
    text: "Completa tus datos de entrega y el pedido se arma solo en un mensaje listo para enviar.",
  },
  {
    icon: Bike,
    title: "RECIBE EN CASA",
    text: "Confirmamos disponibilidad, valor del domicilio y tiempo de entrega por el chat.",
  },
];

function HowToOrderPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <SectionHeading
        as="h1"
        title="¿CÓMO PEDIR?"
        subtitle="Cuatro pasos y tu pedido va en camino."
      />

      <ol className="grid gap-4 sm:grid-cols-2">
        {steps.map((s, index) => (
          <li key={s.title} className="card-surface rounded-xl p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground">
                <s.icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-display text-3xl text-primary">{index + 1}</span>
            </div>
            <h2 className="mt-4 font-display text-2xl tracking-wide">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>

      <div className="card-surface mt-10 rounded-xl p-8 text-center">
        <h2 className="font-display text-3xl tracking-wide">¿LISTO PARA PEDIR?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Empieza por el menú o escríbenos directamente.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/menu"
            className="inline-flex h-12 items-center rounded-md bg-primary px-6 font-display text-lg tracking-wide text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            VER MENÚ
          </Link>
          <a
            href={whatsappGreetingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-md border border-border bg-surface px-6 font-display text-lg tracking-wide text-foreground transition-colors hover:border-primary"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            ESCRIBIR POR WHATSAPP
          </a>
        </div>
        {!isWhatsappConfigured && (
          <p className="mt-4 text-xs text-muted-foreground">
            Número de WhatsApp pendiente de configurar.
          </p>
        )}
      </div>
    </div>
  );
}
