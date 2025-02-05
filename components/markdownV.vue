<template>
  <div v-html="markdownToHtml(markdownText)"></div>
</template>

<script setup>
import { useNuxtApp } from "#app";
const { $showdown } = useNuxtApp();

const getIconUrl = (tech) => {
  return `https://cdn.simpleicons.org/${tech
    .replace(/\s+/g, "")
    .toLowerCase()}`;
};
const username = useState("username", () => "");
const aboutme = useState("aboutme", () => "");
const techstack = useState("selectedSkills", () => [
  "java",
  "javascript",
  "html5",
  "vue.js",
]);

const techStack = ref([
  { name: "JavaScript", color: "323330", style: "flat", logoColor: "F7DF1E" },
  { name: "CSS3", color: "1572B6", style: "flat", logoColor: "white" },
  { name: "HTML5", color: "E34F26", style: "flat", logoColor: "white" },
  { name: "Nuxt JS", color: "002E3B", style: "flat", logoColor: "00DC82" },
  { name: "Vue.js", color: "35495e", style: "flat", logoColor: "4FC08D" },
  { name: "Vuetify", color: "1867C0", style: "flat", logoColor: "AEDDFF" },
  { name: "NPM", color: "CB3837", style: "flat", logoColor: "white" },
  { name: "jQuery", color: "0769AD", style: "flat", logoColor: "white" },
  { name: "NodeJS", color: "6DA55F", style: "flat", logoColor: "white" },
]);
const socialUsernames = useState("socialUsernames", () => [
  {
    media: "Behance",
    username: "your-behance",
    icon: "mdi-behance",
    link: "https://www.behance.net/your-behance",
  },
  {
    media: "Medium",
    username: "your-medium",
    icon: "mdi-medium",
    link: "https://medium.com/@your-medium",
  },
  {
    media: "Quora",
    username: "your-quora",
    icon: "mdi-quora",
    link: "https://www.quora.com/profile/your-quora",
  },
  {
    media: "Facebook",
    username: "your-facebook",
    icon: "mdi-facebook",
    link: "https://www.facebook.com/your-facebook",
  },
  {
    media: "Twitter",
    username: "your-twitter",
    icon: "mdi-twitter",
    link: "https://twitter.com/your-twitter",
  },
  {
    media: "Instagram",
    username: "your-instagram",
    icon: "mdi-instagram",
    link: "https://instagram.com/your-instagram",
  },
  {
    media: "LinkedIn",
    username: "your-linkedin",
    icon: "mdi-linkedin",
    link: "https://linkedin.com/in/your-linkedin",
  },
  {
    media: "GitHub",
    username: "your-github",
    icon: "mdi-github",
    link: "https://github.com/your-github",
  },
  {
    media: "YouTube",
    username: "your-youtube",
    icon: "mdi-youtube",
    link: "https://youtube.com/c/your-youtube",
  },
  {
    media: "TikTok",
    username: "your-tiktok",
    icon: "mdi-tiktok",
    link: "https://tiktok.com/@your-tiktok",
  },
  {
    media: "Reddit",
    username: "your-reddit",
    icon: "mdi-reddit",
    link: "https://www.reddit.com/user/your-reddit",
  },
  {
    media: "Stackoverflow",
    username: "your-stackoverflow",
    icon: "mdi-stackoverflow",
    link: "https://stackoverflow.com/users/your-stackoverflow",
  },
  {
    media: "Twitch",
    username: "your-twitch",
    icon: "mdi-twitch",
    link: "https://www.twitch.tv/your-twitch",
  },
  {
    media: "Discord",
    username: "your-discord",
    icon: "mdi-discord",
    link: "https://discord.com/your-discord",
  },
]);

// Generate Markdown String
const socialLinksMarkdown = computed(() =>
  socialUsernames.value
    .filter((user) => user.username) // Only include accounts with a username
    .map((user) => `- [${user.media}]( ${user.link} )`)
    .join("\n")
);

console.log(username);
console.log("username.value");
const getBadgeUrl = (tech) => {
  // Create a slug for the logo by removing spaces and converting to lowercase.
  // Note: For some tech names you might need to adjust manually if the shield's logo slug is different.
  const logoSlug = tech.replace(/\s+/g, "").toLowerCase();

  // Construct the Shields.io badge URL.
  return `https://img.shields.io/badge/-${encodeURIComponent(
    tech
  )}-blue?style=flat-square&logo=${encodeURIComponent(
    logoSlug
  )}&logoColor=white`;
};
const markdownText = `#  Hi there! 👋 I'm ${username.value}
${aboutme.value}

---

## 🚀 Technologies & Tools

${techstack.value.map((tech) => `![${tech}](${getBadgeUrl(tech)})`).join(" ")}

---

## 🎯 GitHub Stats
![](https://github-readme-streak-stats.herokuapp.com/?user=${
  username.value
}&&theme=radical&hide_border=false)<br/>
![top lang](https://github-readme-stats.vercel.app/api/top-langs/?username=${
  username.value
}&layout=compact&theme=radical)<br>


---

## 🌟 Projects

- [**AI Resume and Cover Letter Generator**](https://github.com/yourusername/project1): A brief description of what the project does.
- [**API Marketplace**](https://github.com/yourusername/project2): Another project with a short description.
- [**Dental Appointment App**](https://github.com/yourusername/project2): Another project with a short description.

---

## 🌐 Get in Touch
${socialLinksMarkdown.value}
- 💼 Portfolio: https://sharmaethegreat.com/
- 📧 Email: [sharmae.code@email.com](mailto:sharmae.code@email.com)

---

### ✍️ Quote of the day
![](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical)

---
## 💰 Support My Work
-  [☕ Buy Me a Coffee](https://buymeacoffee.com/sharmae)

---



<!-- Proudly created with -->
`;

// const markdownText = `# Welcome to My README Generator
//   This is powered by **Showdown**!`;

const markdownToHtml = (md) => $showdown.makeHtml(md);
</script>
