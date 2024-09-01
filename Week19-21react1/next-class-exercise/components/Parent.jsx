import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [bgColor, setBgColor] = useState(false);
  let color = bgColor ? "bg-red-300" : "bg-blue-300";
  function handleChange() {
    setBgColor(!bgColor);
  }

  return (
    <div>
      <button onClick={handleChange} className="bg-stone-300">
        Change Color 👇
      </button>
      <Child bgColor={color}></Child>
    </div>
  );
}

export default Parent;
