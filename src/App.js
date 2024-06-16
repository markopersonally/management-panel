import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Settings from "./components/Settings";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
