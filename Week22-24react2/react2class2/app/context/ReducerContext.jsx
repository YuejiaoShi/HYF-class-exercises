import { createContext } from "react";

export default function CountReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error("Unknown action type");
  }
}
export const CountContext = createContext(null);
export const CountDispatchContext = createContext(null);
