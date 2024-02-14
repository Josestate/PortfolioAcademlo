import React, { useContext, useState, useRef } from 'react';
import '../Header/Header.css';

export default function Header({ languageToogler, setLanguageToogler, homeRef, aboutMeRef, portfolioRef, contactRef }) {

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
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const [tooglerLigth, setTooglerLight] = useState(true);
    const languageBtnRef = useRef();

    const toogleLight = (e) => {
        setTooglerLight(!tooglerLigth);
        if (tooglerLigth) {
            e.target.parentNode.parentNode.parentNode.style.background = '#171724';
            e.target.style.background = '#fff';
            e.target.style.color = '#171724';
            languageBtnRef.current.style.background = '#fff';
            languageBtnRef.current.style.color = '#171724';
            document.documentElement.childNodes[2].style.background = '#171724';
        } else {
            e.target.parentNode.parentNode.parentNode.style.background = '#fff';
            e.target.style.background = 'rgb(73, 115, 133)';
            e.target.style.color = '#fff';
            languageBtnRef.current.style.background = 'rgb(73, 115, 133)';
            languageBtnRef.current.style.color = '#fff';
            document.documentElement.childNodes[2].style.background = '#fff';
        }
    };

    console.log(languageToogler);

    return (
        <header className='header__container'>
            <nav>
                <section className='header__logoContainer'>
                    <a href='#' >
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
