import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useLanguage } from "@/core/hooks/context/LanguageContext";
import { trackFormSubmit } from "@/core/helpers/analytics";

export default function ContactForm() {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm("xvgrnrzv");
  const tracked = useRef(false);

  useEffect(() => {
    if (state.succeeded && !tracked.current) {
      tracked.current = true;
      trackFormSubmit("contacto_home", { location: "contacto" });
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <p className="form-success" role="status">
        {t.contact.success}
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label>
          <span className="sr">{t.contact.name}</span>
          <input name="name" type="text" required placeholder={t.contact.name} autoComplete="name" />
          <ValidationError prefix={t.contact.name} field="name" errors={state.errors} className="form-error" />
        </label>
        <label>
          <span className="sr">{t.contact.email}</span>
          <input name="email" type="email" required placeholder={t.contact.email} autoComplete="email" />
          <ValidationError prefix={t.contact.email} field="email" errors={state.errors} className="form-error" />
        </label>
      </div>
      <label>
        <span className="sr">{t.contact.message}</span>
        <textarea name="message" required rows={4} placeholder={t.contact.message} />
        <ValidationError prefix={t.contact.message} field="message" errors={state.errors} className="form-error" />
      </label>
      <button className="btn btn-solid" type="submit" disabled={state.submitting}>
        {state.submitting ? t.contact.sending : t.contact.send}
      </button>
    </form>
  );
}
