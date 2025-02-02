<template>
  <v-sheet class="pt-8" width="100vw" color="primary" style="min-height: 100vh">
    <h1 class="text-center" style="color: secondary">SKILLS & TECH STACK</h1>

    <div>
      <v-container class="pb-0">
        <p class="text-center" style="color: secondary">
          Search and select technologies you work with
        </p>
        <!-- v-model="searchQuery" -->

        <v-text-field
          label="Search tech"
          variant="outlined"
          clearable
          class="search-bar"
          @keyup.enter="performSearch"
          color="secondary"
        >
          <template v-slot:prepend-inner>
            <v-icon color="secondary">mdi-magnify</v-icon>
          </template>
        </v-text-field>
      </v-container>
      <!-- Languages Section -->
      <v-container class="pt-0">
        <h2 class="mb-2 underlined" style="color: secondary">Languages</h2>
        <v-row>
          <v-col
            v-for="(language, index) in programmingLanguages"
            :key="index"
            cols="auto"
            class="m-0 p-0"
            style="padding: 0; margin: 0.5rem 0"
          >
            <v-btn
              @click="toggleChip(language)"
              :color="selectedChips.includes(language) ? 'tertiary' : 'four'"
              class="m-0"
              variant="flat"
              rounded
            >
              {{ language }}
              <v-icon
                :icon="
                  selectedChips.includes(language) ? 'mdi-close' : 'mdi-check'
                "
                end
              ></v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

      <!-- Hosting SaaS Section -->
      <v-container>
        <h2 class="mb-2 underlined" style="color: secondary">Hosting/SaaS</h2>
        <v-row>
          <v-col
            v-for="(tech, index) in hostingSaaSProviders"
            :key="index"
            cols="auto"
            class="m-0 p-0"
            style="padding: 0; margin: 0.5rem 0"
          >
            <v-btn
              @click="toggleChip(tech)"
              :color="selectedChips.includes(tech) ? 'tertiary' : 'four'"
              class="m-0"
              variant="flat"
              rounded
            >
              {{ tech }}
              <v-icon
                :icon="selectedChips.includes(tech) ? 'mdi-close' : 'mdi-check'"
                end
              ></v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <!-- !! -->

      <!-- Frameworks, Platforms & Libraries Section -->
      <v-container>
        <h2 class="mb-2 underlined" style="color: secondary">
          Frameworks, Platforms & Libraries
        </h2>
        <v-row>
          <v-col
            v-for="(tech, index) in frameworksPlatformsLibraries"
            :key="index"
            cols="auto"
            class="m-0 p-0"
            style="padding: 0; margin: 0.5rem 0"
          >
            <v-btn
              @click="toggleChip(tech)"
              :color="selectedChips.includes(tech) ? 'tertiary' : 'four'"
              class="m-0"
              variant="flat"
              rounded
            >
              {{ tech }}
              <v-icon
                :icon="selectedChips.includes(tech) ? 'mdi-close' : 'mdi-check'"
                end
              ></v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <!-- !! -->

      <!-- Servers Section -->
      <v-container>
        <h2 class="mb-2 underlined" style="color: secondary">Servers</h2>
        <v-row>
          <v-col
            v-for="(tech, index) in servers"
            :key="index"
            cols="auto"
            class="m-0 p-0"
            style="padding: 0; margin: 0.5rem 0"
          >
            <v-btn
              @click="toggleChip(tech)"
              :color="selectedChips.includes(tech) ? 'tertiary' : 'four'"
              class="m-0"
              variant="flat"
              rounded
            >
              {{ tech }}
              <v-icon
                :icon="selectedChips.includes(tech) ? 'mdi-close' : 'mdi-check'"
                end
              ></v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <!-- !! -->

      <!-- Databases / ORM Section -->
      <v-container>
        <h2 class="mb-2 underlined" style="color: secondary">
          Databases / ORM
        </h2>
        <v-row>
          <v-col
            v-for="(tech, index) in databases"
            :key="index"
            cols="auto"
            class="m-0 p-0"
            style="padding: 0; margin: 0.5rem 0"
          >
            <v-btn
              @click="toggleChip(tech)"
              :color="selectedChips.includes(tech) ? 'tertiary' : 'four'"
              class="m-0"
              variant="flat"
              rounded
            >
              {{ tech }}
              <v-icon
                :icon="selectedChips.includes(tech) ? 'mdi-close' : 'mdi-check'"
                end
              ></v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <!-- !! -->

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

const toggleChip = (language) => {
  if (selectedChips.value.includes(language)) {
    selectedChips.value = selectedChips.value.filter(
      (item) => item !== language
    );
  } else {
    selectedChips.value.push(language);
  }
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
h2 {
  display: inline-block;
  border-bottom: 3px solid tertiary; /* Uses Vuetify theme color */
  padding-bottom: 5px;
}
h1 {
  color: secondary;
}
</style>
