import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Intro() {
  const { presentMode, setPresentMode } = useAuth();

  return (
    <div>
      <h1 className={`font-bold text-2xl my-5 ${presentMode && "text-4xl"}`}>
        Introduction to JavaScript
      </h1>
      <div>
        <main>
          “JavaScript is arguably one of the most important languages today. The
          rise of the web has taken JavaScript places it was never conceived to
          be. ”
          <br />
          <br />
          <br />
          A programming language is an artificially constructed language used to
          instruct computers. It is interesting that the most effective way
          we,ve found to communicate with a computer borrows so heavily from the
          way we communicate with each other. Like human languages, computer
          languages allow words and phrases to be combined in new ways, making
          it possible to express ever new concepts.
          <br />
          <br />
          <br />
          <span className="font-medium">Prerequisites</span> 
          <br />
          - HTML 
          <br />
          - CSS
        </main>
      </div>
      <div className="flex justify-end">
        <div
          className="outline outline-1 rounded-lg w-60 h-14 my-5 pl-5 flex items-center cursor-pointer"
          onClick={() => (document.getElementById("content").scrollTop = 0)}
        >
          <Link to="/intro/2" className="underline text-sm">
            What can JavaScript Do
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
