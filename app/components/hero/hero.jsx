import React from 'react';
import styles from './hero.module.css'
import '../../../app/globals.css'
import { MapPin, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() { 
  
  return (
    <section id="home" className={styles.heroContainer}>
      <div className={styles.overlay} />
      <Image src="/backgroundImage.webp" width={500} height={500} alt="Placeholder sorry" className={styles.heroImage}/>

      <div className={styles.heroContent}>

        <div className={styles.locationContent}>
          <MapPin className={styles.mapPin} />
          <span>Servicio en toda la región de Arica y Parinacota</span>
        </div>

        <h1 className={styles.titleText}>Tecnología que protege, <br/> 
        conecta y <span className={styles.highlight}>transforma</span>
        </h1>

        <p className={styles.heroDescription}>
          En Todo Conectado ofrecemos soluciones inteligentes en seguridad,
          automatización y desarrollo tecnológico, con atención personalizada y compromiso total.
        </p>

        <button className={styles.cotizarBtn}>Cotiza ahora</button>

      </div>

      <div className={styles.chevronDown}>
         <ChevronDown className={styles.ChevronDown}/>
        </div>

    </section>
  );
}