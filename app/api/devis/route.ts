import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { formData, serviceTitle } = await request.json();
    
    const { companyName, contactName, address, clientEmail, clientPhone, projectDescription } = formData;

    // Envoyer l'email
    const { data, error } = await resend.emails.send({
      from: 'B to V Développement <onboarding@resend.dev>',
      to: ['btovdeveloppement@gmail.com'],
      subject: `Nouvelle demande de devis - ${serviceTitle}`,
      html: `
        <h2>Nouvelle demande de devis pour ${serviceTitle}</h2>
        <h3>Informations du client :</h3>
        <ul>
          <li><strong>Entreprise :</strong> ${companyName}</li>
          <li><strong>Contact :</strong> ${contactName}</li>
          <li><strong>Adresse :</strong> ${address}</li>
          <li><strong>Email :</strong> ${clientEmail}</li>
          <li><strong>Téléphone :</strong> ${clientPhone}</li>
        </ul>
        <h3>Description du projet :</h3>
        <p>${projectDescription}</p>
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
