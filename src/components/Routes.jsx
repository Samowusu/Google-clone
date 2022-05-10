import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Footer from "./Footer";
import Results from "./Results";

const Routes = () => {
  let element = useRoutes([
    {
      path: "/news",
      element: <Results />,
    },
    {
      path: "/image",
      element: <Results />,
    },
    {
      path: "/videos",
      element: <Results />,
    },
    {
      path: "/search",
      element: <Results />,
    },
    {
      path: "*",
      element: <Navigate to={"/search"} replace />,
    },
  ]);
  return <div className="p-4">{element}</div>;
};

export default Routes;
