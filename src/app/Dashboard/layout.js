import Sidebar from "@/components/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default DashboardLayout;
