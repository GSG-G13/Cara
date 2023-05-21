import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './componets/root.jsx';
import HomeComponets from './componets/homecomponets';
import ProductDetails from './componets/productdetails.jsx';
import Cart from './componets/cart.jsx';
//import Login from './componets/auth/login.jsx';
//import Signup from './componets/auth/signup.jsx';

import './app.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomeComponets />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <Cart />,
      },
    ],
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
      </React.StrictMode>,
)
