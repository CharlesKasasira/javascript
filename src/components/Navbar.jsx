import { FaGithub } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="h-[60px] flex justify-between items-center outline px-[55px] bg-[#20232A] text-white">
      <div className="cursor-pointer font-bold text-lg">JavaScript</div>
      <ul className="flex gap-4 items-center">
        <li className="cursor-pointer">Docs</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Editor</li>
        <li className="cursor-pointer mx-1"><FaGithub size={25} /></li>
      </ul>
    </nav>
  );
}

export default Navbar;
