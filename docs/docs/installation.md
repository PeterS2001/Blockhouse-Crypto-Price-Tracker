# Installation

This guide will help you set up and run the Crypto Price Tracker application locally.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setting Up the Web Application

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crypto-price-tracker.git
   cd crypto-price-tracker
   ```

2. Install dependencies:
   ```bash
   cd web-app
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Setting Up the Documentation

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

4. Open your browser and navigate to `http://localhost:3000`

## Development Environment

The project uses the following development tools:

- Next.js for the web application
- React Query for state management
- Tailwind CSS for styling
- TypeScript for type safety
- Docusaurus for documentation

## Building for Production

To build the web application for production:

```bash
cd web-app
npm run build
```

To build the documentation for production:

```bash
cd docs
npm run build
```
