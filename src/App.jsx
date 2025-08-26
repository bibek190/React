import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Error from "./components/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
