import { CONTACT_EMAIL, SITE_URL, WHATSAPP_PHONE_E164 } from "../site-contact";

/**
 * Conocimiento estructurado de la landing (sin RAG).
 * Mantener alineado con copy real de la web al actualizar servicios.
 */
export const BUSINESS_CONTEXT = `
## Empresa
- Nombre comercial: Ktalweb (Ktalweb Perú).
- Web: ${SITE_URL}
- Ubicación: Lima, Perú.
- Contacto: WhatsApp +51 ${WHATSAPP_PHONE_E164}, correo ${CONTACT_EMAIL}.

## Qué hacen
- Agencia / estudio de desarrollo web orientado a conversión: landings, sitios y experiencias digitales para negocios y marcas en Perú y clientes con proyectos similares.
- Enfoque: claridad del mensaje, diseño limpio, buena UX y acompañamiento (especialmente útil para quienes es su primera web).

## Soluciones destacadas en la landing
1. **Landing page**: página enfocada a un objetivo (formulario, descarga, campaña, lanzamiento).
2. **Tienda virtual**: e-commerce para vender productos online.
3. **Catálogo digital**: para mostrar un conjunto acotado de productos; adecuado para emprendedores que recién inician.

## Proceso (resumen)
- Discovery y alineación de objetivos.
- Propuesta y alcance acordado.
- Diseño y desarrollo iterativo.
- Pruebas y publicación.
- (Según proyecto) acompañamiento post-lanzamiento — no prometer plazos ni precios cerrados sin validación humana.

## Casos / sectores (ejemplos del portafolio público)
- Retail / accesorios (ej. off-road).
- Iniciativas corporativas / hackathons (ej. BCP).
- Educación / cursos (ej. energía).
- Food / pastelería saludable.
- Estudios / informes descargables con animaciones e idiomas.

## FAQs y límites para el asistente
- **Precios**: dependen del alcance; ofrecer orientación general y proponer conversación con el equipo (WhatsApp o formulario en la web). No inventar montos ni paquetes inexistentes.
- **Plazos**: dependen del alcance y disponibilidad; no garantizar fechas exactas.
- **Alcance técnico**: no prometer integraciones, stacks o features no confirmados en esta base; si no está claro, pedir un dato más y derivar a humano.
- **Fuera de tema**: si preguntan algo no relacionado con servicios digitales de Ktalweb, redirigir con cortesía al propósito del sitio o sugerir contacto humano.

## CTAs preferidos
- WhatsApp con mensaje prellenado coherente con la necesidad detectada.
- Invitar a revisar secciones: soluciones, casos de éxito, brochure.
- Correo para consultas formales.
`.trim();
