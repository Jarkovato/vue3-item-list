import { GetterTree } from "vuex";

import {
  ElementsState,
  StateInterface,
  ActionHistory,
  History
} from "@/interfaces/interfaces";

const getters: GetterTree<ElementsState, StateInterface> = {
  actionsHistoryByType(state: ElementsState) {
    return (historyType: "all" | "add" | "remove"): ActionHistory[] => {

      const history: History = {
        all: state.actionsHistory,
        add: state.actionsHistory.filter((rec) => rec.type === "add"),
        remove: state.actionsHistory.filter((rec) => rec.type === "remove")
      };

      return history[historyType] || [];
    };
  }
};

export default getters;
