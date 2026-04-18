/* Shared Tailwind theme for all pages — loaded after https://cdn.tailwindcss.com */
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#EF6C00',
                'background-cream': '#FFFBEE',
                'background-light': '#FFFBEE',
                'text-main': '#1F1F1F',
                'text-secondary': '#555555',
                'text-muted': '#777777'
            },
            fontFamily: {
                display: ['Inter', 'sans-serif'],
                sans: ['Inter', 'sans-serif']
            },
            maxWidth: {
                content: '1140px'
            },
            borderRadius: {
                DEFAULT: '0.375rem',
                md: '0.375rem',
                lg: '0.5rem',
                xl: '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
                full: '9999px'
            }
        }
    }
};
