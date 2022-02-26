<template>
  <router-view />
</template>

<style lang="scss">
@import "@/styles/variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
  font-size: 16px;
}

* {
  box-sizing: border-box;
}

.container {
  max-width: 1140px;
  min-height: 100vh;
  margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
  // transition-delay: 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  transition-delay: 0s;
  opacity: 0;
}

@media screen and (max-width: 1140px) {
  .container {
    padding: 0rem 1rem;
  }

  #app {
    font-size: 14px;
  }
}

@media screen and (max-width: 500px) {
  #app {
    font-size: 12px;
  }
}
</style>
