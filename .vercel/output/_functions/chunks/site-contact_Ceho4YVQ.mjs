const WHATSAPP_PHONE_E164 = "51923416407";
const CONTACT_EMAIL = "ktalweb.peru@gmail.com";
const SITE_URL = "https://ktalweb.com.pe";
function whatsappHref(text) {
  const params = new URLSearchParams({
    phone: WHATSAPP_PHONE_E164,
    text
  });
  return `https://api.whatsapp.com/send?${params.toString()}`;
}

export { CONTACT_EMAIL as C, SITE_URL as S, WHATSAPP_PHONE_E164 as W, whatsappHref as w };
