'use client'
import {ShieldCheck} from "lucide-react"
import styles from "./featureCard.module.css"

export default function FeatureCard(){
  const features = [
    {
      title: "100% Certificados",
      description: "Garantía de calidad y cumplimiento normativo en sistemas de seguridad"
    },
    {
      title: "Soporte técnico",
      description: "Asistencia especializada y respuesta personalizada"
    },
    {
      title: "Soluciones escalables",
      description: "Sistemas que crecen con tus requerimientos"
    },
  ];

  return (
    <section className={styles.featContainer}>
      {features.map((f, i) => (
        <div key={i} className={styles.featCard}>
          <div className={styles.iconContainer}>
            <ShieldCheck className={styles.icon} />
          </div>
          <h3>{f.title}</h3>
          <p>{f.description}</p>
        </div>
      ))}
    </section>
  );
}