import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/root.jsx';
import HomeComponets from './components/homecomponets';
import ProductDetails from './components/productdetails.jsx';
import ProductsComponent from './components/products/products.jsx';
import CartComponent from './components/products/cart.jsx';

import Login from './components/auth/login.jsx';
import Signup from './components/auth/signup.jsx';

import './app.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomeComponets />,
      },
      {
        path: '/products',
        element: <ProductsComponent />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
      {
        path: '/cart',
        element: <CartComponent />,
      },
      
     ],
   },
   {
    path: '/login',
    element: <Login />,
  },  
  {
     path: '/signup',
     element: <Signup />,
   }
 ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);