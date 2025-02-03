// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "dark",
      themes: {
        dark: {
          colors: {
            primary: "#0e100f",
            secondary: "#0ae448",
            tertiary: "#abff84",
            accent: "#c9f6b4",
            four: "#EEEEEE",
            five: "#7ef89e",
          },
        },
      },
    },
    defaults: {
      VBtn: {
        color: "secondary", // ✅ Set default text field color to secondary
        variant: "outlined", // (Optional) Set a default variant
        rounded: "lg",
        class: "mr-4",
      },
      global: {
        style: {
          fontFamily: "Roboto, sans-serif",
        },
      },
    },
  });

  app.vueApp.use(vuetify);
});
