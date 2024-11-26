import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Projects from "./pages/Projects/Projects.jsx";
import App from "./pages/App/App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
