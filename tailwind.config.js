/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'sidebar-bg': '#2c3e50',
                'brand-teal': '#1abc9c',
                'brand-blue': '#3498db',
                'status-green': '#2ecc71',
                'status-red': '#e74c3c',
                'status-yellow': '#f1c40f',
                'background-light': '#f4f7f6',
            },
            fontFamily: {
                sans: ['Roboto', 'Inter', 'Manrope', 'Lato', 'sans-serif'],
                display: ['Roboto', 'Inter', 'Manrope', 'Lato', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
