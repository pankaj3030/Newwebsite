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

    // TODO: Send email notification to contact@gurujitechglobal.com
    // You can use z-ai-web-dev-sdk or any email service here

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
