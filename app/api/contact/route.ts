import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    // Vérification de la clé API Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('Clé API Resend manquante');
      return NextResponse.json(
        { error: 'Configuration du serveur incomplète. Veuillez contacter l\'administrateur.' },
        { status: 500 }
      );
    }

    // Initialisation de Resend
    const resend = new Resend(resendApiKey);

    // Utilisation de ReadableStream pour le parsing du body
    const body = await new Response(request.body).json();
    const { name, email, phone, company, message, budget } = body;

    // Vérification des champs requis
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires' },
        { status: 400 }
      );
    }

    // Préparation du contenu de l'email
    const isExpress = budget === 'express';
    const subject = isExpress 
      ? `Nouvelle demande Landing Page Express de ${name}`
      : `Nouveau message de contact de ${name}`;

    const emailContent = `
De : ${name}
Email : ${email}
${phone ? `Téléphone : ${phone}` : ''}
${company ? `Entreprise : ${company}` : ''}
${isExpress ? 'Type : Landing Page Express (399€)' : ''}

Message :
${message}

${isExpress ? `
Détails de l'offre :
- Page unique professionnelle avec template prédéfini
- SEO basique inclus
- Hébergement première année inclus
- Mise en ligne sous 7 jours

Options disponibles :
- Paiement en ligne : +299€
- Évolution site complet : À partir de 1 800€
` : ''}
    `.trim();

    try {
      // Envoi de l'email
      const data = await resend.emails.send({
        from: 'BTOV <onboarding@resend.dev>',
        to: ['btovdeveloppement@gmail.com'],
        replyTo: email,
        subject: subject,
        text: emailContent,
      });

      console.log('Email envoyé avec succès:', data);

      return NextResponse.json(
        { message: 'Votre message a été envoyé avec succès' },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.error('Erreur Resend:', {
        message: emailError.message,
        name: emailError.name,
        code: emailError.statusCode,
      });

      // Gestion des erreurs spécifiques de Resend
      if (emailError.statusCode === 401) {
        return NextResponse.json(
          { error: 'Erreur d\'authentification avec le service d\'envoi d\'emails' },
          { status: 500 }
        );
      }

      throw emailError;
    }
  } catch (error: any) {
    console.error('Erreur détaillée:', {
      message: error.message,
      name: error.name,
      code: error.statusCode,
    });

    return NextResponse.json(
      { 
        error: 'Une erreur est survenue lors de l\'envoi de votre message. ' +
               'Si le problème persiste, veuillez nous contacter directement à btovdeveloppement@gmail.com'
      },
      { status: 500 }
    );
  }
}
