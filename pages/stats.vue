<template>
  <v-sheet
    class="d-flex justify-center align-center flex-column"
    height="90vh"
    width="100vw"
    color="primary"
  >
    <div>
      <h1>Flex your github stats</h1>
    </div>
    <v-container>
      <!-- GitHub Stats Card -->
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            :src="
              'https://github-readme-stats.vercel.app/api?username=' +
              username +
              '&show_icons=true&count_private=true'
            "
            alt="GitHub Stats Card"
          ></v-img>
        </v-col>

        <!-- Top Languages -->
        <v-col cols="12" md="6">
          <v-img
            :src="
              'https://github-readme-stats.vercel.app/api/top-langs?username=' +
              username +
              '&layout=compact'
            "
            alt="Top Languages Card"
          ></v-img>
        </v-col>
      </v-row>

      <!-- GitHub Streak -->
      <v-row>
        <v-col cols="12">
          <v-img
            :src="
              'https://github-readme-stats.vercel.app/api/streak?user=' +
              username
            "
            alt="GitHub Streak Stats"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-btn @click="Prev">Prev</v-btn>
      <v-btn @click="Next">Next</v-btn>
    </v-container>
  </v-sheet>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const username = ref("sharmae09");
// Use the router
const router = useRouter();
const Next = () => {
  router.push("/results");
};

const Prev = () => {
  router.push("/socials");
};
</script>
