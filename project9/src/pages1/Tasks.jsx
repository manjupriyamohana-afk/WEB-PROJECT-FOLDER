import { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([
    "Complete React Assignment",
    "Practice Python",
    "Study DBMS",
    "Read Data Science Notes"
  ]);

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="page">
      <h2>📋 My Tasks</h2>

      <p>Here are your current tasks:</p>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="task" key={index}>
            <span>⬜ {task}</span>
            <button onClick={() => removeTask(index)}>Done</button>
          </div>
        ))}
      </div>

      <div className="progress">
        <h3>Today's Progress 🎯</h3>
        <p>{tasks.length} tasks remaining</p>
      </div>
    </div>
  );
}

export default Tasks;