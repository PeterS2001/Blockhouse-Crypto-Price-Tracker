'use client'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { CryptoCard } from '@/components/CryptoCard'
import { SearchBar } from '@/components/SearchBar'
import { fetchCryptoPrices } from '@/lib/api'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const { data: cryptos = [], isLoading, isError, refetch } = useQuery({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCryptoPrices,
    refetchInterval: 60000, // Increased to 60 seconds to avoid rate limits
    retry: 2,
    staleTime: 30000, // Data considered fresh for 30 seconds
  })

  const filteredCryptos = cryptos.filter(crypto =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Crypto Price Tracker</h1>
        
        <div className="flex justify-between items-center mb-6">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Refresh
          </button>
        </div>

        {isLoading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          </div>
        )}

        {isError && (
          <div className="text-center text-red-500 py-8">
            Error loading cryptocurrency data. Please try again in a minute.
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredCryptos.map(crypto => (
            <CryptoCard key={crypto.id} crypto={crypto} />
          ))}
          {filteredCryptos.length === 0 && !isLoading && !isError && (
            <div className="col-span-full text-center text-gray-500">
              No cryptocurrencies found matching your search.
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
