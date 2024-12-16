import { NextResponse } from 'next/server';

// Simuler une base de données pour l'exemple
// Dans un vrai projet, utilisez une vraie base de données
let devisRequests: any[] = [];

export async function GET() {
  return NextResponse.json(devisRequests);
}

export async function POST(request: Request) {
  const data = await request.json();
  const newRequest = {
    id: Date.now().toString(),
    date: new Date().toISOString(),
    status: 'pending',
    ...data
  };
  
  devisRequests.push(newRequest);
  return NextResponse.json(newRequest);
}

export async function PATCH(request: Request) {
  const { id, status } = await request.json();
  const requestIndex = devisRequests.findIndex(req => req.id === id);
  
  if (requestIndex === -1) {
    return NextResponse.json({ error: 'Request not found' }, { status: 404 });
  }

  devisRequests[requestIndex] = {
    ...devisRequests[requestIndex],
    status
  };

  return NextResponse.json(devisRequests[requestIndex]);
}
