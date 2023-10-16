import React, { useState, useEffect } from "react";

function TaskList({ user }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Load tasks from local storage associated with the logged-in user
    const userTasks = JSON.parse(localStorage.getItem(user.username)) || [];
    setTasks(userTasks);
  }, [user]);

  const handleAddTask = () => {
    // Add a new task to the user's tasks
    const updatedTasks = [...tasks, { text: newTask, completed: false }];
    setTasks(updatedTasks);
    localStorage.setItem(user.username, JSON.stringify(updatedTasks));
    setNewTask("");
  };

  // Implement edit, mark as completed, and delete task functionality

  return (
    <div>
      <h2>Task List</h2>
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text} {/* Display task text */}
            {/* Implement edit, mark as completed, and delete buttons */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
