'use client';

import React from "react";
import { useEffect, useState, useRef } from "react";
import styles from './achievementsCounter.module.css';
import AnimatedNumbers from "react-animated-numbers"
import { ACHIEVEMENTS_TEXTS } from "@/app/constants";

export default function AchievementsCounter() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationStarted(true);
        }
      },
      {
        threshold: 0.3
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={styles.achievementsContainer}>
      <div className={styles.countContainer}>
        {ACHIEVEMENTS_TEXTS.map((achievement, i) => (
          <div key={i} className={styles.achievement}>
            <AnimatedNumbers
              animateToNumber={animationStarted ? achievement.count : 0}
              fontStyle={{
                fontSize: 64,
                fontWeight: '700',
                color: 'currentColor',
                textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
              }}
              locale="es-ES"
              transitions={(index) => ({
                type: "spring",
                mass: 1,
                stiffness: 50,
                damping: 10,
                duration: index + 300
              })}
              useThousandsSeparator={true}
              className={styles.animatedNumber}
            />
            <span className={styles.label}>{achievement.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
