import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

function Variables() {
  
  const {presentMode, setPresentMode} = useAuth()

  return (
    <div>
      <h1 className={`font-bold text-2xl my-5 ${presentMode && "text-4xl"}`}>Variables and Constants</h1>
      <div>
      
      <main>
        <p>In programming, a variable is a container (storage area) to hold data. In javascript we use var and let of define variables.</p>
      <div className="my-5">
            <CodeMirror
              value="let num = 8;"
              height="80px"
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
          <br />
        <p>Naming a constant in JavaScript follow the same rule of naming a variable except that the const keyword is always required.</p>
      <div className="my-5">
            <CodeMirror
              value="const num = 8;"
              height="80px"
              theme="dark"
              options={{
                theme: "dracula",
                keyMap: "sublime",
                mode: "javascript",
              }}
              extensions={[javascript({ jsx: true })]}
              onChange={(value, viewUpdate) => {
                // console.log("value:", value);
              }}
            />
          </div>

          <h4 className="font-semibold">Rules for Naming JavaScript Variables</h4>
          <ol>
            <li>1. Variable names must start with either a letter, an underscore _, or the dollar sign $, Variable names cannot start with numbers</li>
            <div className="my-5">
            <CodeMirror
              value="
              let num = 8; ☑️
              let 8num = 8; ❌
              "
              height="80px"
              theme="dark"
              options={{
                theme: "dracula",
                keyMap: "sublime",
                mode: "javascript",
              }}
              extensions={[javascript({ jsx: true })]}
              onChange={(value, viewUpdate) => {
                // console.log("value:", value);
              }}
            />
          </div>
            <li>2. JavaScript is case-sensitive. So ablestate and Ablestate are different variables</li>
            <div className="my-5">
            <CodeMirror
              value="let ablestate = 'awesome';
              "
              height="80px"
              theme="dark"
              options={{
                theme: "dracula",
                keyMap: "sublime",
                mode: "javascript",
              }}
              extensions={[javascript({ jsx: true })]}
              onChange={(value, viewUpdate) => {
                // console.log("value:", value);
              }}
            />
          </div>
            <li>3. Keywords (JavaScript Reversed words) cannot be used as variable names</li>
            <div className="my-5">
            <CodeMirror
              value="let true = 8; ❌
              "
              height="80px"
              theme="dark"
              options={{
                theme: "dracula",
                keyMap: "sublime",
                mode: "javascript",
              }}
              extensions={[javascript({ jsx: true })]}
              onChange={(value, viewUpdate) => {
                // console.log("value:", value);
              }}
            />
          </div>
          </ol>
      </main>
      </div>


      <div className="flex justify-between">
        <div
          className="outline outline-1 rounded-lg w-60 h-14 my-5 pl-5 flex items-center cursor-pointer"
          onClick={() => (document.getElementById("content").scrollTop = 0)}
        >
          <Link to="/syntax-and-errors" className="underline text-sm">
            Syntax & Errors
          </Link>
        </div>
        <div
          className="outline outline-1 rounded-lg w-60 h-14 my-5 pl-5 flex items-center cursor-pointer"
          onClick={() => (document.getElementById("content").scrollTop = 0)}
        >
          <Link to="/reversed-words" className="underline text-sm">
            JavaScript Reversed Words
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Variables;
