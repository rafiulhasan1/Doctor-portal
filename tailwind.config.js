/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       doctortheme: {
  //         primary: "#0FCFEC",
  //         secondary: '#19D3AE',
  //         accent: "#1FB2A6",
  //         neutral: "#191D24",
  //         // "base-100": "#2A303C",
  //       }
  //     }
  //   ]
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
