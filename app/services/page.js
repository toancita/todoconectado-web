import Footer from "../components/footer/footer";
import NavBar from "/app/components/navigationBar/navigationBar.jsx";
import Hero from "../components/hero/hero";
import ServiceTabs from "../components/serviceTabs/serviceTabs";
import AchievementsCounter from "../components/achievementsCounter/achievementsCounter";
import Contact from "../components/contact/contact";
import LogoCarousel from "../components/logoCarousel/logoCarousel"
import FeatureCard from "../components/featureCard/featureCard";

export default function Services() {
  return (
    <div>
      <NavBar />
      <Hero />
      <LogoCarousel />
      <FeatureCard />
      <ServiceTabs />
      <h2 className="centerTxt">Los números hablan por sí solos</h2>
      <AchievementsCounter />
      <Contact />
      <Footer />
    </div>
  );
}
