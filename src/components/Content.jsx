import { CanDo, Intro } from "../pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function Content() {
  return (
    <div className="w-[calc(100vw-200px)] px-20 h-full overflow-auto">
      <Router basename={process.env.PUBLIC_URL}>
        {/* <Router> */}
        <Routes>
          <Route path="javascript/intro" element={<Intro />} />
          <Route path="javascript/intro/2" element={<CanDo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Content;
