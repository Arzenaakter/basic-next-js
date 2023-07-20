import Navbar from "@/components/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
