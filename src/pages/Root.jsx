import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function RootLayout() {
  return (
    <>
      <main className="flex flex-wrap bg-slate-400">
        <NavBar />
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
