/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    colors:
    {
      Text: '#212b36',
      Black: '#000000',
      Default: '#637381',
      Primary: '#04a2e9',
      Secondary: '#5dc615',
      White: '#ffffff',
      Background: '#e7e7e7',
      Gray: '#f4f7ff',
    },
    fontSize:
    {
      SubDescription: '14px',
      Button: '16px',
      Base: '20px',
      SubTitle: '30px',
      Titleprimary: '40px',
    },
    fontFamily: {
      inter:[
        "Inter var, sans-serif",
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
    boxShadow:
    {
      Shadow_simple: '0px 1px 4px 0px rgba(0,0,0,0.12)',
      Shadow_medium: '0px 1px 5px 0px rgba(0,0,0,0.14)',
      Shadow_card: '0px 1px 3px 0px rgba(0,0,0,0.08)'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

