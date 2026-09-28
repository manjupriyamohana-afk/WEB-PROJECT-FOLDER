import { Link } from "react-router-dom";

function Home1() {
  return (
    <div className="page home">
      <h2>Welcome to My To-Do App 👋</h2>

      <p>
        Organize your daily activities, manage your tasks and
        complete your work on time.
      </p>

      <div className="boxes">
        <div>
          <h3>📝 Create</h3>
          <p>Add your daily tasks easily.</p>
        </div>

        <div>
          <h3>📋 Manage</h3>
          <p>Keep all your tasks organized.</p>
        </div>

        <div>
          <h3>✅ Complete</h3>
          <p>Finish your work and track progress.</p>
        </div>
      </div>

      <Link to="/add" className="button">Add Your First Task</Link>
    </div>
  );
}

export default Home1;