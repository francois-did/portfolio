import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalContact from "./ModalContact";
import "../styles/Header.css";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate("/#mes-projets");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="nav_container">
          <nav className="nav">
            <p>François Didouche</p>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  À propos
                </Link>
              </li>
              <li className="nav-item">
                <button onClick={handleProjectsClick} className="nav-link">
                  Projets
                </button>
              </li>
              <li className="nav-item">
                <button onClick={openModal} className="nav-link contact-btn">
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {isModalOpen && <ModalContact onClose={closeModal} />}

    </>
  );
}

export default Header;
