import React from "react";
import ReactDOM from "react-dom";
import Favicon from "react-favicon";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Favicon url="https://www.iconninja.com/files/749/200/1005/globe-world-earth-planet-icon.png" />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
