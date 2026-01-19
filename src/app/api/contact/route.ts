import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, service, message, gdprConsent } = body;

    // Validation
    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, error: 'Name must be at least 2 characters' },
        { status: 400 }
      );
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    if (!service) {
      return NextResponse.json(
        { success: false, error: 'Please select a service' },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    if (!gdprConsent) {
      return NextResponse.json(
        { success: false, error: 'Please accept the GDPR consent' },
        { status: 400 }
      );
    }

    // Save to database
    const submission = await db.contactSubmission.create({
      data: {
        name,
        email,
        service,
        message,
        gdprConsent: Boolean(gdprConsent)
      }
    });

    // Send email notification
    try {
      // In a production environment, you would use:
      // - Resend, SendGrid, AWS SES, or another email service
      // - For now, we'll log the email content (you can replace this with actual email sending)
      console.log('=== NEW CONTACT FORM SUBMISSION ===');
      console.log(`From: ${name} <${email}>`);
      console.log(`Service: ${service}`);
      console.log(`Message: ${message}`);
      console.log(`GDPR Consent: ${gdprConsent}`);
      console.log('=== END SUBMISSION ===\n');

      // TODO: Uncomment and configure your email service
      // Example with Resend:
      /*
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'no-reply@gurujitechglobal.com',
        to: 'contact@gurujitechglobal.com',
        subject: `New Contact Form Submission - ${service}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <p><strong>GDPR Consent:</strong> ${gdprConsent ? 'Yes' : 'No'}</p>
        `
      });
      */
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Don't fail the request if email fails, just log it
    }

    return NextResponse.json({
      success: true,
      data: {
        id: submission.id,
        message: 'Contact form submitted successfully'
      }
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
