import { NextResponse } from "next/server";
import { Resend } from "resend";
import { hospital } from "@/lib/data";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, phone, message } = await request.json();

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: `Vivarch Hospital Website <enquiries@${process.env.RESEND_EMAIL_DOMAIN}>`,
    to: [hospital.email],
    subject: `Appointment Enquiry from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message || "—"}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send enquiry." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
