import "./Card.css";

function Header() {
  return (
    <header>
      <h1>Student Dashboard</h1>
      <p>Student Academic Information</p>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Student Dashboard | All Rights Reserved</p>
    </footer>
  );
}

function Card() {

  const student = {
    name: "Manju Priya A",
    department: "Computer Science and Engineering",
    rollNo: "CSE2026-101",
    semester: 3,
    year: 2026,
    attendance: 91,
    cgpa: 8.5
  };

  const subjects = [
    "Data Structures",
    "Object Oriented Programming",
    "Database Management System",
    "Computer Networks",
    "Web Technology"
  ];

  const eligible =
    student.attendance >= 75 && student.cgpa >= 7.0;

  return (
    <div className="dashboard">

      <Header />

      {/* Student Profile */}
      <div className="profile-card">

        <div className="profile-image">
          👩‍🎓
        </div>

        <div>
          <h2>{student.name}</h2>

          <p>
            <b>Department:</b> {student.department}
          </p>

          <p>
            <b>Roll No:</b> {student.rollNo}
          </p>
        </div>

      </div>

      {/* Academic Details */}
      <div className="details-container">

        <div className="detail-card">
          <h3>Semester</h3>
          <p>{student.semester}</p>
        </div>

        <div className="detail-card">
          <h3>Year</h3>
          <p>{student.year}</p>
        </div>

        <div className="detail-card">
          <h3>Attendance</h3>

          <p
            style={{
              color:
                student.attendance >= 75
                  ? "green"
                  : "red"
            }}
          >
            {student.attendance}%
          </p>
        </div>

        <div className="detail-card">
          <h3>CGPA</h3>
          <p>{student.cgpa}</p>
        </div>

      </div>

      {/* Subjects */}
      <div className="subject-section">

        <h2>Subjects</h2>

        <ul>
          {subjects.map((subject, index) => (
            <li key={index}>
              {subject}
            </li>
          ))}
        </ul>

      </div>

      {/* Placement Eligibility */}
      <div
        className="eligibility"
        style={{
          borderColor: eligible
            ? "green"
            : "red"
        }}
      >

        <h2>Placement Eligibility</h2>

        {/* Conditional Rendering */}
        {eligible ? (
          <p className="eligible">
            ✓ Eligible for Placement
          </p>
        ) : (
          <p className="not-eligible">
            ✗ Not Eligible for Placement
          </p>
        )}

        <p>
          Attendance Requirement: 75%
          <br />
          CGPA Requirement: 7.0
        </p>

      </div>

      <Footer />

    </div>
  );
}

export default Card;