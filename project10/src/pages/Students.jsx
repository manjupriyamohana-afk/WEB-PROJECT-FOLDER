import { Link } from "react-router-dom";

function Students() {
  return (
    <div className="page">
      <h1>Student List</h1>
      <p>Here are the students in the CSE department.</p>

      <div className="cards">

        <div className="card">
          <h2>Manju Priya</h2>
          <p>Roll No: 101</p>
          <p>Department: CSE</p>
          <Link to="/record">View Report</Link>
        </div>

        <div className="card">
          <h2>Rahul</h2>
          <p>Roll No: 102</p>
          <p>Department: CSE</p>
          <Link to="/record">View Report</Link>
        </div>

        <div className="card">
          <h2>Priya</h2>
          <p>Roll No: 103</p>
          <p>Department: CSE</p>
          <Link to="/record">View Report</Link>
        </div>

      </div>
    </div>
  );
}

export default Students;