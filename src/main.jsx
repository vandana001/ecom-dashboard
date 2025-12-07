import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
// Sanity logging to confirm this file runs
console.log("main.jsx running — attempting to mount React app");

const rootEl = document.getElementById("root");
if (!rootEl) {
  console.error("No #root element found in DOM. Check index.html");
} else {
  const root = createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ThemeProvider>       {/* ✅ WRAP THE ENTIRE APP */}
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
  console.log("React mounted to #root");
}
