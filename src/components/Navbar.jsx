import { FaGithub } from "react-icons/fa";
import { useAuth } from "../Context/AuthContext";

function Navbar() {
  const { presentMode, setPresentMode } = useAuth();

  return (
    <nav className="h-[60px] flex justify-between items-center outline px-[55px] bg-[#20232A] text-white">
      <div className="cursor-pointer font-bold text-lg">JavaScript</div>
      <ul className="flex gap-4 items-center">
        <li className="cursor-pointer">
        <a href="/javascript/#/intro">Docs</a>
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            document.getElementById("content").requestFullscreen();

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
          Presentation
        </li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">
          <a href="/javascript/#/quiz">Quiz</a>
        </li>
        <li className="cursor-pointer">
          <a href="/javascript/#/editor">Editor</a>
        </li>
        <li className="cursor-pointer mx-1">
          <a href="https://github.com/charleskasasira/javascript">
            <FaGithub size={25} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
