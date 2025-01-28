// routes/Routes.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';
import RestaurantLayout from '../layouts/RestaurantLayout';
import DeliveryLayout from '../layouts/DeliveryLayout';
import UserLayout from '../layouts/UserLayout';

import Main from '../components/Main/Main';
import AdminHome from '../components/Admin/AdminHome';
import AdminSettings from '../components/Admin/AdminSettings';
import AdminLogin from '../components/Admin/AdminLogin';
import AdminSignup from '../components/Admin/AdminSignup';
import RestaurantHome from '../components/Restaurant/RestaurantHome';
import RestaurantMenu from '../components/Restaurant/RestaurantMenu';
import RestaurantOrders from '../components/Restaurant/RestaurantOrders';
import RestaurantSettings from '../components/Restaurant/RestaurantSettings';
import RestaurantLogin from '../components/Restaurant/RestaurantLogin';
import RestaurantSignup from '../components/Restaurant/RestaurantSignup';
import DeliveryHome from '../components/Delivery/DeliveryHome';
import DeliverySettings from '../components/Delivery/DeliverySettings';
import DeliveryLogin from '../components/Delivery/DeliveryLogin';
import DeliverySignup from '../components/Delivery/DeliverySignup';
import UserHome from '../components/User/UserHome';
import UserLogin from '../components/User/UserLogin';
import UserSignup from '../components/User/UserSignup';
import UserSettings from '../components/User/UserSettings';
import ContactUs from '../components/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: "contact-us", element: <ContactUs /> }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminHome /> },
      { path: "settings", element: <AdminSettings /> },
      { path: "login", element: <AdminLogin /> },
      { path: "signup", element: <AdminSignup /> }
    ]
  },
  {
    path: "/restaurant",
    element: <RestaurantLayout />,
    children: [
      { index: true, element: <RestaurantHome /> },
      { path: "menu", element: <RestaurantMenu /> },
      { path: "orders", element: <RestaurantOrders /> },
      { path: "settings", element: <RestaurantSettings /> },
      { path: "login", element: <RestaurantLogin /> },
      { path: "signup", element: <RestaurantSignup /> }
    ]
  },
  {
    path: "/delivery",
    element: <DeliveryLayout />,
    children: [
      { index: true, element: <DeliveryHome /> },
      { path: "settings", element: <DeliverySettings /> },
      { path: "login", element: <DeliveryLogin /> },
      { path: "signup", element: <DeliverySignup /> }
    ]
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      { index: true, element: <UserHome /> },
      { path: "login", element: <UserLogin /> },
      { path: "signup", element: <UserSignup /> },
      { path: "settings", element: <UserSettings /> }
    ]
  }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
