/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                dosis: ['Dosis'],
                dosisBold: ['Dosis Bold'],
                dosisSemiBold: ['Dosis SemiBold'],
                dosisLight: ['Dosis Light'],
            },
        },
    },
    plugins: [],
}