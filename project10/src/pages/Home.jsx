import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Student Report Card</h1>

      <p>
        Welcome to EduReport, a simple student academic record system.
      </p>

      <p>
        Students can view their subjects, marks, total and overall result.
      </p>

      <div className="info">
        <h3>What you can find?</h3>
        <p>👩‍🎓 Student Information</p>
        <p>📚 Subject Marks</p>
        <p>📊 Academic Performance</p>
        <p>🏆 Overall Result</p>
      </div>

      <Link to="/students">
        <button>View Students</button>
      </Link>
    </div>
  );
}

export default Home;