import React from "react";
import Nabver from "./Nabver";
import Footer from "./Footer";
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
