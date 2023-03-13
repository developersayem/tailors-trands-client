import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Route/Route";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
