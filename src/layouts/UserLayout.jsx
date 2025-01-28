// layouts/UserLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from '../components/User/UserHeader';
import Footer from '../components/Main/Footer';

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <UserHeader />
      <main className="flex-grow py-10 mt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;

