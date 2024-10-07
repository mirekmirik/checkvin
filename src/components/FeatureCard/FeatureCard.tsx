import Paragraph from "../Paragraph/Paragraph";
import { FeatureCard as IFeatureCard } from "../../types";
import "./FeatureCard.scss";
import Heading from "../Heading/Heading";

const FeatureCard: React.FC<IFeatureCard> = ({
  description,
  logo: Logo,
  title,
}) => {
  return (
    <div className="feature-card">
      <div className="feature-card__icon">{<Logo />}</div>
      <Heading className="feature-card__title" level={1}>{title}</Heading>
      <Paragraph className="feature-card__description">{description}</Paragraph>
    </div>
  );
};

export default FeatureCard;
