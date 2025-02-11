import { projects } from '@/data/portfolio';
import { getProjectDetail } from '@/data/api';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectDetail(params.id);
  if (!project) return { title: 'Projet non trouvé' };

  return {
    title: project.title,
    description: project.fullDescription,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const projectDetail = await getProjectDetail(params.id);

  if (!projectDetail) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{projectDetail.title}</h1>
        <p className="text-xl mb-8">{projectDetail.fullDescription}</p>

        {/* Challenge et Solution */}
        <div className="grid gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Le Challenge</h2>
            <p className="text-gray-700">{projectDetail.challenge}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Notre Solution</h2>
            <p className="text-gray-700">{projectDetail.solution}</p>
          </div>
        </div>

        {/* Résultats */}
        <div className="bg-primary/5 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Résultats</h2>
          <ul className="space-y-4">
            {projectDetail.results.map((result, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                {result}
              </li>
            ))}
          </ul>
        </div>

        {/* Témoignage client */}
        {projectDetail.clientTestimonial && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="relative pl-8">
              <span className="absolute left-0 top-0 text-4xl text-primary">"</span>
              <p className="text-lg italic mb-4">{projectDetail.clientTestimonial.content}</p>
              <div>
                <p className="font-semibold">{projectDetail.clientTestimonial.author}</p>
                <p className="text-sm text-gray-600">{projectDetail.clientTestimonial.position}</p>
              </div>
            </div>
          </div>
        )}

        {/* Détails techniques */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Stack Technique</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-3">Frontend</h3>
              <ul className="space-y-2">
                {projectDetail.technicalDetails.frontend.map((tech, index) => (
                  <li key={index} className="text-gray-700">{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Backend</h3>
              <ul className="space-y-2">
                {projectDetail.technicalDetails.backend.map((tech, index) => (
                  <li key={index} className="text-gray-700">{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Déploiement</h3>
              <ul className="space-y-2">
                {projectDetail.technicalDetails.deployment.map((tech, index) => (
                  <li key={index} className="text-gray-700">{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
