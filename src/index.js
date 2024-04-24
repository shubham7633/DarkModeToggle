import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import React from "react";
import App from "./App";
import { DarkModeProvider } from "./DarkModeContext.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </StrictMode>
);
