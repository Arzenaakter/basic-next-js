"use client";

import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  const navItem = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/About",
      title: "About",
    },
    {
      path: "/profile",
      title: "Profile",
    },
    {
      path: "/blog",
      title: "Blog",
    },
    {
      path: "/Dashboard",
      title: "Dashboard",
    },
  ];
  return (
    <nav className="flex justify-between items-center container mx-auto bg-slate-600 px-5">
      <h1 className="text-3xl font-semibold">Next-Hero</h1>

      <ul className="flex gap-2 items-center justify-center">
        {navItem.map(({ path, title }) => (
          <li key={path}>
            <NavLink
              exact={path === "/"}
              activeClassName="text-blue-500  "
              href={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
