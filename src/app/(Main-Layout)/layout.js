import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <nav>Header</nav>
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
