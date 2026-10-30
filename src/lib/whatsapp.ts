import { formatCOP, siteConfig } from "@/data/config";
import type { Product, ProductSize } from "@/data/products";

export interface CheckoutData {
  name: string;
  phone: string;
  address: string;
  neighborhood: string;
  notes: string;
  payment: string;
}

interface Line {
  product: Product;
  size?: ProductSize;
  quantity: number;
  subtotal: number;

  // Adicionales seleccionados para este producto
  selectedAddons?: {
    addon: {
      name: string;
      price: number;
    };
    quantity: number;
  }[];
}

export function buildOrderMessage(
  items: Line[],
  total: number,
  data: CheckoutData,
) {
  const lines = items.flatMap((i) => {
    const sizeLabel = i.size
      ? ` (${i.size.name})`
      : "";

    // Línea principal del producto
    const productLine =
      `• ${i.product.name}${sizeLabel} x${i.quantity} — ${formatCOP(i.subtotal)}`;

    // Líneas de adicionales
    const addonLines =
      i.selectedAddons &&
      i.selectedAddons.length > 0
        ? [
            "  Adicionales:",
            ...i.selectedAddons.map(
              (selectedAddon) =>
                `  + ${selectedAddon.addon.name} x${selectedAddon.quantity} — ${formatCOP(
                  selectedAddon.addon.price *
                    selectedAddon.quantity,
                )}`,
            ),
          ]
        : [];

    return [
      productLine,
      ...addonLines,
    ];
  });

  return [
    `Hola ${siteConfig.name}`,
    "",
    "Quiero realizar el siguiente pedido:",
    "",
    ...lines,
    "",
    `Subtotal: ${formatCOP(total)}`,
    "",
    "DATOS DEL DOMICILIO:",
    `Nombre: ${data.name}`,
    `Teléfono: ${data.phone}`,
    `Dirección: ${data.address}`,
    `Barrio: ${data.neighborhood}`,
    `Medio de pago: ${data.payment}`,
    `Indicaciones: ${data.notes || "—"}`,
    "",
    "Por favor, confirmar disponibilidad y valor del domicilio.",
  ].join("\n");
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}

export const whatsappGreetingUrl = whatsappUrl(
  `Hola ${siteConfig.name} 👋 Quiero hacer un pedido a domicilio.`,
);
