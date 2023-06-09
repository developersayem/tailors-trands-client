import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div className="relative">
      <NavigationBar />
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
