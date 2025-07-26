'use client';

import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './navigationBar.module.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logoContainer}>
          <a href="#home">
            <img src="/logo.svg" alt="Todo Conectado" className={styles.logoImg} />
          </a>
          <span className={styles.logoText}>Todo<br />Conectado</span>
        </div>

        <div className={styles.desktopMenu}>
          <Link href="#services" className={styles.link}>Servicios</Link>
          <Link href="#aboutUs" className={styles.link}>Sobre nosotros</Link>
          <Link href="#clients" className={styles.link}>Clientes</Link>
          <Link href="#contact" className={styles.link}>Contacto</Link>
        </div>

        <div className={styles.contacto}>
          <Phone className={styles.phoneIcon} size={20} />
          <div className={styles.callText}>
            <strong>Llámanos</strong>
            <span>990723180</span>
          </div>
        </div>

        <button onClick={() => setOpen(true)} className={`${styles.iconBtn} ${styles.mobileOnly}`}>
          <Menu size={28} />
        </button>
      </nav>

      {open && (
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <div className={styles.logoContainer}>
              <img src="/logo.svg" alt="Todo Conectado" className={styles.logoImg} />
              <span className={styles.logoText}>Todo<br />Conectado</span>
            </div>
            <button onClick={() => setOpen(false)} className={styles.iconBtn}>
              <X size={28} />
            </button>
          </div>
          <a href="#services" className={styles.sidebarLink}>Servicios</a>
          <a href="#aboutUs" className={styles.sidebarLink}>Sobre nosotros</a>
          <a href="#clients" className={styles.sidebarLink}>Clientes</a>
          <a href="#contact" className={styles.sidebarLink}>Contacto</a>
        </div>
      )}
    </>
  );
}
