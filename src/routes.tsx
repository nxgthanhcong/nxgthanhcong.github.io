import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { HOME } from "./constants/path";

const router = createBrowserRouter([
    {
        path: HOME,
        element: <Home />,
        children: [
            {
              
            },
          ],
    }
])

export default router;