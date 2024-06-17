import { Link } from "react-router-dom";
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
          <Link to="/" className={linkClasses}>
            <RxHome />
            Home
          </Link>
        </li>
        <li className={liClasses}>
          <Link to="/dashboard" className={linkClasses}>
            <BsPencil />
            Dashboard
          </Link>
        </li>
        <li className={liClasses}>
          <Link to="/users" className={linkClasses}>
            <FaRegUser />
            Users
          </Link>
        </li>
        <li className={liClasses}>
          <Link to="/settings" className={linkClasses}>
            <IoSettingsOutline />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}
