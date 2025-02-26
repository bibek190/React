import "./style.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <h1 className="main-title">I am a Web developer</h1>
    <h2>Hey React dev developer</h2>
    <h3>Bigboss is here</h3>
    <button>
      <span>C</span>lick
    </button>
    <input type="checkbox" id="the-checkbox"></input>
    <label htmlFor="the-checkbox">That checkbox</label>
  </>
);
