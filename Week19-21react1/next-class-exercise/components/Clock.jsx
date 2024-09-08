import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState("");

  const getCurrentTime = () =>
    `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div>
      <p>{time}</p>
    </div>
  );
}

export default Clock;
