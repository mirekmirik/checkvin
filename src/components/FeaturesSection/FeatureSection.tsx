import { FEATURES_LIST } from "../../config/config";
import Container from "../Container/Container";
import FeatureCard from "../FeatureCard/FeatureCard";
import "./FeatureSection.scss";

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <Container className="features-section__container">
        {FEATURES_LIST.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </Container>
    </div>
  );
};

export default FeaturesSection;
