import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
const App = lazy(() => import("./App.jsx"));
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </BrowserRouter>,
);
