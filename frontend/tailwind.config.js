/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      fontFamily: {
        gemini: ['"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      colors: {
        vibrant: {
          blue: '#3b82f6',
          purple: '#a855f7',
          pink: '#ec4899',
          cyan: '#06b6d4',
        },
        'blue-primary': '#007BFF',
        'green-primary': '#28A745',
        'purple-primary': '#6F42C1',
        'purple-dark': '#5A32A3',
        'gray-light': '#F8F9FA',
        'gray-dark': '#212529',
        'bg-light': '#f9fafb',
        'bg-dark': '#121212',
        'text-light': '#1f2937',
        'text-dark': '#e5e7eb',
        'border-light': '#d1d5db',
        'border-dark': '#374151',
      },
    },
  },
  plugins: [],
}
