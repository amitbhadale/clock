import React, { useEffect, useState } from "react";

function Clock() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (sec >= 60) {
      setSec(0);
      setMin((prevMin) => prevMin + 1);
    }
  }, [sec]);

  useEffect(() => {
    if (min === 60) {
      setMin(0);
      setHr((prevHr) => prevHr + 1);
    }
  }, [min]);

  return (
    <div>
      <h1>Clock</h1>
      <h1>
        {hr.toString().length === 1 ? 0 : ""}
        {hr}:{min.toString().length === 1 ? 0 : ""}
        {min}:{sec.toString().length === 1 ? 0 : ""}
        {sec}
      </h1>
    </div>
  );
}

export default Clock;
