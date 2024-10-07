import { SERVICE_CARDS } from "../../config/config";
import Container from "../Container/Container";
import HeroInfo from "../HeroInfo/HeroInfo";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container className="hero-section__container">
        <div className="hero-section__services">
          {SERVICE_CARDS.map((card) => (
            <ServiceCard key={card.altText} {...card} />
          ))}
        </div>
        <HeroInfo />
      </Container>
    </div>
  );
};

export default HeroSection;
