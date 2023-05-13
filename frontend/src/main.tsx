import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root';
import Error from './Error';
import Search from './routes/Search';
import Champions from './routes/Champions';
import Items from './routes/Items';
import Leaderboards from './routes/Leaderboards';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "champions",
        element: <Champions />,
      },
      {
        path: "items",
        element: <Items />,
      },
      {
        path: "leaderboards",
        element: <Leaderboards />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
