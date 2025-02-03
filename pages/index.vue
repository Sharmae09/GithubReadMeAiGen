<template>
  <v-sheet
    class="d-flex align-center justify-center"
    height="90vh"
    width="100vw"
    color="primary"
  >
    <v-container class="d-flex" max-width="90vw">
      <div class="aurora-card-wrapper mr-8">
        <v-card
          width="53vw"
          height="70vh"
          variant="outlined"
          color="white"
          class="d-flex align-center justify-center aurora-card"
        >
        </v-card>
      </div>
      <v-container>
        <h1 class="aurora-text">Github Profile AI Generator</h1>
        <v-text>
          Let people know how amazing you are. <br />
          Showcase your skill and project <br />
          Enter your github Username.
        </v-text>
        <v-text-field
          class="pt-4"
          v-model="username"
          :rules="nameRules"
          label="https://github.com/username"
          required
          variant="outlined"
          max-width="300px"
          color="secondary"
        ></v-text-field>
        <v-btn
          class="mt-4"
          color="orange"
          rounded
          size="large"
          @click="getStarted"
          variant="outlined"
          >Enter Username</v-btn
        >
      </v-container>
    </v-container>
  </v-sheet>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
// const username = ref("");
const showAlertComponent = ref(false);

const nameRules = [
  (v) => !!v || "Username is required", // ensures username is not empty
];

const username = useState("username", () => "");

// Handle form submission
const getStarted = () => {
  router.push("/about");
};
</script>

<style scoped>
/* Wrapper to handle the glow effect */
.aurora-card-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Main card with solid background */
.aurora-card {
  position: relative;
  background: black;
  border-radius: 12px;
  padding: 20px;
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Aurora Glow Surrounding the Card */
.aurora-card-wrapper::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 12px;
  padding: 0.1rem; /* Expands the glow outside the card */
  background: linear-gradient(
    45deg,
    rgba(0, 255, 255, 0.6),
    rgba(0, 255, 0, 0.6),
    rgba(255, 255, 0, 0.6)
  );
  background-size: 370% 370%;
  animation: aurora-glow 60s infinite linear;
  filter: blur(1rem);
  z-index: 0;
}

.aurora-text {
  line-height: 3rem;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(90deg, #ff7300, #ff0077, #ffcc00, #ffbf00);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: aurora 20s infinite linear;
}

@keyframes aurora {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
