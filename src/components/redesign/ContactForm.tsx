import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xvgrnrzv");

  if (state.succeeded) {
    return (
      <p className="form-success" role="status">
        Mensaje enviado. Te escribimos pronto.
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label>
          <span className="sr">Tu nombre</span>
          <input name="name" type="text" required placeholder="Tu nombre" autoComplete="name" />
          <ValidationError prefix="Nombre" field="name" errors={state.errors} className="form-error" />
        </label>
        <label>
          <span className="sr">Tu correo</span>
          <input name="email" type="email" required placeholder="Tu correo" autoComplete="email" />
          <ValidationError prefix="Correo" field="email" errors={state.errors} className="form-error" />
        </label>
      </div>
      <label>
        <span className="sr">Cuéntanos qué necesitas</span>
        <textarea name="message" required rows={4} placeholder="Cuéntanos qué necesitas" />
        <ValidationError prefix="Mensaje" field="message" errors={state.errors} className="form-error" />
      </label>
      <button className="btn btn-solid" type="submit" disabled={state.submitting}>
        {state.submitting ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
