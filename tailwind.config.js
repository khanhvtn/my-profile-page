const { screens } = require('tailwindcss/defaultTheme');
module.exports = {
    purge: ['./src/**/*.{html,js,ts,tsx,jsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            xs: '320px',
            ...screens,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
