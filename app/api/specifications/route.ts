import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Créer le transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Formater le contenu de l'email
    const emailContent = `
      <h1>Nouvelle demande de cahier des charges</h1>
      
      <h2>Informations du contact</h2>
      <p><strong>Nom:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Téléphone:</strong> ${formData.phone}</p>
      <p><strong>Entreprise:</strong> ${formData.company}</p>

      <h2>Informations du projet</h2>
      <p><strong>Type de projet:</strong> ${formData.projectType}</p>
      <p><strong>Budget:</strong> ${formData.budget}</p>
      <p><strong>Date limite:</strong> ${formData.deadline}</p>

      <h2>Description du projet</h2>
      <p>${formData.description}</p>
    `;

    // Options de l'email
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `Nouvelle demande de cahier des charges - ${formData.company}`,
      html: emailContent,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
