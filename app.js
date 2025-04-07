document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const menuMobile = document.querySelector(".menu-mobile");

  // Menu burger toggle
  burger.addEventListener("click", () => {
    menuMobile.classList.toggle("active");
  });

  // Clic extérieur pour fermer le menu mobile
  document.addEventListener("click", (e) => {
    if (!menuMobile.contains(e.target) && !burger.contains(e.target)) {
      menuMobile.classList.remove("active");
    }
  });

  // Tabs "À propos"
  window.showSection = function (sectionId) {
    document.querySelectorAll(".tab-content").forEach((section) => {
      section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");

    document.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  };

  // -----------------------
  // Section Projets dynamique
  // -----------------------

  const projets = [
    {
      image: "images/booky.png",
      titre: "Booky",
      sousTitre: "Site vitrine HTML/CSS",
      objectifs: "Construire le site vitrine d'une agence de voyage",
      technos: "HTML, CSS",
      description:
        "Dans ce projet, j'ai du développer un site vitrine à partir d'une maquette Figma, le site devait être responsive et le code devait être passé aux validateurs W3C.",
      lien: "https://github.com/ton-projet/booky",
    },
    {
      image: "images/bluel.png",
      titre: "Sophie Bluel",
      sousTitre: "Site vitrine professionnel",
      objectifs: "Construire une interface dynamique ainsi qu’une page de connexion fonctionnelle",
      technos: "Javascript",
      description:
        "Dans ce projet, j'ai du développer pour une architecte d'intérieur : une page de présentation, une page de connexion de l'administrateur du site et une modale permettant à Sophie de pouvoir ajouter ou supprimer de nouveaux travaux.",
      lien: "https://github.com/ton-projet/booky",
    },
    {
      image: "images/nina.png",
      titre: "Nina Carducci",
      sousTitre: "Optimisation SEO d’un site",
      objectifs: "Améliorer le référencement SEO d'un site de photographie",
      technos: "SEO, Lighthouse",
      description:
        "Dans ce projet, j'ai du optimiser le référencement (SEO) du site de Nina Carducci, en utilisant l'outil Lighthouse, afin de mieux cerner les différentes optimisations à effectuer",
      lien: "https://github.com/ton-projet/booky",
    },
    {
      image: "images/kasa.png",
      titre: "Kasa",
      sousTitre: "Application React front-end",
      objectifs: "Construire le frontend d'un site avec React",
      technos: "React, SCSS",
      description:
        " Dans ce projet, je suis partie de la maquette fournie et coder depuis zéro le front-end avec React et React Router Dom. Parmi les défis à relever : créer différentes routes dans le routeur, créer des boites de texte ouvrables et fermables, créer un carroussel cyclique et enfin rediriger vers une page d'erreur en cas d'erreur d'URL. Tout le site devait être responsive.",
      lien: "https://github.com/ton-projet/booky",
    },
    {
      image: "images/grimoire.png",
      titre: "Mon vieux grimoire",
      sousTitre: "API avec MongoDB/Node",
      objectifs: "Construire le backend avec MongoDB",
      technos: "Node.js, MongoDB, Express",
      description:
        "Dans ce projet, j'ai du crée un serveur et un routeur grâce au framework Express et paramétrer la base de données MongoDB grâce à la bibliothèque Mongoose. J'ai créé différents middlewares pour l'authentification, la gestion des requêtes multipart et pour le retraitement des images (green code). Enfin grâce aux méthodes HTTP, j'ai créé différents controleurs pour manipuler la base de données.",
      lien: "https://github.com/ton-projet/booky",
    },
  ];

  const projetsContainer = document.querySelector(".projets_container");

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2 id="modal-title" class="modal-title"></h2>
      <p id="modal-subtitle" class="modal-subtitle"></p>
      <div class="modal-separator"></div>
      <img id="modal-image" src="" alt="Aperçu du projet" class="modal-img" />
      <p><strong>Description :</strong><br><span id="modal-description"></span></p>
      <p><strong>Technologies utilisées :</strong><br><span id="modal-technos"></span></p>
      <p><strong>Objectifs :</strong><br><span id="modal-objectifs"></span></p>
      <a href="#" id="modal-link" class="modal-button" target="_blank">Voir le projet sur GitHub</a>
    </div>
  `;
  document.body.appendChild(modal);

  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalDescription = document.getElementById("modal-description");
  const modalTechnos = document.getElementById("modal-technos");
  const modalObjectifs = document.getElementById("modal-objectifs");
  const closeModal = modal.querySelector(".close");

  function afficherProjets(listeProjets) {
    projetsContainer.innerHTML = "";
    listeProjets.forEach((projet) => {
      const projetDiv = document.createElement("div");
      projetDiv.classList.add("projets_content");

      const image = document.createElement("img");
      image.src = projet.image;
      image.alt = projet.titre;

      const infoDiv = document.createElement("div");
      infoDiv.classList.add("projets_info");

      const titre = document.createElement("p");
      titre.classList.add("title_projets");
      titre.textContent = projet.titre;

      const objectif = document.createElement("p");
      objectif.classList.add("objectif_projet");
      objectif.textContent = projet.objectifs;

      projetDiv.addEventListener("click", () => {
        modalTitle.textContent = projet.titre;
        modalSubtitle.textContent = projet.sousTitre || "";
        modalDescription.textContent = projet.description;
        modalTechnos.textContent = projet.technos;
        modalObjectifs.textContent = projet.objectifs;
        document.getElementById("modal-image").src = projet.image;
        document.getElementById("modal-link").href = projet.lien;
        modal.style.display = "flex";
      });

      infoDiv.appendChild(titre);
      infoDiv.appendChild(objectif);
      projetDiv.appendChild(image);
      projetDiv.appendChild(infoDiv);
      projetsContainer.appendChild(projetDiv);
    });
  }

  afficherProjets(projets);

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  const boutonsFiltres = document.querySelectorAll(".filtres button");

  boutonsFiltres.forEach((bouton) => {
    bouton.addEventListener("click", () => {
      boutonsFiltres.forEach((btn) => btn.classList.remove("active"));
      bouton.classList.add("active");

      const filtre = bouton.id;

      const projetsFiltres = projets.filter((projet) => {
        const techs = projet.technos.toLowerCase();

        if (filtre === "all") return true;
        if (filtre === "front") {
          return (
            techs.includes("html") ||
            techs.includes("css") ||
            techs.includes("javascript") ||
            techs.includes("react") ||
            techs.includes("scss")
          );
        }
        if (filtre === "back") {
          return (
            techs.includes("node") ||
            techs.includes("mongo") ||
            techs.includes("express")
          );
        }

        return false;
      });

      afficherProjets(projetsFiltres);
    });
  });
});

// ----- Contact Form -----
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
      const response = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom, email, message }),
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Message envoyé avec succès !");
        form.reset();
      } else {
        alert("❌ Erreur : " + result.message);
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      alert("❌ Erreur réseau. Vérifie que ton serveur est lancé.");
    }
  });
});
