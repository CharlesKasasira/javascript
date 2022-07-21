import { Navbar, Sidebar, Content } from "./components";
import {
  CanDo,
  Intro,
  ReversedWords,
  Statements,
  SyntaxErrors,
  Variables,
  Quiz,
  Datatypes,
  QuizHome,
  CreateQuiz,
  QuizDetail,
  Login,
} from "./pages";
import { Editor } from "./pages";
import Layout from "./Layout";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

function Container() {
  return (
    <>
      <Router basename="/">
        {/* <Navbar /> */}
        {/* <Router> */}
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/editor" element={<Editor />} />
            <Route path="/quiz" element={<QuizHome />} />
            <Route path="/quiz/:id" element={<QuizDetail />} />
            <Route path="/create-quiz" element={<CreateQuiz />} />

            <Route element={<Layout />}>
              <Route path="/intro" element={<Intro />} />
              <Route path="/intro/2" element={<CanDo />} />
              <Route path="/reversed-words" element={<ReversedWords />} />
              <Route path="/syntax-and-errors" element={<SyntaxErrors />} />
              <Route path="/variables-and-constants" element={<Variables />} />
              <Route path="/statements" element={<Statements />} />
              <Route path="/data-types" element={<Datatypes />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default Container;
