import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Index from './pages';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
    children: [
      { index: true, element: <Page1 /> },
      { path: 'page2', element: <Page2 /> },
      { path: 'page3', element: <Page3 /> }
    ]
  },
], {
  basename: process.env.PUBLIC_URL,
});

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
