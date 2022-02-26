import { MutationTree } from "vuex";
import { ElementsState, Element } from "@/interfaces/interfaces";
import { timeNow } from "@/helpers/timeNow";

const createHistoryItem = (element: Element, type: string) => {
  return {
    element: element,
    type: type,
    time: timeNow()
  };
};

const mutations: MutationTree<ElementsState> = {
  updateElements(state: ElementsState, payload: Element[]) {
    state.elements = payload;
  },
  addToChoosedElements(state: ElementsState, payload: Element) {
    if (!state.choosedElements.some((e) => e.id === payload.id)) {
      state.choosedElements.push(payload);
      state.actionsHistory.push(createHistoryItem(payload, "add"));
      state.elements = state.elements.filter((elem) => elem.id !== payload.id);
    }
  },
  addToElements(state: ElementsState, payload: Element) {
    if (!state.elements.some((e) => e.id === payload.id)) {
      state.elements.unshift(payload);
      state.choosedElements = state.choosedElements.filter(
        (elem) => elem.id !== payload.id
      );
      state.actionsHistory.push(createHistoryItem(payload, "remove"));
    }
  }
};

export default mutations;
