import { defineNuxtPlugin } from '#app';
import showdown from 'showdown';

export default defineNuxtPlugin(() => {
  const converter = new showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return {
    provide: {
      showdown: converter,
    },
  };
});
