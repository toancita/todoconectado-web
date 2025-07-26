import styles from "./page.module.css";
import NavBar from "/app/components/navigationBar/navigationBar.jsx";
import Hero from "/app/components/hero/hero.jsx";
import ServicesComponent from "./components/services/services";
import AchievementsCounter from "./components/achievementsCounter/achievementsCounter.jsx";
import AboutUs from "./components/aboutUs/aboutUs";
import Brands from "./components/logoCarousel/logoCarousel";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>
      <Hero/>
      <ServicesComponent />
      <AchievementsCounter />
      <AboutUs />
      <Brands />
      <Contact />
      <Footer/>
    </div>
  );
}
