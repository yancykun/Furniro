/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                color: {
                    1: '#FFFFFF',
                    2: '#FFF3E3',
                    3: '#F4F5F7',
                    4: '#B88E2F',
                    5: '#333333',
                    6: '#666666',
                    7: '#101415',
                    8: '#D8D8D8',
                },
            },
            fontFamily: {
                poppins: 'var(--font-poppins)',
            },
        },
    },
    plugins: [],
};
