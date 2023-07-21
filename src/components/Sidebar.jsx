import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

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
            <NavLink exact activeClassName="text-blue-500" href={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
