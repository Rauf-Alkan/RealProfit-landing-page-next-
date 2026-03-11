import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, store } = await req.json();

    // API key yoksa sadece log at, build patlamasın
    if (!process.env.RESEND_API_KEY) {
      console.log('Early access form submission:', { name, email, store });
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: 'DeclineShield <onboarding@resend.dev>',
      to: 'alkanrauf6608@gmail.com',
      subject: 'Yeni Kayıt: ' + name,
      html: `
        <h1>Yeni DeclineShield Kaydı</h1>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Mağaza:</strong> ${store}</p>
        <p>Bu kişi DeclineShield erken erişim listesine katıldı.</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'E-posta gönderilemedi' }, { status: 500 });
  }
}