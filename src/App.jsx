import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import './App.css'
import Projects from './Components/Projects/Projects'
import AboutMe from './Components/AboutMe/AboutMe'
import Footer from './Components/Footer/Footer';

function App() {
  let [languageToogler, setLanguageToogler] = useState(true);
  const mainRef = useRef();
  const headerRef = useRef();
  const languageBtnRef = useRef();
  const logoRef = useRef();
  const headerComp = useRef();
  const homeRef = useRef(); 
  const aboutMeRef = useRef();
  const portfolioRef = useRef();
  const footerRef = useRef();
  const [tooglerLigth, setTooglerLight] = useState(true);

const toogleLight = (e) => {
  setTooglerLight(!tooglerLigth);
  if (tooglerLigth) {
      e.target.style.background = '#fff';
      mainRef.current.style.color = '#fff';
      logoRef.current.style.color = '#fff';
      e.target.style.color = '#171724';
      languageBtnRef.current.style.background = '#fff';
      languageBtnRef.current.style.color = '#171724';
  } else {
      logoRef.current.style.color = 'rgb(73, 115, 133)';
      e.target.style.background = 'rgb(73, 115, 133)';
      mainRef.current.style.color = 'rgb(73, 115, 133)';
      languageBtnRef.current.style.background = 'rgb(73, 115, 133)';
      languageBtnRef.current.style.color = '#fff';
  }
};


useEffect(() => {
  const navbar = headerComp.current;
  
  if (!navbar) return;

  const trigger = ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      const navbarHeight = navbar.offsetHeight || 0; // Para asegurar que obtienes el valor correcto
      const scrollY = self.scroll();

      if (self.direction === -1) {
        // Scroll hacia arriba
        gsap.to(navbar, { y: 0, duration: 0.3, ease: 'power2.out' });
      } else {
        // Scroll hacia abajo
        gsap.to(navbar, { y: -navbarHeight, duration: 0.3, ease: 'power2.out' });
      }
    }
  });

  // Cleanup
  return () => {
    trigger.kill();
  };
}, []);
  return (
      <main className='main_container' ref={mainRef} style={{backgroundImage: `url(${tooglerLigth ? '/images/Josecowhite.png' : '/images/Josecoblack.png'})`}}>
        <Header logoRef={logoRef} languageToogler={languageToogler} setLanguageToogler={setLanguageToogler} toogleLight={toogleLight} tooglerLigth={tooglerLigth} homeRef={homeRef} aboutMeRef={aboutMeRef} portfolioRef={portfolioRef} footerRef={footerRef} headerComp={headerComp} languageBtnRef={languageBtnRef}/>
        <Home languageToogler={languageToogler} homeRef={homeRef}/>
        <AboutMe languageToogler={languageToogler} aboutMeRef={aboutMeRef}/>
        <Projects languageToogler={languageToogler} portfolioRef={portfolioRef}/>
        <Footer languageToogler={languageToogler} footerRef={footerRef}/>
      </main>
  )
}

export default App
