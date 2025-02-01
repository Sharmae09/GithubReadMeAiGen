<template>
  <v-sheet
    class="d-flex justify-center align-center flex-column"
    height="90vh"
    width="100vw"
    color="primary"
  >
    <div>
      <h1>Donate</h1>
    </div>
    <v-container>
      <v-btn @click="Prev">Prev</v-btn>
      <v-btn @click="Next">Next</v-btn>
    </v-container>
  </v-sheet>
</template>
<script setup>
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
</script>
