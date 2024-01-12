import React from "react";
import Navbar from "../components/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-40px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
