import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages";
import ErrorPage from "./error";
import "./App.css";

const Page1 = React.lazy(() => import("./pages/page1"));
const Page2 = React.lazy(() => import("./pages/page2"));
const Page3 = React.lazy(() => import("./pages/page3"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Page1 /> },
        { path: "page2", element: <Page2 /> },
        { path: "page3", element: <Page3 /> },
      ],
    },
  ],
  {
    basename: "/",
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
