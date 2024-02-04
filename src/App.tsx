import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Cursor } from "./components";
import React from "react";

function App() {
  return (
    <>
      <div className="bg-customBackgroud font-calibre px-6 min-h-screen">
        <RouterProvider router={router} />
      </div>
      <Cursor />
    </>
  );
}

export default App;
