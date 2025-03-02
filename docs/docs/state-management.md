# State Management

This document explains our choice of React Query for state management and how it's implemented in the Crypto Price Tracker.

## Why React Query?

We chose React Query for several reasons:

1. **Built for API Data**: React Query is specifically designed for managing, caching, and synchronizing server state.

2. **Automatic Background Updates**: Provides built-in support for periodic refetching, which is crucial for a price tracker.

3. **Caching and Stale Data Handling**: Sophisticated caching system that helps maintain data freshness while minimizing API calls.

4. **Loading and Error States**: Built-in handling of loading, error, and success states.

## Implementation

### Query Client Setup

The Query Client is set up in `src/app/providers.tsx`:

```typescript
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
```

### Data Fetching

In `src/app/page.tsx`, we implement the main query:

```typescript
const { data: cryptos, isLoading, isError, refetch } = useQuery({
  queryKey: ['cryptoPrices'],
  queryFn: fetchCryptoPrices,
  refetchInterval: 30000, // Refetch every 30 seconds
})
```

### Local State Management

For UI-specific state (like search terms), we use React's built-in useState:

```typescript
const [searchTerm, setSearchTerm] = useState('')
```

## Benefits of Our Approach

1. **Separation of Concerns**
   - Server state managed by React Query
   - UI state managed by React's useState
   - Clear distinction between data types

2. **Optimized Performance**
   - Efficient caching reduces unnecessary API calls
   - Automatic background updates
   - Minimal component re-renders

3. **Developer Experience**
   - Predictable data flow
   - Built-in TypeScript support
   - Easy to debug and maintain

4. **User Experience**
   - Real-time data updates
   - Smooth loading states
   - Responsive UI
