import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HOME, PROJECTS } from "./constants/path";
import { HomePage, ProjectsPage } from "./pages";

const router = createBrowserRouter([
  {
    path: HOME,
    element: <HomePage />,
    children: [{}],
  },
  {
    path: PROJECTS,
    element: <ProjectsPage />,
    children: [{}],
  },
]);

export default router;
