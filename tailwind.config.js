/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        AGBold:['ag-bold'],
        SFHeavy:['sf-heavy'],
        SFBolditalic:['sf-bolditalic'],
        SFRegular:['sf-Regular'],
        SFBold:['sf-bold'],
        SFLight:['sf-light'],
        SFSemiBold:['sf-semibold'],
        SFBlack:['sf-black'],
        AGRegular:['ag-regular']
      },
    },
  },
  plugins: [],
}

