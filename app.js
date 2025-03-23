document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
    const menuMobile = document.querySelector(".menu-mobile");

    burger.addEventListener("click", function() {
        if (menuMobile.style.display === "block") {
            menuMobile.style.display = "none";
        } else {
            menuMobile.style.display = "block";
        }
    });

    // Ferme le menu si on clique en dehors
    document.addEventListener("click", function(event) {
        if (!menuMobile.contains(event.target) && !burger.contains(event.target)) {
            menuMobile.style.display = "none";
        }
    });
});


// PROJETS

const projets = [
    {
        "image": "images/montagne.avif",
        "titre": "Booky",
        "objectifs": "Objectifs du projet",
        "technos": "HTML, CSS, JavaScript",
        "description": "Un projet de gestion de bibliothèque en ligne."
    },
    {
        "image": "images/montagne.avif",
        "titre": "Sophie Bluel",
        "objectifs": "Objectifs du projet",
        "technos": "React, Node.js",
        "description": "Une plateforme de portfolio dynamique pour une photographe."
    },
    {
        "image": "images/montagne.avif",
        "titre": "Nina Carducci",
        "objectifs": "Améliorer le référencement SEO d'un site de photographie",
        "technos": "SEO, WordPress",
        "description": "Optimisation d'un site pour améliorer sa visibilité sur Google."
    },
    {
        "image": "images/montagne.avif",
        "titre": "Kasa",
        "objectifs": "Construire le frontend d'un site avec React",
        "technos": "React, SCSS",
        "description": "Application de location d'appartements avec affichage dynamique."
    },
    {
        "image": "images/montagne.avif",
        "titre": "Mon vieux grimoire",
        "objectifs": "Construire le backend avec MongoDB",
        "technos": "Node.js, MongoDB, Express",
        "description": "Un site de notation de livres avec gestion des utilisateurs."
    },
    {
        "image": "images/montagne.avif",
        "titre": "Gestion de projet",
        "objectifs": "Planifier un projet avec la méthode Agile",
        "technos": "Trello, Notion, Scrum",
        "description": "Mise en place de méthodes agiles pour un suivi efficace."
    }
];

const projetsContainer = document.querySelector(".projets_container");
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2 id="modal-title"></h2>
        <p id="modal-description"></p>
        <p><strong>Technologies utilisées :</strong> <span id="modal-technos"></span></p>
        <p><strong>Objectifs :</strong> <span id="modal-objectifs"></span></p>
    </div>
`;
document.body.appendChild(modal);

const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTechnos = document.getElementById("modal-technos");
const modalObjectifs = document.getElementById("modal-objectifs");
const closeModal = document.querySelector(".close");

// 👉 Fonction pour afficher une liste de projets passée en paramètre
function afficherProjets(listeProjets) {
    projetsContainer.innerHTML = "";
    listeProjets.forEach(projet => {
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
            modalDescription.textContent = projet.description;
            modalTechnos.textContent = projet.technos;
            modalObjectifs.textContent = projet.objectifs;
            modal.style.display = "flex";
        });

        infoDiv.appendChild(titre);
        infoDiv.appendChild(objectif);
        projetDiv.appendChild(image);
        projetDiv.appendChild(infoDiv);
        projetsContainer.appendChild(projetDiv);
    });
}

// 🔁 Affiche tous les projets au chargement
afficherProjets(projets);

// ❌ Fermer la modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// ✅ Gestion des filtres
const boutonsFiltres = document.querySelectorAll(".filtres button");

boutonsFiltres.forEach(bouton => {
    bouton.addEventListener("click", () => {
        // Changer l'apparence du bouton actif
        boutonsFiltres.forEach(btn => btn.classList.remove("active"));
        bouton.classList.add("active");

        const filtre = bouton.id;

        // Appliquer le filtre
        const projetsFiltres = projets.filter(projet => {
            const techs = projet.technos.toLowerCase();

            if (filtre === "all") return true;
            if (filtre === "front") {
                return techs.includes("html") || techs.includes("css") || techs.includes("javascript") || techs.includes("react") || techs.includes("scss");
            }
            if (filtre === "back") {
                return techs.includes("node") || techs.includes("mongo") || techs.includes("express");
            }

            return false;
        });

        // Afficher les projets filtrés
        afficherProjets(projetsFiltres);
    });
});




function showSection(sectionId) {
    // Désactive toutes les sections
    document.querySelectorAll('.tab-content').forEach(section => {
      section.classList.remove('active');
    });
  
    // Active la section sélectionnée
    document.getElementById(sectionId).classList.add('active');
  
    // Mise à jour des onglets actifs
    document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('active');
    });
  
    // Ajoute la classe active au bouton cliqué
    event.currentTarget.classList.add('active');
  }


//   COMPETENCES NOUVEAU


