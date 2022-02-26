import { ActionTree } from "vuex";
import { fetchElements } from "@/helpers/api";
import { ElementsState, StateInterface } from "@/interfaces/interfaces";

const ELEMENTS_URL = "https://jsonplaceholder.typicode.com/posts";

const actions: ActionTree<ElementsState, StateInterface> = {
  requestElements({ commit }) {
    fetchElements(ELEMENTS_URL).then((elements) => {
      commit("updateElements", elements);
    });
  }
};

export default actions;
