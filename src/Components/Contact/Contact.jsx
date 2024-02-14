import {React} from "react";
import "../Contact/Contact.css";
// import faceImg from "../../assets/FacebookBlackIcon.png";
// import instaImg from "../../assets/instaBlack.png";
// import whatssImg from "../../assets/whatsappblacklogo.png";
// import linkelnImg from "../../assets/LinkedinBlack.png";
// import gitHubImg from "../../assets/github.png";

export default function Contact({languageToogler, contactRef}) {

  return (
    <section className="contact__container" ref={contactRef}>
        <article className="contact__textContainer">
            <h2>{languageToogler ? 'Contact' : 'Contacto'}</h2>
            <h3>{languageToogler ? 'Email' : 'Correo'}:{" "}
                <a href="mailto:josestate19@gmail.com" className="contact__span">
                    josestate19@gmail.com
                </a>
            </h3>
            <h3>{languageToogler ? 'Number' : 'Numero'}:{" "}<span className="contact__span">+506 6000-6824</span></h3>
            <h3> {languageToogler ? 'Direction' : 'Dirección'}:{" "}<span className="contact__span">Costa Rica, San Jose, Pavas</span></h3>
        </article>
        <section className="contact__sectionEmail">
            <p>{languageToogler ? 'Send me an Email' : 'Enviame un correo'}</p>
            <div className="contact__inputsCont">
                <label htmlFor="Name">{languageToogler ? 'Name' : 'Nombre'}: </label>
                <input type="text" name="Name" id="Name" className="contact__inputs" />
            </div>
            <div className="contact__inputsCont">
                <label htmlFor="Email">{languageToogler ? 'Email' : 'Correo'}: </label>
                <input type="email" name="Email" id="Email" className="contact__inputs"/>   
            </div>
            <div className="contact__inputsCont">
                <label htmlFor="Message">{languageToogler ? 'Message' : 'Mensaje'}: </label>
                <textarea name="Message" id="Message" className="contact__inputs"></textarea>
            </div>
           
        </section>
    </section>
  );
}
