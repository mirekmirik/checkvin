import ContactForm from "../ContactForm/ContactForm";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import "./ContactSection.scss";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <Container className="contact-section__container">
        <Heading level={1} highlighted className="contact-section__title">
          DO YOU NEED FURTHER ASSISTANCE?
        </Heading>
        <Heading level={2} className="contact-section__subtitle text">
          Our experts are here to help with your problem.
        </Heading>
        <Heading level={3} className="contact-section__text text">
          If you dont know what to order, just let us a message and we will
          answer as soon as possible.
        </Heading>
        <ContactForm />
      </Container>
    </div>
  );
};

export default ContactSection;
