'use client';

import {Shield, CodeXml, HomeIcon, HouseWifi} from "lucide-react"
import styles from './services.module.css'

const servicios = [
  {
    title: 'Seguridad avanzada',
    description: 'Soluciones todo-en-uno para hogares y empresas. Más seguridad, menos estrés.',
    Icon: Shield,
    button: 'Soluciones a medida →'
  },
  {
    title: 'Software a medida',
    description: 'Desarrollo de aplicaciones que impulsan tu negocio. Nosotros lo desarrollamos, tú creces.',
    Icon: CodeXml,
    button: 'Descubre cómo →'
  },
  {
    title: 'Tu hogar inteligente',
    description: 'Vive el futuro hoy, con tecnología que transforma tu casa en un espacio más seguro, eficiente y automático.',
    Icon: HouseWifi,
    button: 'Saber más →'
  },
]

export default function Services() {

    return(
        <section id="services" className={styles.servicesContainer}>
            <div className={styles.header}>
                <span className={styles.subtitle}>NUESTROS SERVICIOS</span>
                <h2 className={styles.title}>Todo lo que tu hogar o negocio <span className={styles.highlight}>necesita</span> en un solo lugar</h2>
            </div>

            <div className={styles.cardContainer}>
                {servicios.map((servicio, i) => (
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
        </section>
    );
}