import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import 'semantic-ui-css/semantic.min.css'
import "./static/index.css"


import NotFound from "./notFound";
import LoginPage from "./login";
import RegisterPage from "./register"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    errorElement:<NotFound/>,
    
  },
  {
    path: '/login',
    element: <LoginPage/>,

  },
  {
    path: '/register',
    element: <RegisterPage/>,

  }

]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);