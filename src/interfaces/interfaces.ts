//for router link
export interface Link {
  id: number;
  title: string;
  route: string;
  parameters?: string;
}
//for elements list
export interface Element {
  userId: number;
  id: number;
  title: string;
  body: string;
}

//for vuex
export interface RoutesState {
  routes: Link[];
}
export interface ElementsState {
  elements: Element[];
  choosedElements: Element[];
  actionsHistory: ActionHistory[];
}
export interface StateInterface {
  routes: RoutesState;
  elements: ElementsState;
}
export interface ActionHistory {
  element: Element;
  type: string;
  time: string;
}

export interface History {
  all?: ActionHistory[];
  add?: ActionHistory[];
  remove?: ActionHistory[];
}
