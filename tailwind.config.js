// tailwind.config.js
module.exports = {
    mode: 'jit',
    purge: [
        './index.html',
        './bio.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
          fontFamily:{
              johnny: "'Johnny Fever', sans-serif"
          },
          textColor: {
              primary: '#EA3B14',
             
          },backgroundColor: {
            card:"#49566C5C"
          }
      },
    },
    variants: {},
    plugins: [
      require('@tailwindcss/aspect-ratio')
    ],
  }