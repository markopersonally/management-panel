import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import Dashboard from "./pages/DashboardPage.jsx";
import Users from "./pages/UsersPage.jsx";
import Settings from "./pages/SettingsPage.jsx";
import RootLayout from "./pages/Root.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/users", element: <Users /> },
        { path: "/settings", element: <Settings /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
