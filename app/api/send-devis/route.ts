import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Log the data for debugging
    console.log('Received data:', data);

    // For now, just return success without sending email
    return NextResponse.json({ 
      success: true,
      message: 'Request received successfully',
      data: data 
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
