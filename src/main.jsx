import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Projects from "./pages/Projects/Projects.jsx";
import App from "./pages/App/App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UIUXPage from "./pages/UI-UX/UI-UX.jsx";
import IllustrationsPage from "./pages/Illustrations/Illustrations.jsx";
import WebDevPage from "./pages/Web-dev/Web-dev.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Illustrations",
    element: <IllustrationsPage />,
  },
  {
    path: "/UI-UX",
    element: <UIUXPage />,
  },
  {
    path: "/Web-development",
    element: <WebDevPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
