import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { StateInterface } from "@/interfaces/interfaces";

import routesModule from "./routes/index";
import elementsModule from "./elements/index";

export const key: InjectionKey<Store<StateInterface>> = Symbol();

export const store = createStore<StateInterface>({
  modules: {
    routes: routesModule,
    elements: elementsModule,
  }
});
