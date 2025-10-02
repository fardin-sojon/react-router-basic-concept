import React from "react";
import Nabver from "../Components/Nabver";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import { useNavigation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";

const RootLayout = () => {

  const navigation = useNavigation()
  console.log(navigation.state);

  return (
    <div>
      <Nabver></Nabver>
      <h2 className="text-yellow-300">This is RootLayout</h2>
      {navigation?.state === "loading"? <LoadingSpinner></LoadingSpinner> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
