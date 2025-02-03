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
              v-for="(social, index) in socialUsernames"
              :key="index"
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="socialUsernames[index].username"
                :label="`${social.media} Username`"
                :placeholder="`Enter your ${social.media} Username`"
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
import { useState } from "#app";
import { useRouter } from "vue-router";

// Use the router
const router = useRouter();

const Next = () => {
  router.push("/stats");
};

const Prev = () => {
  router.push("/skills");
};

// Define social media platforms using useState()
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
</script>
