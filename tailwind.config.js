import tailwindcss from '@tailwindcss/vite'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                 monoton: ["Monoton", "cursive"],
                 quicksand : ["Quicksand", "sans-serif"]
            },
            colors: {
                
            }
        }
    },
    plugins: [],
}