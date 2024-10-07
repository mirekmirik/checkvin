import Button from "../Button/Button";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="contact-form__inputs-wrapper">
        <div className="contact-form__inputs">
          <Input type="text" placeholder="Email" required />
          <Input
            type="text"
            placeholder="17 digits VIN"
            minLength={17}
            maxLength={17}
            required
          />
        </div>
        <Textarea
          className="contact-form__textarea"
          placeholder="Message"
          required
        />
      </div>
      <Button type="submit" styling={"filled"} className="contact-form__submit">
        SEND MESSAGE
      </Button>
    </form>
  );
};

export default ContactForm;
