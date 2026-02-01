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
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Appointment Confirmation</title>
    <style>
      /* Simple responsive tweaks for mobile email clients */
      @media only screen and (max-width:480px){
        .container { padding:16px !important; }
        .inner { padding:18px !important; }
        .h1 { font-size:20px !important; }
        .p { font-size:14px !important; }
        .details td { display:block !important; width:100% !important; box-sizing:border-box; }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background:#f5f7fa; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:100%;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fa; width:100%;">
      <tr>
        <td align="center" style="padding:30px;">
          <table role="presentation" class="container" width="650" cellpadding="0" cellspacing="0" style="width:100%; max-width:650px; background:#ffffff; border-radius:10px; border:1px solid #e5e7eb; overflow:hidden;">
            <!-- Header -->
            <tr>
              <td style="background:#0a1a2b; padding:22px 24px; text-align:left;">
                <h1 class="h1" style="color:#ffffff; margin:0; font-size:22px; font-weight:600;">Appointment Confirmation</h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td class="inner" style="padding:28px 30px;">
                <p class="p" style="margin:0 0 12px 0; color:#333; font-size:15px; line-height:1.6;">Dear <strong>${name}</strong>,</p>

                <p class="p" style="margin:0 0 18px 0; color:#444; font-size:15px; line-height:1.7;">
                  Your appointment has been scheduled at <strong>Malot Dental Clinic</strong>. Below are your appointment details.
                </p>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:12px; border-collapse:collapse;">
                  <tr>
                    <td style="padding:12px; background:#f7f9fc; border:1px solid #e1e5eb; border-radius:8px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="details" style="width:100%;">
                        <tr>
                          <td style="padding:6px 0; color:#333; font-size:15px; width:35%; font-weight:600;">Date</td>
                          <td style="padding:6px 0; color:#333; font-size:15px;">${date}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0; color:#333; font-size:15px; font-weight:600;">Time</td>
                          <td style="padding:6px 0; color:#333; font-size:15px;">${time}</td>
                        </tr>
                        <tr>
                          <td style="padding:6px 0; color:#333; font-size:15px; font-weight:600;">Location</td>
                          <td style="padding:6px 0; color:#333; font-size:15px;">Malot Dental Clinic, Udaipur</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <p style="margin:18px 0 0 0; font-size:14px; color:#555; line-height:1.6;">
                  If you need to reschedule or have any questions, email us at
                  <strong style="color:#000">drmalotdentalclinic@gmail.com</strong> or call <strong style="color:#000">+91 77420 36693</strong>.
                </p>

                <p style="margin:20px 0 0 0; font-size:15px; color:#333;">
                  Sincerely,<br/>
                  <strong>Malot Dental Clinic</strong>
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f1f3f5; padding:14px 18px; font-size:12px; color:#888;">
                This is an automated confirmation email. Please do not reply directly to this message.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
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
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>New Appointment Request</title>
    <style>
      @media only screen and (max-width:480px){
        .container { padding:12px !important; }
        .inner { padding:16px !important; }
        .h1 { font-size:18px !important; }
        .p { font-size:14px !important; }
        .row td { display:block !important; width:100% !important; box-sizing:border-box; }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background:#f5f7fa; font-family:Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fa; width:100%;">
      <tr>
        <td align="center" style="padding:30px;">
          <table role="presentation" class="container" width="650" cellpadding="0" cellspacing="0" style="width:100%; max-width:650px; background:#ffffff; border-radius:10px; border:1px solid #e5e7eb; overflow:hidden;">
            <!-- Header -->
            <tr>
              <td style="background:#0a1a2b; padding:22px 24px; text-align:left;">
                <h1 class="h1" style="color:#ffffff; margin:0; font-size:20px; font-weight:600;">New Appointment Request</h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td class="inner" style="padding:22px 26px;">
                <p style="margin:0 0 12px 0; color:#444; font-size:15px;">
                  A new appointment request has been submitted. Details are below.
                </p>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px; border-collapse:collapse;">
                  <tr class="row">
                    <td style="padding:10px 0; color:#555; font-weight:600; width:35%;">Full Name</td>
                    <td style="padding:10px 0; color:#333;">${name}</td>
                  </tr>
                  <tr class="row">
                    <td style="padding:10px 0; color:#555; font-weight:600;">Email Address</td>
                    <td style="padding:10px 0; color:#333;">${email}</td>
                  </tr>
                  <tr class="row">
                    <td style="padding:10px 0; color:#555; font-weight:600;">Phone Number</td>
                    <td style="padding:10px 0; color:#333;">${phone}</td>
                  </tr>
                  <tr class="row">
                    <td style="padding:10px 0; color:#555; font-weight:600;">Preferred Date</td>
                    <td style="padding:10px 0; color:#333;">${date}</td>
                  </tr>
                  <tr class="row">
                    <td style="padding:10px 0; color:#555; font-weight:600;">Preferred Time</td>
                    <td style="padding:10px 0; color:#333;">${time}</td>
                  </tr>
                </table>

                <p style="margin-top:18px; font-size:14px; color:#666;">
                  Please review and contact the patient to confirm the appointment.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f1f3f5; padding:14px 18px; font-size:12px; color:#888;">
                This is an automated message from Malot Dental Clinic’s Appointment System.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Error sending email" },
      { status: 500 },
    );
  }
}
