import React from 'react'
import '../AboutMe/AboutMe.css'


export default function AboutMe({languageToogler, aboutMeRef}) {
  return (
    <section className="aboutMe__container" ref={aboutMeRef}>
        <article className="aboutMe__textContainer">
            <h2>{languageToogler ? "Hi there! it's Jose Castillo" : "¡Hola! soy Jose Castillo"}</h2>
            <p className="aboutMe__text">
            {languageToogler ? 'I transform ideas into captivating digital experiences. My passion for front-end development translates into intuitive and visually stunning interfaces that not only meet technical requirements but also elevate the user experience to an extraordinary level. Ready to contribute innovation and excellence to your team, combining cutting-edge technical skills with an unwavering commitment to quality and creativity' : 'Transformo ideas en experiencias digitales cautivadoras. mi pasión por el desarrollo front-end se traduce en algo intuitivo y visualmente impresionante. interfaces que no sólo cumplen con los requisitos técnicos sino que también elevan la experiencia del usuario a un nivel extraordinario. Listo para contribuir innovación y excelencia a su equipo, combinando vanguardia habilidades técnicas con un compromiso inquebrantable con la calidad y creatividad'}
            </p>
            <h3>{languageToogler ? 'Born Date' : 'Fecha de nacimiento'}: 19/04/2005</h3>
        </article>
    </section>
  )
}
