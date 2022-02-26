<template>
  <div class="history">
    <app-navigation :routes="routes" />
    <app-history :historyType="type" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store/index";


import AppNavigation from "@/components/AppNavigation.vue";
import AppHistory from "@/components/AppHistory.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    AppNavigation,
    AppHistory
  },
  props: {
    type: {
      type: String,
      required: true,
    }
  },
  setup() {
    const store = useStore(key);
    return { routes: computed(() => store.state.routes.routes) };
  }
});
</script>

<style lang="scss" scoped></style>
