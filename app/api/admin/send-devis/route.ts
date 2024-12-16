import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { clientEmail, finalPrice } = await request.json();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">Votre devis BTOV Développement</h1>
        
        <p>Bonjour,</p>
        
        <p>Nous avons le plaisir de vous faire parvenir votre devis en pièce jointe.</p>
        
        <p>Le montant total de la prestation s'élève à ${finalPrice}€ TTC.</p>
        
        <p>Pour accepter ce devis, merci de nous le retourner signé avec la mention "Bon pour accord".</p>
        
        <p>N'hésitez pas à nous contacter si vous avez des questions.</p>
        
        <p style="margin-top: 30px;">Cordialement,<br>L'équipe BTOV Développement</p>
      </div>
    `;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [clientEmail],
      subject: 'Votre devis BTOV Développement',
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending devis:', error);
    return NextResponse.json(
      { error: 'Error sending devis' },
      { status: 500 }
    );
  }
}
