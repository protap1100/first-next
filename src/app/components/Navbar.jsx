"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const links = [
    {
      title: "Home",
      path: "/",
    },

    {
      title: "Product",
      path: "/products",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contacts",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Categories",
      path: "/categories",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  if (pathName.includes("dashboard")) {
    return (
      <div className="bg-green-500 p-3">
        <h1>Dashboard Layout</h1>
      </div>
    );
  }

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <nav className="flex justify-between items-center px-10 bg-blue-500 py-5">
      <Link href={"/"} className="text-4xl text-red-600 font-bold">
        NEXT <span className="text-violet-950">LOGO</span>
      </Link>
      <ul className="flex gap-5 justify-evenly ">
        {links.map((link, index) => (
          <li
            className="p-2 bg-cyan-400 rounded hover:bg-cyan-600 text-white"
            key={index}
          >
            <Link href={link?.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={handleLogin}
        className="bg-orange-500 p-2 rounded hover:bg-orange-600 font-bold text-white"
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;
