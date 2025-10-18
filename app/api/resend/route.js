import { Resend } from 'resend';
import { EmailTemplate } from '@/app/components/email-template/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { from, name, message } = await req.json();

    if (!from || !name || !message) {
      return new Response(
        JSON.stringify({ message: 'Todos los campos son requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await resend.emails.send({
      from: 'Formulario de Contacto <form@todoconectado.cl>',
      to: 'contacto@todoconectado.cl',
      subject: `Nueva solicitud de ${name}`,
      react: EmailTemplate({ name, message }),
    });

    return new Response(
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(
      { status: 500 }
    );
  }
}
