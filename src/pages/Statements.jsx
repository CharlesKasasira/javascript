import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Statements() {
  const {presentMode, setPresentMode} = useAuth()
  return (
    <div>
      <h1 className={`font-bold text-2xl my-5 ${presentMode && "text-4xl"}`}>Statements</h1>
      <div>
        
      </div>
      <div className="flex justify-between">
        <div
          className="outline outline-1 rounded-lg w-60 h-14 my-5 pl-5 flex items-center cursor-pointer"
          onClick={() => (document.getElementById("content").scrollTop = 0)}
        >
          <Link to="/reversed-words" className="underline text-sm">
            JavaScript Reversed words
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Statements;
