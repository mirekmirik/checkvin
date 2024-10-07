import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { ServiceCard as IServiceCard } from "../../types";
import "./ServiceCard.scss";

const ServiceCard: React.FC<IServiceCard> = ({
  altText,
  imgSrc,
  price,
  title,
  buttonText,
  link,
}) => {
  const isDekstop = useState(window.innerWidth > 767);
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    requestAnimationFrame(() => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (centerY - y) / 15;
        const rotateY = (x - centerX) / 15;
        setRotation({
          x: rotateX,
          y: rotateY,
        });
      }
    });
  };

  const handleMouseMoveLeave = () => {
    setRotation({
      x: 0,
      y: 0,
    });
  };

  return (
    <div
      className="service-card"
      ref={cardRef}
      onMouseMove={isDekstop && handleMouseMove}
      onMouseLeave={isDekstop && handleMouseMoveLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      <img src={imgSrc} alt={altText} />
      <div className="service-card__text-wrapper">
        <Heading className="service-card__title" level={1}>
          {title}
        </Heading>
        <Heading className="service-card__price" highlighted level={2}>
          {price}
        </Heading>
        <Link to={link}>
          <Button className="service-card__button" styling="filled">
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
