import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from 'react'
// import "codemirror/mode/xml/xml";
import { xml } from "@codemirror/lang-xml";
import { css } from "@codemirror/lang-css";

function Editor() {
  const [html, setHtml] = useState("")
  const [cssCode, setCss] = useState("")
  const [js, setJs] = useState("")
  const [srcDoc, setSrcDoc] = useState("")

  useEffect(() => {
    setTimeout(() => {
      // document.getElementById("htmlCode").innerHTML = html + cssCode + js
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${cssCode}</style>
      <script>${js}</script>
      </html>
      `)
    }, 200)
  }, [html, cssCode, js])

  var originalConsole = window.console;
console = {
    log: function(message) {
        originalConsole.log(message);
        // do whatever custom thing you want
    }
}

console.log(window.console)
  
  return (
    <div className="bg-black w-screen h-[calc(100vh-60px)] flex gap-2">
      <div className="w-[50%] bg-black h-full">
        <div className="">
          <h3 className="text-white font-bold ml-3 uppercase flex justify-between items-center">
            html
            <MdOutlineKeyboardArrowDown />
          </h3>
          <CodeMirror
            value=""
            height="200px"
            theme="dark"
            mode="xml"
            extensions={[xml()]}
            onChange={(value, viewUpdate) => {
              setHtml(value);
            }}
          />
        </div>
        <div className="">
          <h3 className="text-white font-bold ml-3 uppercase flex justify-between items-center">
            css
            <MdOutlineKeyboardArrowDown />
          </h3>
          <CodeMirror
            value=""
            height="200px"
            theme="dark"
            options={{
              theme: "dracula",
              keyMap: "sublime",
              mode: "css",
            }}
            extensions={[css()]}
            onChange={(value, viewUpdate) => {
              setCss(value);
            }}
          />
        </div>
        <div className="">
          <h3 className="text-white font-bold ml-3 uppercase flex justify-between items-center">
            javascript <MdOutlineKeyboardArrowDown />
          </h3>
          <CodeMirror
            value=""
            height="250px"
            theme="dark"
            options={{
              theme: "dracula",
              keyMap: "sublime",
              mode: "javascript",
            }}
            extensions={[javascript()]}
            onChange={(value, viewUpdate) => {
              setJs(value);
            }}
          />
        </div>
      </div>
      <div className="w-[50%] bg-white h-full relative">
        {/* <div className="" id="htmlCode">

        </div> */}
        <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
                overflow="scroll"
                style={{
                  backgroundColor: "white",
                  outline: "none",
                  border: "none",
                }}
              />
        <div className="bg-gray-300 flex justify-between p-4 absolute right-0 left-0 bottom-0">
          <p className="cursor-pointer">BROWSER</p>
          <p className="cursor-pointer">CONSOLE</p>
        </div>
      </div>
    </div>
  );
}

export default Editor;
