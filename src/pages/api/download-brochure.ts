import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

export const GET: APIRoute = async ({ request }) => {
  try {
    // Ruta al archivo PDF en la carpeta public
    const pdfPath = path.join(process.cwd(), 'public', 'brochure_ktalweb.pdf');
    
    // Verificar que el archivo existe
    if (!fs.existsSync(pdfPath)) {
      return new Response('Archivo no encontrado', { status: 404 });
    }

    // Leer el archivo
    const pdfBuffer = fs.readFileSync(pdfPath);
    
    // Configurar headers para descarga
    const headers = new Headers({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="brochure_ktalweb.pdf"',
      'Content-Length': pdfBuffer.length.toString(),
      'Cache-Control': 'public, max-age=31536000', // Cache por 1 año
    });

    return new Response(pdfBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error al servir el PDF:', error);
    return new Response('Error interno del servidor', { status: 500 });
  }
};
