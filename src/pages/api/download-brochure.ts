import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  try {
    // En Vercel, los archivos de public/ se sirven desde la raíz
    // Intentamos hacer fetch al archivo PDF
    const baseUrl = new URL(request.url).origin;
    const pdfUrl = `${baseUrl}/brochure_ktalweb.pdf`;
    
    // Hacer fetch al archivo PDF
    const response = await fetch(pdfUrl);
    
    if (!response.ok) {
      console.error(`Error fetching PDF: ${response.status} ${response.statusText}`);
      return new Response('Archivo no encontrado', { status: 404 });
    }

    // Obtener el contenido del PDF
    const pdfBuffer = await response.arrayBuffer();
    
    // Configurar headers para descarga
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', 'attachment; filename="brochure_ktalweb.pdf"');
    headers.set('Content-Length', pdfBuffer.byteLength.toString());
    headers.set('Cache-Control', 'public, max-age=31536000');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET');

    return new Response(pdfBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error al servir el PDF:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    return new Response(`Error interno del servidor: ${errorMessage}`, { status: 500 });
  }
};
