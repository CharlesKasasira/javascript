import { Navbar, Sidebar, Content } from "./components";
import { CanDo, Intro, ReversedWords, Statements, SyntaxErrors, Variables, Quiz } from "./pages";
import { Editor } from "./pages";
import Layout from "./Layout";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function Container() {
  return (
    <>
      <Navbar />
      <Router basename="/">
        {/* <Router> */}
        <Routes>
          <Route path="/editor" element={<Editor />} />

          <Route element={<Layout />}>
            <Route path="/intro" element={<Intro />} />
            <Route path="/intro/2" element={<CanDo />} />
            <Route path="/reversed-words" element={<ReversedWords />} />
            <Route path="/syntax-and-errors" element={<SyntaxErrors />} />
            <Route path="/variables-and-constants" element={<Variables />} />
            <Route path="/statements" element={<Statements />} />
            <Route path="/quiz" element={<Quiz />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default Container;
