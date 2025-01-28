// layouts/RestaurantLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import RestaurantHeader from '../components/Restaurant/RestaurantHeader';
import Footer from '../components/Main/Footer';

const RestaurantLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <RestaurantHeader />
      <main className="flex-grow py-10 mt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantLayout;
