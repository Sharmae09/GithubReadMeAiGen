<template>
  <v-sheet width="100vw" color="primary" style="min-height: 90vh">
    <div class="d-flex justify-center align-center flex-column">
      <v-container width="90vw">
        <v-btn @click="Prev">Prev</v-btn>
        <v-btn @click="Next">Download</v-btn>
        <v-btn @click="copyText">
          <v-icon left>mdi-content-copy</v-icon>
          Copy
        </v-btn>

        <v-snackbar v-model="snackbar" timeout="2000">
          Code copied!
        </v-snackbar>
      </v-container>
      <!-- <v-container > -->
      <div class="aurora-card-wrapper" width="90vw">
        <v-card
          width="80vw"
          height="70vh"
          variant="outlined"
          color="white"
          class="aurora-card"
        >
          <v-tabs
            v-model="tab"
            :items="tabs"
            align-tabs="center"
            color="white"
            height="60"
            slider-color="#f78166"
            class="d-flex justify-center"
          >
            <template v-slot:tab="{ item }">
              <v-tab
                :prepend-icon="item.icon"
                :text="item.text"
                :value="item.value"
                class="text-none"
              ></v-tab>
            </template>

            <template v-slot:item="{ item }">
              <v-tabs-window-item :value="item.value" class="pa-4">
                <!-- {{ item.content }} -->
                <div v-html="renderedMarkdown"></div>
              </v-tabs-window-item>
            </template>
          </v-tabs>
        </v-card>
      </div>
    </div>
    <!-- </v-container> -->
  </v-sheet>
</template>
<script setup>
import { marked } from "marked";

// In your template

import { ref } from "vue";
import { useRouter } from "vue-router";

// Use the router
const router = useRouter();
const Next = () => {
  router.push("/results");
};
const Prev = () => {
  router.push("/stats");
};
// const textToCopy = ref("Hello, this is a sample text!");

const username = useState("username", () => "Dix this username");
const aboutme = useState("aboutme", () => "");
const techstack = useState("selectedSkills", () => []);
const socialUsernames = useState("socialUsernames", () => [
  { media: "Behance", username: "", icon: "mdi-behance" },
  { media: "Medium", username: "", icon: "mdi-medium" },
  { media: "Quora", username: "", icon: "mdi-quora" },
  { media: "Facebook", username: "", icon: "mdi-facebook" },
  { media: "Twitter", username: "", icon: "mdi-twitter" },
  { media: "Instagram", username: "", icon: "mdi-instagram" },
  { media: "LinkedIn", username: "", icon: "mdi-linkedin" },
  { media: "GitHub", username: "", icon: "mdi-github" },
  { media: "YouTube", username: "", icon: "mdi-youtube" },
  { media: "TikTok", username: "", icon: "mdi-tiktok" },
  { media: "Reddit", username: "", icon: "mdi-reddit" },
  { media: "Stackoverflow", username: "", icon: "mdi-stackoverflow" },
  { media: "Twitch", username: "", icon: "mdi-twitch" },
  { media: "Discord", username: "", icon: "mdi-discord" },
]);

console.log(username);
console.log("username.value");

const readmeMarkdown = computed(() => {
  return `#  Hi there! 👋 I'm ${username.value}
👩‍💻 Computer Engineering Student | 🌐 Software Developer | 📚 Lifelong Learner |<br>
✨ Solopreneur (Business with a touch of magic)<br>
⚡ Fun fact: I built my first app when I was just 17<br>
🌱 I’m currently learning Vue JS<br>

---

## 💫 About Me  
I'm an indie full-stack passionate software developer with a love for creating intuitive and dynamic web applications.  
When I'm not coding, you'll find me exploring tech trends, solving puzzles, or learning something new.  

---

## 🚀 Technologies & Tools


 ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white) ![Nuxt JS](https://img.shields.io/badge/Nuxt-002E3B?style=flat&logo=nuxt.js&logoColor=#00DC82) ![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=flat&logo=vuedotjs&logoColor=%234FC08D) ![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=flat&logo=vuetify&logoColor=AEDDFF)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=flat&logo=npm&logoColor=white) ![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=flat&logo=jquery&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=flat&logo=SASS&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=flat&logo=firebase) ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=flat&logo=netlify&logoColor=#00C7B7) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=flat&logo=githubactions&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=flat&logo=github&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=flat&logo=git&logoColor=white)  ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white) ![WordPress](https://img.shields.io/badge/WordPress-%23117AC9.svg?style=flat&logo=WordPress&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=flat&logo=figma&logoColor=white)  ![Arduino](https://img.shields.io/badge/-Arduino-00979D?style=flat&logo=Arduino&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=flat&logo=notion&logoColor=white) ![C](https://img.shields.io/badge/c-%2300599C.svg?style=flat&logo=c&logoColor=white) ![Anaconda](https://img.shields.io/badge/Anaconda-%2344A833.svg?style=flat&logo=anaconda&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=flat&logo=python&logoColor=ffdd54) ![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=flat&logo=php&logoColor=white) 

---

## 🎯 GitHub Stats
![](https://github-readme-streak-stats.herokuapp.com/?user=Sharmae09&&theme=radical&hide_border=false)<br/>
![top lang](https://github-readme-stats.vercel.app/api/top-langs/?username=Sharmae09&layout=compact&theme=radical)<br>


---

## 🌟 Projects

- [**AI Resume and Cover Letter Generator**](https://github.com/yourusername/project1): A brief description of what the project does.  
- [**API Marketplace**](https://github.com/yourusername/project2): Another project with a short description.  
- [**Dental Appointment App**](https://github.com/yourusername/project2): Another project with a short description.  

---

## 🌐 Get in Touch
- 💼 Portfolio: https://sharmaethegreat.com/
- 📧 Email: [sharmae.code@email.com](mailto:sharmae.code@email.com)

--- 

### ✍️ Quote of the day
![](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical)

--- 
## 💰 Support My Work
-  [☕ Buy Me a Coffee](https://buymeacoffee.com/sharmae)
  
---



<!-- Proudly created with GPRM ( https://gprm.itsvg.in ) -->
`;
});

// Convert markdown to HTML
const renderedMarkdown = computed(async () => {
  const { marked } = await import("marked");
  return marked.parse(readmeMarkdown.value);
});

const tab = ref("tab-1");
const tabs = ref([
  {
    icon: "mdi-book-open-page-variant",
    text: "Preview",
    value: "tab-1",
    content: readmeMarkdown,
  },
  {
    icon: "mdi-handshake-outline",
    text: "Code",
    value: "tab-2",
    content: " THIS IS THE CODE CONTENT",
  },
  {
    icon: "mdi-license",
    text: "Edit Code",
    value: "tab-3",
    content: " THIS IS THE EDIT CODE CONTENT",
  },
]);

const snackbar = ref(false);
const copyText = async () => {
  try {
    const markdownText = await readmeMarkdown.value; // Ensure it's a string
    await navigator.clipboard.writeText(markdownText);
    snackbar.value = true;
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};
</script>
<style scoped>
.search-bar {
  max-width: 500px;
  margin: 0 auto;
}
.v-container {
  overflow: auto;
}
.v-sheet {
  overflow: auto;
}
</style>
