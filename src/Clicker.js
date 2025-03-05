import React, { useEffect, useState } from "react";

const Clicker = ({ keyName, color, increments }) => {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem(keyName) ?? 0)
  );

  useEffect(() => {
    return () => {
      localStorage.removeItem(keyName);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(keyName, count);
    // console.log("second render");
  }, [count]);

  const increment = () => {
    setCount((value) => value + 1);
    increment();
  };

  const decrement = () => {
    count && setCount((value) => value - 1);
  };

  return (
    <>
      <h1 style={{ color }}>Count : {count}</h1>
      <button style={{ marginRight: "2rem" }} onClick={increments}>
        Add
      </button>
      <button onClick={decrement}>Minus</button>
    </>
  );
};

export default Clicker;
