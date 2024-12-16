import { NextResponse } from 'next/server';

interface DevisRequest {
  id: string;
  date: string;
  status: 'pending' | 'sent' | 'converted';
  formData: {
    companyName: string;
    contactName: string;
    address: string;
    clientEmail: string;
    clientPhone: string;
    projectDescription: string;
  };
  serviceTitle: string;
  basePrice: number;
  features: string[];
  finalPrice?: number;
}

// Simuler une base de données pour l'exemple
// Dans un vrai projet, utilisez une vraie base de données
const devisRequests: DevisRequest[] = [];

export async function GET() {
  return NextResponse.json(devisRequests);
}

export async function POST(request: Request) {
  const data = await request.json();
  const newRequest: DevisRequest = {
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
    status: status as DevisRequest['status']
  };

  return NextResponse.json(devisRequests[requestIndex]);
}
