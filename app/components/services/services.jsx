'use client';

import styles from './services.module.css'
import { SERVICES_TEXTS } from "@/app/constants";
import { useRouter } from 'next/navigation';

export default function ServicesComponent() {
  const router = useRouter();

  return(
    <section id="services" className={styles.servicesContainer}>
      <div className={styles.header}>
        <span className={styles.subtitle}>NUESTROS SERVICIOS</span>
        <h2 className="title">Todo lo que tu hogar o negocio <span className={styles.highlight}>necesita</span> en un solo lugar</h2>
      </div>

      <div className={styles.cardContainer}>
        {SERVICES_TEXTS.map((servicio, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.iconWrapper}>
                <servicio.Icon className={styles.icon} size={40} />
              </div>
              <div className={styles.dataContainer}>
                <h3 className={styles.cardTitle}>{servicio.title}</h3>
                <div className={styles.cardDescriptionContainer}>
                  <p className={styles.cardDescription}>{servicio.description}</p>
                </div>
                <button className={styles.cardButton} onClick={() => router.push('/services')}>
                  {servicio.button}
                </button>
              </div>
          </div>
        ))}
      </div>         
    </section>
  );
}
