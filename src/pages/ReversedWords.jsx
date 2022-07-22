import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function ReversedWords() {
  const { presentMode, setPresentMode } = useAuth();
  return (
    <div>
      <h1 className={`font-bold text-2xl my-5 ${presentMode && "text-4xl"}`}>
        JavaScript Reversed Words
      </h1>
      <div>
        Reversed words are words specified by a programming language that cannot
        be used as variables, constants and keywords. There are a total of 63
        reserved words in JavaScript.
        <div>
          <div className="outline outline-1 py-2 my-5 flex justify-between w-8/8">
            <span className="mx-5 w-1/8">abstract</span>
            <span className="mx-5 w-1/8">arguments</span>
            <span className="mx-5 w-1/8">await</span>
            <span className="mx-5 w-1/8">boolean</span>
            <span className="mx-5 w-1/8">break</span>
            <span className="mx-5 w-1/8">byte</span>
            <span className="mx-5 w-1/8">case</span>
            <span className="mx-5 w-1/8">catch</span>
          </div>
          <div className="outline outline-1 py-2 my-5 flex justify-between w-8/8">
            <span className="mx-5 w-1/8">char</span>
            <span className="mx-5 w-1/8">class</span>
            <span className="mx-5 w-1/8">const</span>
            <span className="mx-5 w-1/8">continue</span>
            <span className="mx-5 w-1/8">debugger</span>
            <span className="mx-5 w-1/8">default</span>
            <span className="mx-5 w-1/8">delete</span>
            <span className="mx-5 w-1/8">do</span>
          </div>
          <div className="outline outline-1 py-2 my-5 flex justify-between">
            <span className="mx-5 w-1/8">double</span>
            <span className="mx-5 w-1/8">else</span>
            <span className="mx-5 w-1/8">enum</span>
            <span className="mx-5 w-1/8">eval</span>
            <span className="mx-5 w-1/8">export</span>
            <span className="mx-5 w-1/8">extends</span>
            <span className="mx-5 w-1/8">false</span>
            <span className="mx-5 w-1/8">final</span>
          </div>
          <div className="outline outline-1 py-2 my-5 flex justify-between">
            <span className="mx-5 w-1/8">finally</span>
            <span className="mx-5 w-1/8">float</span>
            <span className="mx-5 w-1/8">for</span>
            <span className="mx-5 w-1/8">function</span>
            <span className="mx-5 w-1/8">goto</span>
            <span className="mx-5 w-1/8">if</span>
            <span className="mx-5 w-1/8">implements</span>
            <span className="mx-5 w-1/8">import</span>
          </div>
          <div className="outline outline-1 py-2 my-5 flex justify-between">
            <span className="mx-5 w-1/8">in</span>
            <span className="mx-5 w-1/8">instanceof</span>
            <span className="mx-5 w-1/8">int</span>
            <span className="mx-5 w-1/8">interface</span>
            <span className="mx-5 w-1/8">let</span>
            <span className="mx-5 w-1/8">long</span>
            <span className="mx-5 w-1/8">native</span>
            <span className="mx-5 w-1/8">new</span>
          </div>
          <div className="outline outline-1 py-2 my-5 flex justify-between">
            <span className="mx-5 w-1/8">null</span>
            <span className="mx-5 w-1/8">package</span>
            <span className="mx-5 w-1/8">private</span>
            <span className="mx-5 w-1/8">protected</span>
            <span className="mx-5 w-1/8">public</span>
            <span className="mx-5 w-1/8">return</span>
            <span className="mx-5 w-1/8">short</span>
            <span className="mx-5 w-1/8">static</span>
          </div>
          <div className="outline outline-1 py-2 my-5 flex justify-between">
            <span className="mx-5 w-1/8">super</span>
            <span className="mx-5 w-1/8">switch</span>
            <span className="mx-5 w-1/8">synchronized</span>
            <span className="mx-5 w-1/8">this</span>
            <span className="mx-5 w-1/8">throw</span>
            <span className="mx-5 w-1/8">throws</span>
            <span className="mx-5 w-1/8">transient</span>
            <span className="mx-5 w-1/8">true</span>
          </div>
          <div className="outline outline-1 py-2 my-5 flex justify-between">
            <span className="mx-5 w-1/8">try</span>
            <span className="mx-5 w-1/8">typeof</span>
            <span className="mx-5 w-1/8">var</span>
            <span className="mx-5 w-1/8">void</span>
            <span className="mx-5 w-1/8">volatile</span>
            <span className="mx-5 w-1/8">while</span>
            <span className="mx-5 w-1/8">with</span>
            <span className="mx-5 w-1/8">yield</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div
          className="outline outline-1 rounded-lg w-32 md:w-60 h-14 my-5 pl-2 md:pl-5 flex items-center cursor-pointer"
          onClick={() => (document.getElementById("content").scrollTop = 0)}
        >
          <Link to="/variables-and-constants" className="underline text-sm">
            Variables & Constants
          </Link>
        </div>
        <div
          className="outline outline-1 rounded-lg w-32 md:w-60 h-14 my-5 pl-2 md:pl-5 flex items-center cursor-pointer"
          onClick={() => (document.getElementById("content").scrollTop = 0)}
        >
          <Link to="/statements" className="underline text-sm">
            Statements
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReversedWords;
