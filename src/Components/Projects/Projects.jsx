import {React, useRef} from 'react'
import CardProject from '../CardProject/CardProject';
import '../Projects/Projects.css'


export default function Projects({portfolioRef}) {
  return (
    <section className="projects__container" ref={portfolioRef}>
      <CardProject name="Rolex Pr" right={true}/>
      <CardProject name="Mundial Api" />
      <CardProject name="Poke page" right={true}/>
      <CardProject name="Eat & Laugh" />
    </section>
  );
}
