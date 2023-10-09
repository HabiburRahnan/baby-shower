import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import { ThemeProvider } from "@material-tailwind/react";
import Register from "./Pages/Register/Register";
import ViewsDetails from "./Pages/ViewsDetails/ViewsDetails";
import ErrorPage from "./Pages/Errorpage/ErrorPage";
import AuthProvider from "./Provider/AuthProvider";
import PrivetRoute from "./Provider/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch(`/baby-shower.json`),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`/baby-shower.json`),
      },
      {
        path: "/about",
        element: (
          <PrivetRoute>
            <About></About>
          </PrivetRoute>
        ),
      },
      {
        path: "/service",
        element: (
          <PrivetRoute>
            <Services></Services>
          </PrivetRoute>
        ),
        loader: () => fetch(`/baby-shower.json`),
      },
      {
        path: "/views/:id",
        element: (
          <PrivetRoute>
            <ViewsDetails></ViewsDetails>
          </PrivetRoute>
        ),
        loader: () => fetch(`/baby-shower.json`),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
