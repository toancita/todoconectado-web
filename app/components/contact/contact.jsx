'use client';

import { useState } from 'react';
import styles from './contact.module.css'
import { Send } from 'lucide-react';
import { sendEmail } from '@/app/api/resend';

export default function Contact() { 
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await sendEmail({
        from: formData.email,
        name: formData.name,
        message: formData.message
      });

      if (response.data && response.data.id) {
        console.log('response 2', reponse)
        setStatus('¡Correo enviado exitosamente!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Hubo un error. Intenta nuevamente.');
      }
    } catch (error) {
      setStatus('Error al enviar.');
    }
  };

  return (
    <section id="contact" className={styles.contactContainer}>
      <div className={styles.leftContent}>
        <p className={styles.subtitle}>CONTACTO</p>
        <h2 className="title">Donde tus ideas se <span className="highlight">conectan</span>.</h2>
        <div className={styles.contentContainer}>
          <p className={styles.content}> ¿Tienes un proyecto en mente o necesitas asesoría técnica? </p>
          <p className={styles.content}> Nuestro equipo está preparado para ayudarte a encontrar la solución adecuada. 
            Ya sea para automatización, seguridad o conectividad, estamos a un mensaje de distancia.
          </p>
          <p className={styles.content}> Contáctanos y da el primer paso hacia una solución confiable. </p>
        </div>
      </div>

      <div className={styles.rightContent}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Cuéntanos sobre ti</h1>
          <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre completo"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Tu correo personal o corporativo"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Cómo podemos ayudarte</label>
            <textarea
              name="message"
              placeholder="Cuéntanos en qué te podemos ayudar"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.button}>
                <span className={styles.buttonText}>Enviar</span>
                <div className={styles.sendIcon}>
                  <Send />
                </div>
              </button>
            </div>
          </form>
          {status && <p className={styles.status}>{status}</p>}
        </div>
      </div>
    </section>
  )
}
