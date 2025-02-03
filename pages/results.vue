<template>
  <v-sheet width="100vw" color="primary" style="min-height: 90vh">
    <div class="d-flex justify-center align-center flex-column">
      <v-container width="90vw">
        <v-btn @click="Prev">Prev</v-btn>
        <v-btn @click="Next">Download</v-btn>
        <v-btn @click="copyText">
          <v-icon left>mdi-content-copy</v-icon>
          Copy
        </v-btn>

        <v-snackbar v-model="snackbar" timeout="2000">
          Code copied!
        </v-snackbar>
      </v-container>
      <!-- <v-container > -->
      <div class="aurora-card-wrapper" width="90vw">
        <v-card
          width="80vw"
          height="70vh"
          variant="outlined"
          color="white"
          class="aurora-card"
        >
          <v-tabs
            v-model="tab"
            :items="tabs"
            align-tabs="center"
            color="white"
            height="60"
            slider-color="#f78166"
            class="d-flex justify-center"
          >
            <template v-slot:tab="{ item }">
              <v-tab
                :prepend-icon="item.icon"
                :text="item.text"
                :value="item.value"
                class="text-none"
              ></v-tab>
            </template>

            <template v-slot:item="{ item }">
              <v-tabs-window-item :value="item.value" class="pa-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, ratione debitis quis est labore voluptatibus! Eaque
                cupiditate minima, at placeat totam, magni doloremque veniam
                neque porro libero rerum unde voluptatem!
              </v-tabs-window-item>
            </template>
          </v-tabs>
        </v-card>
      </div>
    </div>
    <!-- </v-container> -->
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

const textToCopy = ref("Hello, this is a sample text!");
const snackbar = ref(false);

const copyText = async () => {
  try {
    await navigator.clipboard.writeText(textToCopy.value);
    snackbar.value = true;
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};

// Reactive data properties
const tab = ref("tab-1");
const tabs = ref([
  {
    icon: "mdi-book-open-page-variant",
    text: "Preview",
    value: "tab-1",
  },
  {
    icon: "mdi-handshake-outline",
    text: "Code",
    value: "tab-2",
  },
  {
    icon: "mdi-license",
    text: "Edit Code",
    value: "tab-3",
  },
]);
</script>
<style scoped>
.search-bar {
  max-width: 500px;
  margin: 0 auto;
}
.v-container {
  overflow: auto; /* Allows scrolling if content overflows */
}
.v-sheet {
  overflow: auto; /* Allows scrolling if content overflows */
}
</style>

<!-- <script setup>
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
<script>
export default {
  data: () => ({
    tab: "tab-1",
    tabs: [
      {
        icon: "mdi-book-open-page-variant",
        text: "Preview",
        value: "tab-1",
      },
      {
        icon: "mdi-handshake-outline",
        text: "Readme",
        value: "tab-2",
      },
      {
        icon: "mdi-license",
        text: "Edit Readme",
        value: "tab-3",
      },
    ],
  }),
};
</script> -->
