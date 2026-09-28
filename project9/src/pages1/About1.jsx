function About1() {
  return (
    <div className="page about">
      <h2>💜 About My To-Do App</h2>

      <p>
        This is a simple task management application created
        using React and React Router.
      </p>

      <div className="about-box">
        <h3>✨ Features</h3>

        <ul>
          <li>Add new tasks</li>
          <li>View your tasks</li>
          <li>Complete tasks</li>
          <li>Simple and colorful design</li>
          <li>Multiple pages using React Router</li>
        </ul>
      </div>

      <div className="about-box">
        <h3>💻 Technologies</h3>
        <p>React.js • JavaScript • HTML • CSS • React Router</p>
      </div>

      <div className="about-box">
        <h3>🎯 Purpose</h3>
        <p>
          The purpose of this application is to help users
          organize their daily activities in a simple way.
        </p>
      </div>
    </div>
  );
}

export default About1;