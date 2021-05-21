module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        mobile: "500px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        alfa: ["Alfa Slab One", "cursive"],
      },
      colors: {
        primary: "#5d9cec",
        "primary-light": "#8bb8f1",
        "primary-dark": "#2f80e7",
        "primary-form": "#75abef",
        "black-light-opacity": "#ccc",
        dark: "#2d2e2e",
        "dark-light": "#acaeae",
      },
      backgroundImage: {
        bars: "url('../images/bars.svg')",
      },
      borderWidth: {
        3: "3px",
      },
      borderRadius: {
        5: "5px",
      },
      borderColor: {
        gray: "#ccc",
        "gray-line": "hsla(0,0%,100%,.1)",
        input: "#ced4da",
        "input-color": "#212529",
        primary: "#5d9cec",
        "primary-border": "#86b7fe",
        "primary-form-border": "#6da6ee",
      },

      backgroundColor: {
        dark: "#2d2e2e",
        gray: "#e9ecef",
      },
      minHeight: {
        screen: "83vh",
        textarea: "calc(1.5em + .75rem + 2px)",
      },
      width: {
        85: "350px",
        "1-5": "1.5em",
        "1-percentage": "1%",
        "48/52": "12.5rem",
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

      flex: {
        initial: "0 1 auto",
        0: "0 0 auto",
      },
      margin: {
        minus: "-0.25rem",
        "4-minus": "-1rem",
        "2-minus": "-0.5rem",
        "1-minus": "-1px",
      },
      lineHeight: {
        1.2: "1.2",
      },
      boxShadow: {
        outline: "0 0 0 0.25rem",
        "outline-input": "0 0 0 0.25rem rgb(13 110 253 / 25%);",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
