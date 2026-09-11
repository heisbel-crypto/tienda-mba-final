import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const orderData = {
      orderId: formData.get('orderId'),
      clientName: formData.get('clientName'),
      clientPhone: formData.get('clientPhone'),
      paymentMethod: formData.get('paymentMethod'),
      reference: formData.get('reference'),
      totalUSD: formData.get('totalUSD'),
      totalVES: formData.get('totalVES'),
      items: JSON.parse(formData.get('items') as string),
      status: 'Pending Validation',
      createdAt: new Date().toISOString(),
    };

    const receiptFile = formData.get('receipt') as File | null;
    if (receiptFile) {
      console.log(`Receipt received for Order ${orderData.orderId}: ${receiptFile.name}`);
    }

    return NextResponse.json(
      { message: 'Order created successfully', order: orderData },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to process order', error },
      { status: 500 }
    );
  }
}