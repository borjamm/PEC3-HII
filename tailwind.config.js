module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
    extend: {
      colors: {
        primary: "#5d9cec",
        "primary-light": "#8bb8f1",
        "primary-dark": "#2f80e7",
        "primary-buttom": "#75abef",
        dark: "#2d2e2e",
        "dark-light": "#acaeae",
        "black-light-opacity": "#ccc",
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
        "dark-light": "hsla(0,0%,100%,.1)",
        light: "#ced4da",
        "primary-dark": "#86b7fe",
        "primary-buttom": "#6da6ee",
      },
      backgroundColor: {
        "dark-light": "#e9ecef",
      },
      minHeight: {
        minimum: "83vh",
        resize: "calc(1.5em + .75rem + 2px)",
      },
      width: {
        85: "350px",
        "1.5em": "1.5em",
        "1/1": "1%",
        "48/52": "12.5rem",
      },
      height: {
        "1.5em": "1.5em",
      },
      fontSize: {
        0.8: "0.8rem",
        0.9: "0.9rem",
        1.2: "1.2rem",
        2: "2em",
        xl: "1.25rem", // OJO
        logo: "calc(1.3rem + .6vw)",
        rrss: "calc(1.275rem + .3vw)",
        title: "calc(1.375rem + 1.5vw)",
        "logo-xl": "1.75rem",
        "title-xl": "2.5rem",
      },
      maxWidth: {
        container: "1200px",
      },
      flex: {
        0: "0 0 auto",
      },
      margin: {
        "minus-0.25": "-0.25rem",
        "minus-1": "-1rem",
        "minus-0.5": "-0.5rem",
        "minus-1px": "-1px",
      },
      lineHeight: {
        1.2: "1.2",
      },
      boxShadow: {
        "outline-gray": "0 0 0 0.25rem",
        "outline-primary": "0 0 0 0.25rem rgb(13 110 253 / 25%);",
      },
    },
  },
  variants: {
    extend: {
      // textColor: ["active"],
    },
  },
  plugins: [],
};
