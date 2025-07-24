'use client'

import React from 'react';
import Slider from 'react-infinite-logo-slider'
import styles from './logoCarousel.module.css'

const LogoCarousel = () => {
    
  return (
    <Slider
      width="250px"
      duration={20}
      pauseOnHover={true}
      blurBorders={false}
      blurBorderColor={'#fff'}
      >
        <Slider.Slide><img src="/slider/logo1.svg" alt="any" className={styles.logo} /></Slider.Slide>
        <Slider.Slide><img src="/slider/logo2.svg" alt="any2" className={styles.logo} /></Slider.Slide>
        <Slider.Slide><img src="/slider/logo3.svg" alt="any3" className={styles.logo} /></Slider.Slide>
        <Slider.Slide><img src="/slider/logo4.svg" alt="any3" className={styles.logo} /></Slider.Slide>
    </Slider>
  )}              

export default function Brands() {
  return(
    <section id="clients" className={styles.brandsContainer}>
        <h1 className={styles.title}>Confían en nosotros</h1>
        <div>
            <LogoCarousel />
        </div>
    </section>
  )
}
