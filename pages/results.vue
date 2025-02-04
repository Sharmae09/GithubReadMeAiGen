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
          min-height="70vh"
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
                <component :is="getComponent(item.value)" />
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import Markdown from "~/components/markdownV.vue";
import RawCode from "~/components/rawcodeV.vue";

// Use the router
const router = useRouter();
const Next = () => {
  router.push("/results");
};
const Prev = () => {
  router.push("/stats");
};
// const textToCopy = ref("Hello, this is a sample text!");

const tab = ref("tab-1");
const tabs = ref([
  {
    icon: "mdi-book-open-page-variant",
    text: "Preview",
    value: "tab-1",
    component: Markdown,
  },
  {
    icon: "mdi-handshake-outline",
    text: "Code",
    value: "tab-2",
    component: RawCode,
  },
  {
    icon: "mdi-license",
    text: "Edit Code",
    value: "tab-3",
    content: " THIS IS THE EDIT CODE CONTENT",
  },
]);
// Function to dynamically return the correct component
const getComponent = (value) => {
  const tab = tabs.value.find((t) => t.value === value);
  return tab ? tab.component : null;
};
const snackbar = ref(false);
// const copyText = async () => {
//   try {
//     const markdownText = await readmeMarkdown.value; // Ensure it's a string
//     await navigator.clipboard.writeText(markdownText);
//     snackbar.value = true;
//   } catch (err) {
//     console.error("Failed to copy:", err);
//   }
// };
</script>
<style scoped>
.search-bar {
  max-width: 500px;
  margin: 0 auto;
}
.v-container {
  overflow: auto;
}
.v-sheet {
  overflow: auto;
}
</style>
