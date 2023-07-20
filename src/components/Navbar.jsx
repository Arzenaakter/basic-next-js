import Link from "next/link";

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
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
