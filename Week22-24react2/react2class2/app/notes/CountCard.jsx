import { useContext } from "react";
import { CountContext, CountDispatchContext } from "../context/ReducerContext";

function CountCard() {
  const count = useContext(CountContext);
  const dispatch = useContext(CountDispatchContext);
  return (
    <div className="m-3">
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="w-11 bg-red-300 rounded-lg m-2"
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="w-11 bg-red-300 rounded-lg m-2"
      >
        +
      </button>
    </div>
  );
}

export default CountCard;
