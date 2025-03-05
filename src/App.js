import react, { useState } from "react";
import Clicker from "./Clicker";

const App = ({ children }) => {
  const [hasClicker, setHasClicker] = useState(true);
  const [count, setCount] = useState(0);

  const toggleClicker = () => {
    setHasClicker(!hasClicker);
  };

  const increments = () => {
    setCount(count + 1);
  };

  return (
    <>
      {children}
      <div>Total Count : {count}</div>
      <button onClick={toggleClicker}>
        {hasClicker ? "Hide" : "Show"} Clicker
      </button>
      {hasClicker && (
        <>
          <Clicker
            keyName="countB"
            color={`hsl(${Math.random() * 360}deg,100%,70%)`}
            increments={increments}
          />
          <Clicker
            keyName="countA"
            color={`hsl(${Math.random() * 360}deg,100%,70%)`}
            increments={increments}
          />
          <Clicker
            keyName="countC"
            color={`hsl(${Math.random() * 360}deg,100%,70%)`}
            increments={increments}
          />
        </>
      )}
    </>
  );
};
export default App;
