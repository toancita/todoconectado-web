'use client';

import styles from './services.module.css'
import { SERVICES_TEXTS } from "@/app/constants";

export default function Services() {
  return(
    <section id="services" className={styles.servicesContainer}>
      <div className={styles.header}>
        <span className={styles.subtitle}>NUESTROS SERVICIOS</span>
        <h2 className="title">Todo lo que tu hogar o negocio <span className={styles.highlight}>necesita</span> en un solo lugar</h2>
      </div>

    return(
        <section id="services" className={styles.servicesContainer}>
            <div className={styles.header}>
                <span className={styles.subtitle}>NUESTROS SERVICIOS</span>
                <h2 className={styles.title}>Todo lo que tu hogar o negocio <span className={styles.highlight}>necesita</span> en un solo lugar</h2>
            </div>

            <div className={styles.cardContainer}>
                {SERVICES_TEXTS.map((servicio, i) => (
                    <div className={styles.card} key={i}>
                        <div className={styles.iconWrapper}>
                            <servicio.Icon className={styles.icon} size={40} />
                        </div>
                        <h3 className={styles.cardTitle}>{servicio.title}</h3>
                        <p className={styles.cardDescription}>{servicio.description}</p>
                        <button className={styles.cardButton}>
                            {servicio.button}
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={styles.cardTitle}>{servicio.title}</h3>
            <p className={styles.cardDescription}>{servicio.description}</p>
            <button className={styles.cardButton}>
              {servicio.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
