'use server'

import { Resend } from "resend"

const resend = new Resend('re_RjhqtFrn_5VKVTdPbDbYsD3XrAU5cZxYi');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { from, name, message } = req.body;

  console.log(from)
  console.log(name)
  console.log(message)
  console.log('---')
  console.log(req.body)

  if (!from || !name || !message) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  try {
    const response = await resend.emails.send({
      to: 'contacto@todoconectado.cl',
      from,
      subject: `Solicitud de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #0D1D59;">Nueva solicitud de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo:</strong> ${from}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />
          <p style="font-size: 0.9rem; color: #666;">Este correo fue enviado desde el formulario de contacto de TodoConectado.</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Correo enviado exitosamente', data: response });
  } catch (error) {
    return res.status(500).json({ message: 'Error al enviar el correo', error: error.message });
  }
}
