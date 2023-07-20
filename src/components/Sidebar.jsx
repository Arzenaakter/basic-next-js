import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const navItem = [
    {
      path: "/Dashboard",
      title: "Dashboard",
    },
    {
      path: "/Dashboard/addProduct",
      title: "Add Product",
    },
    {
      path: "/Dashboard/manageProduct",
      title: "Manage Product",
    },
    {
      path: "/",
      title: "Home",
    },
  ];
  return (
    <aside className="ml-10">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <ul>
        {navItem.map(({ path, title }) => (
          <li key={path} className="my-2">
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
