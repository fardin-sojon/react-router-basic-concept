import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";
import RootLayout from "./Layouts/RootLayout.jsx";
import PlantDetails from "./Pages/PlantDetails.jsx";
import axios from "axios";
import LoadingSpinner from "./Components/LoadingSpinner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: ()=>fetch('https://openapi.programming-hero.com/api/plants'),
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/plant-details/:id",
        loader: ({params})=> axios(`https://openapi.programming-hero.com/api/plant/${params.id}`),
        Component: PlantDetails
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
