export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                cloud: '#F7F4EE',
                paper: '#FFFDFC',
                ink: '#16323F',
                slate: '#4B5D68',
                mist: '#E7EEF2',
                sage: '#DCE9E0',
                sea: '#1E7A73',
                amber: '#D6843A',
                coral: '#E6836C'
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                display: ['"Fraunces"', 'Georgia', 'serif']
            },
            boxShadow: {
                soft: '0 14px 40px rgba(22, 50, 63, 0.10)',
                lift: '0 24px 60px rgba(22, 50, 63, 0.16)'
            },
            backgroundImage: {
                glow: 'radial-gradient(circle at top, rgba(214, 132, 58, 0.10), transparent 35%), radial-gradient(circle at bottom right, rgba(30, 122, 115, 0.10), transparent 30%)'
            }
        }
    },
    plugins: []
};
