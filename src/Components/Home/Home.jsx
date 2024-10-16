import {React, useEffect, useState, useRef} from 'react';
import '../Home/Home.css';
// import circleImg from '../../assets/circleGame.png';
// import triangleImg from '../../assets/triangle.png'
// import file from '../../CV'
import download from '../../CV/JoseCV.pdf';
export default function Home({homeRef, languageToogler}) {
    const [displayNoneName, setDisplayNoneName] = useState(true);
    const [displayerDomName, setDisplayerDomName] = useState(true);
    const [lineText, setLineText] = useState(false);
    let nameRef = useRef();
    let lineRef = useRef();
    useEffect(() => {
      setTimeout(() => {
        setDisplayNoneName(!displayNoneName);
      }, 2000);
      setTimeout(() => {
        setDisplayerDomName(!displayerDomName);
      }, 3000);
      displayNoneName
          ? nameRef.current.style.width = displayerDomName ? '190px' : '260px'
        :  nameRef.current.style.width = 0;
        }, [displayNoneName]);
    useEffect(() => {
      setTimeout(() => {
        setLineText(!lineText);
      }, 500);
      lineText
        ? lineRef.current.style.opacity = 0
        : lineRef.current.style.opacity = 1 ;
    }, [lineText]);

    
  return (
  <>
    <section className="home__container" id='home' ref={homeRef}>
      <div className="home__nameContainer" ref={nameRef}>
        {displayerDomName ? (
          <h1 className="home__name name_realName">Joseco</h1>
          ) : (
          <h1 className="home__name name_profession">Software</h1>
        )}
        </div>
        <span className="home__line" ref={lineRef}></span>
      </section>
      <a href={download} download='JoseCV'>{languageToogler ? 'Download CV' : 'Descargar CV'}</a>
  </>
  )
}
