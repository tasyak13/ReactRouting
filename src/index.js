import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from './components/Menu';
import Contacts from './pages/Contacts';
import Users from './pages/Users';
import User from './pages/User';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />
  },
  {
    path: "/users",
    element: <Users />
    ,
  },
  {
    path: "/contact-us",
    element: <Contacts />
    ,
  },
  {
    path: "/user/:userID",
    element: <User />
    ,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider basename="/" router={router}>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
