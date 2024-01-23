import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";

function App() {
  return (
    <div className="bg-customBackgroud font-calibre">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
