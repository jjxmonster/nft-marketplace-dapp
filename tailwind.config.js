module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#1E272E",
        "gray-100": "#535568",
        "gray-200": "#53556842",
        "light-gray": "#989EAD",
        "purple-light": "#6C63FF",
        "purple-dark": "#3F3D56",
        danger: "#d32f2f",
        information: "#0288d1",
        success: "#388E3C",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.20rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "3.5xl": "2.25rem",
        "4xl": "2.5rem",
        "5xl": "3.3125rem",
        "6xl": "4rem",
      },
      width: {
        "page-width": "calc(100vw - 24rem)",
      },
    },
  },
  plugins: [],
};
