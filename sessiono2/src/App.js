import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./Component/AppLayoutComponent";
import ErrorComponent from "./Component/ErrorComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserProfileComponent from "./Component/UserProfile";
import CardBody from "./Component/CardComponent"

const root = ReactDOM.createRoot(document.getElementById("root"));

const routeConfig = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/user/:userName",
        element: <UserProfileComponent />,
      },
      {
        path: "/search",
        element: <CardBody/>,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routeConfig);
root.render(<RouterProvider router={appRouter} />);
