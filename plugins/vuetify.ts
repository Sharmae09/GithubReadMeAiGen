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
            primary: "#11052C",
            secondary: "#3D087B",
            tertiary: "#090088",
            accent: "#F43B86",
            four: "#EEEEEE",
            five: "#FFBD39",
          },
        },
      },
    },
    defaults: {
      global: {
        style: {
          fontFamily: "Roboto, sans-serif",
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
