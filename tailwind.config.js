module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors: {
      title: "#2a4d60",
      text: "#2d2d41",
      sub_title: "#e3703b"
    },

    fontFamily: {
      title: [
        'Lumanosimo', 'cursive'
      ],
      text: [
        'Zen Maru Gothic', 'sans-serif'
      ]
    }
    
  },
  plugins: [],
};