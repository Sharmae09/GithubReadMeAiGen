<template>
  <v-sheet
    class="d-flex justify-center align-center flex-column"
    height="100vh"
    width="100vw"
    color="primary"
  >
    <h1 class="text-center" style="color: #fec5fb">ABOUT ME</h1>

    <div>
      <h2>Fil the Blanks</h2>
      <v-text-field
        class="custom-size"
        v-model="firstname"
        :label="disabled"
        required
        variant="outlined"
      ></v-text-field>
      <v-btn @click="Prev">Prev</v-btn>
      <v-btn @click="Next">Next</v-btn>
    </div>
  </v-sheet>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const Next = () => {
  router.push("/skills");
};
const Prev = () => {
  router.push("/");
};
</script>
<style scoped>
.custom-size {
  width: 50vw;
  height: 60vh; /* Adjust height here */
}
</style>
