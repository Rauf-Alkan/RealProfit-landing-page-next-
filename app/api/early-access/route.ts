// src/app/api/early-access/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    const data = await resend.emails.send({
      from: 'Real Profit <onboarding@resend.dev>', // Domain bağlayınca burayı güncellersin
      to: 'alkanrauf6608@gmail.com',
      subject: 'Yeni Ön Satış Kaydı: ' + name,
      html: `
        <h1>Yeni Kayıt Bilgileri</h1>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p>Bu kişi Shopify App ön satış listesine katıldı.</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: "E-posta gönderilemedi" }, { status: 500 });
  }
}