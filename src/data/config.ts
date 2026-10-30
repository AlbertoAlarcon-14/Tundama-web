// ============================================================
// CONFIGURACIÓN CENTRAL DE TUNDAMA FOOD BARBECUE
// Edita aquí los datos del negocio. No hay que tocar componentes.
// ============================================================

export const siteConfig = {
  name: "Tundama Food Barbecue",
  shortName: "Tundama",
  city: "Duitama, Boyacá",

  // ⚠️ PLACEHOLDER: reemplazar por el número real de WhatsApp
  // Formato internacional sin signos: 57 + número. Ej: "573001234567"
  whatsappNumber: "573227829958",

  // Pendientes por confirmar con el cliente (dejar "" para ocultar)
  coverageZones: "Duitama",
  schedule: "Lunes a Sabado · 6:00 p.m — 9:30 p.m. y Domingo · 6:00 p.m — 9:00 p.m.", // ej: "Lun a Dom · 12:00 m — 10:00 p.m."
  deliveryCost: "Segun la zona", // ej: "$4.000 según la zona"
  phone: "322 782 9958", // ej: "322 782 9958"

  social: {
    instagram: "https://www.instagram.com/tundama_food_barbecue/", // pendiente URL oficial
    facebook: "https://www.facebook.com/TundamaBarbecue/?locale=es_LA", // pendiente URL oficial
    tiktok: "https://www.tiktok.com/@tundama_food?_r=1&_t=ZS-99v2R6WSyvq", // pendiente URL oficial
  },
} as const;

export const isWhatsappConfigured = !siteConfig.whatsappNumber.includes("X");

export function formatCOP(value: number) {
  return "$" + value.toLocaleString("es-CO");
}
