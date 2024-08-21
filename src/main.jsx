import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallBack } from "./components/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorFallBack />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
