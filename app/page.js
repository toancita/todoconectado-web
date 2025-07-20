import styles from "./page.module.css";
import NavBar from "/app/components/navigationBar/navigationBar.jsx";
import Hero from "/app/components/hero/hero.jsx";
import Services from "./components/services/services";
import AchievementsCounter from "./components/achievementsCounter/achievementsCounter.jsx";
import AboutUs from "./components/aboutUs/aboutUs";
import Contact from "./components/contact/contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>
      <Hero/>
      <Services/>
      <AboutUs />
      <Contact />
    </div>
  );
}
