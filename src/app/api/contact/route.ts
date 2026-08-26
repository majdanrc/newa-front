import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Wszystkie pola są wymagane." },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: "Kino Newa <onboarding@resend.dev>",
      // TODO: zmienić na kontakt@kinonewa.pl po weryfikacji domeny kinonewa.pl w Resend
      to: "radostrc@gmail.com",
      replyTo: email,
      subject: `[Formularz kontaktowy] ${subject}`,
      text: `Od: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      return NextResponse.json(
        { error: "Nie udało się wysłać wiadomości." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Nie udało się wysłać wiadomości." },
      { status: 500 }
    );
  }
}
