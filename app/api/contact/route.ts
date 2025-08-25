import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { validateContactForm, type ContactFormData } from '@/utils/form-validation';
import { sanitizeFormData } from '@/utils/server-validation';

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
    
    // Sanitize les données pour éviter les injections
    const sanitizedData = sanitizeFormData(body as ContactFormData);
    
    // Validation complète des données du formulaire
    const validation = validateContactForm(sanitizedData);
    
    // Si la validation échoue, retourner les erreurs
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          error: 'Validation du formulaire échouée', 
          details: validation.errors 
        },
        { status: 400 }
      );
    }
    
    // Extraction des données validées
    const { name, email, phone, company, message, budget } = sanitizedData;

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

      // Enregistrement de la soumission dans les logs (ou dans une base de données)
      console.log('Formulaire soumis:', {
        timestamp: new Date().toISOString(),
        name,
        email,
        type: isExpress ? 'Landing Page Express' : 'Contact général'
      });

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
