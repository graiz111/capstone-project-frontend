// layouts/MainLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Main/Header";
import Footer from "../components/Main/Footer";

const MainLayout = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow ">
        <Outlet />
      </main>
      <Footer/>
      </div>
    </>
  );
};

export default MainLayout;
