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
          ? nameRef.current.style.width = '300px'
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
          <h1 className="home__name name_realName">Jose Pablo</h1>
          ) : (
          <h1 className="home__name name_profession">Front-end</h1>
          )}
        </div>
        <span className="home__line" ref={lineRef}></span>
      </section>
      <a href={download} download='JoseCV'>{languageToogler ? 'Download CV' : 'Descargar CV'}</a>
       {/* <div className="imgsContainer">
                <a href="https://www.facebook.com/jose.cj.127648" target="_blank">
                    <img src={faceImg} className="contact__imgs" alt="facebook" />
                </a>
                <a href="https://www.instagram.com/invites/contact/?i=tpo4mk7flr&utm_content=r9hik5i"
                    target="_blank">
                    <img
                    src={instaImg}
                    className="contact__imgs_insta"
                    alt="instagram"
                    />
                </a>
            </div>
            <div className="imgsContainer">
                <a href="https://wa.link/qo8ph2" target="_blank">
                    <img src={whatssImg} className="contact__imgs" alt="whatsapp" />
                </a>
                <a href="https://www.linkedin.com/in/jos%C3%A9-castillo-a1463526b/"
                    target="_blank">
                    <img src={linkelnImg} className="contact__imgs" alt="linkedin" />
                </a>
                <a href="https://github.com/Josestate" target="_blank">
                    <img src={gitHubImg} className="contact__imgs_github" alt="gitHub" />
                </a>
            </div> */}
  </>
  )
}
