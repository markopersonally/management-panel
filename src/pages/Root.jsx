import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function RootLayout() {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  return (
    <div className="flex h-screen bg-slate-200">
      <NavBar
        isExpanded={isNavExpanded}
        onToggle={() => setIsNavExpanded(!isNavExpanded)}
      />
      <main
        className={`flex-1 overflow-auto transition-all duration-300 ease-in-out ${isNavExpanded}`}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
