const { Oswald } = require('next/font/google')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            md: '640px',
            lg: '1025px',
        },
        extends: {
            fontFamily: {
                inter: ['var(--font-inter)'],
                josefin: ['var(--font-josefin)'],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
