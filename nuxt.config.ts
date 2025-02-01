import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  css: ["@/assets/styles/settings.scss"],
  // head: {
  //   link: [
  //     {
  //       rel: "stylesheet",
  //       href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap",
  //     },
  //   ],
  // },
  compatibilityDate: "2024-11-01",
  //...
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
