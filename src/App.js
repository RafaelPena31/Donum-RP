
import React from "react";
import { HomePage } from "./screens/homepage";
import { BrowserRouter } from "react-router-dom";
import "./styles/standart.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomePage />
      </div>
    </BrowserRouter>
  )
}
export default App;
