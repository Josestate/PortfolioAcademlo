import { useState, useRef } from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import './App.css'
import Projects from './Components/Projects/Projects'
import AboutMe from './Components/AboutMe/AboutMe'
import Contact from './Components/Contact/Contact'

function App() {
  let [languageToogler, setLanguageToogler] = useState(true);

  const homeRef = useRef(); 
  const aboutMeRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();
  return (
      <>
        <Header languageToogler={languageToogler} setLanguageToogler={setLanguageToogler} homeRef={homeRef} aboutMeRef={aboutMeRef} portfolioRef={portfolioRef} contactRef={contactRef}/>
        <Home languageToogler={languageToogler} homeRef={homeRef}/>
        <AboutMe languageToogler={languageToogler} aboutMeRef={aboutMeRef}/>
        <Projects languageToogler={languageToogler} portfolioRef={portfolioRef}/>
        <Contact languageToogler={languageToogler} contactRef={contactRef}/>
      </>
  )
}

export default App
