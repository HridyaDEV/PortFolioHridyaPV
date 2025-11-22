export default {
  important: "#root", // ensures Tailwind overrides other CSS
  safelist: ["font-crimson", "font-courgette", "font-roboto", "font-inter"],
  theme: {
    extend: {
      fontFamily: {
        crimson: ['"Crimson Text"', "serif"],
        courgette: ['"Courgette"', "cursive"],
        roboto: ['"Roboto"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
      },
      colors: {
        testcolor: "#ff00ff",
      },
    },
  },
};
