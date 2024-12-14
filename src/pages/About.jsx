import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1>À propos de moi</h1>
        <p>
          Je suis François Didouche, développeur web actuellement basé en Normandie. Après une reconversion
          professionnelle, j’ai décidé de me consacrer pleinement à ma passion pour le code
          et les technologies modernes.
        </p>
        <p>
          Mon objectif est de créer des expériences web intuitives, performantes et
          esthétiques, tout en cherchant à apprendre et à innover constamment.
        </p>
        <p>
          Chaque projet est pour moi une nouvelle opportunité de relever des défis, de
          travailler en équipe et de produire des solutions qui font la différence.
        </p>
      </div>
    </section>
  );
}

export default About;
