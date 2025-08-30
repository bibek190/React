import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Create from "./components/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
