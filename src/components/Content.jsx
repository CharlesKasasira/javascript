import { CanDo, Intro, ReversedWords, Statements, SyntaxErrors, Variables, Datatypes } from "../pages";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function Content() {
  return (
    <div
      className="w-[calc(100vw-200px)] px-20 h-full overflow-auto bg-white"
      id="content"
    >
      {/* <Router basename="/"> */}
        {/* <Router> */}
        {/* <Routes> */}
          <Route path="/intro" element={<Intro />} />
          <Route path="/intro/2" element={<CanDo />} />
          <Route path="/reversed-words" element={<ReversedWords />} />
          <Route path="/syntax-and-errors" element={<SyntaxErrors />} />
          <Route path="/variables-and-constants" element={<Variables />} />
          <Route path="/statements" element={<Statements />} />
          <Route path="/data-types" element={<Statements />} />
          {/* <Route path="/editor" element={<Editor />} /> */}
        {/* </Routes> */}
      {/* </Router> */}
    </div>
  );
}

export default Content;
