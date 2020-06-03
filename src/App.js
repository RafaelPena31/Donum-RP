import React from "react";
import Iphone from "./components/organims/Iphone";
import { BrowserRouter } from "react-router-dom";
import "./styles/standart.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Iphone />
      </div>
    </BrowserRouter>
  );
}

export default App;
