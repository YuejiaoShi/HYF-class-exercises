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
      <Child bgColor={color} handleChange={handleChange}></Child>
    </div>
  );
}

export default Parent;
