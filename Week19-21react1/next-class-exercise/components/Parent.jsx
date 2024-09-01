import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [bgColor, setBgColor] = useState("");

  return <Child bgColor={bgColor}></Child>;
}

export default Parent;
