# API Integration

The Crypto Price Tracker uses the CoinGecko API to fetch real-time cryptocurrency data. This document explains how the API integration is implemented.

## CoinGecko API

We use the public CoinGecko API v3, which provides cryptocurrency market data. The API is free to use and doesn't require authentication for basic endpoints.

### API Endpoint

The main endpoint we use is:
```
https://api.coingecko.com/api/v3/coins/markets
```

### Implementation

The API integration is implemented in `src/lib/api.ts`:

```typescript
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
  const response = await fetch(
    `${COINGECKO_API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch crypto prices');
  }

  return response.json();
}
```

## Data Fetching Strategy

### React Query Integration

We use React Query for data fetching and caching. The implementation in `page.tsx`:

```typescript
const { data: cryptos, isLoading, isError, refetch } = useQuery({
  queryKey: ['cryptoPrices'],
  queryFn: fetchCryptoPrices,
  refetchInterval: 30000, // Refetch every 30 seconds
});
```

### Features

1. **Automatic Refetching**: Data is automatically refetched every 30 seconds
2. **Manual Refresh**: Users can trigger a manual refresh using the refresh button
3. **Loading States**: Loading and error states are handled appropriately
4. **Caching**: React Query automatically caches the responses

## Error Handling

The application implements comprehensive error handling:

1. **Network Errors**: Caught and displayed to the user
2. **API Errors**: HTTP error responses are handled appropriately
3. **Loading States**: Users are informed when data is being fetched

## Rate Limiting

The CoinGecko API has rate limits for free tier usage. Our implementation:

1. Uses appropriate refetch intervals to avoid hitting rate limits
2. Implements error handling for rate limit responses
3. Provides feedback to users when rate limits are hit
