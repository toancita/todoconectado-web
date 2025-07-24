'use client';

import styles from './contact.module.css'
import { Send } from 'lucide-react';

export default function Contact() { 

  return (
    <section id="contact" className={styles.contactContainer}>
      <div className={styles.leftContent}>
        <p className={styles.subtitle}>CONTACTO</p>
        <h2 className={styles.title}>Donde tus ideas se <br /><span className="highlight">conectan</span>.</h2>
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
            <label>Nombre</label>
            <input type="text" placeholder='Tu nombre completo' />

            <label>Email</label>
            <input type="text" placeholder='Tu correo personal o corporativo' />

            <label>Cómo podemos ayudarte</label>
            <textarea placeholder='Cuéntanos en qué te podemos ayudar'></textarea>

            <button className={styles.button}>
              <span className={styles.buttonText}>Enviar</span>
              <Send className={styles.sendIcon} />
            </button>
        </div>
      </div>
    </section>
  )
}
