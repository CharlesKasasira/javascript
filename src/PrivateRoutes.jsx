import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

function PrivateRoutes() {
  return (
    <>
      <Navbar />
      <div className="mt-[60px]">
        <Outlet />
      </div>
      
    </>
  )
}

export default PrivateRoutes