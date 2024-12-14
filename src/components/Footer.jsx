import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ModalContact from "./ModalContact";
import "../styles/Footer.css";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; 2024 François Didouche. Tous droits réservés.</p>
        <div className="footer-right">
          <div className="social-icons">
            <a
              href="https://github.com/francois-did?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
          </div>
          <button onClick={openModal} className="contact-link">
            Contact
          </button>
        </div>
      </div>

      {/* Modale de contact */}
      <ModalContact isOpen={isModalOpen} onClose={closeModal} />
    </footer>
  );
}

export default Footer;
