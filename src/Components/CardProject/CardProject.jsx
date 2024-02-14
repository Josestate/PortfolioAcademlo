import React from "react";
import '../CardProject/CardProject.css'
import img from "../../assets/pngtree-no-image.jpg";

export default function CardProyect({ name, right }) {
  console.log(name, right)
  return (
    <section className= {right ? "cardProjects__container right" : "cardProjects__container" } >
      <img src={img} alt="" className="cardProyect__img"/>
      <h3>{name}</h3>
    </section>
  );
}
