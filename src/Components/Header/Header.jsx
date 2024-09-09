import React, { useContext, useState, useRef } from 'react';
import '../Header/Header.css';

export default function Header({ logoRef, languageToogler, setLanguageToogler, homeRef, aboutMeRef, portfolioRef, footerRef, headerComp, languageBtnRef, tooglerLigth, toogleLight }) {
    // let [window] = window.screen.width > 768 ? true : false;
    const [showingDisplayer, setShowingDisplayer] = useState(window.screen.width > 768 ? true : false)
    // const [showHamburguerImg, setShowHamburguerImg] = useState(showingDisplayer)
    const [showingHeader, setShowingHeader] = useState(false)

    const scrollToHome = () => {
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToAbout = () => {
        aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToPortfolio = () => {
        portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContact = () => {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    console.log('showingDisplayer', showingDisplayer)
    
    
    // const headerStyle = {
    //     backgroundImage: `url(${tooglerLigth ? '/images/marmolblack.jpg' : '/images/marmolWhite.jpg'})`
    // };
    console.log(tooglerLigth, 'tooglerLigth');
    return (
        <header className='header__container' ref={headerComp} style={{backgroundImage: `url(${tooglerLigth ? '/images/Josecowhite.png' : '/images/Josecoblack.png'})`}}>
            {!showingDisplayer && <img src='/images/hamburger_menu.png' alt='' className='header__navDisplayer' onClick={() => setShowingHeader(!showingHeader)}/>}
            <nav className= {showingHeader == showingDisplayer ? 'displayNone' : 'header__nav'}>
                <section className='header__logoContainer'>
                    <a href='#' ref={logoRef}>
                        <p>J</p>
                        <div className='header__line'></div>
                    </a>
                </section>
                <ul className='header__list'>
                    <li className='header__item' onClick={scrollToHome}>{languageToogler ? 'Home' : 'inicio'}</li>
                    <li className='header__item' onClick={scrollToAbout}>{languageToogler ? 'About Me' : 'Sobre mi'}</li>
                    <li className='header__item' onClick={scrollToPortfolio}>{languageToogler ? 'Portfolio' : 'Portafolio'}</li>
                    <li className='header__item' onClick={scrollToContact}>{languageToogler ? 'Contact' : 'Contacto'}</li>
                </ul>
                <section className='header__tooglerContainer'>
                    <button className='header__languageToogler' onClick={(e) => setLanguageToogler(!languageToogler)} ref={languageBtnRef}>{languageToogler ? 'Español' : 'English'}</button>
                    <button className='header__lightToogler' onClick={(e) => toogleLight(e)}>{(tooglerLigth ? (languageToogler ? 'Dark' : 'Oscuro') : (languageToogler ? 'Light' : 'Claro'))}</button>
                </section>
            </nav>
        </header>
    );
}
