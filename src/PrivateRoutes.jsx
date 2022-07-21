import { Outlet, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "./components";

function PrivateRoutes() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default PrivateRoutes