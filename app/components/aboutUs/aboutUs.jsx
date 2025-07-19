'use client';

import Image from 'next/image';
import styles from './aboutUs.module.css'

export default function AboutUs() { 

  return (
    <section className={styles.aboutUsContainer}>
      <div className={styles.leftContent}>
        <span className={styles.subtitle}>QUIÉNES SOMOS</span>

        <h2 className={styles.title}>Comprometidos con la <br /> tecnología, <span className={styles.highlight}>conectados</span> contigo</h2>

        <p className={styles.content}>
          En Todo Conectado transformamos ideas en soluciones. Somos una empresa apasionada por la tecnología,
          enfocada en brindar servicios personalizados que simplifican procesos y mejoran la calidad de vida. <br /><br />
          Trabajamos para convertirnos en un aliado confiable en el camino hacia la transformación digital.
        </p>

        <a className={styles.button} href='#servicios'>
          Conoce más
        </a>
      </div>

      <div className={styles.rightContent}>
        <div className={styles.imageContainer}>
          <Image
            src="/about_us_image.webp"
            alt="About us"
            fill
            className={styles.image}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );

}