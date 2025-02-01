<template>
  <v-sheet
    class="d-flex justify-center align-center flex-column"
    width="100vw"
    color="primary"
  >
    <h1 class="text-center">Skills</h1>

    <div>
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

      <!-- Languages Section -->
      <h2>Languages</h2>
      <v-container>
        <v-row>
          <v-col
            v-for="(language, index) in programmingLanguages"
            :key="index"
            cols="auto"
          >
            <v-chip
              v-model="selectedChips"
              closable
              @click="handleChipClick(language)"
            >
              {{ language }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>

      <!-- Hosting SaaS Section -->
      <h2>Hosting SaaS</h2>
      <v-container>
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
              {{ tech }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>

      <!-- Frameworks, Platforms & Libraries Section -->
      <h2>Frameworks, Platforms & Libraries</h2>
      <v-container>
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
      <h2>Servers</h2>
      <v-container>
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
      <h2>Databases / ORM</h2>
      <v-container>
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
      <v-btn @click="Prev">Prev</v-btn>
      <v-btn @click="Next">Next</v-btn>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      selectedChips: [],
      programmingLanguages: [
        "JavaScript",
        "Python",
        "Java",
        "C#",
        "Ruby",
        "Go",
        "PHP",
        "Swift",
        "TypeScript",
        "Kotlin",
      ],
      hostingSaaSProviders: [
        "Heroku",
        "Netlify",
        "Vercel",
        "Firebase",
        "AWS",
        "Azure",
        "Google Cloud",
        "DigitalOcean",
      ],
      frameworksPlatformsLibraries: [
        "React",
        "Vue.js",
        "Angular",
        "Node.js",
        "Django",
        "Spring Boot",
        "Laravel",
        "Express.js",
        "Next.js",
        "Nuxt.js",
      ],
      servers: [
        "Apache HTTP Server",
        "Nginx",
        "Node.js",
        "Tomcat",
        "IIS",
        "LiteSpeed",
        "Caddy",
        "Jetty",
        "Cherokee",
        "OpenResty",
      ],
      databases: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQLite",
        "Redis",
        "MariaDB",
        "Cassandra",
        "Elasticsearch",
        "Firebase",
        "Oracle DB",
      ],
    };
  },
  methods: {
    handleChipClick(tech) {
      // Handle chip click logic
      console.log(`${tech} clicked`);
    },
    performSearch() {
      // Handle search logic
      console.log("Searching for:", this.searchQuery);
    },
    Prev() {
      // Handle prev button click
      console.log("Prev clicked");
    },
    Next() {
      // Handle next button click
      console.log("Next clicked");
    },
  },
};
</script>

<style scoped>
.search-bar {
  max-width: 500px;
  margin: 0 auto;
}
</style>
