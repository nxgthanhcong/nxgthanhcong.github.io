import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import { Cursor } from "./components";

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
