import { NextResponse } from 'next/server';

export async function GET() {
  // Dans un vrai projet, ces données viendraient d'une base de données
  const devisRequests = []; // Remplacer par les vraies données

  const stats = {
    totalCount: devisRequests.length,
    pendingCount: devisRequests.filter(d => d.status === 'pending').length,
    sentCount: devisRequests.filter(d => d.status === 'sent').length,
    convertedCount: devisRequests.filter(d => d.status === 'converted').length,
    averageAmount: devisRequests.reduce((acc, curr) => acc + (curr.finalPrice || 0), 0) / 
                  devisRequests.filter(d => d.finalPrice).length || 0,
    conversionRate: (devisRequests.filter(d => d.status === 'converted').length / 
                    devisRequests.filter(d => d.status === 'sent').length) * 100 || 0
  };

  return NextResponse.json(stats);
}
