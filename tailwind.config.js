/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      letterSpacing: {
        'extra-tight': '-0.05em',
      },
      container: {
        center: false,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "4rem",
          lg: "6rem",
          xl: "8rem",
          "2xl": "12rem",
          "3xl": "16rem",
          "4xl": "20rem",
        },
        margin: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "4rem",
          lg: "6rem",
          xl: "8rem",
          "2xl": "12rem",
          "3xl": "16rem",
          "4xl": "20rem",
        },
      },
    },
  },
  plugins: [],
}

