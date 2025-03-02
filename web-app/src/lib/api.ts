const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

export async function fetchCryptoPrices(): Promise<CryptoData[]> {
  try {
    const response = await fetch(
      `${COINGECKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`,
      {
        headers: {
          'Accept': 'application/json',
        },
        next: {
          revalidate: 60 // Increased cache time to avoid rate limits
        }
      }
    );
    
    if (!response.ok) {
      if (response.status === 429) {
        throw new Error('Rate limit reached. Please try again in a minute.');
      }
      throw new Error(`Failed to fetch crypto prices: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    throw error;
  }
}
