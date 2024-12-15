import React from "react";
import Modal from "react-modal";
import "../styles/ModalProjets.css";


function ModalProjets({ projetId, onClose }) {
  const projets = [
    {
      id: 1,
      titre: "Booky",
      description:
        "Pour ce projet, j'ai dû intégrer la page d'accueil d'une agence de voyage en utilisant HTML et CSS. J'ai pris soin de respecter la maquette fournie tout en accordant une grande attention au design responsive, afin que le site soit fonctionnel sur tous les appareils.",
      problematique:
        "Créer un site vitrine. Ce site doit être responsive.",
      competences:
        "Ce projet m'a permis de développer mes compétences en HTML, CSS et design responsive en respectant la maquette fournie.",
      lien: "https://github.com/francois-did/OpenClassrooms-booki",
    },
    {
      id: 2,
      titre: "Sophie Bluel",
      description:
        "Dans ce projet, j'ai créé une page web dynamique pour une architecte d'intérieur en utilisant JavaScript. J'ai également utilisé une API pour gérer les données.",
      problematique:
        "Créer une page dynamique avec JavaScript.",
      competences:
        "Grâce à ce projet, j'ai acquis des compétences en Javascript, j'ai également appris à communiquer avec une API.",
      lien: "https://github.com/francois-did/Sophie-Bluel/tree/master",
    },
    {
      id: 3,
      titre: "Nina Carducci",
      description:
        "Ce projet m'a permis d'optimiser un site web pour le référencement naturel (SEO) et d'améliorer son accessibilité. J'ai effectué un audit de performance et proposé des recommandations pour rendre le site plus performant et accessible.",
      problematique:
        "Optimiser un site web pour le référencement et améliorer l'accessibilité.",
      competences:
        "J'ai renforcé mes compétences en SEO, en accessibilité et en analyse de performance pour améliorer la visibilité et l'expérience utilisateur.",
      lien: "https://github.com/francois-did/Nina-Carducci",
    },
    {
      id: 4,
      titre: "Kasa",
      description:
        "Dans ce projet, j'ai développé une application React pour la location immobilière. J'ai implémenté une navigation dynamique avec React Router.",
      problematique: "Créer une application avec React.",
      competences:
        "Ce projet m'a permis d'appendre et de perfectionner mes connaissances en React.",
      lien: "https://github.com/francois-did/projet-5-OC",
    },
    {
      id: 5,
      titre: "Mon Vieux Grimoire",
      description:
        "Pour ce projet, j'ai développé une API sécurisée pour un site de notation de livres. J'ai utilisé MongoDB et Express pour gérer les données des utilisateurs et des livres.",
      problematique: "Développer un back-end avec MongoDB et Express.",
      competences:
        "J'ai acquis des compétences en développement back-end, création d'API sécurisées et gestion de bases de données avec MongoDB.",
      lien: "https://github.com/francois-did/P6-OC",
    },
    {
      id: 6,
      titre: "Qwenta",
      description:
        "Dans ce projet, j'ai planifié un site web en utilisant une méthodologies agile. J'ai également du construire un Kanban en utilisant Notion pour suivre l'avancement du projet.",
      problematique:
        "Planifier un projet web en utilisant la méthodologie agile.",
      competences:
        "Ce projet m'a initié à la méthodologie agile, à la gestion de projets avec Notion et à la rédaction d'une document de spécification technique.",
      lien: "https://github.com/francois-did/P6-OC",
    },
  ];

  const projet = projets.find((p) => p.id === projetId);

  return (
    <Modal
      isOpen={!!projetId}
      onRequestClose={onClose}
      contentLabel="Détails du projet"
      className="modal-projets"
      overlayClassName="overlay-projets"
    >
      <div className="modal-content">
        <h2>{projet.titre}</h2>
        <h3>Description du projet</h3>
        <p>{projet.description}</p>
        <h3>Problématique</h3>
        <p>{projet.problematique}</p>
        <h3>Compétences développées</h3>
        <p>{projet.competences}</p>
        <a
          href={projet.lien}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-link"
        >
          Voir le code sur GitHub
        </a>
        <button onClick={onClose} className="close-button">
          Fermer
        </button>
      </div>
    </Modal>
  );
}

export default ModalProjets;
