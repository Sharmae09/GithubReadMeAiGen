<template>
  <v-sheet class="aurora-nav" width="100vw" height="7vh">
    <v-container class="d-flex align-center justify-space-between h-100">
      <h3 class="navbar-title text-black text-bold">Profile Generator</h3>
    </v-container>
  </v-sheet>
</template>

<script setup></script>

<style scoped>
/* Aurora Navbar */
.aurora-nav {
  position: relative;
  background: linear-gradient(
    45deg,
    rgba(111, 0, 255, 0.858),
    rgba(0, 255, 255, 0.858),
    rgba(0, 255, 123, 0.858),
    rgba(255, 255, 0, 0.858)
  );
  background-size: 400% 400%;
  animation: aurora-gradient 20s infinite linear;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

/* Animated gradient effect */
@keyframes aurora-gradient {
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

/* Navbar title */
.navbar-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  z-index: 1;
}
</style>
