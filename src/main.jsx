import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Movie from "./pages/Movie.jsx";
import Actors from "./pages/Actors.jsx";
import Actor from "./pages/Actor.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "actors",

        children: [
          {
            index: true,
            element: <Actors />,
          },
          {
            path: ":actorId",
            element: <Actor />,
          },
        ],
      },
      {
        path: "movies",
        children: [
          {
            index: true,
            element: <Movies />,
          },
          {
            path: ":movieId",
            element: <Movie />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
