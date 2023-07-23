module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},

    screens: {
      sm: '480px',
      md: '676px',
      lg: '995px',
      xl: '1440px',
    },

    colors: {
      title: "#222326",
      text: "#47423E",
      emphasis: "#9CA5A6",
      bg: "#d6ecfc"
    },

    fontFamily: {
      title: [
        'Playfair Display', 'serif'
      ],
      text: [
        'BIZ UDPMincho', 'serif'
      ]
    }
    
  },
  plugins: [],
};