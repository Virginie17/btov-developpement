'use client'

import { useState, useEffect } from 'react'

export default function DevisTemplate() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const auth = localStorage.getItem('devisAuth')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mot de passe pour accéder au template de devis
    if (password === 'Lucas@050204') {
      setIsAuthenticated(true)
      localStorage.setItem('devisAuth', 'true')
      setError('')
    } else {
      setError('Mot de passe incorrect')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Accès au devis</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Accéder au devis
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 bg-gray-100 flex justify-end">
        <button
          onClick={() => {
            localStorage.removeItem('devisAuth')
            setIsAuthenticated(false)
          }}
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
        >
          Se déconnecter
        </button>
      </div>
      <iframe 
        src="/devis_template.html" 
        className="w-full h-[calc(100vh-4rem)] border-0"
        title="Modèle de devis"
      />
    </div>
  )
}
