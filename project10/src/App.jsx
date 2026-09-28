import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Record from "./pages/Record";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h2>🎓 EduReport</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/students">Students</Link>
          <Link to="/record">Report</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/record" element={<Record />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;