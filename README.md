# NFT Stats Dashboard

## Overview
This project is a simple React-based dashboard that displays various statistics about NFTs. It includes a bar chart that visualizes data and several informational panels that highlight key NFT metrics such as "Total Investment", "Weekly Returns", and "Expenses". The data is dynamically fetched from a JSON file.

## Features
- **Dark Mode Support**: Uses Tailwind CSS's darkMode: 'class' for theme switching.
- **Dynamic Data Fetching**: Fetches data from .json files and displays a list of data.
- Displays a bar chart for visualizing NFT-related data.
- Shows various statistics like total investment, weekly returns, and expenses.
- Uses responsive design to ensure the app looks good on all screen sizes.

## Tech Stack
- **React**: Frontend framework.
- **Chart.js**: For rendering interactive bar charts.
- **React Icons**: To include icons like Ethereum, Dollar Circle, and Calendar for the informational panels.
- **TailwindCSS**: Utility-first CSS framework for fast styling.
- **JavaScript (ES6+)**: The language for building the application.

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (preferably the latest LTS version).
- npm or yarn (for managing dependencies).

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nft-stats-dashboard.git
2. Navigate into the project directory:
   ```bash
   cd nft-stats-dashboard
3. Install dependencies: Using npm:
   ```bash
    npm install

4. Add the following vite.config.js to your project root:
   ```bash   
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import postcssTailwind from '@tailwindcss/postcss';
   import autoprefixer from 'autoprefixer';
   
   export default defineConfig({
     plugins: [react()],
     css: {
       postcss: {
         plugins: [postcssTailwind(), autoprefixer()],
       },
     },
   });


 5. Run the project: Using npm:
   ```bash
    npm start
```
This will start the development server and open the application in your browser (usually at http://localhost:3000).

## Project Structure
 ```bash
├── public/
    └── /images
│   └── index.html      # Main HTML file
├── src/
│   ├── components/     # React components for the UI (Stats.jsx, Card.jsx , ntf.jsx etc.)
│   ├── App.js          # Main application entry point
│   ├── index.js        # ReactDOM rendering
│   ├── styles/         # TailwindCSS configurations (tailwind.config.js)
│   └── assets/         # Image assets (if any)
├── .gitignore
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

# How it works

## 1. App Component:
The main App.js component is responsible for rendering the layout. It includes the bar chart (Bar.js), and several informational panels.

## 2. Fetching Data:
- The useEffect hook is used to fetch data from the property.json file or an external API (if available) when the component is mounted.
- The data array stores the information needed for the bar chart and statistics panels.

## 3. Charts:
- The Bar chart is rendered using react-chartjs-2 and chart.js.
- The data is passed to the chart component as a data prop.
- The chart options are configured to manage display settings like legends, scales, and responsive behavior.

## Tailwind Configuration


Ensure that you have the following Tailwind setup in your `tailwind.css` file:

1. Create or update the `tailwind.css` file in your `src/styles` directory (or wherever you store your styles):

   ```css
   /* src/styles/tailwind.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

2. Ensure that your tailwind.config.js is correctly set up:


```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light50: "#FBFBFB",
        light100: "#E8F9FF",
        light200: "#C4D9FF",
        dark50: "#9290C3",
        dark100: "#535C91",
        dark200: "#1B1A55",
        dark300: "#070F2B",
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};
```
### Card Component

1. Ensure that `data.json` exists in the public directory and follows the format:
   ```json
   {
     "real_estate": [
       {
         "image": "/images/1.jpg",
         "name": "Equestrian Family Home",
         "price": 14000,
         "address": "California City, CA, USA",
         "bedrooms": 3,
         "bathrooms": 4,
         "area": 1200,
         "featured": true
       },
       {
         "image": "/images/1.jpg",
         "name": "Equestrian Family Home",
         "price": 14000,
         "address": "California City, CA, USA",
         "bedrooms": 3,
         "bathrooms": 4,
         "area": 1200
       },
       
     ]
   }


2. Ensure that `nft.json` exists in the public directory and follows the format:
```json
{
    "nft_data": [
        {
           "name":"Roma Avenue",
           "ether":0.91,
           "graph":"+10%",
           "color":"#3ef7ad"
        },
      
    ]
}
```

3. Ensure that `property.json` exists in the public directory and follows the format:
```json
{
    "property_data": [
        {
            "image":"./images/1.jpg",
            "name":"Mandragora Mansion",
            "ether":0.005
        },
 
    ]
}