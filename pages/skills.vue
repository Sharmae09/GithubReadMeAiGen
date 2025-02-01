<template>
  <v-sheet width="100vw" color="primary" style="min-height: 100vh">
    <h1 class="text-center">Skills</h1>

    <div>
      <v-container>
        <h2>Fill the Blanks</h2>
        <v-text-field
          v-model="searchQuery"
          label="Search tech"
          variant="outlined"
          clearable
          prepend-inner-icon="mdi-magnify"
          class="search-bar"
          @keyup.enter="performSearch"
        ></v-text-field>
      </v-container>
      <!-- Languages Section -->
      <v-container>
        <h2>Languages</h2>
        <v-row>
          <v-col
            v-for="(language, index) in programmingLanguages"
            :key="index"
            cols="auto"
          >
            <v-chip v-model="selectedChips" @click="handleChipClick(language)">
              {{ language }}
              <p>|</p>
              <v-icon icon="	mdi-check" end></v-icon>
            </v-chip>
            <v-btn v-if="!chip" color="primary" @click="chip = true">
              {{ language }}
              <p>|</p>
              <v-icon icon="	mdi-close" end></v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

      <!-- Hosting SaaS Section -->
      <v-container>
        <h2>Hosting SaaS</h2>

        <v-row>
          <v-col
            v-for="(tech, index) in hostingSaaSProviders"
            :key="index"
            cols="auto"
          >
            <v-chip
              v-model="selectedChips"
              closable
              @click="handleChipClick(tech)"
            >
              {{ tech }} |
            </v-chip>
          </v-col>
        </v-row>
      </v-container>

      <!-- Frameworks, Platforms & Libraries Section -->
      <v-container>
        <h2>Frameworks, Platforms & Libraries</h2>

        <v-row>
          <v-col
            v-for="(tech, index) in frameworksPlatformsLibraries"
            :key="index"
            cols="auto"
          >
            <v-chip
              v-model="selectedChips"
              closable
              @click="handleChipClick(tech)"
            >
              {{ tech }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>

      <!-- Servers Section -->
      <v-container>
        <h2>Servers</h2>

        <v-row>
          <v-col v-for="(tech, index) in servers" :key="index" cols="auto">
            <v-chip
              v-model="selectedChips"
              closable
              @click="handleChipClick(tech)"
            >
              {{ tech }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>

      <!-- Databases / ORM Section -->
      <v-container>
        <h2>Databases / ORM</h2>

        <v-row>
          <v-col v-for="(tech, index) in databases" :key="index" cols="auto">
            <v-chip
              v-model="selectedChips"
              closable
              @click="handleChipClick(tech)"
            >
              {{ tech }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>

      <!-- Navigation Buttons -->
      <v-container>
        <v-btn @click="Prev">Prev</v-btn>
        <v-btn @click="Next">Next</v-btn>
      </v-container>
    </div>
  </v-sheet>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

// Use the router
const router = useRouter();

// Define reactive state
const searchQuery = ref("");
const selectedChips = ref([]);
const programmingLanguages = ref([
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
]);
const hostingSaaSProviders = ref([
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
]);
const frameworksPlatformsLibraries = ref([
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
]);
const servers = ref([
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
]);
const databases = ref([
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "SQLite",
  "Oracle Database",
  "Microsoft SQL Server",
  "MariaDB",
  "Cassandra",
  "Redis",
]);

// Functions to handle navigation
const Next = () => {
  router.push("/socials");
};

const Prev = () => {
  router.push("/about");
};

// Handle chip click logic
const handleChipClick = (tech) => {
  console.log(`${tech} clicked`);
};

// Handle search logic
const performSearch = () => {
  console.log("Searching for:", searchQuery.value);
};
</script>

<style scoped>
.search-bar {
  max-width: 500px;
  margin: 0 auto;
}
.v-container {
  overflow: auto; /* Allows scrolling if content overflows */
}
</style>
