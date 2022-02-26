import { Module } from "vuex";
import { RoutesState, StateInterface} from "@/interfaces/interfaces";

import state from "./state";

const routesModule: Module<RoutesState, StateInterface> = {
  state
};

export default routesModule;

