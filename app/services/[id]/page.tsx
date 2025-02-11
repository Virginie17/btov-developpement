import { services } from '@/data/services';
import { getServiceDetail } from '@/data/api';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await getServiceDetail(params.id);
  if (!service) return { title: 'Service non trouvé' };

  return {
    title: service.title,
    description: service.fullDescription,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default async function ServicePage({ params }: Props) {
  const serviceDetail = await getServiceDetail(params.id);

  if (!serviceDetail) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{serviceDetail.title}</h1>
      <p className="text-xl mb-8">{serviceDetail.fullDescription}</p>

      {/* Processus */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Notre processus</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {serviceDetail.process.map((step, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{step.step}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Témoignages */}
      <div className="bg-primary/5 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Témoignages clients</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {serviceDetail.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <p className="italic mb-4">"{testimonial.content}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tarifs */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Nos tarifs</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Basique</h3>
            <p className="text-2xl font-bold text-primary">{serviceDetail.pricing.basic}</p>
          </div>
          <div className="p-4 border rounded-lg bg-primary/5">
            <h3 className="text-lg font-semibold mb-2">Premium</h3>
            <p className="text-2xl font-bold text-primary">{serviceDetail.pricing.premium}</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
            <p className="text-2xl font-bold text-primary">{serviceDetail.pricing.enterprise}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
