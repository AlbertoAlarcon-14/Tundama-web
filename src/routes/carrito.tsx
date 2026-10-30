
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductImage } from "@/components/ProductImage";
import { useCart } from "@/lib/cart";
import { formatCOP, siteConfig, isWhatsappConfigured } from "@/data/config";
import { buildOrderMessage, whatsappUrl, type CheckoutData } from "@/lib/whatsapp";

export const Route = createFileRoute("/carrito")({
  head: () => ({
    meta: [
      { title: "Tu pedido | Tundama Food Barbecue" },
      {
        name: "description",
        content:
          "Revisa tu pedido, agrega tus datos de entrega y envíalo por WhatsApp a Tundama Food Barbecue en Duitama.",
      },
      { property: "og:title", content: "Tu pedido | Tundama Food Barbecue" },
      {
        property: "og:description",
        content: "Confirma tu pedido y envíalo por WhatsApp. Domicilios en Duitama.",
      },
    ],
  }),
  component: CartPage,
});

const emptyData: CheckoutData = {
  name: "",
  phone: "",
  address: "",
  neighborhood: "",
  notes: "",
  payment: "Efectivo",
};

function CartPage() {
  const { items, total, setQuantity, remove, clear } = useCart();
  const [data, setData] = useState<CheckoutData>(emptyData);
  const [touched, setTouched] = useState(false);

  const required = ["name", "phone", "address", "neighborhood"] as const;
  const missing = required.filter((k) => data[k].trim() === "");
  const canSend = items.length > 0 && missing.length === 0 && isWhatsappConfigured;

  const field =
    "h-12 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus:border-primary";
  const label = "block text-xs font-bold tracking-widest text-muted-foreground uppercase";

  function send() {
    setTouched(true);
    if (!canSend) return;

    const message = buildOrderMessage(items, total, data);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <SectionHeading
        as="h1"
        title="TU PEDIDO"
        subtitle="Revisa los productos y envíalos por WhatsApp."
      />

      {items.length === 0 ? (
        <div className="card-surface rounded-xl p-10 text-center">
          <h2 className="font-display text-3xl tracking-wide">
            TU CARRITO ESTÁ VACÍO
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Agrega tus favoritos desde el menú y vuelve aquí para pedir.
          </p>
          <Link
            to="/menu"
            className="mt-6 inline-flex h-12 items-center rounded-md bg-primary px-6 font-display text-lg tracking-wide text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            VER MENÚ
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <ul className="space-y-3">
            {items.map((i) => (
              <li
                key={i.id}
                className="card-surface flex gap-3 rounded-xl p-3"
              >
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md">
                  <ProductImage
                    src={i.product.image}
                    alt={i.product.name}
                    label={i.product.name}
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                  <h2 className="font-display text-xl tracking-wide">
                    {i.product.name}
                    {i.size ? ` — ${i.size.name}` : ""}
                  </h2>

                  {i.firstFlavor && i.secondFlavor && (
                    <div className="mt-1 text-sm text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">
                          Primer sabor:
                        </span>{" "}
                        {i.firstFlavor.name}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">
                          Segundo sabor:
                        </span>{" "}
                        {i.secondFlavor.name}
                      </p>
                    </div>
                  )}

                  <span className="mt-1 text-sm text-muted-foreground">
                    {formatCOP(i.unitPrice)} c/u
                  </span>

                  {i.selectedAddons.length > 0 && (
                    <div className="mt-1 text-sm text-muted-foreground">
                      <p className="font-semibold text-foreground">
                        Adicionales:
                      </p>
                      {i.selectedAddons.map((selectedAddon) => (
                        <p key={selectedAddon.addon.id}>
                          + {selectedAddon.addon.name} x
                          {selectedAddon.quantity}
                        </p>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto flex items-center justify-between gap-2 pt-2">
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        aria-label={`Quitar una unidad de ${i.product.name}`}
                        onClick={() => setQuantity(i.id, i.quantity - 1)}
                        className="grid h-10 w-10 place-items-center rounded-md border border-border text-foreground hover:border-primary"
                      >
                        <Minus className="h-4 w-4" aria-hidden />
                      </button>

                      <span className="w-8 text-center font-bold">
                        {i.quantity}
                      </span>

                      <button
                        type="button"
                        aria-label={`Agregar una unidad de ${i.product.name}`}
                        onClick={() => setQuantity(i.id, i.quantity + 1)}
                        className="grid h-10 w-10 place-items-center rounded-md border border-border text-foreground hover:border-primary"
                      >
                        <Plus className="h-4 w-4" aria-hidden />
                      </button>

                      <button
                        type="button"
                        aria-label={`Eliminar ${i.product.name}`}
                        onClick={() => remove(i.id)}
                        className="ml-1 grid h-10 w-10 place-items-center rounded-md border border-border text-muted-foreground hover:border-primary hover:text-primary"
                      >
                        <Trash2 className="h-4 w-4" aria-hidden />
                      </button>
                    </div>

                    <span className="font-display text-xl text-primary">
                      {formatCOP(i.subtotal)}
                    </span>
                  </div>
                </div>
              </li>
            ))}

            <li>
              <button
                type="button"
                onClick={clear}
                className="text-xs font-bold tracking-widest text-muted-foreground uppercase hover:text-primary"
              >
                Vaciar carrito
              </button>
            </li>
          </ul>

          <div className="card-surface h-fit rounded-xl p-5">
            <h2 className="font-display text-2xl tracking-wide">
              DATOS DE ENTREGA
            </h2>
            <span className="brush-rule mt-2 !w-12" aria-hidden />

            <div className="mt-4 space-y-3">
              <div>
                <label className={label} htmlFor="name">
                  Nombre *
                </label>
                <input
                  id="name"
                  className={`${field} mt-1`}
                  value={data.name}
                  onChange={(e) =>
                    setData({ ...data, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className={label} htmlFor="phone">
                  Teléfono *
                </label>
                <input
                  id="phone"
                  inputMode="tel"
                  className={`${field} mt-1`}
                  value={data.phone}
                  onChange={(e) =>
                    setData({ ...data, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className={label} htmlFor="address">
                  Dirección *
                </label>
                <input
                  id="address"
                  className={`${field} mt-1`}
                  value={data.address}
                  onChange={(e) =>
                    setData({ ...data, address: e.target.value })
                  }
                />
              </div>

              <div>
                <label className={label} htmlFor="neighborhood">
                  Barrio *
                </label>
                <input
                  id="neighborhood"
                  className={`${field} mt-1`}
                  value={data.neighborhood}
                  onChange={(e) =>
                    setData({ ...data, neighborhood: e.target.value })
                  }
                />
              </div>

              <div>
                <label className={label} htmlFor="payment">
                  Medio de pago
                </label>
                <select
                  id="payment"
                  className={`${field} mt-1`}
                  value={data.payment}
                  onChange={(e) =>
                    setData({ ...data, payment: e.target.value })
                  }
                >
                  <option>Efectivo</option>
                  <option>Nequi</option>
                  <option>Daviplata</option>
                  <option>Transferencia</option>
                </select>
              </div>

              <div>
                <label className={label} htmlFor="notes">
                  Indicaciones
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  className="mt-1 w-full rounded-md border border-border bg-surface p-3 text-sm text-foreground outline-none focus:border-primary"
                  value={data.notes}
                  onChange={(e) =>
                    setData({ ...data, notes: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
              <span className="text-sm tracking-widest text-muted-foreground uppercase">
                Subtotal
              </span>
              <span className="font-display text-3xl text-primary">
                {formatCOP(total)}
              </span>
            </div>

            <p className="mt-1 text-xs text-muted-foreground">
              El valor del domicilio se confirma por WhatsApp.
            </p>

            {touched && missing.length > 0 && (
              <p className="mt-3 text-sm text-primary">
                Completa los campos marcados con *.
              </p>
            )}

            <button
              type="button"
              onClick={send}
              disabled={!isWhatsappConfigured}
              className="mt-4 inline-flex h-14 w-full items-center justify-center gap-2 rounded-md bg-primary font-display text-xl tracking-wide text-primary-foreground transition-colors hover:bg-primary-dark disabled:opacity-60"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              ENVIAR PEDIDO POR WHATSAPP
            </button>

            {!isWhatsappConfigured && (
              <p className="mt-3 text-xs text-muted-foreground">
                Falta configurar el número de WhatsApp de{" "}
                {siteConfig.shortName}.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
