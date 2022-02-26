<template>
  <nav class="app-navigation" v-if="routes">
    <router-link
      class="app-navigation__link"
      v-for="link in routes"
      :key="link.route"
      :to="`${link.route}${link.parameters || ''}`"
    >
      {{ link.title }}
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Link } from "@/interfaces/interfaces";

export default defineComponent({
  name: "AppNavigation",
  props: {
    routes: {
      type: Array as PropType<Link[]>
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.app-navigation {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid $border-color;
  background-color: #00897b;
}

.app-navigation__link {
  padding: 1rem;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
  transition: all ease 0.3s;
  &:not(:last-child) {
    margin-right: 1rem;
  }
  &:hover {
    color: $orange-color;
  }
}

.router-link-exact-active {
  color: $orange-color;
}

@media screen and (max-width: 500px) {
  .app-navigation {
    flex-wrap: wrap;
    // justify-content: flex-start;
  }
  .app-navigation__link {
    padding: 0.5rem;
  }
}
</style>
