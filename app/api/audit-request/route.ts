import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, website, goals } = data;

    // Configuration du transporteur email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email pour vous (notification de nouvelle demande)
    await transporter.sendMail({
      from: `"BTOV Développement" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `Nouvelle demande d'audit - ${website}`,
      html: `
        <h2>Nouvelle demande d'audit de site web</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Site web:</strong> ${website}</p>
        <p><strong>Objectifs:</strong></p>
        <p>${goals}</p>
      `,
    });

    // Email de confirmation pour le client
    await transporter.sendMail({
      from: `"BTOV Développement" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Confirmation de votre demande d'audit",
      html: `
        <h2>Merci pour votre demande d'audit !</h2>
        <p>Cher(e) ${name},</p>
        <p>J'ai bien reçu votre demande d'audit pour le site ${website}.</p>
        <p>Je vais analyser votre site en détail et vous envoyer un rapport complet sous 48h ouvrées.</p>
        <p>Ce rapport inclura :</p>
        <ul>
          <li>Analyse des performances</li>
          <li>Audit SEO</li>
          <li>Test de compatibilité mobile</li>
          <li>Vérification de sécurité</li>
          <li>Recommandations personnalisées</li>
        </ul>
        <p>Si vous avez des questions entre-temps, n'hésitez pas à me contacter.</p>
        <p>Cordialement,<br>Virginie<br>BTOV Développement</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: "Une erreur s'est produite lors de l'envoi de la demande" },
      { status: 500 }
    );
  }
}
