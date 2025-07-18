import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "/app/components/navigationBar/navigationBar.jsx";
import Hero from "/app/components/hero/hero.jsx";
import Services from "./components/services/services";

export default function Home() {
  return (
    
    <div className={styles.page}>
      
      <NavBar/>
      <Hero/>
      <Services/>
      
    </div>
  );
}
