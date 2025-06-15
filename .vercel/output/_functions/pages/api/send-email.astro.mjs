import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const resend = new Resend("re_JMXP6WVd_KZvKCtGePd9ZBF9RewJgz2iy");
  try {
    const body = await request.json();
    const { name, message } = body;
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "germanhuaytalla22@gmail.com",
      subject: "Mensaje de contacto",
      html: `<p>Hola ${name},</p><p>${message}</p>`
      //   react: EmailTemplate({ name, message }),
      // Alternativa usando renderToString:
      // html: renderToString(<EmailTemplate name={name} message={message} />)
    });
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
