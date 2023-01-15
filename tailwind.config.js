module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        sweetTheme: {

          "primary": "#fb016f",

          "secondary": "#363435",

          "accent": "#ac86d9",

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
