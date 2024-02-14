import React from 'react'
import '../AboutMe/AboutMe.css'
import imgJS from '../../assets/JavaScriptlogo.png'
import imgReact from '../../assets/Reacticon.png'
import imgHtml from '../../assets/htmlLogo.png'
import imgCSS from '../../assets/logocss.png'
import imgGSAP from '../../assets/greensockicon.png'
import imgGitH from '../../assets/gitHub.png'
import imgBOOTS from '../../assets/bootstraplogo.png'


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
        <section className='aboutme__skillsCont'>
          <h2>{languageToogler ? 'Skills' : 'Habilidades'}</h2>
          <div className='aboutme__imgsCont'>
            <img src={imgJS} alt='JAVASCRIPT' className='imgSkills'/>
            <img src={imgReact} alt='REACT' className='imgSkills'/>
            <img src={imgHtml} alt='HTML' className='imgSkills'/>
            <img src={imgCSS} alt='CSS' className='imgSkills'/>
            <img src={imgGSAP} alt='GSAP' className='imgSkills'/>
            <img src={imgGitH} alt='GITHUB' className='imgSkills'/>
            <img src={imgBOOTS} alt='BOOTSTRAP' className='imgSkills'/>
          </div>
        </section>
    </section>
  )
}
