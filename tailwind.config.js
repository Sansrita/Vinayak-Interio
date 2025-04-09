/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#1f1f1f',
                foreground: '#f5f5f5',
                border: '#2e2e2e',
                ring: '#4a4a4a',
            },
        },
    },
    plugins: [],
}