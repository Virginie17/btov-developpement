import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Configurez votre clé API SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    if (!process.env.SENDGRID_API_KEY) {
      return NextResponse.json(
        { error: 'Configuration SendGrid manquante' },
        { status: 500 }
      );
    }

    // Envoi d'un email de confirmation
    const msg = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL || 'votre@email.com',
      subject: 'Bienvenue à la newsletter BTOV Développement',
      text: 'Merci de vous être inscrit à notre newsletter !',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>Bienvenue chez BTOV Développement !</h1>
          <p>Merci de vous être inscrit à notre newsletter.</p>
          <p>Vous recevrez régulièrement nos derniers articles et conseils en développement web.</p>
          <p>À bientôt !</p>
        </div>
      `,
    };

    await sgMail.send(msg);

    // Ici, vous pourriez aussi ajouter l'email à une liste de diffusion

    return NextResponse.json(
      { message: 'Inscription réussie' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur newsletter:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'inscription' },
      { status: 500 }
    );
  }
}
