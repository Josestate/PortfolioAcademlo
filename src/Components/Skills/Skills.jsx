import React from 'react'
import '../Skills/Skills.css'

import imgJS from '/images/JavaScriptlogo.png'
import imgReact from '/images/Reacticon.png'
import imgHtml from '/images/htmlLogo.png'
import imgCSS from '/images/logocss.png'
import imgGSAP from '/images/gsapIcon.png'
import imgGitH from '/images/gitHub.png'
import imgBOOTS from '/images/bootstraplogo.png'

const Skills = ({ languageToogler }) => {
  return (
    <section className='skillsCont'>
        <h2>{languageToogler ? 'Skills' : 'Habilidades'}</h2>
        <div className='imgsCont'>
            <img src={imgJS} alt='JAVASCRIPT' className='imgSkills'/>
            <img src={imgReact} alt='REACT' className='imgSkills'/>
            <img src={imgHtml} alt='HTML' className='imgSkills'/>
            <img src={imgCSS} alt='CSS' className='imgSkills'/>
            <img src={imgGSAP} alt='GSAP' className='imgSkills'/>
            <img src={imgGitH} alt='GITHUB' className='imgSkills'/>
            <img src={imgBOOTS} alt='BOOTSTRAP' className='imgSkills'/>
        </div>
    </section>
  )
}

export default Skills