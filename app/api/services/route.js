import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    services: [
      'Home',
      'Pay Bills',
      'Airtime',
      'Transfer',
      'Cards',
      'Locate Us',
      'Manage Beneficiaries',
      'Forex',
      'Product & Services',
      'Personal Finance Manager',
      'LifeStyle',
      'Settings',
      'Alerts',
      'QR Payments',
      'Profile',
      'Upcoming Payment',
    ],
  });
}
