import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HOME, PROJECTS, RESUME } from "./constants/path";
import { HomePage, ProjectsPage, ResumePage } from "./pages";

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
  {
    path: RESUME,
    element: <ResumePage />,
  },
]);

export default router;
