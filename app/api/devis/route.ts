import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Vérification de la clé API Resend
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    const { formData, serviceTitle } = await request.json();
    
    if (!formData || !serviceTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { companyName, contactName, address, clientEmail, clientPhone, projectDescription } = formData;

    // Vérification des champs requis
    if (!companyName || !contactName || !clientEmail || !projectDescription) {
      return NextResponse.json(
        { error: 'Missing required form fields' },
        { status: 400 }
      );
    }

    // Envoyer l'email
    const { data, error } = await resend.emails.send({
      from: 'B to V Développement <onboarding@resend.dev>',
      to: ['btovdeveloppement@gmail.com'],
      subject: `Nouvelle demande de devis - ${serviceTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(to right, #2563eb, #4f46e5); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin:0;">Nouvelle demande de devis - ${serviceTitle}</h1>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px;">
            <div style="margin-bottom: 20px;">
              <h2 style="color: #2563eb; margin-bottom: 15px;">📋 Informations du client</h2>
              <ul style="list-style: none; padding-left: 0;">
                <li style="margin-bottom: 8px;"><strong>Entreprise :</strong> ${companyName}</li>
                <li style="margin-bottom: 8px;"><strong>Contact :</strong> ${contactName}</li>
                <li style="margin-bottom: 8px;"><strong>Adresse :</strong> ${address || 'Non spécifiée'}</li>
                <li style="margin-bottom: 8px;"><strong>Email :</strong> ${clientEmail}</li>
                <li style="margin-bottom: 8px;"><strong>Téléphone :</strong> ${clientPhone || 'Non spécifié'}</li>
              </ul>
            </div>

            <div style="margin-bottom: 20px;">
              <h2 style="color: #2563eb; margin-bottom: 15px;">💡 Description du projet</h2>
              <p>${projectDescription}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h2 style="color: #2563eb; margin-bottom: 15px;">⚡ Actions requises</h2>
              <ul style="list-style: none; padding-left: 0;">
                <li style="margin-bottom: 8px;">✓ Analyser les besoins du client</li>
                <li style="margin-bottom: 8px;">✓ Préparer une proposition détaillée</li>
                <li style="margin-bottom: 8px;">✓ Contacter le client sous 24-48h</li>
              </ul>
            </div>

            <div style="text-align: center; margin-top: 20px; font-size: 0.9em; color: #666;">
              <p>Ce message a été envoyé depuis le formulaire de contact de B to V Développement</p>
              <p>© ${new Date().getFullYear()} B to V Développement - Tous droits réservés</p>
            </div>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Devis request sent successfully'
    });
    
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
