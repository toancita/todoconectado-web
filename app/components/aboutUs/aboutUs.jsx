'use client';

import Image from 'next/image';
import styles from './aboutUs.module.css'

export default function AboutUs() { 
  return (
    <section id="aboutUs" className={styles.aboutUsContainer}>
      <div className={styles.leftContent}>
      <span className={styles.subtitle}>QUIÉNES SOMOS</span>
        <div className={styles.contentContainer}>
          <h2 className={styles.title}>Comprometidos con la tecnología, <span className={styles.highlight}>conectados</span> contigo</h2>
          <p className={styles.content}> En Todo Conectado transformamos ideas en soluciones. Somos una empresa apasionada por la tecnología,
            enfocada en brindar servicios personalizados que simplifican procesos y mejoran la calidad de vida.
            Trabajamos para convertirnos en un aliado confiable en el camino hacia la transformación digital.
          </p>
          <a className={styles.button} href='#servicios'>
            Conoce más
          </a>
        </div>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.imageBackground}></div>
        <Image
          src="/about_us_image.png"
          alt="About us"
          width={600}
          height={600}
          className={styles.image}
        />
      </div>
    </section>
  );

}