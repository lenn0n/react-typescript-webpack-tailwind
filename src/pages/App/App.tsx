import React from 'react'
import { Provider } from "react-redux";
import store from '@store/store';
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

  return <Provider store={store}> <RouterProvider router={router} /></Provider>
}

export default App