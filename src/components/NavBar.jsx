import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { RxHome } from "react-icons/rx";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export default function NavBar() {
  const [navVisible, setNavVisible] = useState(true);

  const navClasses = "absolute h-screen w-[250px] bg-slate-500";
  const ulClasses = "p-8 flex flex-col gap-5 ";
  const liClasses = "border-2";
  const linkClasses =
    "w-30 p-2 flex gap-2 items-center hover:bg-slate-600 text-slate-100 text-lg duration-500";
  const btnClasses =
    "p-2 my-auto bg-cyan-600 text-cyan-200 text-2xl hover:bg-cyan-900 rounded-r-lg duration-300";

  const handleShowNav = () => {
    setNavVisible(true);
  };

  const handleHideNav = () => {
    setNavVisible(false);
  };

  return (
    <>
      <nav className={`${navClasses} ${navVisible ? "block" : "hidden"}`}>
        <ul className={ulClasses}>
          <li className={liClasses}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${linkClasses} bg-slate-600` : linkClasses
              }
              end
            >
              <RxHome />
              Home
            </NavLink>
          </li>
          <li className={liClasses}>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? `${linkClasses} bg-slate-600` : linkClasses
              }
            >
              <BsPencil />
              Dashboard
            </NavLink>
          </li>
          <li className={liClasses}>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? `${linkClasses} bg-slate-600` : linkClasses
              }
            >
              <FaRegUser />
              Users
            </NavLink>
          </li>
          <li className={liClasses}>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? `${linkClasses} bg-slate-600` : linkClasses
              }
            >
              <IoSettingsOutline />
              Settings
            </NavLink>
          </li>
        </ul>{" "}
        {!navVisible && (
          <button className={btnClasses} onClick={handleShowNav}>
            <AiFillCaretRight />
          </button>
        )}
        {navVisible && (
          <button className={btnClasses} onClick={handleHideNav}>
            <AiFillCaretLeft />
          </button>
        )}
      </nav>
    </>
  );
}
