module.exports = {
    daisyui: {
        themes: [
          {
            mytheme: {
            
   "primary": "#b9b9b9",
            
            },
          },
        ],
      },
  
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme : {
        extends: {},
    },
    plugins: [require("daisyui")],
}