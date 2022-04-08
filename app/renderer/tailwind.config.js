module.exports = {
    content: [
        './renderer/pages/**/*.{js,ts,jsx,tsx}',
        './renderer/components/**/*.{js,ts,jsx,tsx}',
        './renderer/layouts/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                'midnight': {
                    DEFAULT: '#000C24',
                    '50': '#002369',
                    '100': '#002061',
                    '200': '#001B52',
                    '300': '#001643',
                    '400': '#001133',
                    '500': '#000C24',
                    '600': '#00081A',
                    '700': '#00081A',
                    '800': '#000714',
                    '900': '#000000'
                },
                'martinique': {
                    DEFAULT: '#333456',
                    '50': '#8889B8',
                    '100': '#7B7DB1',
                    '200': '#6264A2',
                    '300': '#515389',
                    '400': '#424370',
                    '500': '#333456',
                    '600': '#1E1F33',
                    '700': '#090910',
                    '800': '#000000',
                    '900': '#000000'
                },
                'comet': {
                    DEFAULT: '#595B83',
                    '50': '#C0C1D4',
                    '100': '#B3B5CC',
                    '200': '#9B9DBB',
                    '300': '#8385AB',
                    '400': '#6B6D9A',
                    '500': '#595B83',
                    '600': '#424462',
                    '700': '#2C2D40',
                    '800': '#15151F',
                    '900': '#000000'
                },
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require("daisyui")
    ],
    daisyui: {
        themes: ["night"],
    },
}
