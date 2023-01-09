import App from "./app";
import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

window.initMap = function () {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
