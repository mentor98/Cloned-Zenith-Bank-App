import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    activities: [
      { title: 'Modify Address', date: 'August 19, 2021' },
      { title: 'Statement Request', date: 'August 19, 2021' },
    ],
  });
}
