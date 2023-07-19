import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <nav>sidebar</nav>
      {children}
    </div>
  );
};

export default DashboardLayout;
