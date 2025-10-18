
import React from 'react';
import styles from './hero.module.css';
import '../../../app/globals.css';
import { MapPin, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero({
  title = (<>
    Tecnología que protege, <br />
    conecta y <span className="highlight">transforma</span>
  </>),
  description = "En Todo Conectado ofrecemos soluciones inteligentes en seguridad, automatización y desarrollo tecnológico, con atención personalizada y compromiso total.",
  showCotizarBtn = true,
  backgroundImage = "/backgroundImage.webp",
  overlayClass = styles.overlay,
  heroContainerClass = styles.heroContainer,
  heroImageClass = styles.heroImage,
  gradient = false,
  showBackgroundImage = true,
  showLocationContent = true,
  customGradient,
  showOverlay = true,
  centerContent = false,
  
}) {
  const sectionStyle = customGradient
    ? { background: customGradient }
    : gradient
      ? { background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' }
      : {};

  return (
    <section id="home" className={heroContainerClass} style={sectionStyle}>
      {showOverlay && <div className={overlayClass} />}
      {showBackgroundImage && (
        <Image src={backgroundImage} width={500} height={500} alt="Placeholder sorry" className={heroImageClass} />
      )}
  <div className={centerContent ? `${styles.heroContent} ${styles.centeredContent}` : styles.heroContent}>
        {showLocationContent && (
          <div className={styles.locationContent}>
            <MapPin className={styles.mapPin} />
            <span>Servicio en toda la región de Arica y Parinacota</span>
          </div>
        )}
        <h2 className={styles.titleText}>{title}</h2>
        <p className={styles.heroDescription}>{description}</p>
        {showCotizarBtn && (
          <button className={styles.cotizarBtn}>Cotiza ahora</button>
        )}
      </div>

      <div className={styles.chevronDown}>
        <ChevronDown className={styles.ChevronDown} />
      </div>
    </section>
  );
}
