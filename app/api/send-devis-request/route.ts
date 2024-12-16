import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { to, subject, formData, serviceTitle, basePrice, features } = await request.json();

    const emailContent = `
      Nouvelle demande de devis

      Service: ${serviceTitle}
      Prix de base: ${basePrice}€

      Informations client:
      - Entreprise: ${formData.companyName}
      - Contact: ${formData.contactName}
      - Adresse: ${formData.address}
      - Email: ${formData.clientEmail}
      - Téléphone: ${formData.clientPhone}

      Description du projet:
      ${formData.projectDescription}

      Fonctionnalités sélectionnées:
      ${features.map((feature: string) => `- ${feature}`).join('\n')}
    `;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Nouvelle demande de devis</h1>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1e40af;">Service demandé</h2>
          <p><strong>${serviceTitle}</strong></p>
          <p>Prix de base : ${basePrice}€</p>
        </div>

        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1e40af;">Informations client</h2>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Entreprise :</strong> ${formData.companyName}</li>
            <li><strong>Contact :</strong> ${formData.contactName}</li>
            <li><strong>Adresse :</strong> ${formData.address}</li>
            <li><strong>Email :</strong> ${formData.clientEmail}</li>
            <li><strong>Téléphone :</strong> ${formData.clientPhone}</li>
          </ul>
        </div>

        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1e40af;">Description du projet</h2>
          <p>${formData.projectDescription}</p>
        </div>

        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #1e40af;">Fonctionnalités sélectionnées</h2>
          <ul>
            ${features.map((feature: string) => `<li>${feature}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-top: 30px; font-size: 12px; color: #6b7280;">
          <p>Cet email a été envoyé automatiquement depuis votre site web BTOV Développement.</p>
        </div>
      </div>
    `;

    console.log('Attempting to send email to:', to);
    console.log('Email content:', emailContent);

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [to],
      subject: subject,
      text: emailContent,
      html: htmlContent,
    });

    console.log('Email sent successfully:', result);

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    return NextResponse.json(
      { error: 'Error sending email', details: error },
      { status: 500 }
    );
  }
}
