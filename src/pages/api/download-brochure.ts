import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

export const GET: APIRoute = async ({ request }) => {
  try {
    // Múltiples rutas posibles para el archivo PDF
    const possiblePaths = [
      path.join(process.cwd(), 'public', 'brochure_ktalweb.pdf'),
      path.join(process.cwd(), 'dist', 'brochure_ktalweb.pdf'),
      path.join(process.cwd(), 'brochure_ktalweb.pdf'),
    ];

    let pdfPath = null;
    let pdfBuffer = null;

    // Buscar el archivo en las diferentes ubicaciones
    for (const testPath of possiblePaths) {
      if (fs.existsSync(testPath)) {
        pdfPath = testPath;
        break;
      }
    }

    // Si no se encuentra el archivo, intentar leerlo como asset de Astro
    if (!pdfPath) {
      try {
        // En producción, Astro puede servir archivos desde dist
        const distPath = path.join(process.cwd(), 'dist', 'brochure_ktalweb.pdf');
        if (fs.existsSync(distPath)) {
          pdfBuffer = fs.readFileSync(distPath);
        } else {
          // Último recurso: buscar en node_modules o usar fetch
          const publicPath = path.join(process.cwd(), 'public', 'brochure_ktalweb.pdf');
          pdfBuffer = fs.readFileSync(publicPath);
        }
      } catch (fetchError) {
        console.error('Error al leer archivo PDF:', fetchError);
        return new Response('Archivo no encontrado', { status: 404 });
      }
    } else {
      // Leer el archivo desde la ruta encontrada
      pdfBuffer = fs.readFileSync(pdfPath);
    }

    if (!pdfBuffer) {
      return new Response('Archivo no encontrado', { status: 404 });
    }
    
    // Configurar headers para descarga
    const headers = new Headers({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="brochure_ktalweb.pdf"',
      'Content-Length': pdfBuffer.length.toString(),
      'Cache-Control': 'public, max-age=31536000', // Cache por 1 año
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
    });

    return new Response(pdfBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error al servir el PDF:', error);
    return new Response(`Error interno del servidor: ${error.message}`, { status: 500 });
  }
};
