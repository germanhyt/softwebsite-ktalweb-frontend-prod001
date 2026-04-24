/** Datos de contacto públicos (misma línea que en Solutions.astro). */
export const WHATSAPP_PHONE_E164 = "51923416407";

export const CONTACT_EMAIL = "ktalweb.peru@gmail.com";

export const SITE_URL = "https://ktalweb.com.pe";

export function whatsappHref(text: string): string {
  const params = new URLSearchParams({
    phone: WHATSAPP_PHONE_E164,
    text,
  });
  return `https://api.whatsapp.com/send?${params.toString()}`;
}
