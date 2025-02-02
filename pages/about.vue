<template>
  <v-sheet
    class="d-flex justify-center align-center flex-column"
    height="90vh"
    width="100vw"
    color="primary"
  >
    <h1 class="text-center" style="color: #fec5fb">ABOUT ME</h1>

    <div>
      <v-container class="d-flex justify-center align-center">
        <h2>Tell us a bit about yourself</h2>

        <div class="light-bulb-wrapper">
          <v-btn
            class="light-bulb"
            :class="{ on: isOn }"
            @click="toggleLight"
            icon
            size="small"
            elevation="10"
          >
            <v-icon size="30" :color="isOn ? 'yellow' : 'grey-darken-2'">
              {{ isOn ? "mdi-lightbulb-on" : "mdi-lightbulb-off" }}
            </v-icon>
          </v-btn>
        </div>
      </v-container>
      <div class="aurora-card-wrapper">
        <v-textarea
          class="aurora-vtext"
          v-model="aboutme"
          variant="outlined"
          required
          no-resize
          :placeholder="`🔭 I’m currently working on 
👯 I’m looking to collaborate on 
🤝 I’m looking for help with 
🌱 I’m currently learning 
💬 Ask me about 
⚡ Fun fact`"
          auto-grow
        ></v-textarea>
      </div>
      <v-container>
        <v-btn @click="Prev">Prev</v-btn>
        <v-btn @click="Next">Next</v-btn>
      </v-container>
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

// Light bulb code
const isOn = ref(false);

const toggleLight = () => {
  isOn.value = !isOn.value;
};
</script>

<style scoped>
/* Light bulb wrapper to center the button */
.light-bulb-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Small light bulb button style */
.light-bulb {
  background: black !important;
  border-radius: 50%;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

/* Glowing effect when light is on */
.on {
  box-shadow: 0 0 25px rgba(255, 255, 0, 0.8);
  animation: glow 1s infinite alternate;
}

/* Wrapper to handle the glow effect */
.aurora-card-wrapper {
  position: relative; /* Ensures proper layering */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 55vh;
}

/* Fixing textarea height issue */
.aurora-vtext {
  position: relative;
  background: rgba(0, 0, 0, 0.8); /* Dark background to stand out */
  border: 2px solid rgba(255, 166, 0, 0.676); /* Light border for contrast */
  color: white;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  min-height: 100%; /* Ensures full height */
  box-shadow: 0 0 15px rgba(255, 1, 1, 0.3);
  padding: 10px !important; /* Fix extra padding */
}

/* Fixing Vuetify v-textarea internal spacing */
.aurora-vtext.v-input {
  margin-bottom: 0 !important; /* Remove extra spacing */
  padding-bottom: 0 !important;
}

.aurora-vtext .v-input__control {
  min-height: 100% !important;
  height: 100% !important;
  display: flex;
  align-items: stretch;
}

/* Aurora Glow Behind the Textarea */
.aurora-card-rapper::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
    45deg,
    rgba(255, 0, 255, 0.3),
    rgba(0, 255, 255, 0.607),
    rgba(0, 255, 0, 0.797),
    rgba(255, 255, 0, 0.74)
  );
  border-radius: 20px;
  animation: aurora-glow 6s infinite linear;
  filter: blur(3rem);
  z-index: -1; /* Moves it behind */
}

/* Aurora Glow Animation */
@keyframes aurora-glow {
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
