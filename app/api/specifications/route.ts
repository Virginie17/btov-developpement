import { NextResponse } from 'next/server';
import { Specifications } from '@/types/specifications';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const specifications: Specifications = await request.json();

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
      <h1>Nouveau Cahier des Charges</h1>
      
      <h2>1. Informations sur l'entreprise</h2>
      <p><strong>Nom:</strong> ${specifications.company_info.name}</p>
      <p><strong>Activités:</strong> ${specifications.company_info.activities}</p>
      <p><strong>Sources de revenus:</strong> ${specifications.company_info.revenue_sources}</p>
      <p><strong>Valeurs:</strong> ${specifications.company_info.values}</p>
      <p><strong>Positionnement:</strong> ${specifications.company_info.brand_positioning}</p>
      <p><strong>Avantages concurrentiels:</strong> ${specifications.company_info.competitive_advantages}</p>
      <p><strong>Concurrents:</strong> ${specifications.company_info.competitors}</p>

      <h2>2. Contact Principal</h2>
      <p><strong>Nom:</strong> ${specifications.primary_contact.name}</p>
      <p><strong>Rôle:</strong> ${specifications.primary_contact.role}</p>
      <p><strong>Responsabilité:</strong> ${specifications.primary_contact.responsibility}</p>
      <p><strong>Email:</strong> ${specifications.primary_contact.email}</p>
      <p><strong>Téléphone:</strong> ${specifications.primary_contact.phone}</p>

      <!-- Ajouter les autres sections du cahier des charges -->
    `;

    // Options de l'email
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `Nouveau cahier des charges - ${specifications.company_info.name}`,
      html: emailContent,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Cahier des charges envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi du cahier des charges:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du cahier des charges' },
      { status: 500 }
    );
  }
}
