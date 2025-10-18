'use client';

import React from "react";
import { Mail, Phone, MapPin } from 'lucide-react'
import styles from './footer.module.css'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.section}>
            <Image 
            src="/logo.svg" 
            width={150} 
            height={50} 
            alt="Logo" 
            className={styles.logo}
            />
            <p className={styles.description}>Tecnología que protege, conecta y transforma.</p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Contacto</h3>
          <address className={styles.address}>
              <div className={styles.contactItem}>
                  <Mail/> 
                  <p>contacto@todoconectado.cl</p>
              </div>
              <div className={styles.contactItem}>
                  <Phone/> 
                  <p>+56 9 9378 0684</p>
              </div>
              <div className={styles.contactItem}>
                  <MapPin/>
                  <p>Arica, Chile. Panamericana Norte 3699</p>
              </div>
          </address>
        </div>
      </div>

      <div className={styles.copyrightContainer}>
          <p>© {new Date().getFullYear()} Todo Conectado.</p>
          
          {/* <div className={styles.legalLinks}>
            <Link href="/privacidad" className={styles.legalLink}>Política de Privacidad</Link>
            <Link href="/terminos" className={styles.legalLink}>Términos y Condiciones</Link>
          </div> */}
      </div>
    </footer>
  )
}
