/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./*.html", // This will include all HTML files in the root directory
    "./*.js",   // This will include all JS files in the root directory
  ],
  theme: {
 
    extend: {
      colors: {
        'brown-950': '#412a07',
        'brown-900': '#6f4e14',
        'brown-800': '#836010',
        'brown-700': '#9e7b0a',
        'brown-600': '#c7a907',
        'brown-500': '#e6d50c',
        'brown-400': '#f6ef19',
        'brown-300': '#f9fa4a',
        'brown-200': '#f6fc8c',
        'purp-950':'#32252f',
        'purp-900':'#574454',
        'purp-800':'#664e62',
        'purp-700':'#7a5c74',
        'purp-600':'#91718c',
        'purp-500':'#a98ba6',
        'purp-400':'#baa1b8',
        'purp-300':'#d8c9d7',
        'purp-200':'#e9e1e9',
        'purp-100':'#f3f0f3',
        'blu-950': '#112b40',
        'blu-900': '#194461',
        'blu-800': '#185074',
        'blu-700': '#185e8c',
        'blu-600': '#1c76ad',
        'blu-500': '#3a9ed5',
        'blu-400': '#52adde',
        'blu-300': '#8ec9eb',
        'blu-200': '#8ec9eb',
        'blu-100': '#e4f0fa',

        // Add your custom green color
        'custom-green': '#ceffe9',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',  // Default Tailwind XL breakpoint (Laptop-sized screens)
        'xxl': '1300px', // Custom breakpoint above 1300px (to handle your large screens)
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
