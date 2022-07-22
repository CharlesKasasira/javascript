import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "./Navbar.css"
import { TbMenu2 } from "react-icons/tb"
import { IoMdClose } from "react-icons/io"
import { useEffect, useState } from "react";

function Navbar() {
  const { presentMode, setPresentMode } = useAuth();
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 h-[60px] flex justify-between items-center px-5 md:px-[55px] bg-[#20232A] text-white md:overflow-x-hidden navbar">
      <Link to={"/intro"} className="cursor-pointer font-bold md:text-lg">JavaScript</Link>

      <ul className={`items-center md:inline md:p-0 md:flex-row ${showMenu ? "block": "invisible"} md:visible`}>
        <li className="cursor-pointer">
        <NavLink 
        to="/intro"
        activeClassName="active"
        onClick={() => setShowMenu(false)}
        >Docs</NavLink>
        </li>

        
        {/* coming soon
        <NavLink 
        to="/projects"
        activeClassName="active"
        >Projects</NavLink> */}

        <NavLink 
        to="/quiz"
        activeClassName="active"
        onClick={() => setShowMenu(false)}
        >Quiz</NavLink>
        <NavLink 
        to="/editor"
        activeClassName="active"
        onClick={() => setShowMenu(false)}
        >Editor</NavLink>
        <li className="cursor-pointer mx-1">
          <a href="https://github.com/charleskasasira/javascript">
            <FaGithub size={25} />
          </a>
        </li>
      </ul>
      <span className="nav-icon cursor-pointer outline outline-white outline-1 p-1 rounded-full "
      onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <IoMdClose size={25} /> : <TbMenu2 size={25}/>}
      </span>
    </nav>
  );
}

export default Navbar;
