import { Outlet } from "react-router-dom";
import { Sidebar } from "./components";
import { IoPlay } from "react-icons/io5"
import { BsStopFill } from "react-icons/bs"
import { useAuth } from "./Context/AuthContext";
import useMediaQuery from "./hooks/useMediaQuery";


function Layout() {

  const { presentMode, setPresentMode } = useAuth();
  const matches = useMediaQuery("(min-width: 800px)");

  return (
    <main className="flex w-screen h-[calc(100vh-58px)] overflow-hidden">
      {matches && <Sidebar />}
      <div
        className="md:w-[calc(100vw-200px)] px-5 md:px-20 h-full overflow-auto bg-white"
        id="content"
      >
        <Outlet />
        <span className="fixed right-3 z-10 bg-[#20232A] cursor-pointer text-white bottom-3 p-3 rounded-full"
        onClick={() => {
          if(!presentMode){
            document.getElementById("content").requestFullscreen();
          } else {
            document.exitFullscreen();
          }

          document.addEventListener(
            "fullscreenchange",
            () => {
              if (
                document.fullscreenElement &&
                document.fullscreenElement.nodeName == "DIV"
              ) {
                setPresentMode(true);
                document.getElementById("content").style.fontSize = "28px";
              } else {
                setPresentMode(false);
                document.getElementById("content").style.fontSize = "16px";
              }
            },
            false
          );
        }}
        >
          {presentMode ? <BsStopFill size={20} /> : <IoPlay size={20} />}
          
        </span>
      </div>
    </main>
  );
}

export default Layout;
