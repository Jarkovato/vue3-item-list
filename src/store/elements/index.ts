import { Module } from "vuex";
import { ElementsState, StateInterface } from "@/interfaces/interfaces";

import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const elementsModule: Module<ElementsState, StateInterface> = {
  state,
  actions,
  mutations,
  getters
};

export default elementsModule;
