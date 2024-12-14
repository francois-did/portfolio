import React from "react";
import "../styles/Presentation.css";
import presentationImage from "../images/presentation_image.jpg";


function Presentation() {
  return (
    <section className="presentation">
        <div className="content_container">
      <div className="content">
        <div className="text">
          <h1>Bienvenue.</h1>
          <p>
            Je suis François Didouche, un développeur web front-end passionné
            par la création de sites modernes, intuitifs et performants. 
          </p>
        </div>
        <div className="image">
        <img
            src={presentationImage}
            alt="Illustration développeur"
            className="profile-image"
        />

        </div>
      </div>
      </div>
    </section>
  );
}

export default Presentation;
