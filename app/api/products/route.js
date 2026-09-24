import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    products: [
      'Open Additional Account',
      'Request Loan',
      'Cheques',
      'Bank Draft Request',
      'My Bank Statement',
      'Dubai Visa',
      'Manage Transfer Limits',
    ],
  });
}
