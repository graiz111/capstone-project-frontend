// layouts/DeliveryLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import DeliveryHeader from '../components/Delivery/DeliveryHeader';
import Footer from '../components/Main/Footer';

const DeliveryLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <DeliveryHeader />
      <main className="flex-grow py-10 mt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DeliveryLayout;
