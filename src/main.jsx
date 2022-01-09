import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import GlobalStyle from "./globalStyle";
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle bg="#1e1e1e" color="white" />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
