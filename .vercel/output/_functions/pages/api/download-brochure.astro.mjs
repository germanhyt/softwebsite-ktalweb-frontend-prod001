import fs from 'fs';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const GET = async ({ request }) => {
  try {
    const pdfPath = path.join(process.cwd(), "src", "assets", "brochure_ktalweb.pdf");
    if (!fs.existsSync(pdfPath)) {
      console.error(`PDF file not found at: ${pdfPath}`);
      return new Response("Archivo no encontrado", { status: 404 });
    }
    const pdfBuffer = fs.readFileSync(pdfPath);
    if (pdfBuffer.length === 0) {
      console.error("PDF file is empty");
      return new Response("Archivo vacío", { status: 500 });
    }
    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set("Content-Disposition", 'attachment; filename="brochure_ktalweb.pdf"');
    headers.set("Content-Length", pdfBuffer.length.toString());
    headers.set("Cache-Control", "public, max-age=31536000");
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET");
    headers.set("Accept-Ranges", "bytes");
    return new Response(pdfBuffer, {
      status: 200,
      headers
    });
  } catch (error) {
    console.error("Error al servir el PDF:", error);
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    return new Response(`Error interno del servidor: ${errorMessage}`, { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
