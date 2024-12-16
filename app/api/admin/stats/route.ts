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

// Dans un vrai projet, ces données viendraient d'une base de données
const devisRequests: DevisRequest[] = [];

export async function GET() {
  const stats = {
    totalCount: devisRequests.length,
    pendingCount: devisRequests.filter(d => d.status === 'pending').length,
    sentCount: devisRequests.filter(d => d.status === 'sent').length,
    convertedCount: devisRequests.filter(d => d.status === 'converted').length,
    averageAmount: devisRequests.reduce((acc, curr) => acc + (curr.finalPrice || 0), 0) / 
                  devisRequests.filter(d => d.finalPrice).length || 0,
    conversionRate: (devisRequests.filter(d => d.status === 'converted').length / 
                    Math.max(devisRequests.filter(d => d.status === 'sent').length, 1)) * 100
  };

  return NextResponse.json(stats);
}
