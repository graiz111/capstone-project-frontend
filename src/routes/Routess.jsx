// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute'; // Import Protected Route

// import MainLayout from '../layouts/MainLayout';
// import AdminLayout from '../layouts/AdminLayout';
// import RestaurantLayout from '../layouts/RestaurantLayout';
// import DeliveryLayout from '../layouts/DeliveryLayout';
// import UserLayout from '../layouts/UserLayout';

// import Main from '../components/Main/Main';
// import AdminHome from '../components/Admin/AdminHome';
// import AdminRestaurant from '../components/Admin/adminRestaurant';
// import AdminUsers from '../components/Admin/AdminUsers';
// import AdminDelivery from '../components/Admin/AdminDelivery';
// import AdminEdit from '../components/Admin/AdminEdit';
// import RestaurantHome from '../components/Restaurant/RestaurantHome';
// import RestaurantMenu from '../components/Restaurant/RestaurantMenu';
// import RestaurantOrders from '../components/Restaurant/RestaurantOrders';
// import DeliveryHome from '../components/Delivery/DeliveryHome';
// import DeliveryOrders from '../components/Delivery/DeliveryOrders';
// import UserHome from '../components/User/UserHome';
// import ContactUs from '../components/common/ContactUs';
// import UserOrders from '../components/User/UserOrders';
// import UserAddress from '../components/User/UserAddress';
// import Cart from '../components/User/Cart';
// import UserLogin from '../components/common/UserLogin';
// import UserSignup from '../components/common/UserSignup';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       { index: true, element: <Main /> },  // Main page
//       { path: "contact-us", element: <ContactUs /> },
//       { path: "login", element: <UserLogin /> }, // Login available here
//       { path: "signup", element: <UserSignup /> }, // Signup available here
//     ]
//   },
//   {
//     path: "/user",
//     element: <UserLayout />,
//     children: [
//       {
//         element: <ProtectedRoute />, // Protect user routes
//         children: [
//           { index: true, element: <UserHome /> },
//           { path: "orders", element: <UserOrders /> },
//           { path: "usercart", element: <Cart /> },
//           { path: "addaddress", element: <UserAddress /> },
//         ]
//       }
//     ]
//   },
//   {
//     path: "/admin",
//     element: <AdminLayout />,
//     children: [
//       {
//         element: <ProtectedRoute />, // Protect admin routes
//         children: [
//           { index: true, element: <AdminHome /> },
//           { path: "admrestaurant", element: <AdminRestaurant /> },
//           { path: "admusers", element: <AdminUsers /> },
//           { path: "admdelivery", element: <AdminDelivery /> },
//           { path: "admdedit", element: <AdminEdit /> },
//         ]
//       }
//     ]
//   },
//   {
//     path: "/restaurant",
//     element: <RestaurantLayout />,
//     children: [
//       {
//         element: <ProtectedRoute />, // Protect restaurant routes
//         children: [
//           { index: true, element: <RestaurantHome /> },
//           { path: "menu", element: <RestaurantMenu /> },
//           { path: "orders", element: <RestaurantOrders /> },
//         ]
//       }
//     ]
//   },
//   {
//     path: "/delivery",
//     element: <DeliveryLayout />,
//     children: [
//       {
//         element: <ProtectedRoute />, // Protect delivery routes
//         children: [
//           { index: true, element: <DeliveryHome /> },
//           { path: "delorders", element: <DeliveryOrders /> },
//         ]
//       }
//     ]
//   }
// ]);

// const Routes = () => {
//   return <RouterProvider router={router} />;
// };

// export default Routes;

//

// routes/Routes.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';
import RestaurantLayout from '../layouts/RestaurantLayout';
import DeliveryLayout from '../layouts/DeliveryLayout';
import UserLayout from '../layouts/UserLayout';
import ProtectedRoute from './ProtectedRoute';
import Main from '../components/Main/Main';
import AdminHome from '../components/Admin/AdminHome';
import AdminSettings from '../components/Admin/AdminSettings';
import AdminRestaurant from '../components/Admin/adminRestaurant';
import AdminLogin from '../components/common/UserLogin';
import AdminSignup from '../components/common/UserSignup';
import AdminUsers from '../components/Admin/AdminUsers';
import AdminDelivery from '../components/Admin/AdminDelivery';
import AdminEdit from '../components/Admin/AdminEdit';
import RestaurantHome from '../components/Restaurant/RestaurantHome';
import RestaurantMenu from '../components/Restaurant/RestaurantMenu';
import RestaurantOrders from '../components/Restaurant/RestaurantOrders';
import RestaurantSettings from '../components/Restaurant/RestaurantSettings';
import RestaurantLogin from '../components/common/UserLogin';
import RestaurantSignup from '../components/common/UserSignup';
import DeliveryHome from '../components/Delivery/DeliveryHome';
import DeliverySettings from '../components/Delivery/DeliverySettings';
import DeliveryLogin from '../components/common/UserLogin';
import DeliverySignup from '../components/common/UserSignup';
import DeliveryOrders from '../components/Delivery/DeliveryOrders';
import UserHome from '../components/User/UserHome';
import UserLogin from '../components/common/UserLogin';
import UserSignup from '../components/common/UserSignup';
// import UserSettings from '../components/User/UserSettings';
import ContactUs from '../components/common/ContactUs';
import UserOrders from '../components/User/UserOrders';
import UserAddress from '../components/User/UserAddress';
import Cart from '../components/User/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "login", element: <UserLogin /> },
      { path: "signup", element: <UserSignup /> },
    ]
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      { index: true, element: <UserHome /> },
      { path: "contact-us", element: <ContactUs /> },
      // { path: "settings", element: <RestaurantSettings /> },
      { path: "orders", element: <UserOrders /> },
      { path: "usercart", element: <Cart/> },
      { path: "addaddress", element: <UserAddress /> },
      // { path: "addaddress", element: <UserAddress /> },

      
      
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminHome /> },
      // { path: "settings", element: <AdminSettings /> },
      { path: "login", element: <AdminLogin /> },
      { path: "signup", element: <AdminSignup /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "admrestaurant", element: <AdminRestaurant /> },
      { path: "admusers", element: <AdminUsers /> },
      { path: "admdelivery", element: <AdminDelivery/> },
      { path: "admdedit", element: <AdminEdit/> },

      

    ]
  },
  {
    path: "/restaurant",
    element: <RestaurantLayout />,
    children: [
      { index: true, element: <RestaurantHome /> },
      { path: "menu", element: <RestaurantMenu /> },
      { path: "orders", element: <RestaurantOrders /> },
      // { path: "settings", element: <RestaurantSettings /> },
      { path: "login", element: <RestaurantLogin /> },
      { path: "signup", element: <RestaurantSignup /> },
      { path: "contact-us", element: <ContactUs /> },

    ]
  },
  {
    path: "/delivery",
    element: <DeliveryLayout />,
    children: [
      { index: true, element: <DeliveryHome /> },
      // { path: "settings", element: <DeliverySettings /> },
      { path: "login", element: <DeliveryLogin /> },
      { path: "signup", element: <DeliverySignup /> },
      { path: "delorders", element: <DeliveryOrders/> },
      { path: "contact-us", element: <ContactUs /> },

    ]
  }
  
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
