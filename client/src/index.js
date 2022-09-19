import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ContextProider } from "./context/Lodder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProider>
);
