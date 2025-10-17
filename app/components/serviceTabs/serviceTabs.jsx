'use client'

import styles from './serviceTabs.module.css'
import { useState } from "react";

const tabs = ["Desarrollo de Software", "Hogar inteligente", "Sistemas de Seguridad"];

const data = {
  "Sistemas de Seguridad": {
    subs: [
      {
        title: "Cortinas metálicas",
        content: [
          "Sistemas de alta resistencia",
          "Materiales anticorrosión y duraderos",
          "Control remoto desde cualquier dispositivo",
          "Integración con sistemas de alarma"
        ],
        image: "/serviceTabs/cortina.webp"
      },
      {
        title: "Red eléctrica anti robos",
        content: [
          "Detección perimetral y volumétrica",
          "Tecnología anti-falsas alarmas",
          "Comunicación inalámbrica y cableada",
          "Integración con central de monitoreo"
        ],
        image: "/serviceTabs/red.webp"
      },
      {
        title: "Red de incendios",
        content: [
          "Profesionales con certificación SEC",
          "Detección temprana de humo y calor",
          "Alarmas audibles y visuales",
          "Mantenimiento preventivo"
        ],
        image: "/serviceTabs/red2.webp"
      }
    ]
  },
  "Hogar inteligente": {
    subs: [
      {
        title: "Portones eléctricos",
        content: [
          "Motores silenciosos y de bajo consumo",
          "Control mediante app y control remoto",
          "Sensores de seguridad reversibles"
        ],
        image: "/serviceTabs/porton.webp"
      },
      {
        title: "Climatización inteligente",
        content: [
          "Aires acondicionados controlables",
          "Programación de temperaturas por horarios",
          "Monitoreo de consumo energético",
          "Integración con asistentes virtuales"
        ],
        image: "/serviceTabs/aire.webp"
      },
      {
        title: "Iluminación automatizada",
        content: [
          "Bombillas LED controlables",
          "Programación de horarios y sensores",
          "Control de consumo energético"
        ],
        image: "/serviceTabs/iluminacion.webp"
      }
    ]
  },
   "Desarrollo de Software": {
    subs: [
      {
        title: "Aplicaciones móviles",
        content: [
          "Desarrollo nativo iOS y Android",
          "Interfaces intuitivas y responsivas",
          "Integración con APIs y servicios cloud",
          "Mantenimiento y actualizaciones"
        ],
        image: "/serviceTabs/app1.webp"
      },
      {
        title: "Desarrollo de páginas web",
        content: [
          "Diseño profesional y adaptable",
          "Optimización para motores de búsqueda",
          "Catálogo de productos gestionable",
          "Diseño responsive y moderno"
        ],
        image: "/serviceTabs/app2.webp"
      }
    ]
  }
};

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("Hogar inteligente");
  const [activeSub, setActiveSub] = useState(0);

  const subs = data[activeTab].subs;

  return (
    <section>

      <div className={styles.header}>
        <span className={styles.subtitle}>TODOS NUESTROS SERVICIOS</span>
        <h1 className='title'>Tecnología con <span className={styles.highlight}>propósito</span></h1>
      </div>

    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {tabs.map(tab => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
            onClick={() => {
              setActiveTab(tab);
              setActiveSub(0);
            }}>
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.body}>
        <aside className={styles.sidebar}>
          {subs.map((sub, index) => (
            <button
              key={sub.title}
              className={`${styles.subItem} ${activeSub === index ? styles.subActive : ""}`}
              onClick={() => setActiveSub(index)}>
              {sub.title}
            </button>
          ))}
        </aside>

        <div className={styles.content}>
          <h3>{subs[activeSub].title}</h3>
          <div className={styles.contentBody}>
            <ul>
            {subs[activeSub].content.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
          <img src={subs[activeSub].image} alt={subs[activeSub].title} />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}