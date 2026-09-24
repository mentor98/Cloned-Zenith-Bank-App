import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const payload = await request.json();
    if (!payload?.username || !payload?.password) {
      return NextResponse.json(
        { detail: 'Username and password are required' },
        { status: 400 }
      );
    }
    return NextResponse.json({
      authenticated: true,
      user: { name: payload.username },
      issued_at: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { detail: 'Username and password are required' },
      { status: 400 }
    );
  }
}
