// layouts/AdminLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/Admin/AdminHeader';
import Footer from '../components/Main/Footer';

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />
      <main className="flex-grow py-10 mt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
