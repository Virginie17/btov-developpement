import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Vérifier si la clé API est présente
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  console.error('RESEND_API_KEY is not defined');
}

const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  try {
    // Vérifier si la requête est valide
    if (!request.body) {
      return NextResponse.json(
        { error: 'Request body is required' },
        { status: 400 }
      );
    }

    const data = await request.json();
    const { clientEmail, formData, serviceTitle, basePrice, features } = data;

    // Vérifier les champs requis
    if (!clientEmail || !serviceTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Nouvelle demande de devis - ${serviceTitle}</h1>
        
        <h2>Informations du client :</h2>
        <ul>
          <li>Entreprise : ${formData.companyName}</li>
          <li>Contact : ${formData.contactName}</li>
          <li>Email : ${clientEmail}</li>
          <li>Téléphone : ${formData.clientPhone}</li>
          <li>Adresse : ${formData.address}</li>
        </ul>

        <h2>Détails du projet :</h2>
        <p><strong>Service demandé :</strong> ${serviceTitle}</p>
        <p><strong>Prix de base :</strong> ${basePrice}€</p>
        
        <h3>Fonctionnalités incluses :</h3>
        <ul>
          ${features.map((feature: string) => `<li>${feature}</li>`).join('')}
        </ul>

        <h3>Description du projet :</h3>
        <p>${formData.projectDescription}</p>
      </div>
    `;

    // Envoyer l'email
    const email = await resend.emails.send({
      from: 'BTOV Développement <onboarding@resend.dev>',
      to: ['btovdeveloppement@gmail.com'],
      reply_to: clientEmail,
      subject: `Nouvelle demande de devis - ${serviceTitle}`,
      html: htmlContent,
    });

    if (email.error) {
      throw new Error(email.error.message);
    }

    return NextResponse.json({ success: true, id: email.data?.id });
  } catch (error) {
    console.error('Error sending devis:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
