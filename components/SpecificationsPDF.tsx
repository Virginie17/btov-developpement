'use client';
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface IFormInputs {
  projectName: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  projectDescription: string;
  deadline: string;
  budget: string;
}

const schema = yup.object({
  projectName: yup.string().required('Le nom du projet est requis'),
  companyName: yup.string().required('Le nom de l\'entreprise est requis'),
  contactName: yup.string().required('Le nom du contact est requis'),
  email: yup.string().email('Email invalide').required('L\'email est requis'),
  phone: yup.string().required('Le téléphone est requis'),
  projectDescription: yup.string().required('La description du projet est requise'),
  deadline: yup.string().required('La date limite est requise'),
  budget: yup.string().required('Le budget est requis')
}).required()

export default function SpecificationsPDF() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      const response = await fetch('/api/send-specifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert('Votre cahier des charges a été envoyé avec succès!')
      } else {
        throw new Error('Erreur lors de l\'envoi')
      }
    } catch (error) {
      alert('Une erreur est survenue lors de l\'envoi du formulaire')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nom du projet</label>
        <input
          type="text"
          {...register('projectName')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.projectName && <p className="text-red-500 text-sm mt-1">{errors.projectName.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Nom de l'entreprise</label>
        <input
          type="text"
          {...register('companyName')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Nom du contact</label>
        <input
          type="text"
          {...register('contactName')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.contactName && <p className="text-red-500 text-sm mt-1">{errors.contactName.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register('email')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Téléphone</label>
        <input
          type="tel"
          {...register('phone')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description du projet</label>
        <textarea
          {...register('projectDescription')}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.projectDescription && <p className="text-red-500 text-sm mt-1">{errors.projectDescription.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Date limite souhaitée</label>
        <input
          type="date"
          {...register('deadline')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.deadline && <p className="text-red-500 text-sm mt-1">{errors.deadline.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Budget estimé</label>
        <input
          type="text"
          {...register('budget')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Envoyer le cahier des charges
        </button>
      </div>
    </form>
  )
}