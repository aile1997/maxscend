import { contacts, copy } from "../content";
import { EventBackdrop } from "../components/EventBackdrop";
import { designAssets } from "../designAssets";

interface ContactScreenProps {
  onSubmitFeedback: (value: string) => void;
}

export function ContactScreen({ onSubmitFeedback }: ContactScreenProps) {
  return (
    <section className="screen contact-screen">
      <EventBackdrop />

      <img className="screen__header-logo" src={designAssets.headerLogo} alt="" aria-hidden="true" />

      <h1 className="screen__section-title contact-screen__title">{copy.emergencyContacts}</h1>

      <div className="contact-screen__grid">
        {contacts.map((person, index) => (
          <article className="contact-card" key={person.phone}>
            <h2 className="contact-card__name">{person.name}</h2>
            <p className="contact-card__role">{person.role}</p>
            <a className="contact-card__action" href={`tel:${person.phone}`}>
              <img
                className="contact-card__phone"
                src={index === 0 ? designAssets.contactPhoneLeft : designAssets.contactPhoneRight}
                alt=""
                aria-hidden="true"
              />
              <span>{copy.callContact}</span>
            </a>
          </article>
        ))}
      </div>

      <h2 className="screen__section-title contact-screen__feedback-title">{copy.feedbackEntry}</h2>

      <form
        className="contact-feedback"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const value = String(formData.get("feedback") ?? "");
          onSubmitFeedback(value);
          event.currentTarget.reset();
        }}
      >
        <div className="contact-feedback__field-shell">
          <textarea
            id="feedback"
            name="feedback"
            className="contact-feedback__field"
            placeholder={copy.feedbackPlaceholder}
            rows={7}
          />
        </div>
        <div className="contact-feedback__footer">
          <button className="contact-feedback__submit" type="submit">
            {copy.feedbackSubmit}
          </button>
        </div>
      </form>
    </section>
  );
}
