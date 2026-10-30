import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Bike, CreditCard, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig, isWhatsappConfigured } from "@/data/config";
import { whatsappGreetingUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/domicilios")({
  head: () => ({
    meta: [
      { title: "Domicilios en Duitama | Tundama Food Barbecue" },
      {
        name: "description",
        content:
          "Zonas de cobertura, horarios y medios de pago de los domicilios de Tundama Food Barbecue en Duitama, Boyacá.",
      },
      { property: "og:title", content: "Domicilios en Duitama | Tundama Food Barbecue" },
      {
        property: "og:description",
        content: "Cobertura, horarios y pagos de nuestros domicilios en Duitama.",
      },
    ],
  }),
  component: DeliveryPage,
});

function DeliveryPage() {
  const cards = [
    {
      icon: MapPin,
      title: "COBERTURA",
      value: siteConfig.coverageZones,
      fallback: "Zonas por confirmar.",
    },
    {
      icon: Clock,
      title: "HORARIO",
      value: siteConfig.schedule,
      fallback: "Horario pendiente de confirmar.",
    },
    {
      icon: Bike,
      title: "VALOR DEL DOMICILIO",
      value: siteConfig.deliveryCost,
      fallback: "Se confirma por WhatsApp según la zona.",
    },
    {
      icon: CreditCard,
      title: "MEDIOS DE PAGO",
      value: "Efectivo, Nequi, Daviplata y transferencia.",
      fallback: "",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <SectionHeading
        as="h1"
        title="DOMICILIOS"
        subtitle={`Llevamos tu pedido en ${siteConfig.city}.`}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((c) => (
          <div key={c.title} className="card-surface rounded-xl p-6">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground">
              <c.icon className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="mt-4 font-display text-2xl tracking-wide">{c.title}</h2>
            <p
              className={`mt-2 text-sm leading-relaxed ${c.value ? "text-foreground" : "text-muted-foreground italic"}`}
            >
              {c.value || c.fallback}
            </p>
          </div>
        ))}
      </div>

      <div className="card-surface mt-10 rounded-xl p-8 text-center">
        <h2 className="font-display text-3xl tracking-wide">PIDE AHORA</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Arma tu pedido en el menú y confírmalo por WhatsApp.
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
            ESCRÍBENOS
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
