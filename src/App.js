import react, { useState } from "react";
import Clicker from "./Clicker";

const App = ({ children }) => {
  const [hasClicker, setHasClicker] = useState(true);

  const toggleClicker = () => {
    setHasClicker(!hasClicker);
  };

  return (
    <>
      {children}
      <button onClick={toggleClicker}>
        {hasClicker ? "Hide" : "Show"} Clicker
      </button>
      {hasClicker && (
        <>
          <Clicker
            keyName="countB"
            color={`hsl(${Math.random() * 360}deg,100%,70%)`}
          />
          <Clicker
            keyName="countA"
            color={`hsl(${Math.random() * 360}deg,100%,70%)`}
          />
          <Clicker
            keyName="countC"
            color={`hsl(${Math.random() * 360}deg,100%,70%)`}
          />
        </>
      )}
    </>
  );
};
export default App;
