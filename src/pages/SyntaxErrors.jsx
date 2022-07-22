import { Link } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useAuth } from "../Context/AuthContext";

function SyntaxErrors() {
  const { presentMode, setPresentMode } = useAuth();

  return (
    <div>
      <h1 className={`font-bold text-2xl my-5 ${presentMode && "text-4xl"}`}>
        Syntax And Errors
      </h1>
      <div>
        <main>
          <header>The JavaScript Syntax</header>
          <div className="my-5">
            <CodeMirror
              value="console.log('hello world!');"
              height="200px"
              theme="dark"
              options={{
                theme: "dracula",
                keyMap: "sublime",
                mode: "javascript",
              }}
              extensions={[javascript({ jsx: true })]}
              onChange={(value, viewUpdate) => {
                console.log("value:", value);
              }}
            />
          </div>
          <div className="my-5">
            <header className="font-semibold text-2xl y-2">
              Errors in JavaScript
            </header>
            The different types of errors include:
            <ul>
              <li>Syntax Errors</li>
              <li>Semantic Errors</li>
              <li>Runtime Errors</li>
            </ul>
          </div>
          <div className="my-5">
            Some of the most common errors you will run into while using
            JavaScript:
            <div>
              <span className="underline text-red-400">SyntaxError</span>,{" "}
              <span className="underline text-red-400">TypeError</span>,{" "}
              <span className="underline text-red-400">ReferenceError</span>,{" "}
              <span className="underline text-red-400">RangeError</span>,{" "}
              <span className="underline text-red-400">EvalError</span>,{" "}
              <span className="underline text-red-400">InternalError</span>
            </div>
          </div>
        </main>
      </div>
      <div className="flex justify-between">
        <div
          className="outline outline-1 rounded-lg w-32 md:w-60 h-14 my-5 pl-2 md:pl-5 flex items-center cursor-pointer"
          onClick={() => (document.getElementById("content").scrollTop = 0)}
        >
          <Link to="/intro/2" className="underline text-sm">
            What can JavaScript Do
          </Link>
        </div>
        <div
          className="outline outline-1 rounded-lg w-32 md:w-60 h-14 my-5 pl-2 md:pl-5 flex items-center cursor-pointer"
          onClick={() => (document.getElementById("content").scrollTop = 0)}
        >
          <Link to="/variables-and-constants" className="underline text-sm">
            Variables and Constant
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SyntaxErrors;
