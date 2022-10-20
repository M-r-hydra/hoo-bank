// React
import React from "react";
// React
// CSS
import "./App.css";
// CSS
// Modules And Components
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components";
import Home from "./Pages/Home/Home";

// Modules And Components
const App = () => {
  return (
    <div
      className="
    box-border 
    2xl:px-36 pt-9 
    all "
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
