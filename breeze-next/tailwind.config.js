module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            md: '501px',
            lg: '1025px',
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
