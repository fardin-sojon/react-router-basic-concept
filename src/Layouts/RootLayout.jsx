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
      {navigation?.state === "loading"? <LoadingSpinner></LoadingSpinner> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
