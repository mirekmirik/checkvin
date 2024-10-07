import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import "./HeroInfo.scss";

const HeroInfo = () => {
  return (
    <div className="hero-info">
      <Heading className="hero-info__heading" level={1} highlighted>
        CHECKVIN - YOUR BIMMER ASSISTANT
      </Heading>
      <Paragraph className="hero-info__description">
        Looking for a used vehicle? Want to know the full history of your own
        car?
        <br />
        We are offering service history with instant delivery!
        <br />
        <br />
        We started from the idea of avoiding to pay for a car without service
        history or hidden problems. With a small amount of money you can now
        check the car that you want to buy and not waste time & money on checks
        in a real service to find out that the car is not what you are looking
        for.
        <br />
        <br />
        CheckVIN will reveal the car details and equipment list, history related
        to kilometers, entrances to authorized services and many other details
        about the car.
        <br />
        <br />
        <b>
          Avoid paying for a history check or a map update in a dealership and
          use our services at a much lower price.
        </b>
      </Paragraph>
      <Button className="hero-info__button" styling="filled">
        EXAMPLE FOR SERVICE HISTORY
      </Button>
    </div>
  );
};

export default HeroInfo;
