import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  try {
    // Redirigir al archivo estático en la carpeta public
    // En producción, Vercel debería servir automáticamente archivos desde public/
    const baseUrl = new URL(request.url).origin;
    const pdfUrl = `${baseUrl}/brochure_ktalweb.pdf`;
    
    return Response.redirect(pdfUrl, 302);
  } catch (error) {
    console.error('Error al redirigir al PDF:', error);
    return new Response('Error interno del servidor', { status: 500 });
  }
};
