import { NavLink } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { RxHome } from "react-icons/rx";

export default function NavBar() {
  const navClasses = "h-screen w-[250px] bg-amber-800";
  const ulClasses = "p-8 flex flex-col gap-5 ";
  const liClasses = "border-2";
  const linkClasses =
    "w-30 p-2 flex gap-2 items-center bg-amber-700 hover:bg-amber-600 text-amber-100 text-lg duration-500";

  return (
    <nav className={navClasses}>
      <ul className={ulClasses}>
        <li className={liClasses}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${linkClasses} bg-amber-600` : linkClasses
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
              isActive ? `${linkClasses} bg-amber-600` : linkClasses
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
              isActive ? `${linkClasses} bg-amber-600` : linkClasses
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
              isActive ? `${linkClasses} bg-amber-600` : linkClasses
            }
          >
            <IoSettingsOutline />
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
