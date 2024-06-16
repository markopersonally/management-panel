import { Link } from "react-router-dom";

export default function NavBar() {
  const ulClasses = "flex border-2 border-neutral-700";

  return (
    <nav>
      <ul className={ulClasses}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}
