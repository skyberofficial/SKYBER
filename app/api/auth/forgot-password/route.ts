import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // TODO: Implement actual email sending logic
    // This is just a mock implementation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "Password reset instructions sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in forgot password:', error);
    return NextResponse.json(
      { message: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
} 