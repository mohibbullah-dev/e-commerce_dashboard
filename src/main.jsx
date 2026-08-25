import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
const App = lazy(() => import("./App.jsx"));
import { Provider } from "react-redux";
import store from "./store/index.js";
import toast, { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
      <Toaster
        toastOptions={{
          position: "top-center",
          style: { backgroundColor: "#283046", color: "white" },
        }}
      />
    </Suspense>
  </Provider>,
);
