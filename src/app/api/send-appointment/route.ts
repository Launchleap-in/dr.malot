import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, date, time } = body as {
      name: string;
      email: string;
      phone: string;
      date: string;
      time: string;
    };

    // Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER!,
        pass: process.env.MAIL_PASS!,
      },
    });

    // Email to ADMIN
    await transporter.sendMail({
      from: `"Malot Dental Clinic"
<${process.env.MAIL_USER}>`,
      to: email,
      subject: `Appointment Confirmation -
${date}`,
      html: `
<div
  style="
    font-family: Arial, Helvetica, sans-serif;
    background: #f5f7fa;
    padding: 30px;
  "
>
  <div
    style="
      max-width: 650px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 10px;
      border: 1px solid #e5e7eb;
    "
  >
    <!-- Header -->
    <div
      style="
        background: #0a1a2b;
        padding: 25px 30px;
        border-radius: 10px 10px 0 0;
      "
    >
      <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600">
        Appointment Confirmation
      </h2>
    </div>

    <!-- Body -->
    <div style="padding: 30px">
      <p style="font-size: 15px; color: #333; line-height: 1.6">
        Dear <strong>${name}</strong>,
      </p>

      <p style="font-size: 15px; color: #444; line-height: 1.7">
        This email is to confirm that your appointment has been successfully
        scheduled at <strong>Malot Dental Clinic</strong>. The details of your
        appointment are as follows:
      </p>

      <div
        style="
          margin-top: 25px;
          padding: 20px;
          background: #f7f9fc;
          border: 1px solid #e1e5eb;
          border-radius: 10px;
        "
      >
        <p style="margin: 6px 0; font-size: 15px; color: #333">
          <strong>Date:</strong> ${date}
        </p>
        <p style="margin: 6px 0; font-size: 15px; color: #333">
          <strong>Time:</strong> ${time}
        </p>
        <p style="margin: 6px 0; font-size: 15px; color: #333">
          <strong>Location:</strong> Malot Dental Clinic, Udaipur
        </p>
      </div>

      <p
        style="margin-top: 20px; font-size: 14px; color: #555; line-height: 1.6"
      >
        If you have any questions or if you would like to reschedule your
        appointment, you may reach us at
        <b style="color: #000">drmalotdentalclinic@gmail.com </b>
        or call us at
        <b style="color: #000">+91 77420 36693</b>.
      </p>

      <p style="margin-top: 30px; font-size: 15px; color: #333">
        Sincerely,<br />
        <strong>Malot Dental Clinic</strong>
      </p>
    </div>

    <!-- Footer -->
    <div
      style="
        background: #f1f3f5;
        padding: 15px 25px;
        font-size: 12px;
        color: #888;
        border-radius: 0 0 10px 10px;
      "
    >
      This is an automated confirmation email. Please do not reply directly to
      this message.
    </div>
  </div>
</div>
`,
    });

    //send to
    await transporter.sendMail({
      from: `"Appointment System"
<${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO!,
      subject: `New Appointment
Request - ${name}`,
      html: `
<div
  style="
    font-family: Arial, Helvetica, sans-serif;
    background: #f5f7fa;
    padding: 30px;
  "
>
  <div
    style="
      max-width: 650px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 10px;
      border: 1px solid #e5e7eb;
    "
  >
    <!-- Header -->
    <div
      style="
        background: #0a1a2b;
        padding: 25px 30px;
        border-radius: 10px 10px 0 0;
      "
    >
      <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600">
        New Appointment Request
      </h2>
    </div>

    <!-- Body -->
    <div style="padding: 30px">
      <p style="font-size: 15px; color: #444">
        A new appointment request has been submitted. Below are the details:
      </p>

      <table style="width: 100%; margin-top: 20px; border-collapse: collapse">
        <tr>
          <td
            style="padding: 10px 0; color: #555; font-weight: 600; width: 35%"
          >
            Full Name
          </td>
          <td style="padding: 10px 0; color: #333">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #555; font-weight: 600">
            Email Address
          </td>
          <td style="padding: 10px 0; color: #333">${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #555; font-weight: 600">
            Phone Number
          </td>
          <td style="padding: 10px 0; color: #333">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #555; font-weight: 600">
            Preferred Date
          </td>
          <td style="padding: 10px 0; color: #333">${date}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #555; font-weight: 600">
            Preferred Time
          </td>
          <td style="padding: 10px 0; color: #333">${time}</td>
        </tr>
      </table>

      <p style="margin-top: 30px; font-size: 14px; color: #666">
        Kindly review the request and contact the patient to confirm their
        appointment.
      </p>
    </div>

    <!-- Footer -->
    <div
      style="
        background: #f1f3f5;
        padding: 15px 25px;
        font-size: 12px;
        color: #888;
        border-radius: 0 0 10px 10px;
      "
    >
      This is an automated message from Malot Dental Clinic’s Appointment
      System.
    </div>
  </div>
</div>
`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Error sending email" },
      { status: 500 }
    );
  }
}
