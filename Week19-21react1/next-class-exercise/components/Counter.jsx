import { useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);

  function handleMinus() {
    setNum(num - 1);
  }

  function handleAdd() {
    setNum(num + 1);
  }

  return (
    <div>
      <button onClick={handleMinus} className="bg-purple-400 px-2">
        -1
      </button>
      <span className="px-2">{num}</span>
      <button onClick={handleAdd} className="bg-purple-400 px-2">
        +1
      </button>
    </div>
  );
}

export default Counter;
