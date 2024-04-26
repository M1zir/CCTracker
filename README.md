# CC Price Tracker Project Documentation

## Overview
The CC Price Tracker is a web application designed to provide real-time cryptocurrency price tracking. It utilizes the Binance WebSocket API to fetch live data and displays it using a responsive web interface.

## Key Features
- Real-time cryptocurrency price updates.
- Detailed price history charts.
- Responsive design for various devices.

## APIs Used
1. **Binance WebSocket API**: Used for real-time price updates.
3. **CoinGecko** free api for price history and trends
2. **Custom API Endpoints** ([src/Api/cryptoApi.ts](file:///c%3A/Users/Abubakr/Documents/Price%20Tracker%20Task/Price-tracker/src/Api/cryptoApi.ts#1%2C1-1%2C1)): Handles data formatting and image retrieval for different cryptocurrencies.

## Styling

1. **TailwindCss**
2. **shadcn Ui**: Used for Beeatiful REsponsive components
## Folder Structure
- [src/](file:///c%3A/Users/Abubakr/Documents/Price%20Tracker%20Task/Price-tracker/index.html#5%2C47-5%2C47): Source files for the application.
  - [Api/](file:///c%3A/Users/Abubakr/Documents/Price%20Tracker%20Task/Price-tracker/src/contexts/CryptoContext.tsx#2%2C55-2%2C55): Contains API-related functions.
  - [assets/](file:///c%3A/Users/Abubakr/Documents/Price%20Tracker%20Task/Price-tracker/index.html#5%2C51-5%2C51): Static files like images and SVGs.
  - [components/](file:///c%3A/Users/Abubakr/Documents/Price%20Tracker%20Task/Price-tracker/src/pages/home.tsx#1%2C30-1%2C30): React components used across the application.
  - [contexts/](file:///c%3A/Users/Abubakr/Documents/Price%20Tracker%20Task/Price-tracker/src/App.tsx#8%2C35-8%2C35): React context providers for global state management.
  - [pages/](file:///c%3A/Users/Abubakr/Documents/Price%20Tracker%20Task/Price-tracker/src/App.tsx#3%2C21-3%2C21): React components representing pages.
- [styles/](file:///c%3A/Users/Abubakr/Documents/Price%20Tracker%20Task/Price-tracker/components.json#8%2C13-8%2C13): Contains global CSS files.

## Key Files
- [src/main.tsx](file:///c%3A/Users/Abubakr/Documents/Price%20Tracker%20Task/Price-tracker/src/main.tsx#1%2C1-1%2C1): Entry point for the React application.
- [src/App.tsx](file:///c%3A/Users/Abubakr/Documents/Price%20Tracker%20Task/Price-tracker/src/App.tsx#1%2C1-1%2C1): Sets up routing and global providers.
- [src/Api/cryptoApi.ts](file:///c%3A/Users/Abubakr/Documents/Price%20Tracker%20Task/Price-tracker/src/Api/cryptoApi.ts#1%2C1-1%2C1): Contains functions to interact with the Binance WebSocket API and manage cryptocurrency data.
- [src/pages/home.tsx](file:///c%3A/Users/Abubakr/Documents/Price%20Tracker%20Task/Price-tracker/src/pages/home.tsx#1%2C1-1%2C1): Home page displaying the cryptocurrency tracker.
- [src/pages/details.tsx](file:///c%3A/Users/Abubakr/Documents/Price%20Tracker%20Task/Price-tracker/src/pages/details.tsx#1%2C1-1%2C1): Details page showing historical data charts.

## User Interaction
Users navigate the application using a simple menu that directs them to either the Home Page or the Details Page. On the Home Page, users can view a list of cryptocurrencies and select one to view detailed information, including real-time and historical price data. This interaction is facilitated by React Router for seamless page transitions.

## Architectural Decisions
- **State Management**: Utilized React's Context API to manage global state across different components, particularly for tracking selected cryptocurrency data.
- **Component Structure**: Components are modularized to encapsulate specific functionalities, such as displaying price charts or handling user inputs, which promotes reusability and maintainability.

By enhancing these sections, the documentation now provides a clearer and more comprehensive understanding of the project's technical implementation and design choices.
## Setup and Running
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

This documentation provides a concise overview of the CC Price Tracker project, its structure, and how to get started with development.
