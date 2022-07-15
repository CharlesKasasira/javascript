import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./components";


function Layout() {
  return (
    <main className="flex w-screen h-[calc(100vh-58px)] overflow-hidden">
      <Sidebar />
      <div
        className="w-[calc(100vw-200px)] px-20 h-full overflow-auto bg-white"
        id="content"
      >
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
