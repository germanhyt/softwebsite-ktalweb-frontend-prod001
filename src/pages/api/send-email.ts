import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// const resend = new Resend(import.meta.env.RESEND_API || '');

// export const server = {
//     send: defineAction({
//         accept: 'form',
//         handler: async () => {
//             const { data, error } = await resend.emails.send({
//                 from: 'Acme <onboarding@resend.dev>',
//                 to: ['germanhuaytalla22@gmail.com'],
//                 subject: 'Hello world',
//                 html: '<strong>It works!</strong>',
//             });

//             if (error) {
//                 throw new ActionError({
//                     code: 'BAD_REQUEST',
//                     message: error.message,
//                 });
//             }

//             return data;
//         },
//     }),
// };


export const POST: APIRoute = async ({ request }) => {
    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    try {
        const body = await request.json();
        const { to, name, message } = body;

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to,
            subject: 'Mensaje de contacto',
            html: `<p>Hola ${name},</p><p>${message}</p>`,
            //   react: EmailTemplate({ name, message }),
            // Alternativa usando renderToString:
            // html: renderToString(<EmailTemplate name={name} message={message} />)
        });

        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return new Response(JSON.stringify({ success: false, error: errorMessage }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};