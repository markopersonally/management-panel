import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { RxHome } from "react-icons/rx";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export default function NavBar() {
  const [navVisible, setNavVisible] = useState(true);

  const navItems = [
    { to: "/", icon: <RxHome className="text-xl" />, label: "Home" },
    {
      to: "/dashboard",
      icon: <BsPencil className="text-xl" />,
      label: "Dashboard",
    },
    { to: "/users", icon: <FaRegUser className="text-xl" />, label: "Users" },
    {
      to: "/settings",
      icon: <IoSettingsOutline className="text-xl" />,
      label: "Settings",
    },
  ];

  return (
    <>
      <nav
        className={`fixed left-0 top-0 h-full bg-gradient-to-b from-blue-600 to-blue-800 text-white transition-all duration-300 ease-in-out ${
          navVisible ? "w-64" : "w-16"
        }`}
      >
        <div className="flex h-full flex-col justify-between p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center rounded-lg p-2 transition-colors duration-200 hover:bg-blue-700 ${
                      isActive ? "bg-blue-700" : ""
                    }`
                  }
                  end={item.to === "/"}
                >
                  {item.icon}
                  <span className={`ml-3 ${navVisible ? "block" : "hidden"}`}>
                    {item.label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setNavVisible(!navVisible)}
            className="self-end rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            {navVisible ? <AiFillCaretLeft /> : <AiFillCaretRight />}
          </button>
        </div>
      </nav>
      <div
        className={`transition-all duration-300 ease-in-out ${
          navVisible ? "ml-64" : "ml-16"
        }`}
      ></div>
    </>
  );
}
