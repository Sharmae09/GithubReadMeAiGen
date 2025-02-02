<template>
  <v-sheet class="pt-8" width="100vw" color="primary" style="min-height: 100vh">
    <div class="d-flex justify-center align-center flex-column">
      <div>
        <h1>Socials</h1>
      </div>
      <v-form>
        <v-container>
          <v-row>
            <v-col
              class="d-flex"
              v-for="(social, index) in socialMedias"
              :key="index"
              cols="12"
              sm="6"
            >
              <v-text-field
                :label="`${social.name} Username`"
                :placeholder="`Enter your ${social.name} Username`"
                variant="underlined"
                :prepend-outer-icon="social.icon"
                color="secondary"
              >
              </v-text-field>
              <v-icon :icon="social.icon" end></v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-container>
        <v-btn @click="Prev">Prev</v-btn>
        <v-btn @click="Next">Next</v-btn>
      </v-container>
    </div>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const Next = () => {
  router.push("/stats");
};

const Prev = () => {
  router.push("/skills");
};
// Use the router
const router = useRouter();

const socialMedias = ref([
  { name: "Behance", icon: "mdi-behance" },
  { name: "Medium", icon: "mdi-medium" },
  { name: "Quora", icon: "mdi-quora" },
  { name: "Facebook", icon: "mdi-facebook" },
  { name: "Twitter", icon: "mdi-twitter" },
  { name: "Instagram", icon: "mdi-instagram" },
  { name: "LinkedIn", icon: "mdi-linkedin" },
  { name: "GitHub", icon: "mdi-github" },
  { name: "YouTube", icon: "mdi-youtube" },
  { name: "TikTok", icon: "mdi-tiktok" },
  { name: "Reddit", icon: "mdi-reddit" },
  { name: "Stackoverflow", icon: "mdi-stackoverflow" },
  { name: "Twitch", icon: "mdi-twitch" },
  { name: "Discord", icon: "mdi-discord" },
]);
</script>
