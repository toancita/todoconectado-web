'use client'

import React from 'react';
import Slider from 'react-infinite-logo-slider'
import styles from './logoCarousel.module.css'
import { CLIENTS_LOGOS_SVGS } from '@/app/constants';

const LogoCarousel = () => {
  return (
    <Slider
      width="250px"
      duration={20}
      pauseOnHover={true}
      blurBorders={false}
      blurBorderColor={'#fff'}
    >
      {CLIENTS_LOGOS_SVGS.map((logo, idx) => (
        <Slider.Slide key={logo.src + idx}>
          <img src={logo.src} alt={logo.alt} className={styles.logo} />
        </Slider.Slide>
      ))}
    </Slider>
  );
}              

export default function Brands() {
  return(
    <section id="clients" className={styles.brandsContainer}>
      <h1 className="title">Confían en nosotros</h1>
      <div>
        <LogoCarousel />
      </div>
    </section>
  )
}
