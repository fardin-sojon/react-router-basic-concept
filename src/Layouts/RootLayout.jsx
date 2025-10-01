import React from "react";
import Nabver from "../Components/Nabver";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <Nabver></Nabver>
      <h2 className="text-yellow-300">This is RootLayout</h2>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
