import { RoutesState } from "@/interfaces/interfaces";

function state(): RoutesState {
  return {
    routes: [
      { id: 1, title: "Главная", route: "/" },
      { id: 2, title: "История", route: "/history", parameters: "/all" },
      {
        id: 3,
        title: "История добавлений",
        route: "/history",
        parameters: "/add"
      },
      {
        id: 4,
        title: "История удалений",
        route: "/history",
        parameters: "/remove"
      }
    ],
  };
}

export default state;
