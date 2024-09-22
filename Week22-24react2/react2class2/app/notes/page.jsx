"use client";
import { useReducer } from "react";
import CountReducer, {
  CountContext,
  CountDispatchContext,
} from "../context/ReducerContext";
import CountCard from "./CountCard";

function NotesPage() {
  const [count, dispatch] = useReducer(CountReducer, 0);

  return (
    <CountContext.Provider value={count}>
      <CountDispatchContext.Provider value={dispatch}>
        <CountCard />
      </CountDispatchContext.Provider>
    </CountContext.Provider>
  );
}

export default NotesPage;
