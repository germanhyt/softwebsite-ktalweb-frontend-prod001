import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

export const GET: APIRoute = async ({ request }) => {
  try {
    // Leer el archivo PDF directamente desde el sistema de archivos
    const pdfPath = path.join(process.cwd(), 'src', 'assets', 'brochure_ktalweb.pdf');
    
    // Verificar que el archivo existe
    if (!fs.existsSync(pdfPath)) {
      console.error(`PDF file not found at: ${pdfPath}`);
      return new Response('Archivo no encontrado', { status: 404 });
    }

    // Leer el archivo como buffer
    const pdfBuffer = fs.readFileSync(pdfPath);
    
    // Verificar que el buffer no esté vacío
    if (pdfBuffer.length === 0) {
      console.error('PDF file is empty');
      return new Response('Archivo vacío', { status: 500 });
    }
    
    // Configurar headers para descarga
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', 'attachment; filename="brochure_ktalweb.pdf"');
    headers.set('Content-Length', pdfBuffer.length.toString());
    headers.set('Cache-Control', 'public, max-age=31536000');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET');
    headers.set('Accept-Ranges', 'bytes');

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
