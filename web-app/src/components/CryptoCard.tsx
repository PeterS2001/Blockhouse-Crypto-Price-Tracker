'use client'

import { CryptoData } from '@/lib/api';

interface CryptoCardProps {
  crypto: CryptoData;
}

export function CryptoCard({ crypto }: CryptoCardProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{crypto.name}</h3>
          <p className="text-gray-500 uppercase">{crypto.symbol}</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold">${crypto.current_price.toLocaleString()}</p>
          <p className={`text-sm ${crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {crypto.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-600">
          Market Cap: ${crypto.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
