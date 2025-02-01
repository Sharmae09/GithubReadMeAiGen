<template>
  <v-sheet
    class="d-flex justify-center align-center flex-column"
    width="100vw"
    color="primary"
  >
    <h1 class="text-center">Skills</h1>

    <div>
      <h2>Fil the Blanks</h2>
      <v-text-field
        v-model="searchQuery"
        label="Search tech"
        variant="outlined"
        clearable
        prepend-inner-icon="mdi-magnify"
        class="search-bar"
        @keyup.enter="performSearch"
      ></v-text-field>
      <h2>Languages</h2>

      <v-container>
        <v-row>
          <!-- Loop through the programmingLanguages array -->
          <v-col
            v-for="(language, index) in programmingLanguages"
            :key="index"
            cols="auto"
          >
            <!-- Closable Chip for each language -->
            <v-chip
              v-model="selectedChips"
              :key="language"
              closable
              @click="handleChipClick(language)"
            >
              {{ language }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
      <h2>Hosting Saas</h2>

      <v-container>
        <v-row>
          <!-- Loop through the programmingLanguages array -->
          <v-col
            v-for="(tech, index) in hostingSaaSProviders"
            :key="index"
            cols="auto"
          >
            <!-- Closable Chip for each language -->
            <v-chip
              v-model="selectedChips"
              :key="tech"
              closable
              @click="handleChipClick(tech)"
            >
              {{ tech }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
      <h2>FRAMEWORKS, PLATFORMS & LIBRARIES</h2>

      <v-container>
        <v-row>
          <!-- Loop through the programmingLanguages array -->
          <v-col
            v-for="(tech, index) in frameworksPlatformsLibraries"
            :key="index"
            cols="auto"
          >
            <!-- Closable Chip for each language -->
            <v-chip
              v-model="selectedChips"
              :key="tech"
              closable
              @click="handleChipClick(tech)"
            >
              {{ tech }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
      <h2>SERVERS</h2>

      <v-container>
        <v-row>
          <!-- Loop through the programmingLanguages array -->
          <v-col v-for="(tech, index) in servers" :key="index" cols="auto">
            <!-- Closable Chip for each language -->
            <v-chip
              v-model="selectedChips"
              :key="tech"
              closable
              @click="handleChipClick(tech)"
            >
              {{ tech }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
      <h2>FRAMEWORKS, PLATFORMS & LIBRARIES</h2>

      <v-container>
        <v-row>
          <!-- Loop through the programmingLanguages array -->
          <v-col
            v-for="(tech, index) in frameworksPlatformsLibraries"
            :key="index"
            cols="auto"
          >
            <!-- Closable Chip for each language -->
            <v-chip
              v-model="selectedChips"
              :key="tech"
              closable
              @click="handleChipClick(tech)"
            >
              {{ tech }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
      <h2>SERVERS</h2>

      <v-container>
        <v-row>
          <!-- Loop through the programmingLanguages array -->
          <v-col v-for="(tech, index) in databases" :key="index" cols="auto">
            <!-- Closable Chip for each language -->
            <v-chip
              v-model="selectedChips"
              :key="tech"
              closable
              @click="handleChipClick(tech)"
            >
              {{ tech }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
      <h2>DATABASES / ORM</h2>

      <v-container>
        <v-row>
          <!-- Loop through the programmingLanguages array -->
          <v-col v-for="(tech, index) in servers" :key="index" cols="auto">
            <!-- Closable Chip for each language -->
            <v-chip
              v-model="selectedChips"
              :key="tech"
              closable
              @click="handleChipClick(tech)"
            >
              {{ tech }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
      <v-btn @click="Prev">Prev</v-btn>
      <v-btn @click="Next">Next</v-btn>
    </div>
  </v-sheet>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C",
  "C++",
  "Ruby",
  "PHP",
  "Go",
  "Swift",
  "Kotlin",
  "TypeScript",
  "Rust",
  "R",
  "Perl",
  "C#",
  "Shell",
  "Dart",
  "Scala",
  "Elixir",
  "Lua",
];

const hostingSaaSProviders = [
  "Amazon Web Services (AWS)",
  "Google Cloud Platform (GCP)",
  "Microsoft Azure",
  "DigitalOcean",
  "Heroku",
  "Vercel",
  "Netlify",
  "Firebase",
  "Linode",
  "Fly.io",
  "Render",
  "Cloudflare",
  "SiteGround",
  "Bluehost",
  "HostGator",
  "DreamHost",
  "A2 Hosting",
  "WP Engine",
  "Kinsta",
  "Twitch",
];
const frameworksPlatformsLibraries = [
  "React",
  "Vue.js",
  "Angular",
  "Svelte",
  "Next.js",
  "Nuxt.js",
  "Express.js",
  "Django",
  "Flask",
  "Spring Boot",
  "Ruby on Rails",
  "Laravel",
  "ASP.NET",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Vuex",
  "Redux",
  "Apollo GraphQL",
  "Socket.io",
  "Three.js",
  "JQuery",
  "Moment.js",
  "Lodash",
  "Axios",
  "Sequelize",
  "Prisma",
  "GraphQL",
  "NestJS",
  "Symfony",
  "Ember.js",
  "Electron",
  "Flutter",
  "React Native",
  "Ionic",
  "Expo",
  "Gatsby",
  "Jest",
  "Mocha",
  "Chai",
  "Cypress",
  "Vite",
  "Webpack",
  "Parcel",
  "Grunt",
  "Babel",
  "Tailwind UI",
  "Knockout.js",
  "Meteor.js",
  "Quasar Framework",
];
const servers = [
  "Apache HTTP Server",
  "Nginx",
  "Node.js",
  "Tomcat",
  "Microsoft IIS",
  "LiteSpeed",
  "Caddy",
  "Cherokee",
  "OpenResty",
  "Jetty",
];
const databases = [
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "SQLite",
  "Oracle Database",
  "Microsoft SQL Server",
  "MariaDB",
  "Cassandra",
  "Redis",
];
const searchQuery = ref("");

const performSearch = () => {
  console.log("Searching for:", searchQuery.value);
};

const router = useRouter();

const Next = () => {
  router.push("/socials");
};
const Prev = () => {
  router.push("/about");
};
</script>
<style scoped></style>
