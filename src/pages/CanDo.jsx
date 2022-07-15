import { Link } from "react-router-dom";
import cando from "../img/What-javascript-can-do.png";
import { useAuth } from "../Context/AuthContext";

function CanDo() {
  const { presentMode } = useAuth();
  console.log(presentMode);
  return (
    <div>
      <h1 className={`font-bold text-2xl my-5 ${presentMode && "text-4xl"}`}>
        What can JavaScript Do
      </h1>
      <div>
        <main>
          <header>
            JavaScript was initially built to work in the web browser, but has
            now been able to go to many places with the introduction of
            runtimes. and this is majorly due to the rise of the web.
          </header>
          <img src={cando} alt="where to use JS" />
          <section>
            Here are some of the places where we can use JavaScript Today.
            <ul className="ml-5">
              <li className="my-2">
                <span className="underline mr-2">Client-side: </span>
                This was javascript's initial home, Javascript is able to
                integrate with Html and works across all the major browsers.
              </li>
              <li className="my-2">
                <span className="underline mr-2">Backend: </span>
                This was javascript's initial home, Javascript is able to
                integrate with Html and works across all the major browsers.
              </li>
              <li className="my-2">
                <span className="underline mr-2">Mobile Applications: </span>
                By learning a few technologies today, you can make fully
                functional web apps with javascript e.g. React-Native, Iconify.
              </li>
              <li className="my-2">
                <span className="underline mr-2">Desktop Applications: </span>
                the same with desktop applications, By learning a few
                technologies today, you can make fully functional desktop apps
                with javascript e.g. Electron.
              </li>
              <li className="my-2">
                <span className="underline mr-2">Cloud: </span>
                This was javascript's initial home, Javascript is able to
                integrate with Html and works across all the major browsers.
              </li>
              <li className="my-2">
                <span className="underline mr-2">
                  Artificial Intelligence:{" "}
                </span>
                This was javascript's initial home, Javascript is able to
                integrate with Html and works across all the major browsers.
              </li>
            </ul>
          </section>
        </main>
      </div>
      <div className="flex justify-between">
        <div
          className="outline outline-1 rounded-lg w-60 h-14 my-5 pl-5 flex items-center cursor-pointer"
          onClick={() => (document.getElementById("content").scrollTop = 0)}
        >
          <Link to="/intro" className="underline text-sm">
            Introduction
          </Link>
        </div>
        <div
          className="outline outline-1 rounded-lg w-60 h-14 my-5 pl-5 flex items-center cursor-pointer"
          onClick={() => (document.getElementById("content").scrollTop = 0)}
        >
          <Link to="/syntax-and-errors" className="underline text-sm">
            Syntax and Errors
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CanDo;
