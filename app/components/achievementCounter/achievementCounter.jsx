'use client';

import React from "react";
import { useEffect, useState } from "react";
import styles from './achievementCounter.module.css'
import AnimatedNumbers from "react-animated-numbers"

const Achievements = [
  {
    title: 'Proyectos completados',
    count: 70
  },
  {
    title: 'Clientes felices',
    count: 50
  },
  {
    title: 'Años de experiencia',
    count: 10
  }
]

export default function AchievementsCounter() {
     const [animationStarted, setAnimationStarted] = useState(false);
     useEffect(() => {
        setAnimationStarted(true);
    }, []);

    return (
        <div className={styles.achievementContainer}>
            <div className={styles.countContainer}>
                {Achievements.map((achievement, i) => (
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

                    <span className={styles.title}>{achievement.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}