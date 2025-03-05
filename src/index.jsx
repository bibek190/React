import { useState } from "react";
import "./style.css";
import { createRoot } from "react-dom/client";
import App from "./App.js";

const root = createRoot(document.querySelector("#root"));

const name = `My App`;

root.render(
  <>
    <h3 className="cute-style">{name}</h3>
    <App>
      <h1>My first React App</h1>
      <h2>And a fance subtitle</h2>
    </App>
  </>
);
