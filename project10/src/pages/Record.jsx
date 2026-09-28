function Record() {
  return (
    <div className="page">
      <h1>📊 Student Report</h1>

      <div className="report">
        <h2>Manju Priya</h2>

        <p><b>Roll No:</b> 101</p>
        <p><b>Department:</b> CSE</p>
        <p><b>Semester:</b> 3</p>

        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Python</td>
              <td>90</td>
            </tr>

            <tr>
              <td>DBMS</td>
              <td>85</td>
            </tr>

            <tr>
              <td>Web Technology</td>
              <td>88</td>
            </tr>

            <tr>
              <td>Data Science</td>
              <td>92</td>
            </tr>
          </tbody>
        </table>

        <h3>Total: 355 / 400</h3>
        <h3>Average: 88.75%</h3>
        <h3 className="result">PASS 🎉</h3>
      </div>
    </div>
  );
}

export default Record;