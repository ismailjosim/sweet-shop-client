module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        sweetTheme: {

          "primary": "#0FCFEC",

          "secondary": "#3A4256",

          "accent": "#19D3AE",

          "neutral": "#151623",

          "base-100": "#FFFFFF",

          "info": "#80C0EA",

          "success": "#74ECC6",

          "warning": "#F9AD5D",

          "error": "#F32B42",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
