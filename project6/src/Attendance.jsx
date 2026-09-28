import React, { useState } from "react";
import "./Attendance.css";

const INITIAL_MEMBERS = [
  "Arun Kumar",
  "Priya Sharma",
  "Rahul Raj",
  "Anjali Devi",
  "Karthik M",
  "Divya S",
  "Vignesh R",
  "Harini P",
  "Sanjay Kumar",
  "Keerthana S",
  "Ajay Kumar",
  "Nandhini R",
  "Surya Prakash",
  "Pavithra M",
  "Dinesh Kumar",
  "Sneha R",
  "Lokesh B",
  "Aishwarya S",
  "Manoj K",
  "Kavya R"
].map((name, index) => ({
  id: index + 1,
  name,
  present: false
}));

export default function Attendance() {

  const [members, setMembers] = useState(INITIAL_MEMBERS);

  const toggleAttendance = (id) => {
    setMembers((prev) =>
      prev.map((m) =>
        m.id === id
          ? { ...m, present: !m.present }
          : m
      )
    );
  };

  const presentCount =
    members.filter((m) => m.present).length;

  const absentCount =
    members.length - presentCount;

  return (
    <div className="attendance-container">

      {/* Header */}

      <div className="header">

        <div className="title-row">

          <span className="clipboard">📋</span>

          <h1>Attendance Application</h1>

        </div>

        <p>Manage attendance for 20 members</p>

      </div>

      {/* Summary */}

      <div className="summary">

        <div className="summary-box present-box">
          <h2>Present</h2>
          <p>{presentCount}</p>
        </div>

        <div className="summary-box absent-box">
          <h2>Absent</h2>
          <p>{absentCount}</p>
        </div>

        <div className="summary-box total-box">
          <h2>Total</h2>
          <p>{members.length}</p>
        </div>

      </div>

      {/* Member List */}

      <div className="member-list">

        {members.map(({ id, name, present }) => (

          <div className="member-card" key={id}>

            <div className="member-info">

              <span className="member-number">
                {id}
              </span>

              <span className="member-name">
                {name}
              </span>

            </div>

            <div
              className={`status ${
                present ? "present" : "absent"
              }`}
            >
              {present ? "Present" : "Absent"}
            </div>

            <button
              className={`attendance-btn ${
                present ? "absent-btn" : "present-btn"
              }`}
              onClick={() => toggleAttendance(id)}
            >
              {present
                ? "Mark Absent"
                : "Mark Present"}
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}