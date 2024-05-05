import React from 'react'
import "@assets/css/main.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello World</div>
    },
  ]);

  return <RouterProvider router={router} />
}

export default App