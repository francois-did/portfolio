import React, { useState } from "react";
import "../styles/Projets.css";
import ModalProjets from "./ModalProjets";
import BookyImage from "../images/Booky.webp";
import SophieBluelImage from "../images/Sophie Bluel.webp";
import NinaCarducciImage from "../images/NinaCarducci.webp";
import KasaImage from "../images/Kasa.webp";
import VieuxGrimoireImage from "../images/VieuxGrimoire.webp";
import QwentaImage from "../images/Qwenta.webp";

function Projets() {
  const [selectedProjetId, setSelectedProjetId] = useState(null);

  const projets = [
    { id: 1, titre: "Booky", description: "HTML et CSS", image: BookyImage },
    { id: 2, titre: "Sophie Bluel", description: "JavaScript", image: SophieBluelImage },
    { id: 3, titre: "Nina Carducci", description: "Référencement SEO", image: NinaCarducciImage },
    { id: 4, titre: "Kasa", description: "React", image: KasaImage },
    { id: 5, titre: "Mon Vieux Grimoire", description: "MongoDB", image: VieuxGrimoireImage },
    { id: 6, titre: "Qwenta", description: "Agile", image: QwentaImage },
  ];

  const handleProjetClick = (id) => {
    setSelectedProjetId(id);
  };

  const closeModal = () => {
    setSelectedProjetId(null);
  };

  return (
    <section className="projets" id="mes-projets">
      <h2>Mes Projets</h2>
      <div className="projets-liste">
        {projets.map((projet) => (
          <div
            key={projet.id}
            className="projet-item"
            onClick={() => handleProjetClick(projet.id)}
          >
            <div className="projet-image">
              <img src={projet.image} alt={projet.titre} />
            </div>
            <div className="projet-description">
              <h3>{projet.titre}</h3>
              <p>{projet.description}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedProjetId && (
        <ModalProjets projetId={selectedProjetId} onClose={closeModal} />
      )}
    </section>
  );
}

export default Projets;
