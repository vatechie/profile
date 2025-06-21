/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: {
        '@tailwindcss/postcss': {},
        autoprefixer: {},
    },
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}