<template>
  <div>
    <app-navigation :routes="routes" />
    <div class="container">
      <elements-list />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store/index";

import ElementsList from "@/components/ElementsList.vue";
import AppNavigation from "@/components/AppNavigation.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ElementsList,
    AppNavigation
  },
  setup() {
    const store = useStore(key);
    return { routes: computed(() => store.state.routes.routes) };
  }
});
</script>
