import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { MatchData } from './components/MatchData/MatchData';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App/>,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: '/match/:matchId',
  //   element: <MatchData />,
  // }
// ]);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);


