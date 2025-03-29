require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Transporter Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Ton adresse Gmail
    pass: process.env.GMAIL_PASS  // Ton mot de passe d'application
  }
});

// Route POST pour le formulaire de contact
app.post('/contact', (req, res) => {
  const { nom, email, message } = req.body;

  const mailOptions = {
    from: `"${nom}" <${process.env.GMAIL_USER}>`, // Affiche le nom du visiteur comme expéditeur
    to: process.env.GMAIL_USER, // Tu reçois le mail ici
    subject: `Nouveau message de ${nom}`,
    text: `Message de ${email} :\n\n${message}`,
    replyTo: email // Permet de répondre directement à l'adresse saisie
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur d\'envoi :', error);
      res.status(500).json({ success: false, message: "Erreur lors de l'envoi du mail" });
    } else {
      console.log('Email envoyé :', info.response);
      res.status(200).json({ success: true, message: "Email envoyé avec succès !" });
    }
  });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port : ${PORT}`);
});
