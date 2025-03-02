# Crypto Price Tracker

A comprehensive cryptocurrency price tracking application built with Next.js and documented with Docusaurus. This project was created as part of the Blockhouse work trial assessment.

## Project Structure

The project consists of two main parts:
- `/web-app`: Next.js application for the crypto price tracker
- `/docs`: Docusaurus documentation site

## Features

- Real-time cryptocurrency price tracking
- Search functionality for filtering cryptocurrencies
- Manual refresh capability
- Responsive design for both web and mobile
- Comprehensive documentation

## API Integration

The application uses the CoinGecko public API's free tier to fetch cryptocurrency data. The implementation includes:
- Automatic updates every 60 seconds
- Smart caching to avoid rate limits
- Error handling for rate limit cases
- Responsive error messages

## Quick Start

### Web App Setup
1. Navigate to the web-app directory:
   ```bash
   cd web-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Documentation Setup
1. Navigate to the docs directory:
   ```bash
   cd docs
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the documentation server:
   ```bash
   npm run start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technology Stack

- **Frontend**: Next.js 14
- **State Management**: React Query
- **API**: CoinGecko (Free Tier)
- **Documentation**: Docusaurus
- **Styling**: Tailwind CSS
- **Type Safety**: TypeScript

## License

MIT
