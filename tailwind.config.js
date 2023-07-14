/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html, js}'],
  theme: {
    extend: {
      spacing: {
        'small': '5px',
        'gap': '10px',
        'trim-small': '15px',
        'box-spacing': '20px',
        'trim': '30px',
        'large': '50px',
        'x-large': '80px',
        'big': '100px',
        'x-big': '150px',
      },
      colors: {
        'gray-01' : '#0F172A',
        'gray-02' : '#1E293B',
        'gray-03' : '#F8FAFC',
        'gray-04' : '#E2E8F0',
        'gray-05' : '#334155',
      },
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif']
    },
  },
  plugins: [],
}

