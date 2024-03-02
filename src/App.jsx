import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root.jsx';
import Home from '../../../reactPro/app1/src/pages/Home/components/Home.jsx';
import Categories from '../../../reactPro/app1/src/pages/Categories/Categories.jsx';
import Cart from '../../../reactPro/app1/src/pages/Cart/Cart.jsx';
import Products from '../../../reactPro/app1/src/pages/Products/Products.jsx';
import { RouterProvider } from 'react-router-dom';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/categories',
          element: <Categories />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/products',
          element: <Products />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
