<template>
  <div class="elements-wrapper">
    <div class="elements-search">
      <input
        class="elements-search__input"
        type="search"
        placeholder="Искать элемент"
        v-model="searchQuery"
      />
    </div>
    <div class="elements">
      <ul class="elements-list">
        <transition-group name="fade">
          <li
            class="elements-item"
            v-show="!elements.length"
            :key="'not-found'"
          >
            <span
              class="elements-item__name not-found"
              v-show="!elements.length"
            >
              Не найдено подходящих элементов
            </span>
          </li>
          <li class="elements-item" v-for="item in elements" :key="item.id">
            <span class="elements-item__name">{{ item.title }}</span>
            <button
              class="elements-item__btn"
              title="Добавить"
              @click="store.commit('addToChoosedElements', item)"
            >
              +
            </button>
          </li>
        </transition-group>
      </ul>
      <ul class="elements-list">
        <transition-group name="fade">
          <li
            class="elements-item"
            v-show="!choosedElements.length"
            :key="'not-found'"
          >
            <span class="elements-item__name not-found">
              Добавьте элементы из списка
            </span>
          </li>
          <li
            class="elements-item"
            v-for="item in choosedElements"
            :key="item.id"
          >
            <span class="elements-item__name">{{ item.title }}</span>
            <button
              class="elements-item__btn delete-btn"
              title="Удалить"
              @click="store.commit('addToElements', item)"
            >
              &mdash;
            </button>
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
//base
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store/index";
//ts
import { Element } from "@/interfaces/interfaces";
//npm
import { useLoading } from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default defineComponent({
  name: "ElementsList",
  setup() {
    const searchQuery = ref("");
    const store = useStore(key);
    const elements = computed(() => store.state.elements.elements);

    const choosedElements = computed(
      () => store.state.elements.choosedElements
    );

    const elementsMatchingSearchQuery = computed(() => {
      return elements.value.filter((element: Element) => {
        return element.title
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());
      });
    });

    const choosedElementsMatchingSearchQuery = computed(() => {
      return choosedElements.value.filter((element: Element) => {
        return element.title
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());
      });
    });

    if (!elements.value.length && !choosedElements.value.length) {
      const $loading = useLoading();
      const loader = $loading.show({
        // Optional parameters
        color: "#00897B",
        loader: "spinner",
        width: 150,
        height: 150
      });

      store.dispatch("requestElements").finally(() => loader.hide());
    }

    return {
      choosedElements: choosedElementsMatchingSearchQuery,
      searchQuery,
      elements: elementsMatchingSearchQuery,
      store
    };
  }
});
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.elements-wrapper {
  height: 100%;
}

.elements {
  display: flex;
  height: 100%;
}

.elements-list {
  width: 100%;
  padding: 1rem;
  margin: 0;
  list-style: none;
  border-right: 1px solid $border-color;
  border-left: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  margin-bottom: 2rem;
  transition: all ease 0.5s;
}

.elements-list:first-child {
  border-right: 0px solid $border-color;
}

.elements-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.elements-item__name {
  padding: 1rem;
}

.elements-item__name.not-found {
  color: gray;
  margin-bottom: calc(100vh - 200px);
}

.elements-item__btn {
  width: 40px;
  min-width: 40px;
  height: 40px;
  min-height: 40px;
  border-radius: 40px;
  background-color: transparent;
  border: 1px solid transparent;
  color: #000;
  font-size: 25px;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    border: 1px solid $green-color;
  }
}

.elements-item__btn.delete-btn {
  font-size: 16px;
  &:hover {
    border: 1px solid #f44336;
  }
}

.elements-search {
  border: 1px solid $border-color;
  border-top: none;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.elements-search__input {
  width: 100%;
  max-width: 600px;
  padding: 1rem 1rem;
  border: 1px solid $border-color;
  color: #000;
  font-weight: bold;
  outline: none;
  &:hover {
    border-color: $green-color;
  }
}

@media screen and (max-width: 500px) {
  .elements-list,
  .elements-item__name,
  .elements-search__input {
    padding: 0.5rem;
  }

  .elements-item__btn {
    width: 20px;
    min-width: 20px;
    height: 20px;
    min-height: 20px;
    border-radius: 20px;
    font-size: 12px;
  }

  .elements-item__btn.delete-btn {
    font-size: 8px;
  }
}
</style>
