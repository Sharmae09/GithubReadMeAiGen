<template>
  <div>
    <pre><code class="language-markdown">{{ formattedCode }}</code></pre>
  </div>
</template>

<script setup>
import { computed } from "vue";

const username = useState("username", () => "sharmae");
const aboutme = useState(
  "aboutme",
  () => "I love coding and building impactful projects."
);
const techstack = useState("selectedSkills", () => [
  "Vue.js",
  "Nuxt",
  "TailwindCSS",
]);
const socialUsernames = useState("socialUsernames", () => [
  { media: "GitHub", username: "sharmae", link: "https://github.com/sharmae" },
  {
    media: "LinkedIn",
    username: "sharmae-linkedin",
    link: "https://linkedin.com/in/sharmae",
  },
]);

const formattedCode = computed(
  () => `
# Hi there! 👋 I'm ${username.value}

${aboutme.value}

---

## 🚀 Technologies & Tools
${techstack.value.join(", ")}

---

## 🎯 GitHub Stats
![](https://github-readme-streak-stats.herokuapp.com/?user=${
    username.value
  }&theme=radical&hide_border=false)
![top lang](https://github-readme-stats.vercel.app/api/top-langs/?username=${
    username.value
  }&layout=compact&theme=radical)

---

## 🌟 Projects
- [**AI Resume and Cover Letter Generator**](https://github.com/${
    username.value
  }/project1): A brief description of what the project does.
- [**API Marketplace**](https://github.com/${
    username.value
  }/project2): Another project with a short description.
- [**Dental Appointment App**](https://github.com/${
    username.value
  }/project3): Another project with a short description.

---

## 🌐 Get in Touch
${socialUsernames.value
  .map((social) => `- [${social.media}](${social.link})`)
  .join("\n")}

- 💼 Portfolio: [sharmaethegreat.com](https://sharmaethegreat.com/)
- 📧 Email: [sharmae.code@email.com](mailto:sharmae.code@email.com)

---

### ✍️ Quote of the Day
![](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical)

---

## 💰 Support My Work
- [☕ Buy Me a Coffee](https://buymeacoffee.com/sharmae)

---
`
);
</script>

<style scoped>
/* Optional: Style for better readability */
pre {
  background: #282c34;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
}
code {
  font-family: "Courier New", monospace;
}
</style>
