import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, code } = await req.json();

    // TODO: Implement actual verification logic
    // This is just a mock implementation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock validation - in production, verify against stored codes
    if (code === "123456") {
      return NextResponse.json(
        { message: "Code verified successfully" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Invalid verification code" },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error in verify reset code:', error);
    return NextResponse.json(
      { message: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
} 