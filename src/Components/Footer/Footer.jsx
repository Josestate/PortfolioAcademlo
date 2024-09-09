import {React} from "react";
import "../Footer/Footer.css";
import { useForm, ValidationError } from '@formspree/react';
// import faceImg from "../../assets/FacebookBlackIcon.png";
// import instaImg from "../../assets/instaBlack.png";
// import whatssImg from "../../assets/whatsappblacklogo.png";
// import linkelnImg from "../../assets/LinkedinBlack.png";
// import gitHubImg from "../../assets/github.png";


export default function footer({languageToogler, footerRef}) {

    const [state, handleSubmit] = useForm("movabbpj");
       
  return (
    <section className="footer__container" ref={footerRef}>
        <article className="footer__textContainer">
            <h2>{languageToogler ? 'Contact' : 'Contacto'}</h2>
            <h3>{languageToogler ? 'Email' : 'Correo'}:{" "}
                <a href="mailto:josestate19@gmail.com" className="footer__span">
                    josestate19@gmail.com
                </a>
            </h3>
            <h3>{languageToogler ? 'Number' : 'Numero'}:{" "}<span className="footer__span">+506 6000-6824</span></h3>
            <h3> {languageToogler ? 'Direction' : 'Dirección'}:{" "}<span className="footer__span">Costa Rica, San Jose, Pavas</span></h3>
        </article>
        <form className="footer__sectionEmail" onSubmit={handleSubmit}>
            <p>{ !state.succeeded ? (languageToogler ? 'Send me an Email' : 'Enviame un correo') : ( languageToogler ? 'Thanks I will write to you soon!' : 'Gracias, te escribiré pronto!')}</p>
            <section className="footer__inputsCont">
                <label htmlFor="email">{languageToogler ? 'Email' : 'Correo'}:</label>
                <input id="email" type="email" name="email" className="footer__inputs"/>
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </section>
            <section className="footer__inputsCont">
                <label htmlFor="Message">{languageToogler ? 'Message' : 'Mensaje'}: </label>
                <textarea id="message" name="message" className="footer__inputs" />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </section>
            <button type="submit" disabled={state.submitting}>{languageToogler ? 'Submit' : 'Enviar'}</button>
        </form>
    </section>
  );
}
