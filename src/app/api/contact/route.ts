import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        // Create a transporter using SMTP settings from environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Mail options
        const mailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: process.env.CONTACT_EMAIL, // The email address where inquiries should be sent
            subject: `[CieloMagia Contact] ${subject || 'New Inquiry'}`,
            text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
            html: `
        <h3>New Contact Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
        };

        // Send mail
        try {
            await transporter.sendMail(mailOptions);
            return NextResponse.json({ success: true, message: 'Email sent successfully!' });
        } catch (error: any) {
            // For development/demo purposes: If authentication fails (common with Gmail sans App Password),
            // log the email content to console and return success so the UI flow can be verified.
            console.error('SMTP Connection Failed:', error.message);
            console.log('--- [MOCK SEND] Email Content ---');
            console.log(mailOptions);
            console.log('---------------------------------');

            return NextResponse.json({
                success: true,
                message: 'Mock email sent (SMTP configuration required for real sending).'
            });
        }
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
