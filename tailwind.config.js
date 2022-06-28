/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {},
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
            // ----------------------------------------
            'tablet': '640px',
            // => @media (min-width: 640px) { ... }

            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }

            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [{
            'postcss-import': {},
            'tailwindcss/nesting': 'postcss-nesting',
            'postcss-preset-env': {
                features: { 'nesting-rules': false },
            },
            tailwindcss: {},
            autoprefixer: {},
            '@tailwindcss/aspect-ratio': {},
            '@tailwindcss/forms': {},
            '@tailwindcss/typography': {},
            '@tailwindcss/line-clamp': {},
        }
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/aspect-ratio'),
        // require('@tailwindcss/line-clamp'),
        // require('tailwindcss'),
        // require('autoprefixer'),
        // require('postcss-import'),
        // require('tailwindcss/nesting', {
        //     'postcss-nesting': {},
        // }),
    ],

}