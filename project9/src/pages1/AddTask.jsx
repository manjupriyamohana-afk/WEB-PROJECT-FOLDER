import { useState } from "react";

function AddTask() {
  const [task, setTask] = useState("");

  function addTask(e) {
    e.preventDefault();

    if (task) {
      alert("Task Added Successfully! ✅");
      setTask("");
    }
  }

  return (
    <div className="page">
      <h2>➕ Add New Task</h2>

      <form onSubmit={addTask} className="form">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <select>
          <option>High Priority</option>
          <option>Medium Priority</option>
          <option>Low Priority</option>
        </select>

        <input type="date" />

        <button>Add Task</button>
      </form>

      <div className="tip">
        💡 Tip: Complete important tasks first!
      </div>
    </div>
  );
}

export default AddTask;