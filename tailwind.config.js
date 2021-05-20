module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        bars: "url('../images/bars.svg')",
      }),
      borderWidth: {
        3: "3px",
      },
      borderRadius: {
        5: "5px",
      },
      borderColor: {
        gray: "#ccc",
        "gray-line": "hsla(0,0%,100%,.1)",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        alfa: '"Alfa Slab One", cursive',
      },
      colors: {
        blue: "#2f80e7",
        "dark-light": "#acaeae",
        "primary-light": "#8bb8f1",
        "black-light-opacity": "#ccc",
      },
      backgroundColor: {
        dark: "#2d2e2e",
      },
      minHeight: {
        screen: "83vh",
      },
      width: {
        85: "350px",
        "1-5": "1.5em",
      },
      height: {
        "1-5": "1.5em",
      },
      fontSize: {
        "0-8": "0.8rem",
        sm: "0.9rem",
        xl: "1.25rem",
        "1-2": "1.2rem",
        md: "2em",
        fs: "calc(1.3rem + .6vw)",
        "fs-4": "calc(1.275rem + .3vw)",
        h1: "calc(1.375rem + 1.5vw)",
        "2.5xl": "1.75rem",
        "4.5xl": "2.5rem",
      },
      maxWidth: {
        "screen-xl": "1200px",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",

        mobile: "500px",
        tablet: "768px",
        desktop: "1200px",
      },
      flex: {
        initial: "0 1 auto",
        0: "0 0 auto",
      },
      margin: {
        minus: "-0.25rem",
      },
      lineHeight: {
        1.2: "1.2",
      },
      boxShadow: {
        outline: "0 0 0 0.25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
