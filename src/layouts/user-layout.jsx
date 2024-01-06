import React from "react";
import Menubar from "../components/common/menu-bar";
import Footer from "../components/common/footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Menubar />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserLayout;
