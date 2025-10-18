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
      <Hero
        title={<>Soluciones Integrales para <br />Hogares y Negocios</>}
        description="Desde hogares inteligentes hasta seguridad empresarial — diseñamos, instalamos y mantenemos sistemas integrados."
        showCotizarBtn={false}
        showBackgroundImage={false}
        showLocationContent={false}
        customGradient="radial-gradient(circle at 50% 50%, #192C78 30%, #2048E8 100%)"
        showOverlay={false}
        centerContent={true}
      />
      <LogoCarousel showTitle={false} />
      <FeatureCard />
      <ServiceTabs />
      <h2 className="centerTxt">Los números hablan por sí solos</h2>
      <AchievementsCounter />
      <Contact />
      <Footer />
    </div>
  );
}
