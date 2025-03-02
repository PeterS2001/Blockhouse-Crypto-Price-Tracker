# Project Structure

The Crypto Price Tracker project is organized into two main parts: the web application and the documentation.

## Web Application Structure

```
web-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout component
│   │   ├── page.tsx      # Main page component
│   │   ├── providers.tsx # React Query provider
│   │   └── globals.css   # Global styles
│   ├── components/
│   │   ├── CryptoCard.tsx   # Cryptocurrency card component
│   │   └── SearchBar.tsx    # Search functionality component
│   └── lib/
│       └── api.ts           # API integration functions
├── package.json
├── tsconfig.json
├── next.config.js
├── postcss.config.js
└── tailwind.config.js
```

## Documentation Structure

```
docs/
├── docs/
│   ├── intro.md
│   ├── installation.md
│   ├── project-structure.md
│   ├── api-integration.md
│   ├── state-management.md
│   └── challenges.md
├── src/
│   └── css/
│       └── custom.css
├── static/
│   └── img/
├── docusaurus.config.js
├── sidebars.js
└── package.json
```

## Key Components

### Web Application

- **layout.tsx**: Root layout component that includes global providers and styles
- **page.tsx**: Main page component that implements the cryptocurrency dashboard
- **CryptoCard.tsx**: Component for displaying individual cryptocurrency information
- **SearchBar.tsx**: Component for filtering cryptocurrencies
- **api.ts**: Contains functions for interacting with the CoinGecko API

### Documentation

- **intro.md**: Introduction and overview of the project
- **installation.md**: Setup and installation instructions
- **project-structure.md**: This file, explaining the project organization
- **api-integration.md**: Details about the CoinGecko API integration
- **state-management.md**: Explanation of state management with React Query
- **challenges.md**: Discussion of challenges faced and solutions implemented
