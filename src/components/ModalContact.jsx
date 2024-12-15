import React from "react";
import Modal from "react-modal";
import "../styles/ModalContact.css";


function ModalContact({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Mes informations"
      className="modal-contact"
      overlayClassName="overlay-contact"
    >
      <h2>Me Contacter</h2>
      <div className="contact-details">
        <p>
          <strong>Email :</strong> <a href="mailto:francoisdidouche@gmail.com">francoisdidouche@gmail.com</a>
        </p>
        <p>
          <strong>Téléphone :</strong> <a href="tel:+33763116622">07 63 11 66 22</a>
        </p>
        <p>
          <strong>LinkedIn :</strong> En cours de création
        </p>
      </div>
      <button onClick={onClose} className="close-btn">
        Fermer
      </button>
    </Modal>
  );
}

export default ModalContact;
