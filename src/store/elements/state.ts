import { ElementsState } from "@/interfaces/interfaces";

function state(): ElementsState {
  return {
    elements: [],
    choosedElements: [],
    actionsHistory: []
  };
}

export default state;
