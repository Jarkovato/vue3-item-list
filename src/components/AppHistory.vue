<template>
  <div class="container">
    <span class="history-table__not-found" v-if="history.length <= 0">
      Нет записей в истории перемещения элементов
    </span>
    <div class="table-wrapper">
      <table class="history-table" v-if="history.length > 0">
        <thead>
          <th class="history-table__th">Id елемента</th>
          <th class="history-table__th">Заголовок елемента</th>
          <th class="history-table__th">Операция</th>
          <th class="history-table__th">Время операции</th>
        </thead>
        <tbody>
          <tr v-for="record in history" :key="record.element.id">
            <td class="history-table__td">{{ record.element.id }}</td>
            <td class="history-table__td">{{ record.element.title }}</td>
            <td class="history-table__td" :class="record.type">
              {{ record.type === "add" ? "добавление" : "удаление" }}
            </td>
            <td class="history-table__td">{{ record.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import { useStore } from "vuex";
import { key } from "@/store/index";

export default defineComponent({
  name: "AppHistory",
  props: {
    historyType: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore(key);

    const history = computed(() => {
      return store.getters.actionsHistoryByType(props.historyType);
    });

    return { history };
  }
});
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.table-wrapper {
  max-width: 100vw;
  overflow: auto;
}

.history-table {
  margin: 2rem auto;
  border: 1px solid $border-color;
  border-collapse: collapse;
  width: 100%;
}

.history-table__not-found {
  display: block;
  text-align: center;
  color: $secondary-text;
  margin-top: 2rem;
}

.history-table__th,
.history-table__td {
  padding: 1rem;
  border: 1px solid $border-color;
  text-align: center;
}

.history-table__td {
  user-select: none;
}

.history-table__td:nth-child(2) {
  text-align: left;
}

.history-table__td.add {
  color: $green-color;
}

.history-table__td.remove {
  color: $red-color;
}

@media screen and (max-width: 500px) {
  .history-table__th,
  .history-table__td {
    padding: 0.5rem;
  }
}
</style>
